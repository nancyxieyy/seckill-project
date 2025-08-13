# 高并发秒杀系统 - 数据库 Schema 设计

## 1. 用户表 (user)

存储系统用户信息

| 字段名          | 数据类型       | 主键/索引 | 注释                               |
| --------------- | -------------- | --------- | ---------------------------------- |
| `id`            | `BIGINT(20)`   | PK        | 用户ID，初期使用数据库主键自增，未来考虑使用雪花算法（便于分库分表） |
| `nickname`      | `VARCHAR(255)` | UNIQUE    | 用户昵称，唯一                       |
| `password`      | `VARCHAR(255)` |           | 加密后的密码（MD5两次加密）          |
| `salt`          | `VARCHAR(255)` |           | 用于加密的盐值                       |
| `head_img_url`  | `VARCHAR(255)` |           | 用户头像图片的URL                    |
| `register_date` | `DATETIME`     |           | 注册时间                           |
| `last_login_date`| `DATETIME`     |           | 上次登录时间                         |

## 2. 商品表 (goods)

存储所有商品的通用信息

| 字段名         | 数据类型        | 主键/索引 | 注释               |
| -------------- | --------------- | --------- | ------------------ |
| `id`           | `BIGINT(20)`    | PK        | 商品ID             |
| `goods_name`   | `VARCHAR(255)`  |           | 商品名称           |
| `goods_title`  | `VARCHAR(255)`  |           | 商品标题（简介）   |
| `goods_img`    | `VARCHAR(255)`  |           | 商品图片的URL      |
| `goods_detail` | `LONGTEXT`      |           | 商品的详细介绍     |
| `goods_price`  | `DECIMAL(10, 2)`|           | 商品的原价         |

## 3. 秒杀商品表 (seckill_goods)

存储参与秒杀活动的商品的特殊信息，是对商品表的扩展

| 字段名          | 数据类型        | 主键/索引 | 注释                                   |
| --------------- | --------------- | --------- | -------------------------------------- |
| `id`            | `BIGINT(20)`    | PK        | 秒杀商品ID                             |
| `goods_id`      | `BIGINT(20)`    | INDEX     | 对应的商品ID（关联 `goods` 表）        |
| `seckill_price` | `DECIMAL(10, 2)`|           | 商品的秒杀价                           |
| `stock_count`   | `INT(11)`       |           | 秒杀商品的库存数量                     |
| `start_date`    | `DATETIME`      |           | 秒杀活动的开始时间                     |
| `end_date`      | `DATETIME`      |           | 秒杀活动的结束时间                     |

## 4. 订单信息表 (order_info)

存储秒杀成功后生成的订单信息

| 字段名        | 数据类型        | 主键/索引 | 注释                                                         |
| ------------- | --------------- | --------- | ------------------------------------------------------------ |
| `id`          | `BIGINT(20)`    | PK        | 订单ID                                                       |
| `user_id`     | `BIGINT(20)`    | INDEX     | 对应的用户ID                                                 |
| `goods_id`    | `BIGINT(20)`    | INDEX     | 对应的商品ID                                                 |
| `goods_name`  | `VARCHAR(255)`  |           | 商品名称（冗余字段，避免关联查询）                           |
| `goods_count` | `INT(11)`       |           | 购买的商品数量（秒杀场景通常为1）                            |
| `goods_price` | `DECIMAL(10, 2)`|           | 下单时的商品价格（冗余字段）                                 |
| `order_channel`| `TINYINT(4)`    |           | 订单渠道：1-PC, 2-Android, 3-iOS                             |
| `status`      | `TINYINT(4)`    |           | 订单状态：0-新建未支付, 1-已支付, 2-已发货, 3-已收货, 4-已退款, 5-已完成 |
| `create_date` | `DATETIME`      |           | 订单的创建时间                                               |
| `pay_date`    | `DATETIME`      |           | 支付时间                                                     |