package com.google.intern.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.intern.backend.repository.OrderInfoRepository;
import com.google.intern.backend.entity.OrderInfo;

@Service
public class OrderInfoService {
    @Autowired
    private OrderInfoRepository orderInfoRepository;
}
