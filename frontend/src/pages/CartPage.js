import React, {useState, useEffect} from "react";
import apiClient from "../api";

function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // 加载组件时，获取用户购物车
        apiClient.get('/cart').then(result => {
            setCartItems(result.data.data);
        }).catch(error => {
            console.error("获取购物车失败！", error);
        });
    }, []);

    return(
        <div>
            <h1>我的购物车</h1>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            商品ID: {item.goodsId}, 数量: {item.quantity}
                        </li>
                    ))}
                </ul>
            ): (
                <p>购物车是空的</p>
            )}
        </div>
    );
}

export default CartPage;