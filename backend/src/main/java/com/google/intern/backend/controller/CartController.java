package com.google.intern.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.intern.backend.dto.AddToCartDto;
import com.google.intern.backend.dto.UpdateQuantityDto;
import com.google.intern.backend.entity.CartItem;
import com.google.intern.backend.result.Result;
import com.google.intern.backend.service.CartService;
import com.google.intern.backend.util.JwtUtil;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin("http://localhost:3001")
public class CartController {
    @Autowired
    private CartService cartService;

    @Autowired
    private JwtUtil jwtUtil;

    // 获取当前用户的购物车
    @GetMapping
    public Result<List<CartItem>> getMyCart(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7);
        Long userId = jwtUtil.getUserIdFromToken(token);
        List<CartItem> cartItems = cartService.getCartItemsByUserId(userId);
        return Result.success(cartItems);
    }

    // 添加商品到购物车
    @PostMapping
    public Result<CartItem> addToCart(@RequestHeader("Authorization")String authHeader, @RequestBody AddToCartDto addToCartDto) {
        String token = authHeader.substring(7);
        Long userId = jwtUtil.getUserIdFromToken(token);
        CartItem cartItem = cartService.addToCart(userId, addToCartDto.getGoodsId(), addToCartDto.getQuantity());
        return Result.success(cartItem);
    }

    // 更新购物车商品数量
    @PutMapping("/{itemId}")
    public Result<CartItem> updateQuantity(@PathVariable Long itemId, @RequestBody UpdateQuantityDto updateQuantityDto) {
        CartItem updatedItem = cartService.updateItemQuantity(itemId, updateQuantityDto.getQuantity());
        return Result.success(updatedItem);
    }

    // 移除购物车商品
    @DeleteMapping("/{itemId}")
    public Result<String> removeItem(@PathVariable Long itemId) {
        cartService.removeItem(itemId);
        return Result.success("Item removed successfully");
    }
}
