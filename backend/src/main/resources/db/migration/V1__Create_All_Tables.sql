-- V1__Create_All_Tables.sql

-- 用户表
CREATE TABLE `user` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `nickname` varchar(255) NOT NULL,
    `password` varchar(255) DEFAULT NULL,
    `salt` varchar(255) DEFAULT NULL,
    `head_img_url` varchar(255) DEFAULT NULL,
    `register_date` datetime DEFAULT NULL,
    `last_login_date` datetime DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_nickname` (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 商品表
CREATE TABLE `goods` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `goods_name` varchar(255) DEFAULT NULL,
    `goods_title` varchar(255) DEFAULT NULL,
    `goods_img` varchar(255) DEFAULT NULL,
    `goods_detail` longtext,
    `goods_price` decimal(10,2) DEFAULT '0.00',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 秒杀商品表
CREATE TABLE `seckill_goods` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `goods_id` bigint DEFAULT NULL,
    `seckill_price` decimal(10,2) DEFAULT '0.00',
    `stock_count` int DEFAULT '0',
    `version` int NOT NULL DEFAULT '0',
    `start_date` datetime DEFAULT NULL,
    `end_date` datetime DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `idx_goods_id` (`goods_id`),
    KEY `idx_start_end_date` (`start_date`, `end_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 订单信息表
CREATE TABLE `order_info` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `user_id` bigint DEFAULT NULL,
    `goods_id` bigint DEFAULT NULL,
    `goods_name` varchar(255) DEFAULT NULL,
    `goods_count` int DEFAULT '0',
    `goods_price` decimal(10,2) DEFAULT '0.00',
    `order_channel` tinyint DEFAULT NULL,
    `status` tinyint DEFAULT NULL,
    `pay_type` varchar(255) DEFAULT NULL,
    `create_date` datetime DEFAULT NULL,
    `pay_date` datetime DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `idx_user_id` (`user_id`),
    KEY `idx_goods_id` (`goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 秒杀凭证表
CREATE TABLE `seckill_order` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `user_id` bigint DEFAULT NULL,
    `seckill_goods_id` bigint DEFAULT NULL,
    `order_id` bigint DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_user_seckill_goods` (`user_id`, `seckill_goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 购物车表
CREATE TABLE `cart_item` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `user_id` bigint DEFAULT NULL,
    `goods_id` bigint DEFAULT NULL,
    `quantity` int DEFAULT '0',
    `create_date` datetime DEFAULT NULL,
    `update_date` datetime DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_user_goods` (`user_id`, `goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;