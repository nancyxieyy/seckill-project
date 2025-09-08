package com.google.intern.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.intern.backend.service.SeckillGoodsService;
import com.google.intern.backend.entity.SeckillGoods;

@RestController
@RequestMapping("/api/seckill-goods")
@CrossOrigin("http://localhost:3000")
public class SeckillGoodsController {
    @Autowired
    private SeckillGoodsService seckillGoodsService;

    @GetMapping("/list")
    public List<SeckillGoods> findAll() {
        return seckillGoodsService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<SeckillGoods> getSeckillGoodsById(@PathVariable Long id) {
        Optional<SeckillGoods> seckillGoodsOpt = seckillGoodsService.findById(id);

        return seckillGoodsOpt
            .map(goods -> ResponseEntity.ok(goods)) // 如果找到了，返回200和商品数据
            .orElse(ResponseEntity.notFound().build()); // 如果没找到，返回404
    }
}
