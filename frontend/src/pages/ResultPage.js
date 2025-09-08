import React from "react";
import { useLocation } from "react-router-dom";

function ResultPage() {
    // useLocation获取URL中的查询参数
    const location = useLocation();

    // 占位
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>秒杀结果</h1>
            <p>这里将显示您的秒杀结果。</p>
            <p>（例如：成功抢到订单XXX，或者很遗憾，秒杀失败）</p>
            <p>（我们将在下一周实现轮询查单功能来动态更新此页面）</p>
        </div>
    );
}

export default ResultPage;