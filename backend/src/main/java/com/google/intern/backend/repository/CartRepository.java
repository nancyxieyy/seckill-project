package com.google.intern.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.google.intern.backend.entity.CartItem;

@Repository
public interface CartRepository extends JpaRepository<CartItem, Long> {
    // 根据用户ID查找所有的购物车项
    List<CartItem> findByUserId(Long userId);

    // 根据用户ID和商品ID查找一个特定的购物车项
    Optional<CartItem> findByUserIdAndGoodsId(Long userId, Long goodsId);
    
}
