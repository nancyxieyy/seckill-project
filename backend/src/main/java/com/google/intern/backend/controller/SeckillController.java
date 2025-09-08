package com.google.intern.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
@CrossOrigin("http://localhost:3000")
public class SeckillController {
    @Autowired
    private SeckillService seckillService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/do_seckill")
    public Result<String> doSeckill(@RequestHeader("Authorization") String authHeader, @RequestBody SeckillRequestDto seckillRequest) {
        // 从Token中获取用户ID，确保安全
        String token = authHeader.substring(7);
        Long userId = jwtUtil.getUserIdFromToken(token);

        // 调用Service层执行秒杀逻辑
        seckillService.doSeckill(userId, seckillRequest.getGoodsId());

        return Result.success("秒杀请求已受理，正在排队中...");
    }

    @PostMapping("/reset-test-env")
    public Result<String> resetTestEnv() {
        seckillService.resetTestEnvironment();
        return Result.success("测试环境已重置");
    }

    @GetMapping("/result/{goodsId}")
    public Result<Long> getSeckillResult(@RequestHeader("Authorization") String authHeader, @PathVariable Long goodsId) {
        String token = authHeader.substring(7);
        Long userId = jwtUtil.getUserIdFromToken(token);

        Long result = seckillService.getSeckillResult(userId, goodsId);
        
        // 返回结果： >0 表示成功拿到订单ID, 0 表示排队中, -1 表示秒杀失败
        return Result.success(result);
    }
}
