package com.google.intern.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * 订单信息实体类，对应数据库中的 order_info 表
 */
@Data
@Entity
@Table(name = "order_info")
public class OrderInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "goods_id")
    private Long goodsId;

    @Column(name = "goods_name")
    private String goodsName;

    @Column(name = "goods_count")
    private Integer goodsCount;

    @Column(name = "goods_price")
    private BigDecimal goodsPrice;

    @Column(name = "order_channel")
    private Integer orderChannel;

    @Column(name = "status")
    private Integer status;
    
    @Column(name = "create_date")
    private Date createDate;

    @Column(name = "pay_date")
    private Date payDate;
}
