import React, {useState, useEffect} from "react";
import apiClient from "../api";

// 引入MUI组件
import { 
    Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Container,
    TextField, Box, FormControl, InputLabel, Select, MenuItem 
} from '@mui/material';

function GoodsListPage() {
    const [goods, setGoods] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        // 加载组件时，获取商品列表
        apiClient.get('/goods/list').then(result => {
            setGoods(result.data);
        }).catch(error => {
            console.error("获取商品列表失败！", error);
        });
    }, []);

    const handleAddToCart = (goodsId) => {
        // 调用添加到购物车的接口
        apiClient.post('/cart', {goodsId:goodsId, quantity:1}).then(result => {
            alert('添加成功');
        }).catch(error => {
            if (error.response && error.response.status === 401) {
                alert('请先登录再操作！');
                window.location.href = '/';
            } else {
                alert('添加失败: ' + (error.response ? error.response.data.message : '请稍后再试'));
                alert('添加失败: ' + error.message);
            }
            console.error("添加到购物车失败！", error);
        });
    };

    // 根据搜索和排序条件，过滤和排序商品
    const filteredAndSortedGoods = goods.filter(item => 
            item.goodsName.toLowerCase().includes(searchTerm.toLowerCase())
        ).sort((a, b) => {
            if (sortOrder === 'price_asc') {
                return a.goodsPrice - b.goodsPrice;
            }
            if (sortOrder === 'price_desc') {
                return b.goodsPrice - a.goodsPrice;
            }
            return 0;
        });

    return (
        <Container sx={{ py: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                全部商品
            </Typography>
            
            {/* 搜索和排序控制栏 */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                <TextField 
                    label="搜索商品" 
                    variant="outlined"
                    size="small"
                    sx={{ width: '300px' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel>排序方式</InputLabel>
                    <Select
                        value={sortOrder}
                        label="排序方式"
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <MenuItem value=""><em>默认</em></MenuItem>
                        <MenuItem value="price_asc">价格从低到高</MenuItem>
                        <MenuItem value="price_desc">价格从高到低</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Grid container spacing={4}>
                {filteredAndSortedGoods.map(item => (
                    // 为了让 Card 的 height: '100%' 生效，Grid item 也需要是 flex 布局
                    <Grid item key={item.id} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                        
                        {/* Card 设置为 flex 纵向布局，并占满父容器 */}
                        <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                sx={{ aspectRatio: '1 / 1', objectFit: 'contain', padding: 2 }}
                                image={item.goodsImg}
                                alt={item.goodsName}
                            />
                            {/* CardContent 设置为自动伸展，填充所有可用空间 */}
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h6" component="h2">
                                    {item.goodsName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.goodsTitle}
                                </Typography>
                            </CardContent>
                            {/* CardActions 会被自动推到卡片底部 */}
                            <CardActions>
                                <Typography variant="h5" component="p" sx={{ flexGrow: 1 }}>
                                    ${item.goodsPrice}
                                </Typography>
                                <Button size="small" onClick={() => handleAddToCart(item.id)}>加入购物车</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default GoodsListPage;