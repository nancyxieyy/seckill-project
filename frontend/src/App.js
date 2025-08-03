import React, { useState, useEffect, use } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // 请求后端的 /api/hello 接口
    axios.get('http://localhost:8080/api/hello').then(response => {
      // 成功后，返回的数据设置到message
      setMessage(response.data.message);
    })
    .catch(error => {
      // 失败后宣誓错误信息
      console.error('Error fetching data: ', error);
      setMessage('Failed to load message from backend.')
    });
  }, []); // 空数组表示effect只在组件第一次加载时运行一次

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{ message }</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
