package com.google.intern.backend.repository;

import com.google.intern.backend.entity.SeckillGoods;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SeckillGoodsRepository extends JpaRepository<SeckillGoods, Long> {
    Optional<SeckillGoods> findByGoodsId(Long goodsId);
}
