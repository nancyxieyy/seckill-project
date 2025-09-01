package com.google.intern.backend.service;

import java.lang.StackWalker.Option;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.intern.backend.entity.Goods;
import com.google.intern.backend.entity.OrderInfo;
import com.google.intern.backend.entity.SeckillGoods;
import com.google.intern.backend.entity.SeckillOrder;
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

    @Transactional
    public OrderInfo doSeckill(Long userId, Long goodsId) {
        // 1. 根据goodsId查询秒杀商品信息
        // Optional<SeckillGoods> seckillGoodsOpt = seckillGoodsRepository.findByGoodsId(goodsId);
        // if(seckillGoodsOpt.isEmpty()) {
        //     throw new RuntimeException("秒杀商品不存在");
        // }
        // SeckillGoods seckillGoods = seckillGoodsOpt.get();
        
        // 2. 判断秒杀是否已经开始/结束
        // Date now = new Date();
        // if(now.before(seckillGoods.getStartDate())) {
        //     throw new RuntimeException("秒杀尚未开始");
        // }
        // if(now.after(seckillGoods.getEndDate())) {
        //     throw new RuntimeException("秒杀已经结束");
        // }

        // 3. 直接查询数据库，判断库存是否 > 0
        // if(seckillGoods.getStockCount() <= 0) {
        //     throw new RuntimeException("商品已售罄");
        // }

        // 4. 直接查询数据库，判断用户是否已经购买过
        // Optional<SeckillOrder> seckillOrderOpt = seckillOrderRepository.findByUserIdAndSeckillGoodsId(userId, seckillGoods.getId());
        // if(seckillOrderOpt.isPresent()) {
        //     throw new RuntimeException("您已抢购过此商品");
        // }


        /**
         * Redis更新：库存检查与扣减改为从Redis中操作
         */
        String stockKey = SECKILL_STOCK_KEY_PREFIX + goodsId;
        // 使用DECR命令，原子性地将库存-1，并返回更新后的库存值
        Long stock = redisTemplate.opsForValue().decrement(stockKey);
        if(stock == null) {
            // 如果key不存在，说明秒杀商品不存在
            throw new RuntimeException("秒杀商品不存在");
        }

        if(stock < 0) {
            // 如果库存小于0，说明商品已售罄
            redisTemplate.opsForValue().increment(stockKey);
            throw new RuntimeException("商品已售罄");
        }

        // 异步处理,防止超卖
        logger.info("用户 {} 在Redis预减库存成功,准备创建订单...", userId);

        // 判断用户是否已经购买过
        Optional<SeckillGoods> seckillGoodsForId = seckillGoodsRepository.findByGoodsId(goodsId); 
        if(seckillGoodsForId.isEmpty()) {
            throw new RuntimeException("秒杀商品不存在");
        }
        Optional<SeckillOrder> seckillOrderOpt = seckillOrderRepository.findByUserIdAndSeckillGoodsId(userId, seckillGoodsForId.get().getId());
        if(seckillOrderOpt.isPresent()) {
            // 如果用户已经购买过，恢复Redis中的库存
            redisTemplate.opsForValue().increment(stockKey);
            throw new RuntimeException("您已抢购过此商品");
        }

        // 5. 开始执行下单操作 (减库存、创建订单、创建秒杀订单)
        // 在seckill_goods表中，库存-1
        SeckillGoods seckillGoods = seckillGoodsForId.get();
        seckillGoods.setStockCount(seckillGoods.getStockCount() - 1);
        seckillGoodsRepository.save(seckillGoods);

        // 获取商品快照信息
        Goods goods = goodsRepository.findById(goodsId).orElseThrow(() -> new RuntimeException("关联商品不存在"));

        // 在order_info表中，插入一条新的订单记录
        OrderInfo orderInfo = new OrderInfo();
        orderInfo.setUserId(userId);
        orderInfo.setGoodsId(goodsId);
        orderInfo.setGoodsName(goods.getGoodsName());   // 商品快照
        orderInfo.setGoodsCount(1);
        orderInfo.setGoodsPrice(seckillGoods.getSeckillPrice()); // 使用秒杀价
        orderInfo.setOrderChannel(1); // 1-PC
        orderInfo.setStatus(0); // 0-新建未支付
        orderInfoRepository.save(orderInfo); // 保存后，orderInfo对象会获得数据库生成的ID

        // 在seckill_order表中，插入一条秒杀成功的记录
        SeckillOrder seckillOrder = new SeckillOrder();
        seckillOrder.setUserId(userId);
        seckillOrder.setSeckillGoodsId(seckillGoods.getId());
        seckillOrder.setOrderId(orderInfo.getId());
        seckillOrderRepository.save(seckillOrder);

        // 6. 返回新创建的OrderInfo对象
        return orderInfo;
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
}
