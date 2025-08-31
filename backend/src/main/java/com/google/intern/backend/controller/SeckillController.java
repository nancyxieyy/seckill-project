package com.google.intern.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.intern.backend.dto.SeckillRequestDto;
import com.google.intern.backend.entity.OrderInfo;
import com.google.intern.backend.result.Result;
import com.google.intern.backend.service.SeckillService;
import com.google.intern.backend.util.JwtUtil;

@RestController
@RequestMapping("/api/seckill")
@CrossOrigin("http://localhost:3001")
public class SeckillController {
    @Autowired
    private SeckillService seckillService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/do_seckill")
    public Result<OrderInfo> doSeckill(@RequestHeader("Authorization") String authHeader, @RequestBody SeckillRequestDto seckillRequest) {
        // 从Token中获取用户ID，确保安全
        String token = authHeader.substring(7);
        Long userId = jwtUtil.getUserIdFromToken(token);

        // 调用Service层执行秒杀逻辑
        OrderInfo orderInfo = seckillService.doSeckill(userId, seckillRequest.getGoodsId());

        return Result.success(orderInfo);
    }
}
