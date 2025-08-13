package com.google.intern.backend.service;

import com.google.intern.backend.entity.User;
import com.google.intern.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.google.intern.backend.dto.LoginDto;
import com.google.intern.backend.result.Result;
import com.google.intern.backend.util.MD5Util;

import java.util.Date;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User findUserByNickname(String nickname) {
        return userRepository.findByNickname(nickname);
    }

    public Result<String> register(User user) {
        // 1. 检查昵称是否被注册
        User existingUser = userRepository.findByNickname(user.getNickname());
        if(existingUser != null) {
            return Result.error(400, "Nickname already exists");
        }

        // 2. 密码加密
        String salt = UUID.randomUUID().toString().substring(0, 8);
        String formPass = MD5Util.inputPassToFormPass(user.getPassword());
        String dbPass = MD5Util.formPassToDBPass(formPass, salt);

        // 3. 加密后的密码和盐值设置会user对象
        user.setPassword(dbPass);
        user.setSalt(salt);
        user.setRegisterDate(new Date());

        // 4. 调用repository保存用户信息
        userRepository.save(user);
        return Result.success("User registered successfully");
    }

    public Result<String> login(LoginDto loginDto) {
        // 1. 根据昵称查找用户
        User user = userRepository.findByNickname(loginDto.getNickname());
        if (user == null) {
            return Result.error(404, "User not found");
        }

        // 2. 验证密码
        // 取出DB中的盐值
        String saltDB = user.getSalt();
        // 对用户输入的密码进行加密
        String formPass = MD5Util.inputPassToFormPass(loginDto.getPassword());
        String calculatedDbPass = MD5Util.formPassToDBPass(formPass, saltDB);

        // 3. 比对加密后的密码
        if (!calculatedDbPass.equals(user.getPassword())) {
            return Result.error(401, "Invalid password");
        }

        // 4. 登录成功 (未来我们会在这里返回JWT)
        return Result.success("Login successful");
    }
}
