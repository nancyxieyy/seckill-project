package com.google.intern.backend.service;

import com.google.intern.backend.entity.Goods;
import com.google.intern.backend.repository.GoodsRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GoodsService {
    @Autowired
    private GoodsRepository goodsRepository;

    // 暴露 Repository 的 findAll 方法
    public List<Goods> findAll() {
        return goodsRepository.findAll();
    }

    public List<Goods> findByName(String goodsName) {
        return goodsRepository.findByGoodsName(goodsName);
    }
}
