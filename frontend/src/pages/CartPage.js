import React, {useState, useEffect} from "react";
import apiClient from "../api";
import { Container, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Button, Box } from '@mui/material';

function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [goodsDetails, setGoodsDetails] = useState({});
    
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
        apiClient.get(`/goods/${goodsId}`).then(result => {
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

    const handleRemoveItem = (itemId) => {
        apiClient.delete(`/cart/${itemId}`).then(() => {
            alert('移除成功！');
            fetchCartItems(); // 重新加载购物车
        }).catch(error => {
            alert('移除失败！')
        });
    };

    const totalCost = cartItems.reduce((sum, item) => {
        const details = goodsDetails[item.goodsId];
        return sum + (details ? details.goodsPrice * item.quantity : 0);
    }, 0);

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                我的购物车
            </Typography>
            {cartItems.length > 0 ? (
                <Box>
                    <List>
                        {cartItems.map(item => {
                            const details = goodsDetails[item.goodsId];
                            return (
                                <React.Fragment key={item.id}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar variant="square" src={details?.goodsImg} sx={{ width: 80, height: 80, mr: 2 }} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={details?.goodsName || `商品 ID: ${item.goodsId}`}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography component="span" variant="body2" color="text.primary">
                                                        数量: {item.quantity}
                                                    </Typography>
                                                    <br />
                                                    单价: ￥{details?.goodsPrice.toFixed(2)}
                                                </React.Fragment>
                                            }
                                        />
                                        <Button variant="outlined" color="error" size="small" onClick={() => handleRemoveItem(item.id)}>
                                            移除
                                        </Button>
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </React.Fragment>
                            );
                        })}
                    </List>
                    <Box sx={{ mt: 4, textAlign: 'right' }}>
                        <Typography variant="h5">
                            总计: ${totalCost.toFixed(2)}
                        </Typography>
                        <Button variant="contained" sx={{ mt: 2 }}>去结算</Button>
                    </Box>
                </Box>
            ) : (
                <Typography>购物车是空的</Typography>
            )}
        </Container>
    );
}

export default CartPage;