package com.google.intern.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

/**
 * 商品实体类，对应数据库中的 goods 表
 */
@Data
@Entity
@Table(name = "goods")
public class Goods {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "goods_name")
    private String goodsName;

    @Column(name = "goods_title")
    private String goodsTitle;

    @Column(name = "goods_img")
    private String goodsImg;

    @Column(name = "goods_detail")
    private String goodsDetail;

    @Column(name = "goods_price")
    private BigDecimal goodsPrice;
}
