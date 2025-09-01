package com.google.intern.backend;

import java.lang.System.LoggerFinder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.core.StringRedisTemplate;

@SpringBootApplication
public class BackendApplication {
	// 获取一个日志记录器
	private static final Logger logger = LoggerFactory.getLogger(BackendApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	// 添加一个Bean，它会在应用启动成功后自动运行
	@Bean
	public ApplicationRunner redisConnectionTest(@Autowired StringRedisTemplate redisTemplate) {
		return args -> {
			try {
				// 尝试向Redis存入一个键值对
				redisTemplate.opsForValue().set("test:connection", "ok");
				// 尝试从Redis取出
				String value = redisTemplate.opsForValue().get("test:connection");

				if("ok".equals(value)) {
					logger.info("Redis connection successful!");
				} else {
					logger.error("Redis connection test failed: Unexpected value '{}'", value);
				}
			} catch(Exception e) {
				logger.error("Redis connextion failed: {}", e.getMessage());
			}
		};
	}
}
