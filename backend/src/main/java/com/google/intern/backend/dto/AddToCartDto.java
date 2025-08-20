package com.google.intern.backend.dto;

import lombok.Data;

@Data
public class AddToCartDto {
    private Long goodsId;
    private Integer quantity;
}
