import React, { useState, useEffect, useMemo } from 'react';
import apiClient from '../api';
import Countdown from '../components/Countdown';
import SearchSortBar from "../components/SearchSortBar";

// 引入 MUI 组件
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Container, Box, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function SeckillListPage() {
    const [seckillGoods, setSeckillGoods] = useState([]);
    const [goodsDetails, setGoodsDetails] = useState({});
    const [viewList, setViewList] = useState([]);

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
    
    const searchItems = useMemo(() => {
        return seckillGoods.map(s => ({
        ...s,
        goodsName: goodsDetails[s.goodsId]?.goodsName || '',
        goodsPrice: goodsDetails[s.goodsId]?.goodsPrice ?? 0, // 需要的话也能按原价排序
        // SearchSortBar 会用 priceKey；我们在下面传 "seckillPrice"
        }));
    }, [seckillGoods, goodsDetails]);

    return (
        <Container sx={{ py: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
            Seckill Products
        </Typography>

        {/* 按商品名搜，按秒杀价排 */}
        <SearchSortBar
            items={searchItems}
            searchKey="goodsName"
            priceKey="seckillPrice"
            onChange={setViewList}
        />

        <Box
            sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" },
            gap: 3,
            }}
        >
            {(viewList.length ? viewList : searchItems).map((item) => {
            const details = goodsDetails[item.goodsId]; // 仍可拿详情
            const startTime = new Date(item.startDate);
            const endTime = new Date(item.endDate);
            const now = new Date();
            let status = "ended";
            if (now < startTime) status = "upcoming";
            else if (now < endTime) status = "ongoing";

            return (
                <Card key={item.id} sx={{ display: "flex", flexDirection: "column", height: 480 }}>
                <RouterLink to={`/seckill/${item.goodsId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Box sx={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#fafafa", p: 1, flexShrink: 0 }}>
                    <CardMedia
                        component="img"
                        sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                        image={details?.goodsImg}
                        alt={details?.goodsName}
                    />
                    </Box>
                </RouterLink>

                <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", p: 2, minHeight: 0, overflow: "hidden" }}>
                    <Typography variant="h6" component="h2" title={details?.goodsName}
                    sx={{ fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {details?.goodsName || '--'}
                    </Typography>

                    <Box sx={{ mt: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'error.main' }}>
                        秒杀价: ${item.seckillPrice}
                    </Typography>
                    <Typography variant="body2" sx={{ textDecoration: "line-through", color: "text.secondary" }}>
                        原价: ${details?.goodsPrice}
                    </Typography>
                    </Box>

                    <Box sx={{ mt: "auto", pt: 1 }}>
                    {status === 'upcoming' && <Countdown targetDate={item.startDate} onComplete={() => window.location.reload()} />}
                    {status === 'ongoing' && <Countdown targetDate={item.endDate} onComplete={() => window.location.reload()} />}
                    {status === 'ended' && <Typography color="text.secondary">活动已结束</Typography>}
                    </Box>
                </CardContent>

                <CardActions sx={{ p: "8px 16px 16px", flexShrink: 0 }}>
                    <Button
                    size="small"
                    variant="contained"
                    color={status === 'ongoing' ? 'error' : 'primary'}
                    fullWidth
                    component={RouterLink}
                    to={`/seckill/${item.goodsId}`}
                    disabled={status !== 'ongoing'}
                    >
                    {status === 'ongoing' ? '立即抢购' : status === 'upcoming' ? '即将开始' : '已结束'}
                    </Button>
                </CardActions>
                </Card>
            );
            })}
        </Box>
        </Container>
    );
}

export default SeckillListPage;