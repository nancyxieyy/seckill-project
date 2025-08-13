package com.google.intern.backend.controller;

import com.google.intern.backend.entity.User;
import com.google.intern.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.google.intern.backend.dto.LoginDto;
import com.google.intern.backend.result.Result;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("http://localhost:3001")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{nickname}")
    public User getUserByNickname(@PathVariable String nickname) {
        return userService.findUserByNickname(nickname);
    }

    // 注册接口
    @PostMapping("/register")
    public Result<String> register(@RequestBody User user) {
        return userService.register(user);
    }

    // 登录接口
    @PostMapping("/login")
    public Result<String> login(@RequestBody LoginDto loginDto) {
        return userService.login(loginDto);
    }
}
