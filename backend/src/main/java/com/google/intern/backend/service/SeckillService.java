package com.google.intern.backend.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
public class SeckillService {
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
        Optional<SeckillGoods> seckillGoodsOpt = seckillGoodsRepository.findByGoodsId(goodsId);
        if(seckillGoodsOpt.isEmpty()) {
            throw new RuntimeException("秒杀商品不存在");
        }
        SeckillGoods seckillGoods = seckillGoodsOpt.get();

        // 2. 判断秒杀是否已经开始/结束
        Date now = new Date();
        if(now.before(seckillGoods.getStartDate())) {
            throw new RuntimeException("秒杀尚未开始");
        }
        if(now.after(seckillGoods.getEndDate())) {
            throw new RuntimeException("秒杀已经结束");
        }

        // 3. 直接查询数据库，判断库存是否 > 0
        if(seckillGoods.getStockCount() <= 0) {
            throw new RuntimeException("商品已售罄");
        }

        // 4. 直接查询数据库，判断用户是否已经购买过
        Optional<SeckillOrder> seckillOrderOpt = seckillOrderRepository.findByUserIdAndSeckillGoodsId(userId, seckillGoods.getId());
        if(seckillOrderOpt.isPresent()) {
            throw new RuntimeException("您已抢购过此商品");
        }

        // 5. 开始执行下单操作 (减库存、创建订单、创建秒杀订单)
        // 在seckill_goods表中，库存-1
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
}
