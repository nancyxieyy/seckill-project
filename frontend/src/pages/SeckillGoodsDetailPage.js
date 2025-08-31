import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // 1. 引入 useParams 来获取URL中的ID
import apiClient from '../api';

function SeckillGoodsDetailPage() {
    // 从URL中获取商品ID
    const { goodsId } = useParams();

    const [goodsDetail, setGoodsDetail] = useState(null);
    const [seckillStatus, setSeckillStatus] = useState({
        status: 0, // 0: 秒杀未开始, 1: 秒杀进行中, 2: 秒杀已结束
        remainSeconds: 0
    })
    const [error, setError] = useState('');

    useEffect(() => {
        if(!goodsId) return;

        // 获取秒杀商品详情
        apiClient.get(`/seckill-goods/${goodsId}`)
            .then(result => {
                setGoodsDetail(result.data);
                // 计算秒杀状态和倒计时
                const startTime = new Date(result.data.startDate).getTime();
                const endTime = new Date(result.data.endDate).getTime();
                const now = new Date().getTime();

                if(now < startTime) {
                    // 秒杀未开始
                    setSeckillStatus({
                        status: 0,
                        remainSeconds: Math.round((startTime - now) / 1000)
                    });
                } else if(now > endTime) {
                    // 秒杀已结束
                    setSeckillStatus({
                        status: 2,
                        remainSeconds: 0
                    });
                } else {
                    // 秒杀进行中
                    setSeckillStatus({
                        status: 1,
                        remainSeconds: 0
                    });
                }
            }).catch(error => {
                console.error("获取秒杀商品详情失败！", error);
                setError("商品信息加载失败");
            });
    }, [goodsId]);

    // 处理倒计时的useEffect
    useEffect(() => {
        if(seckillStatus.status === 0 && seckillStatus.remainSeconds > 0) {
            const timer = setInterval(() => {
                seckillStatus(prevStatus => {
                    const newSeconds = prevStatus.remainSeconds - 1;
                    if(newSeconds <= 0) {
                        clearInterval(timer);
                        // 倒计时结束，进入秒杀进行中状态
                        return { status: 1, remainSeconds: 0 };
                    }
                    return { ...prevStatus, remainSeconds: newSeconds };
                });
            }, 1000);
            // 组件卸载时清除定时器，防止内存泄漏
            return () => clearInterval(timer);
        }
    }, [seckillStatus]);

    // 点击秒杀按钮的处理函数
    const handleDoSeckill = () => {
        apiClient.post('/seckill/do_seckill', { goodsId: goodsId }).then(result => {
            alert('秒杀成功! 订单ID: ' + result.data.data.id);
        }).catch(error => {
            console.error("秒杀失败!", error);
            alert('秒杀失败: ' + (error.response ? error.response.data.message : error.message));
        });
    };

    if(error) {
        return <div>{error}</div>;
    }

    if(!goodsDetail) {
        return <div>加载中...</div>;
    }

    return (
        <div>
            <h1>秒杀商品详情</h1>
            {/* 你可以加入更多商品信息，比如 goods.goodsName 等 */}
            <p>秒杀价格: ￥{goodsDetail.seckillPrice}</p>
            <p>库存: {goodsDetail.stockCount}</p>
            
            <div>
                {seckillStatus.status === 0 && <span>秒杀倒计时: {seckillStatus.remainSeconds} 秒</span>}
                {seckillStatus.status === 1 && <span>秒杀进行中</span>}
                {seckillStatus.status === 2 && <span>秒杀已结束</span>}
            </div>
            
            <button 
                onClick={handleDoSeckill}
                disabled={seckillStatus.status !== 1} // 只有在“进行中”状态才能点击
            >
                立即秒杀
            </button>
        </div>
    );
}

export default SeckillGoodsDetailPage;