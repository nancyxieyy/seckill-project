package com.google.intern.backend.interceptor;

import com.google.intern.backend.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class JwtInterceptor implements HandlerInterceptor {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 从请求头 Authorization 中获取token
        final String authHeader = request.getHeader("Authorization");

        // 检查token是否存在，以及格式是否是 "Bearer " 开头
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED); // 401
            response.getWriter().write("Authorization header is missing or invalid");
            return false; // 拦截请求
        }

        final String token = authHeader.substring(7); // 去掉 "Bearer " 前缀

        // 验证token
        if (!jwtUtil.validateToken(token)) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED); // 401
            response.getWriter().write("Invalid or expired token");
            return false; // 拦截请求
        }

        // Token验证通过，放行请求
        return true;
    }
}