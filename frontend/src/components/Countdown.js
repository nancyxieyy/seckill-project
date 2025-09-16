import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';


function Countdown({ targetDate, onComplete, sx }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
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
                onComplete && onComplete(); // 倒计时结束时，调用父组件传来的回调函数
            }
        }, 1000);

        return () => clearTimeout(timer);
    });

    // 格式化数字，确保两位数显示
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    // 如果倒计时结束
    if (Object.keys(timeLeft).length === 0) {
        return (
            <Typography 
                variant="body1" 
                sx={{
                    color: '#d63031',
                    fontWeight: 'bold',
                    ...sx
                }}
            >
                时间到!
            </Typography>
        );
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
            {/* 天数 */}
            {timeLeft.days > 0 && (
                <>
                    <Box sx={{
                        backgroundColor: '#d63031',
                        color: 'white',
                        padding: '2px 4px',
                        borderRadius: '2px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        minWidth: '20px',
                        textAlign: 'center'
                    }}>
                        {formatTime(timeLeft.days)}
                    </Box>
                    <Typography variant="caption" sx={{ color: '#d63031', fontWeight: 'bold' }}>天</Typography>
                </>
            )}
            
            {/* 小时 */}
            <Box sx={{
                backgroundColor: '#d63031',
                color: 'white',
                padding: '2px 4px',
                borderRadius: '2px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                minWidth: '20px',
                textAlign: 'center'
            }}>
                {formatTime(timeLeft.hours)}
            </Box>
            <Typography variant="caption" sx={{ color: '#d63031', fontWeight: 'bold' }}>:</Typography>
            
            {/* 分钟 */}
            <Box sx={{
                backgroundColor: '#d63031',
                color: 'white',
                padding: '2px 4px',
                borderRadius: '2px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                minWidth: '20px',
                textAlign: 'center'
            }}>
                {formatTime(timeLeft.minutes)}
            </Box>
            <Typography variant="caption" sx={{ color: '#d63031', fontWeight: 'bold' }}>:</Typography>
            
            {/* 秒 */}
            <Box sx={{
                backgroundColor: '#d63031',
                color: 'white',
                padding: '2px 4px',
                borderRadius: '2px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                minWidth: '20px',
                textAlign: 'center'
            }}>
                {formatTime(timeLeft.seconds)}
            </Box>
        </Box>
    );
}

export default Countdown;