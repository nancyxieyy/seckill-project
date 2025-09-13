import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        window.location.href = '/';
    };

    return (
        <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
            <Typography variant="h6" component={RouterLink} to="/goods" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
            秒杀商城
            </Typography>
            <Button color="inherit" component={RouterLink} to="/goods">商品</Button>
            <Button color="inherit" component={RouterLink} to="/seckill">秒杀</Button>
            <IconButton color="inherit" component={RouterLink} to="/cart">
            <ShoppingCartIcon />
            </IconButton>
            <Button color="inherit" onClick={handleLogout}>登出</Button>
        </Toolbar>
        </AppBar>
    );
}

export default Header;