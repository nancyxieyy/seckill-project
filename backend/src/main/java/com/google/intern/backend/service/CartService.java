package com.google.intern.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.intern.backend.entity.CartItem;
import com.google.intern.backend.repository.CartRepository;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    /**
     * 根据用户ID获取其购物车列表
     */
    public List<CartItem> getCartItemsByUserId(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    /**
     * 添加商品到购物车
     */
    public CartItem addToCart(Long userId, Long goodsId, Integer quantity) {
        // 检查商品是否已经在该用户的购物车里
        Optional<CartItem> existingOptional = cartRepository.findByUserIdAndGoodsId(userId, goodsId);

        if(existingOptional.isPresent()) {
            // 如果已经存在则增加数量
            CartItem existingItem = existingItemOptional.get();
            existingItem.setQuantity(existingItem.getQuantity() + quantity);
            return cartRepository.save(existingItem);
        } else {
            // 如果不存在，则创建
            CartItem newItem = new CartItem();
            newItem.setUserId(userId);
            newItem.setGoodsId(goodsId);
            newItem.setQuantity(quantity);
            return cartRepository.save(newItem);
        }
    }

    /**
     * 更新购物车中某个商品的数量
     */
    public CartItem updateItemQuantity(Long cartItemId, Integer quantity) {
        // findById返回一个Optional，需要处理找不到的情况
        CartItem item = cartRepository.findById(cartItemId)
            .orElseThrow(() -> new RuntimeException("Cart item not found with id: " + cartItemId));
        item.setQuantity(quantity);
        return cartRepository.save(item);
    }

    /**
     * 从购物车中移除一个商品
     */
    public void removeItem(Long cartItemId) {
        cartRepository.deleteById(cartItemId);
    }
}
