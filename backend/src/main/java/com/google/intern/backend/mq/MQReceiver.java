package com.google.intern.backend.mq;

import java.util.Optional;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.intern.backend.dto.SeckillMessageDto;
import com.google.intern.backend.entity.Goods;
import com.google.intern.backend.entity.OrderInfo;
import com.google.intern.backend.entity.SeckillGoods;
import com.google.intern.backend.entity.SeckillOrder;
import com.google.intern.backend.repository.GoodsRepository;
import com.google.intern.backend.repository.OrderInfoRepository;
import com.google.intern.backend.repository.SeckillGoodsRepository;
import com.google.intern.backend.repository.SeckillOrderRepository;

import org.springframework.transaction.annotation.Transactional;

@Service
public class MQReceiver {
    public static final Logger logger = LoggerFactory.getLogger(MQReceiver.class);
    
    @Autowired
    private SeckillGoodsRepository seckillGoodsRepository;
    @Autowired
    private OrderInfoRepository orderInfoRepository;
    @Autowired
    private SeckillOrderRepository seckillOrderRepository;
    @Autowired
    private GoodsRepository goodsRepository;

    @RabbitListener(queues = "seckillQueue")
    @Transactional
    public void receive(SeckillMessageDto message) {
        logger.info("收到秒杀消息,开始处理订单: {}", message);
        Long userId = message.getUserId();
        Long goodsId = message.getGoodsId();

        // 1. 获取秒杀商品信息并锁定
        Optional<SeckillGoods> seckillGoodsOpt = seckillGoodsRepository.findOneByGoodsId(goodsId);
        if(seckillGoodsOpt.isEmpty()) {
            logger.warn("消息处理失败:秒杀商品不存在, goodsId={}", goodsId);
            return;
        }
        SeckillGoods seckillGoods = seckillGoodsOpt.get();

        // 2. 检查库存
        if(seckillGoods.getStockCount() <= 0) {
            logger.warn("消息处理失败:库存不足, goodsId={}", goodsId);
            return; 
        }

        // 3. 检查是否已经下过订单
        Optional<SeckillOrder> seckillOrderOpt = seckillOrderRepository.findByUserIdAndSeckillGoodsId(userId, seckillGoods.getId());
        if(seckillOrderOpt.isPresent()) {
            logger.warn("消息处理失败:用户已下过订单, userId={}, goodsId={}", userId, goodsId);
            return; 
        }

        // 4. 执行下单操作
        seckillGoods.setStockCount(seckillGoods.getStockCount() - 1);
        seckillGoodsRepository.save(seckillGoods);

        Goods goods = goodsRepository.findById(goodsId).orElseThrow(() -> new RuntimeException("关联商品不存在"));

        OrderInfo orderInfo = new OrderInfo();
        orderInfo.setUserId(userId);
        // ... (设置 orderInfo 的其他属性)
        orderInfo.setGoodsId(goodsId);
        orderInfo.setGoodsName(goods.getGoodsName());
        orderInfo.setGoodsCount(1);
        orderInfo.setGoodsPrice(seckillGoods.getSeckillPrice());
        orderInfo.setOrderChannel(1);
        orderInfo.setStatus(0);
        orderInfoRepository.save(orderInfo);

        SeckillOrder seckillOrder = new SeckillOrder();
        seckillOrder.setUserId(userId);
        seckillOrder.setSeckillGoodsId(seckillGoods.getId());
        seckillOrder.setOrderId(orderInfo.getId());
        seckillOrderRepository.save(seckillOrder);

        logger.info("订单处理成功! userId={}, orderId={}", userId, orderInfo.getId());
    }
}
