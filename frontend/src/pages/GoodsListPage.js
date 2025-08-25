import React, {useState, useEffect} from "react";
import apiClient from "../api";

function GoodsListPage() {
    const [goods, setGoods] = useState([]);

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
            alert('添加失败: ' + error.response.data.message);
            console.error("添加到购物车失败！", error);
        });
    };

    return(
        <div>
            <h1>商品列表</h1>
            {goods.length > 0 ? (
                <ul>
                    {goods.map(item => (
                        <li key={item.id}>
                            {item.goodsName} - ￥{item.goodsPrice}
                            <button onClick={() => handleAddToCart(item.id)}>加入购物车</button>
                        </li>
                    ))}
                </ul>
            ):(
                <p>暂无商品</p>
            )}
        </div>
    );
}

export default GoodsListPage;