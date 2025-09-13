package com.google.intern.backend.controller;

import com.google.intern.backend.entity.Goods;
import com.google.intern.backend.service.GoodsService;

import java.lang.StackWalker.Option;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/goods")
@CrossOrigin("http://localhost:3000")
public class GoodsController {
    @Autowired
    private GoodsService goodsService;

    @GetMapping("/list")
    public List<Goods> getAllGoods() {
        return goodsService.findAll();
    }

    @GetMapping("/name/{goodsName}")
    public ResponseEntity<List<Goods>> getGoodsByGoodsName(@PathVariable String goodsName) {
        List<Goods> goodsList = goodsService.findByName(goodsName);

        if(goodsList == null || goodsList.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(goodsList);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Goods> getGoodsById(@PathVariable Long id) {
        Optional<Goods> goodsOpt = goodsService.findById(id);

        return goodsOpt
            .map(goods -> ResponseEntity.ok(goods)) // 如果找到了，返回200和商品数据
            .orElse(ResponseEntity.notFound().build()); // 如果没找到，返回404
    }
}
