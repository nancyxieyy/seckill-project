import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../api';
import Countdown from '../components/Countdown';
import { Container, Typography, Button, Box, CircularProgress, Card, Grid, CardMedia, CardContent } from '@mui/material';

function SeckillGoodsDetailPage() {
    // 从URL中获取商品ID，例如 /seckill/1，这里的 goodsId 就是 1
    const { goodsId } = useParams(); 

    const [seckillGoods, setSeckillGoods] = useState(null);
    const [goodsDetail, setGoodsDetail] = useState(null);
    const [seckillStatus, setSeckillStatus] = useState({
        status: -1, // -1:加载中, 0:未开始, 1:进行中, 2:已结束
        remainSeconds: 0
    });
    const [error, setError] = useState('');
    const [seckillResult, setSeckillResult] = useState('');

    const updateSeckillStatus = () => {
        if (!seckillGoods) return;
        const startTime = new Date(seckillGoods.startDate).getTime();
        const endTime = new Date(seckillGoods.endDate).getTime();
        const now = new Date().getTime();

        if (now < startTime) setSeckillStatus(0);
        else if (now > endTime) setSeckillStatus(2);
        else setSeckillStatus(1);
    };

    useEffect(() => {
        if (!goodsId) return;

        // 同时获取秒杀信息和普通商品信息
        const fetchDetails = async () => {
            try {
                // 1. 获取秒杀活动信息
                const seckillRes = await apiClient.get(`/seckill-goods/goods/${goodsId}`);
                setSeckillGoods(seckillRes.data);

                // 2. 获取普通商品信息（名称、图片等）
                const goodsRes = await apiClient.get(`/goods/id/${goodsId}`);
                setGoodsDetail(goodsRes.data);
            } catch (err) {
                console.error("获取商品详情失败!", err);
                setError("商品信息加载失败");
            }
        };
        fetchDetails();
    }, [goodsId]);

    // 处理倒计时的 useEffect
    useEffect(() => {
        updateSeckillStatus();
    }, [seckillGoods]);
    
    // 点击秒杀按钮的处理函数
    const handleDoSeckill = () => {
        setSeckillResult('请求发送中...');
        apiClient.post('/seckill/do_seckill', { goodsId: goodsId })
            .then(response => {
                setSeckillResult(response.data.data); // 显示后端返回的“排队中”信息
                // 此处可以启动轮询查单
            })
            .catch(err => {
                console.error("秒杀失败!", err);
                setSeckillResult("秒杀失败: " + (err.response ? err.response.data.message : err.message));
            });
    };

    if (error) return <Typography color="error">{error}</Typography>;
    if (!seckillGoods || !goodsDetail) return <CircularProgress />;

    return (
        <Container>
            <Card>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CardMedia component="img" image={goodsDetail.goodsImg} alt={goodsDetail.goodsName} sx={{ width: '100%', objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardContent>
                            <Typography variant="h4" component="h1">{goodsDetail.goodsName}</Typography>
                            <Typography variant="h4" color="error" sx={{ fontWeight: 'bold' }}>秒杀价: ${seckillGoods.seckillPrice}</Typography>

                            <Box sx={{ my: 2, p: 2, border: '1px dashed grey' }}>
                                {seckillStatus === 0 && <Countdown targetDate={seckillGoods.startDate} onComplete={updateSeckillStatus} />}
                                {seckillStatus === 1 && <Countdown targetDate={seckillGoods.endDate} onComplete={updateSeckillStatus} />}
                                {seckillStatus === 2 && <Typography variant="h5" color="text.secondary">秒杀已结束</Typography>}
                            </Box>

                            <Button variant="contained" color="error" size="large" fullWidth onClick={handleDoSeckill} disabled={seckillStatus !== 1}>
                                立即秒杀
                            </Button>
                            {seckillResult && <Typography sx={{ mt: 2 }}>{seckillResult}</Typography>}
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
}

export default SeckillGoodsDetailPage;