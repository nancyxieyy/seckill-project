package com.google.intern.backend.config;

import com.google.intern.backend.interceptor.JwtInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Autowired
    private JwtInterceptor jwtInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(jwtInterceptor)
                .addPathPatterns("/api/**") // 拦截所有 /api/ 开头的路径
                .excludePathPatterns(
                        "/api/users/login",   // 放行登录接口
                        "/api/users/register", // 放行注册接口
                        "/api/goods/**",      // 假设商品列表和详情所有人都能看，也放行
                        "/api/hello"          // 放行测试接口
                );
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3001") // 允许来自3001端口的源
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // 允许的方法
                .allowCredentials(true) // 允许携带凭证
                .maxAge(3600); // 预检请求的有效期，单位为秒
    }
}