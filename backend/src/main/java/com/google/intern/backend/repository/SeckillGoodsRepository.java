package com.google.intern.backend.repository;

import com.google.intern.backend.entity.SeckillGoods;

import jakarta.persistence.LockModeType;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;

public interface SeckillGoodsRepository extends JpaRepository<SeckillGoods, Long> {
    Optional<SeckillGoods> findByGoodsId(Long goodsId);

    List<SeckillGoods> findAllByEndDateAfter(Date currentDate);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    Optional<SeckillGoods> findOneByGoodsId(Long goodsId);
}
