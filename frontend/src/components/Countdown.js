import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

function Countdown({ targetDate, onComplete }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                '天': Math.floor(difference / (1000 * 60 * 60 * 24)),
                '小时': Math.floor((difference / (1000 * 60 * 60)) % 24),
                '分钟': Math.floor((difference / 1000 / 60) % 60),
                '秒': Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);
            if (Object.keys(newTimeLeft).length === 0) {
                onComplete(); // 倒计时结束时，调用父组件传来的回调函数
            }
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval] && interval !== 'seconds' && interval !== 'minutes') {
            return;
        }
        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <Typography variant="h5">
            {timerComponents.length ? timerComponents : <span>时间到!</span>}
        </Typography>
    );
}

export default Countdown;