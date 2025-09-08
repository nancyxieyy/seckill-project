import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // 1. 引入 useParams 来获取URL中的ID
import apiClient from '../api';

function SeckillGoodsDetailPage() {
    // 从URL中获取商品ID
    const { goodsId } = useParams();

    const [goodsDetail, setGoodsDetail] = useState(null);
    const [seckillStatus, setSeckillStatus] = useState({
        status: -1, // -1:加载中, 0: 秒杀未开始, 1: 秒杀进行中, 2: 秒杀已结束
        remainSeconds: 0
    })
    const [error, setError] = useState('');

    // 用来管理秒杀请求的结果
    // '等待秒杀', '排队中...', '秒杀成功', '秒杀失败'
    const [seckillResult, setSeckillResult] = useState('等待秒杀');

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
        setSeckillResult('请求发送中...');
        apiClient.post('/seckill/do_seckill', { goodsId: goodsId }).then(result => {
            // 后端返回“排队中”，我们开始轮询
            setSeckillResult('排队中...');
            startPolling(); // 调用开始轮询的函数
        }).catch(error => {
            console.error("秒杀失败!", error);
            setSeckillResult("秒杀失败: " + (error.response? error.response.data.message : error.message));
        });
    };

    // 轮询函数
    const startPolling = () => {
        let pollCount = 0;
        const maxPolls = 10; // 最多轮询10次

        const pollInterval = setInterval(() => {
            apiClient.get(`/seckill/result/${goodsId}`).then(result => {
                pollCount++;
                const res = result.data.data;
                if(res > 0) {
                    // 成功
                    clearInterval(pollInterval);
                    setSeckillResult(`秒杀成功! 订单ID: ${res}`);
                } else if(res < 0) {
                    // 秒杀失败
                    clearInterval(pollInterval);
                    setSeckillResult('秒杀失败');
                } else {
                    // 继续轮询
                    setSeckillResult(`排队中... (第 ${pollCount} 次查询)`);
                    if(pollCount >= maxPolls) {
                        clearInterval(pollInterval);
                        setSeckillResult('秒杀请求超时，请稍后再试');
                    }
                }
            }).catch(error => {
                clearInterval(pollInterval);
                console.error("轮询失败!", error);
                setSeckillResult('查询结果失败');
            });
        }, 1500);
    }

    if(error) {
        return <div>{error}</div>;
    }

    if(!goodsDetail) {
        return <div>加载中...</div>;
    }

    return (
        <div>
            <h1>秒杀商品详情</h1>
            {/* ... 其他商品信息 ... */}
            <p>秒杀价格: ￥{goodsDetail?.seckillPrice}</p>
            <p>库存: {goodsDetail?.stockCount}</p>
            
            <div>
                {seckillStatus.status === 0 && <span>秒杀倒计时: {seckillStatus.remainSeconds} 秒</span>}
                {seckillStatus.status === 1 && <span>秒杀进行中</span>}
                {seckillStatus.status === 2 && <span>秒杀已结束</span>}
            </div>
            
            <button 
                onClick={handleDoSeckill}
                disabled={seckillStatus.status !== 1 || seckillResult !== '等待秒杀'}
            >
                {seckillResult === '等待秒杀' ? '立即秒杀' : seckillResult}
            </button>
        </div>
    );
}

export default SeckillGoodsDetailPage;