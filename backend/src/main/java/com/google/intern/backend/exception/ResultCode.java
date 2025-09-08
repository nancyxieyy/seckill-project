package com.google.intern.backend.exception;

import com.google.intern.backend.result.Result;

import lombok.Getter;

@Getter
public enum ResultCode {
    // 通用状态码
    SUCCESS(200, "Success"),

    // 客户端错误
    BAD_REQUEST(400, "Bad Request"),
    UNAUTHORIZED(401, "Unauthorized"),
    FORBIDDEN(403, "Forbidden"),
    NOT_FOUND(404, "Not Found"),
    TOO_MANY_REQUESTS(429, "Too Many Requests"),
    CLIENT_ERROR(450, "Client Error"),
    
    // 服务器错误
    INTERNAL_SERVER_ERROR(500, "Internal Server Error"),
    SERVICE_UNAVAILABLE(503, "Service Unavailable"),
    SERVER_ERROR(550, "Server Error"),
    
    // 业务错误
    SECKILL_STOCK_EMPTY(500101, "商品已售罄"),
    SECKILL_REPEAT_PURCHASE(500102, "不能重复秒杀"),
    SECKILL_NOT_STARTED(500103, "秒杀尚未开始"),
    SECKILL_ENDED(500104, "秒杀已结束"),
    SECKILL_GOODS_NOT_FOUND(500105, "秒杀商品不存在");
    
    private final int code;
    private final String message;

    ResultCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
