package com.google.intern.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * 秒杀商品实体类，对应数据库中的 seckill_goods 表
 */
@Data
@Entity
@Table(name = "seckill_goods")
public class SeckillGoods {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "goods_id")
    private Long goodsId;

    @Column(name = "seckill_price")
    private BigDecimal seckillPrice;

    @Column(name = "stock_count")
    private Integer stockCount;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;
}
