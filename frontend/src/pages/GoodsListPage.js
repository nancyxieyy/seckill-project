import React, {useState, useEffect} from "react";
import apiClient from "../api";
import { Link as RouterLink } from 'react-router-dom';
import SearchSortBar from "../components/SearchSortBar";

// 引入MUI组件
import { 
    Card, CardMedia, CardContent, Typography, CardActions, Button, Container,
    TextField, Box, FormControl, InputLabel, Select, MenuItem 
} from '@mui/material';

function GoodsListPage() {
    const [goods, setGoods] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [viewList, setViewList] = useState([]);

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

    return (
        <Container sx={{ py: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                All Products
            </Typography>

            <SearchSortBar
                items={goods}
                onChange={(list) => setViewList(list)}
            />

            {/* 使用 CSS Grid */}
            <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)', 
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)'
            },
            gap: 3,
            '& > *': {
                height: '450px' // 强制所有子元素等高
            }
            }}>
            {viewList.map(item => (
                <Card 
                key={item.id}
                sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    height: '450px', // 固定高度
                    overflow: 'hidden' // 防止溢出
                }}
                >
                {/* 图片区域 */}
                <RouterLink to={`/goods/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Box sx={{ 
                        height: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fafafa',
                        padding: 1,
                        flexShrink: 0 // 不允许压缩
                    }}>
                        <CardMedia
                        component="img"
                        sx={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain'
                        }}
                        image={item.goodsImg}
                        alt={item.goodsName}
                        />
                    </Box>
                </RouterLink>
                
                {/* 文字内容区 */}
                <RouterLink to={`/goods/${item.id}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1, display: 'flex' }}>
                    <CardContent sx={{ 
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '16px',
                        minHeight: 0, // 允许压缩
                        overflow: 'hidden'
                    }}>
                        
                        {/* 商品标题 */}
                        <Typography 
                        variant="h6" 
                        component="h2"
                        sx={{
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            lineHeight: '1.3',
                            marginBottom: 1,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontWeight: 500
                        }}
                        >
                        {item.goodsName}
                        </Typography>

                        {/* 商品描述 */}
                        <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                            fontSize: '0.8rem',
                            lineHeight: '1.3',
                            flex: 1,
                            // 强制换行
                            wordWrap: 'break-word',
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word',
                            whiteSpace: 'normal',
                            // 最多显示2行
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}
                        >
                        {item.goodsTitle}
                        </Typography>
                    </CardContent>
                </RouterLink>
                

                {/* 底部操作区 */}
                <CardActions sx={{ 
                    padding: '8px 16px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexShrink: 0 // 不允许压缩
                }}>
                    <Typography 
                    variant="h5" 
                    component="span"
                    sx={{ 
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: 'primary.main'
                    }}
                    >
                    ${item.goodsPrice}
                    </Typography>
                    <Button 
                    size="small" 
                    variant="contained"
                    sx={{ 
                        fontSize: '0.75rem',
                        padding: '4px 12px'
                    }}
                    onClick={() => handleAddToCart(item.id)}
                    >
                    Add to Cart
                    </Button>
                </CardActions>
                </Card>
            ))}
            </Box>
        </Container>
);
}

export default GoodsListPage;