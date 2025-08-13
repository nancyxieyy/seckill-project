package com.google.intern.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.intern.backend.service.SeckillGoodsService;
import com.google.intern.backend.entity.SeckillGoods;

@RestController
@RequestMapping("/api/seckill-goods")
@CrossOrigin("http://localhost:3001")
public class SeckillGoodsController {
    @Autowired
    private SeckillGoodsService seckillGoodsService;

    @GetMapping("/list")
    public List<SeckillGoods> findAll() {
        return seckillGoodsService.findAll();
    }
}
