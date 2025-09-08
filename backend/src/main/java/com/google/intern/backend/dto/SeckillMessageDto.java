package com.google.intern.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SeckillMessageDto implements Serializable {
    public Long userId;
    public Long goodsId;
}
