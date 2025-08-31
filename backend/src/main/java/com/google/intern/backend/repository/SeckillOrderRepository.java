package com.google.intern.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.google.intern.backend.entity.SeckillOrder;

@Repository
public interface SeckillOrderRepository extends JpaRepository<SeckillOrder, Long> {
    // 4. 添加这个方法，用于检查用户是否重复下单
    Optional<SeckillOrder> findByUserIdAndSeckillGoodsId(Long userId, Long seckillGoodsId);
}
