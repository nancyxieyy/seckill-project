import React, {useState, useEffect} from "react";
import apiClient from "../api";
import { useParams, Link as RouterLink } from 'react-router-dom';

// 引入MUI组件
import { 
    Container, Grid, Box, Typography, Button, CircularProgress, Alert, Breadcrumbs, Link, Divider
} from '@mui/material';

function GoodsDetailPage() {
    // 1. 从URL中获取商品ID
    const { goodsId } = useParams();

    const [goods, setGoods] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    useEffect(() => {
        if (!goodsId) return;
        
        setLoading(true);
        // 2. 调用后端API获取商品详情
        apiClient.get(`/goods/id/${goodsId}`).then(result => {
            setGoods(result.data);
            setError('');
        }).catch(error => {
            console.error("获取商品详情失败！", error);
            setError("商品信息加载失败");
        }).finally(() => {
            setLoading(false);
        });
    }, [goodsId]);

    const handleAddToCart = () => {
        apiClient.post('/cart', {goodsId:goodsId, quantity:1}).then(result => {
            alert('添加成功');
        }).catch(error => {
            if (error.response && error.response.status === 401) {
                alert('请先登录再操作！');
                window.location.href = '/';
            } else {
                alert('添加失败: ' + (error.response ? error.response.data.message : '请稍后再试'));
            }
            console.error("添加到购物车失败！", error);
        });
    };

    if(loading) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                    <CircularProgress />
                </Container>
        );
    }

    if(error) {
        return <Container><Alert severity="error">{error}</Alert></Container>;
    }

    if(!goods) {
            return <Container><Typography>未找到商品。</Typography></Container>;
    }

    return (
    <Container sx={{ py: 4 }}>
        {/* 面包屑导航 */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
            <Link component={RouterLink} underline="hover" color="inherit" to="/goods">
                All Products
            </Link>
            <Typography color="text.primary">{goods.goodsName}</Typography>
        </Breadcrumbs>

        {/* 两列布局：md 以上左右并排；小屏上下堆叠 */}
        <Box
        sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '640px 1fr' },
            gap: { xs: 3, md: 5 },
            alignItems: 'start',
        }}
        >
            {/* 左：统一尺寸的图片画布 */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
                sx={{
                width: { xs: 280, md: 480 },   // ✅ 画布整体变小
                aspectRatio: { xs: '4 / 5', md: '4 / 3' }, // ✅ 更贴合商品图的比例（不想太“高”的话就都用 '4 / 3'）
                bgcolor: '#f5f5f5',
                borderRadius: 2,
                p: 2,
                display: 'grid',
                placeItems: 'center',          // ✅ 水平垂直居中
                // 不需要 overflow:hidden；我们不裁切
                }}
            >
                <Box
                component="img"
                src={goods.goodsImg}
                alt={goods.goodsName}
                sx={{
                    maxWidth: '100%',            // ✅ 保证完整显示
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',        // ✅ 不裁切，完整可见
                    objectPosition: 'center',
                    display: 'block',
                }}
                />
            </Box>
            </Box>


            {/* 右：文字区 + 价格 + 按钮行 */}
            <Box sx={{ minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                {/* 标题（两行省略，固定占位） */}
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
                    minHeight: 2 * 24,
                }}
                title={goods.goodsName}
                >
                {goods.goodsName}
                </Typography>

                {/* 副标题（两行省略） */}
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
                    minHeight: 2 * 20,
                    mb: 1,
                }}
                title={goods.goodsTitle}
                >
                {goods.goodsTitle}
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/* 描述（固定高度，超出省略） */}
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
                    minHeight: 6 * 22,
                }}
                title={goods.goodsDetail}
                >
                {goods.goodsDetail}
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/* 价格一行 */}
                <Typography variant="h4" component="p" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                ${goods.goodsPrice.toFixed(2)}
                </Typography>

                {/* 按钮独占一行：左 Buy now（更浅），右 加入购物车 */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                    size="large"
                    onClick={() => {/* TODO: 跳转下单或快速结算 */}}
                    sx={{
                    px: 3, py: 1.2,
                    bgcolor: 'primary.light',              // ← 更浅的主色
                    color: 'primary.contrastText',
                    '&:hover': { bgcolor: 'primary.main' },
                    }}
                >
                    Buy now
                </Button>

                <Button
                    variant="contained"
                    size="large"
                    onClick={handleAddToCart}
                    sx={{ px: 3, py: 1.2, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
                >
                    Add to Cart
                </Button>
                </Box>
            </Box>
        </Box>
    </Container>
);
}

export default GoodsDetailPage;