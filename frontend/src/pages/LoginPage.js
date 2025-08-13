import React, { useState } from "react";
import axios from "axios";

// 简单的CSS样式
const styles = {
    container: {
        width: '300px',
        margin: '100px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        textAlign: 'center'
    },
    input: {
        width: '90%',
        padding: '10px',
        margin: '10px 0',
    },
    button: {
        padding: '10px 20px',
        margin: '5px',
        cursor: 'pointer'
    }
};

function LoginPage() {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    // 注册
    const handleRegister = () => {
        axios.post('http://localhost:8080/api/users/register', {
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
        axios.post('http://localhost:8080/api/users/login', {
            nickname,
            password
        }).then(result => {
            alert('登录成功：' + result.data.data);
            // 成功后处理 JWT Token
        }).catch(error => {
            console.error('登录失败' + error);
            alert('登录失败：' + (error.result ? error.result.data.message : error.message));
        });
    };

    return (
        <div style={styles.container}>
            <h2>用户登录/注册</h2>
            <div>
            <input
                type="text"
                placeholder="请输入昵称"
                style={styles.input}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
            />
            </div>
            <div>
                <input
                type="password"
                placeholder="请输入密码"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button style={styles.button} onClick={handleLogin}>登录</button>
                <button style={styles.button} onClick={handleRegister}>注册</button>
            </div>
        </div>
    );
}

export default LoginPage;