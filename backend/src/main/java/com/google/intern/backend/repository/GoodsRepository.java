package com.google.intern.backend.repository;

import com.google.intern.backend.entity.Goods;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoodsRepository extends JpaRepository<Goods, Long> {
    // 返回一个列表，因为商品名可能不唯一
    List<Goods> findByGoodsName(String goodsName);
}
