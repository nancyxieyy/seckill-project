package com.google.intern.backend.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.google.intern.backend.result.Result;

@RestControllerAdvice
public class GlobalExceptionHandler {
    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    // 捕获自定义的GlobalException
    @ExceptionHandler(GlobalException.class)
    public ResponseEntity<Result<Object>> handleGlobalException(GlobalException ex) {
        logger.error("业务异常 (Business Exception): {}", ex.getMessage());
        Result<Object> result = Result.error(ex.getResultCode().getCode(), ex.getMessage());
        // 返回一个合适的HTTP状态码，例如400 Bad Request
        return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
    }

    // 捕获其他未处理的异常
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Result<Object>> handleOtherExceptions(Exception ex) {
        // 记录异常日志
        logger.error("未捕获的异常 (Uncaught Exception):", ex);
        Result<Object> result = Result.error(ResultCode.INTERNAL_SERVER_ERROR.getCode(), "服务器内部发生未知错误,请联系管理员");
        // 对于未知错误，总是返回500 Internal Server Error
        return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
