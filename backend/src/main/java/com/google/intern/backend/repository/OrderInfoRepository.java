package com.google.intern.backend.repository;

import com.google.intern.backend.entity.OrderInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderInfoRepository extends JpaRepository<OrderInfo, Long> {
    
}
