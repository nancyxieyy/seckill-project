package com.google.intern.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@CrossOrigin("http://localhost:3001")
@RestController
@RequestMapping("/api") // 给Controller里的所有接口加上 /api 的前缀
public class HelloController {
    @GetMapping("/hello")   // 处理对 /api/hello 的 GET 请求
    public Map<String, String> sayHello() {
        return Collections.singletonMap("message", "Hello from your Spring Boot Backend!");
    }
}
