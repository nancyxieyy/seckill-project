import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import apiClient from '../api';
import Countdown from '../components/Countdown';

import { 
    Container, Card, Box, Typography, Button, Divider, Breadcrumbs, Link, CircularProgress
} from '@mui/material';

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
    <Container sx={{ py: 4 }}>
        {/* 面包屑导航 */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
            <Link component={RouterLink} underline="hover" color="inherit" to="/goods">
            All Products
            </Link>
            <Link component={RouterLink} underline="hover" color="inherit" to="/seckill">
            Seckill Activities
            </Link>
            <Typography
            color="text.primary"
            sx={{
                maxWidth: { xs: '60vw', md: '40vw' },   // 长标题不撑破
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}
            title={goodsDetail.goodsName}
            >
            {goodsDetail.goodsName}
            </Typography>
        </Breadcrumbs>

        <Card sx={{ p: { xs: 2, md: 4 } }}>
        {/* 左右两列：md 以上并排，小屏上下 */}
        <Box
            sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '520px 1fr' },
            gap: { xs: 3, md: 5 },
            alignItems: 'start',
            }}
        >
            {/* 左：统一尺寸的图片画布（完整显示、居中、不裁切） */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
                sx={{
                width: { xs: 300, md: 520 },
                aspectRatio: { xs: '4 / 5', md: '4 / 3' },
                bgcolor: '#f5f5f5',
                borderRadius: 2,
                p: 2,
                display: 'grid',
                placeItems: 'center',
                }}
            >
                <Box
                component="img"
                src={goodsDetail.goodsImg}
                alt={goodsDetail.goodsName}
                sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    display: 'block',
                }}
                />
            </Box>
            </Box>

            {/* 右：标题/副标题/描述 + 价格 + 倒计时 + 立即秒杀 */}
            <Box sx={{ minWidth: 0, display: 'flex', flexDirection: 'column' }}>
            {/* 标题：两行省略 + 固定占位 */}
            <Typography
                variant="h5"
                component="h1"
                gutterBottom
                sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: 'break-word',
                overflowWrap: 'anywhere',
                hyphens: 'auto',
                lineHeight: 1.3,
                minHeight: 48,
                }}
                title={goodsDetail.goodsName}
            >
                {goodsDetail.goodsName}
            </Typography>

            {/* 副标题：两行省略 */}
            <Typography
                variant="body2"
                color="text.secondary"
                paragraph
                sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: 'break-word',
                overflowWrap: 'anywhere',
                hyphens: 'auto',
                minHeight: 40,
                mb: 1,
                }}
                title={goodsDetail.goodsTitle}
            >
                {goodsDetail.goodsTitle}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* 商品详情：固定展示高度，多出省略（和普通详情页一致） */}
            <Typography
                variant="body1"
                sx={{
                flexGrow: 1,
                display: '-webkit-box',
                WebkitLineClamp: 6,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: 'break-word',
                overflowWrap: 'anywhere',
                hyphens: 'auto',
                minHeight: 132,
                }}
                title={goodsDetail.goodsDetail}
            >
                {goodsDetail.goodsDetail}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* 价格区：秒杀价 + 原价（划线） */}
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'error.main' }}>
                秒杀价：${Number(seckillGoods.seckillPrice).toFixed(2)}
                </Typography>
                <Typography
                variant="h6"
                color="text.disabled"
                sx={{ textDecoration: 'line-through' }}
                >
                原价：${Number(goodsDetail.goodsPrice).toFixed(2)}
                </Typography>
            </Box>

            {/* 倒计时：更小的虚线框 + 居中 */}
            <Box
            sx={{
                my: 2,
                px: { xs: 2, md: 2.5 },           // 内边距更小
                py: { xs: 1.5, md: 2 },
                border: '1.5px dashed',           // 虚线更细
                borderColor: 'grey.400',
                borderRadius: 1.5,
                position: 'relative',
                minHeight: { xs: 72, md: 84 },     // 框的高度更小
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '100%', md: '88%' },  // md 起占右侧列约 88%
                maxWidth: 640,                     // 上限，避免太长
                alignSelf: 'flex-start',           // 盒子靠左，不居中占位
            }}
            >
            {(seckillStatus === 0 || seckillStatus === 1) && (
                <Typography
                variant="subtitle2"
                sx={{
                    position: 'absolute',
                    top: { xs: 8, md: 10 },
                    left: { xs: 10, md: 12 },
                    fontWeight: 600,
                }}
                >
                {seckillStatus === 0 ? '距开始：' : '距结束：'}
                </Typography>
            )}

            {(seckillStatus === 0 || seckillStatus === 1) && (
                <Box
                sx={{
                    transform: { xs: 'scale(1.15)', md: 'scale(1.25)' }, // 想再大就调这里
                    transformOrigin: 'center',
                }}
                >
                <Countdown
                    targetDate={seckillStatus === 0 ? seckillGoods.startDate : seckillGoods.endDate}
                    onComplete={updateSeckillStatus}
                />
                </Box>
            )}

            {seckillStatus === 2 && (
                <Typography variant="h6" color="text.secondary">秒杀已结束</Typography>
            )}
            </Box>

            {/* 行为按钮：立即秒杀 */}
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                <Button
                variant="contained"
                color="error"
                size="large"
                onClick={handleDoSeckill}
                disabled={seckillStatus !== 1}
                sx={{ px: 3, py: 1.2 }}
                >
                立即秒杀
                </Button>
            </Box>

            {seckillResult && <Typography sx={{ mt: 2 }}>{seckillResult}</Typography>}
            </Box>
        </Box>
        </Card>
    </Container>
);

}

export default SeckillGoodsDetailPage;