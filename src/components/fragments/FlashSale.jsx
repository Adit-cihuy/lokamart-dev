import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        // Convert initial time to Date object
        const targetDate = new Date(initialTime).getTime();

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                setIsRunning(false);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            });
        };

        if (isRunning) {
            calculateTimeLeft(); // Initial calculation
            const timer = setInterval(calculateTimeLeft, 1000);
            return () => clearInterval(timer);
        }
    }, [initialTime, isRunning]);

    // Format number to always show two digits
    const formatNumber = (num) => String(num).padStart(2, '0');

    // Individual time unit component
    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="text-4xl font-bold font-mono bg-gray-100 px-4 py-2 rounded-lg">
                {formatNumber(value)}
            </div>
            <span className="text-sm text-gray-600 mt-1">{label}</span>
        </div>
    );

    // Separator component
    const Separator = () => (
        <div className="text-4xl font-bold text-red-500 mx-2">:</div>
    );

    return (
        <div className="flex items-center justify-center space-x-2 p-4">
            <TimeUnit value={timeLeft.days} label="Days" />
            <Separator />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <Separator />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <Separator />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    );
};

// Example usage with configuration options
const CountdownApp = () => {
    // Set target date 3 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(23, 59, 59);

    return (
        <div>
            <CountdownTimer initialTime={targetDate} />
        </div>
    );
};

export default CountdownApp;