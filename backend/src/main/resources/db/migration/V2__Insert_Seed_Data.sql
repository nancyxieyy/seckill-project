-- V2__Insert_Seed_Data.sql

-- 插入两个普通商品
INSERT INTO `goods`(`id`, `goods_name`, `goods_title`, `goods_detail`, `goods_price`) 
VALUES (1, 'iPhone 20', '来自未来的手机', '地表最强性能，充电-5分钟，通话两星期', 9999.00);

INSERT INTO `goods`(`id`, `goods_name`, `goods_title`, `goods_detail`, `goods_price`) 
VALUES (2, 'MacBook Pro M10', '生产力工具', '搭载M10芯片，性能起飞', 19999.00);


-- 为 iPhone 20 创建一个正在进行的秒杀活动
-- 注意：这里的开始和结束时间需要根据你测试时的时间进行调整
INSERT INTO `seckill_goods`(`goods_id`, `seckill_price`, `stock_count`, `start_date`, `end_date`)
VALUES (1, 0.01, 10, '2025-09-01 00:00:00', '2025-09-30 23:59:59');