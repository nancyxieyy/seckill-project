import React, {useState, useEffect} from "react";
import apiClient from "../api";
import { Add, Remove } from "@mui/icons-material";

import { 
    Container, Typography, List, ListItem, ListItemAvatar, Avatar, Divider, Button, Box, IconButton, TextField, Stack
} from '@mui/material';

function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [goodsDetails, setGoodsDetails] = useState({});
    const [loading, setLoading] = useState(true);
    
    // 获取购物车数据
    const fetchCartItems = () => {
        apiClient.get('/cart').then(result => {
            const items = result.data.data || [];
            setCartItems(items);

            // 获取购物车中每个商品的详细信息
            items.forEach(item => {
                // 避免重复请求同一商品
                if(!goodsDetails[item.goodsId]) {
                    fetchGoodsDetails(item.goodsId);
                }
            });
        }).catch(error => {
            console.error("获取购物车失败!", error);
        });
    };

    // 获取单个商品的详细信息
    const fetchGoodsDetails = (goodsId) => {
        apiClient.get(`/goods/id/${goodsId}`).then(result => {
            setGoodsDetails(prevDetails => ({
                ...prevDetails,
                [goodsId]: result.data
            }));
        }).catch(error => {
            console.error(`获取商品 ${goodsId} 详情失败`, error)
        });
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    // 本地数量更新
    const setItemQuantityLocal = (itemId, qty) => {
        setCartItems((prev) =>
        prev.map((item) =>
            item.id === itemId ? { ...item, quantity: qty } : item
        ));
    }

    // 提交数量到后端
    const commitQuantity = async (item, qty) => {
        const old = item.quantity;
        setItemQuantityLocal(item.id, qty);
        try{
            await apiClient.put(`/cart/${item.id}`, { quantity: qty });
            fetchCartItems(); // 重新加载购物车
        } catch(error) {
            setItemQuantityLocal(item.id, old);
            alert('更新数量失败！' + (error.response ? error.response.data.message : error.message));
            console.error('更新数量失败！', error);
        }
    };

    // 数量输入框
    const handleQtyBlur = (item, e) => {
        let val = parseInt(e.target.value || '1', 10);
        if(Number.isNaN(val)) val = item.quantity;
        val = Math.max(1, Math.min(99, val)); // 限制在1-99
        if(val !== item.quantity) {
            commitQuantity(item, val);
        } else {
            setItemQuantityLocal(item.id, val); // 恢复显示
        }
    };

    // 点击加减按钮
    const increaseQty = (item) => {
        if(item.quantity < 99) return;
        commitQuantity(item, item.quantity + 1);
    };

    const decreaseQty = (item) => {
        if(item.quantity > 1) return;
        commitQuantity(item, item.quantity - 1);
    };

    // 移除商品
    const handleRemoveItem = (itemId) => {
        apiClient.delete(`/cart/${itemId}`).then(() => {
            alert('移除成功！');
            fetchCartItems(); // 重新加载购物车
        }).catch(error => {
            alert('移除失败！')
        });
    };

    // 计算总价
    const lineTotal = (price, qty) => (price || 0) * (qty || 0);
    
    const totalCost = cartItems.reduce((sum, item) => {
        const details = goodsDetails[item.goodsId];
        return sum + lineTotal(details?.goodsPrice, item.quantity);
    }, 0);

    const fmt = (num) => `${(num || 0).toFixed(2)}`;

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                My Cart
            </Typography>

            {cartItems.length > 0 ? (
                <Box>
                <List>
                    {cartItems.map((item) => {
                    const details = goodsDetails[item.goodsId];
                    const unitPrice = details?.goodsPrice || 0;
                    const subtotal = lineTotal(unitPrice, item.quantity);

                    return (
                        <React.Fragment key={item.id}>
                        <ListItem alignItems="center" sx={{ py: 2 }}>
                            {/* 图片：固定 80x80 的“画布”，居中完整展示；可点击跳转 */}
                            <a
                                href={`/goods/${item.goodsId}`}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <Box
                                sx={{
                                    mr: 2,
                                    width: 80,
                                    height: 80,
                                    borderRadius: 1,
                                    bgcolor: '#f5f5f5',
                                    display: 'grid',
                                    placeItems: 'center',
                                    overflow: 'hidden',
                                }}
                                >
                                <Box
                                    component="img"
                                    src={details?.goodsImg}
                                    alt={details?.goodsName}
                                    sx={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    width: 'auto',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    display: 'block',
                                    }}
                                />
                                </Box>
                            </a>

                            {/* 中间：标题、价格、小计、数量控制 */}
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                {/* 商品名：可点击跳转 */}
                                <Typography
                                variant="subtitle1"
                                noWrap
                                title={details?.goodsName || `商品 ${item.goodsId}`}
                                component="a"
                                href={`/goods/${item.goodsId}`}
                                sx={{
                                    fontWeight: 600,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' },
                                }}
                                >
                                {details?.goodsName || `商品 ${item.goodsId}`}
                                </Typography>

                                <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={2}
                                alignItems="center"
                                sx={{ mt: 1 }}
                                >
                                {/* 单价 & 小计 */}
                                <Stack direction="row" spacing={3} alignItems="center" sx={{ minWidth: 220 }}>
                                    <Typography variant="body1" color="text.secondary">
                                    单价：$<strong>{fmt(unitPrice)}</strong>
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                    小计：$<strong>{fmt(subtotal)}</strong>
                                    </Typography>
                                </Stack>

                                {/* 保留你原来的数量控制区 */}
                                <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: { sm: 'auto' } }}>
                                    <IconButton
                                    size="small"
                                    onClick={() => decreaseQty(item)}
                                    disabled={item.quantity <= 1}
                                    aria-label="减少数量"
                                    >
                                    <Remove />
                                    </IconButton>

                                    <TextField
                                    size="small"
                                    type="number"
                                    inputProps={{ min: 1, max: 99, inputMode: 'numeric', pattern: '[0-9]*' }}
                                    value={item.quantity}
                                    onChange={(e) => {
                                        let v = e.target.value.replace(/[^\d]/g, '');
                                        if (v === '') v = '1';
                                        let num = Math.max(1, Math.min(99, parseInt(v, 10)));
                                        setItemQuantityLocal(item.id, num);
                                    }}
                                    onBlur={(e) => handleQtyBlur(item, e)}
                                    sx={{ width: 72, '& input': { textAlign: 'center' } }}
                                    />

                                    <IconButton
                                    size="small"
                                    onClick={() => increaseQty(item)}
                                    disabled={item.quantity >= 99}
                                    aria-label="增加数量"
                                    >
                                    <Add />
                                    </IconButton>
                                </Stack>
                                </Stack>
                            </Box>

                            {/* 右侧：移除 */}
                            <Button
                                variant="outlined"
                                color="error"
                                size="small"
                                onClick={() => handleRemoveItem(item.id)}
                                sx={{ ml: 2, whiteSpace: 'nowrap' }}
                            >
                                DELETE
                            </Button>
                        </ListItem>

                        <Divider component="li" />
                        </React.Fragment>
                    );
                })}
            </List>

            {/* 底部总计 */}
            <Box sx={{ mt: 4, textAlign: "right" }}>
                <Typography variant="h5">Subtotal: ${fmt(totalCost)}</Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                Proceed to Checkout
                </Button>
            </Box>
            </Box>
            ) : (
            <Typography>购物车是空的</Typography>
        )}
        </Container>
    );
}

export default CartPage;