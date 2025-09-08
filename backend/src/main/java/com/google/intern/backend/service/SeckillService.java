package com.google.intern.backend.service;

import java.lang.StackWalker.Option;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.intern.backend.config.RabbitMQConfig;
import com.google.intern.backend.dto.SeckillMessageDto;
import com.google.intern.backend.entity.Goods;
import com.google.intern.backend.entity.OrderInfo;
import com.google.intern.backend.entity.SeckillGoods;
import com.google.intern.backend.entity.SeckillOrder;
import com.google.intern.backend.exception.GlobalException;
import com.google.intern.backend.exception.ResultCode;
import com.google.intern.backend.repository.GoodsRepository;
import com.google.intern.backend.repository.OrderInfoRepository;
import com.google.intern.backend.repository.SeckillGoodsRepository;
import com.google.intern.backend.repository.SeckillOrderRepository;

import jakarta.annotation.PostConstruct;

import org.springframework.transaction.annotation.Transactional;

@Service
public class SeckillService {
    private static final Logger logger = LoggerFactory.getLogger(SeckillService.class);

    // 定义在Redis中存储库存的Key的前缀
    public static final String SECKILL_STOCK_KEY_PREFIX = "seckill:stock:";

    // Redis操作模板
    @Autowired
    private StringRedisTemplate redisTemplate;

    // JSON操作工具
    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private SeckillGoodsRepository seckillGoodsRepository;

    @Autowired
    private OrderInfoRepository orderInfoRepository;

    @Autowired
    private SeckillOrderRepository seckillOrderRepository;

    @Autowired
    private GoodsRepository goodsRepository;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    
    // @Transactional
    // public OrderInfo doSeckill(Long userId, Long goodsId) {
    //     // 1. 使用悲观锁查询和锁定秒杀商品行
    //     Optional<SeckillGoods> seckillGoodsOpt = seckillGoodsRepository.findOneByGoodsId(goodsId);
    //     if (seckillGoodsOpt.isEmpty()) {
    //         throw new GlobalException(ResultCode.SECKILL_GOODS_NOT_FOUND);
    //     }
    //     SeckillGoods seckillGoods = seckillGoodsOpt.get();

    //     // 2. 判断时间
    //     Date now = new Date();
    //     if (now.before(seckillGoods.getStartDate())) {
    //         throw new GlobalException(ResultCode.SECKILL_NOT_STARTED);
    //     }
    //     if (now.after(seckillGoods.getEndDate())) {
    //         throw new GlobalException(ResultCode.SECKILL_ENDED);
    //     }

    //     // 3. 判断库存
    //     if (seckillGoods.getStockCount() <= 0) {
    //         throw new GlobalException(ResultCode.SECKILL_STOCK_EMPTY);
    //     }

    //     // 4. 判断是否重复下单
    //     Optional<SeckillOrder> seckillOrderOpt = seckillOrderRepository.findByUserIdAndSeckillGoodsId(userId, seckillGoods.getId());
    //     if (seckillOrderOpt.isPresent()) {
    //         throw new GlobalException(ResultCode.SECKILL_REPEAT_PURCHASE);
    //     }

    //     // 5. 执行下单
    //     seckillGoods.setStockCount(seckillGoods.getStockCount() - 1);
    //     seckillGoodsRepository.save(seckillGoods);

    //     Goods goods = goodsRepository.findById(goodsId).orElseThrow(() -> new RuntimeException("关联商品不存在"));

    //     OrderInfo orderInfo = new OrderInfo();
    //     orderInfo.setUserId(userId);
    //     orderInfo.setGoodsId(goodsId);
    //     orderInfo.setGoodsName(goods.getGoodsName());
    //     orderInfo.setGoodsCount(1);
    //     orderInfo.setGoodsPrice(seckillGoods.getSeckillPrice());
    //     orderInfo.setOrderChannel(1);
    //     orderInfo.setStatus(0);
    //     orderInfoRepository.save(orderInfo);

    //     SeckillOrder seckillOrder = new SeckillOrder();
    //     seckillOrder.setUserId(userId);
    //     seckillOrder.setSeckillGoodsId(seckillGoods.getId());
    //     seckillOrder.setOrderId(orderInfo.getId());
    //     seckillOrderRepository.save(seckillOrder);

    //     return orderInfo;
    // }

    public void doSeckill(Long userId, Long goodsId) {
        // 1. Redis中预减库存
        String stockKey = SECKILL_STOCK_KEY_PREFIX + goodsId;
        // 使用DECR命令，原子性地将库存-1，并返回更新后的库存值
        Long stock = redisTemplate.opsForValue().decrement(stockKey);
        if(stock == null) {
            // 如果key不存在，说明秒杀商品不存在
            throw new GlobalException(ResultCode.SECKILL_GOODS_NOT_FOUND);
        }
        if(stock < 0) {
            // 如果库存小于0，说明商品已售罄
            redisTemplate.opsForValue().increment(stockKey);
            throw new GlobalException(ResultCode.SECKILL_STOCK_EMPTY);
        }

        // 2. 判断用户是否已经购买过
        String userSetKey = "seckill:users:" + goodsId;
        Long result = redisTemplate.opsForSet().add(userSetKey, String.valueOf(userId));
        if(result == 0) {
            redisTemplate.opsForValue().increment(stockKey);
            // 用户已存在，说明已经购买过
            throw new GlobalException(ResultCode.SECKILL_REPEAT_PURCHASE);
        }

        // 3. 发送消息到RabbitMQ，异步处理下单操作
        SeckillMessageDto message = new SeckillMessageDto(userId, goodsId);
        rabbitTemplate.convertAndSend(RabbitMQConfig.SECKILL_QUEUE, message);
        logger.info("用户 {} 秒杀商品 {} 的请求已发送到消息队列", userId, goodsId);
    }

    @PostConstruct
    public void init() {
        loadSeckillGoodsToCache();
    }

    /**
    * 将秒杀商品的库存信息预加载到Redis缓存中
    */
    public void loadSeckillGoodsToCache() {
        logger.info("开始预加载秒杀商品库存到Redis缓存...");

        // 1. 查询所有未结束的秒杀商品
        List<SeckillGoods> list = seckillGoodsRepository.findAllByEndDateAfter(new Date());
        if(list == null || list.isEmpty()) {
            logger.info("没有未结束的秒杀商品");
            return;
        }

        // 2. 遍历商品列表，存入Redis
        for(SeckillGoods seckillGoods : list) {
            // 构造库存的Key
            String stockKey = SECKILL_STOCK_KEY_PREFIX + seckillGoods.getId();
            // 将库存数量存入Redis
            redisTemplate.opsForValue().set(stockKey, String.valueOf(seckillGoods.getStockCount()));
            // 将整个商品对象序列化为JSON字符串，存入Redis
            try{
                String goodsJson = objectMapper.writeValueAsString(seckillGoods);
                redisTemplate.opsForValue().set("seckill:goods:" + seckillGoods.getId(), goodsJson);
            } catch(JsonProcessingException e) {
                logger.error("序列化秒杀商品对象失败: goodsId={}", seckillGoods.getGoodsId(), e);
            }
        }
        logger.info("成功加载 {} 个秒杀商品到Redis缓存", list.size());
    }

    public void resetTestEnvironment() {
        // 1. 清理数据库
        seckillOrderRepository.deleteAll();
        orderInfoRepository.deleteAll();

        // 2. 重置数据库库存和版本
        List<SeckillGoods> allSeckillGoods = seckillGoodsRepository.findAll();
        for (SeckillGoods good : allSeckillGoods) {
            // 假设我们从 goods 表或其他地方知道初始库存是1000
            good.setStockCount(1000); 
            good.setVersion(0);
            seckillGoodsRepository.save(good);
        }

        // 3. 清理 Redis 缓存并重新预热
        // 获取所有相关的 Redis keys
        Set<String> keys = redisTemplate.keys("seckill:*");
        if (keys != null && !keys.isEmpty()) {
            redisTemplate.delete(keys);
        }

        // 4. 重新执行缓存预热
        loadSeckillGoodsToCache();

        logger.info("测试环境已重置！");
    }

    /**
     * @param userId
     * @param goodsId
     * @return 订单信息，如果秒杀失败返回-1
     */
    public Long getSeckillResult(Long userId, Long goodsId) {
        Optional<SeckillGoods> seckillGoodsOpt = seckillGoodsRepository.findByGoodsId(goodsId);
        if (seckillGoodsOpt.isEmpty()) {
            return -1L; // 表示没有这个秒杀活动
        }
        SeckillGoods seckillGoods = seckillGoodsOpt.get();

        Optional<SeckillOrder> seckillOrderOpt = seckillOrderRepository.findByUserIdAndSeckillGoodsId(userId, seckillGoods.getId());
    
        if (seckillOrderOpt.isPresent()) {
            return seckillOrderOpt.get().getOrderId(); // 成功，返回订单ID
        } else {
            // 还需要判断是不是已经售罄了
            String stockKey = SECKILL_STOCK_KEY_PREFIX + goodsId;
            String stock = redisTemplate.opsForValue().get(stockKey);
            if (stock == null || Integer.parseInt(stock) <= 0) {
                return -1L; // 已售罄，也算失败
            } else {
                return 0L; // 还在排队中
            }
        }
    }
}
