import { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Target date: Preliminary Round - 4 May 2026
        const countdownDate = new Date("2026-05-04T00:00:00").getTime();

        const calculateTimeLeft = () => {
            const difference = countdownDate - new Date().getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="glass-effect rounded-2xl p-4 sm:p-6 md:p-8 min-w-[70px] sm:min-w-[90px] md:min-w-[110px] transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl md:text-6xl font-bold gradient-text">
                    {String(value).padStart(2, '0')}
                </div>
            </div>
            <div className="text-hackathon-coral text-xs sm:text-sm md:text-base font-semibold mt-2 uppercase tracking-wider">
                {label}
            </div>
        </div>
    );

    return (
        <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center flex-wrap">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    );
};

export default CountdownTimer;