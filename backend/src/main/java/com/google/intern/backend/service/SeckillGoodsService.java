package com.google.intern.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.intern.backend.entity.SeckillGoods;
import com.google.intern.backend.repository.SeckillGoodsRepository;

@Service
public class SeckillGoodsService {
    @Autowired
    private SeckillGoodsRepository seckillGoodsRepository;

    public List<SeckillGoods> findAll() {
        return seckillGoodsRepository.findAll();
    }

    public Optional<SeckillGoods> findById(Long id) {
        return seckillGoodsRepository.findById(id);
    }
}
