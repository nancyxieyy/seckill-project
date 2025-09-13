import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import GoodsListPage from './pages/GoodsListPage';
import CartPage from './pages/CartPage';
import SeckillGoodsDetailPage from './pages/SeckillGoodsDetailPage';
import SeckillListPage from './pages/SeckillListPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/goods" element={<GoodsListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/seckill" element={<SeckillListPage />} />
          <Route path="/seckill/:goodsId" element={<SeckillGoodsDetailPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;