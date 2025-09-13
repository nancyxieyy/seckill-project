import React, { useState, useEffect } from 'react';
import apiClient from '../api';

// 引入 MUI 组件
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function SeckillListPage() {
    const [seckillGoods, setSeckillGoods] = useState([]);
    const [goodsDetails, setGoodsDetails] = useState({});

    useEffect(() => {
        // 调用专门获取秒杀商品的接口
        apiClient.get('/seckill-goods/list').then(result => {
            setSeckillGoods(result.data);
            // 获取每个秒杀商品对应的商品详情
            result.data.forEach(item => {
                apiClient.get(`/goods/id/${item.goodsId}`).then(detialRestult => {
                    setGoodsDetails(prev => ({ ...prev, [item.goodsId]: detialRestult.data }));
                });
            });
        }).catch(error => {
            console.error("获取秒杀商品列表失败！", error);
        });
    }, []);

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                秒杀活动
            </Typography>
            <Grid container spacing={4}>
                {seckillGoods.map(item => (
                    <Grid item key={item.id} xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                sx={{ aspectRatio: '1 / 1', objectFit: 'contain', padding: 2 }}
                                image={goodsDetails[item.goodsId]?.goodsImg}
                                alt={goodsDetails[item.goodsId]?.goodsName}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h6" component="h2" sx={{ height: 64, overflow: 'hidden' }}>
                                    {goodsDetails[item.goodsId]?.goodsName}
                                </Typography>
                                <Typography variant="h5" component="p" sx={{ color: 'red', mt: 1 }}>
                                    秒杀价: ￥{item.seckillPrice}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    库存: {item.stockCount}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" component={RouterLink} to={`/seckill/${item.goodsId}`}>
                                    去抢购
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default SeckillListPage;