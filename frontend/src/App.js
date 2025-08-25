import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import GoodsListPage from './pages/GoodsListPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
        <div>
          <nav>
            <Link to="/" style={{margin: '10px'}}>登录</Link>
            <Link to="/goods" style={{margin: '10px'}}>商品列表</Link>
            <Link to="/cart" style={{margin: '10px'}}>我的购物车</Link>
          </nav>
          <hr />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/goods" element={<GoodsListPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
