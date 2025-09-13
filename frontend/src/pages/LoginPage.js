import React, { useState } from "react";
import apiClient from "../api";

// 引入 MUI 组件
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';

// // 简单的CSS样式
// const styles = {
//     container: {
//         width: '300px',
//         margin: '100px auto',
//         padding: '20px',
//         border: '1px solid #ccc',
//         borderRadius: '5px',
//         textAlign: 'center'
//     },
//     input: {
//         width: '90%',
//         padding: '10px',
//         margin: '10px 0',
//     },
//     button: {
//         padding: '10px 20px',
//         margin: '5px',
//         cursor: 'pointer'
//     }
// };

function LoginPage() {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    // 注册
    const handleRegister = () => {
        apiClient.post('http://localhost:8080/api/users/register', {
            nickname,
            password
        }).then(result => {
            console.log(result);
            alert('注册成功', result.data.data);
        }).catch(error => {
            console.error('注册失败', error);
            alert('注册失败：' + (error.result ? error.result.data.message : error.message));
        });
    };

    // 登录
    const handleLogin = () => {
        apiClient.post('http://localhost:8080/api/users/login', {
            nickname,
            password
        }).then(result => {
            // 处理 JWT Token
            const token = result.data.data;
            if(token) {
                // 1. 将Token存储到localStorage
                localStorage.setItem('jwtToken', token);
                alert('登录成功');
                // 2. 成功后跳转商品列表
                window.location.href = '/goods';
            } else {
                alert('登录失败: 不能获取到Token');
            }
        }).catch(error => {
            console.error('登录失败' + error);
            alert('登录失败：' + (error.result ? error.result.data.message : error.message));
        });
    };

    const handleGoogleLogin = () => {
        alert('此功能正在开发中！');
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                登录 / 注册
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nickname"
                    label="用户昵称"
                    name="nickname"
                    autoFocus
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="密码"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 1 }}
                    onClick={handleLogin}
                >
                    登 录
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                    onClick={handleRegister}
                >
                    注 册
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    onClick={handleGoogleLogin}
                >
                    使用 Google 账号登录
                </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default LoginPage;