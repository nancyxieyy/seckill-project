package com.google.intern.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.intern.backend.service.OrderInfoService;
import com.google.intern.backend.entity.OrderInfo;

@RestController
@RequestMapping("api/orders")
@CrossOrigin("http://localhost:3001")
public class OrderInfoController {
    @Autowired
    private OrderInfoService orderInfoService;
}
