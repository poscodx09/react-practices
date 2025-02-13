import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {

    const [ticks, setTicks] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date());

    const getCurrentTime = () => {
        const now = new Date();

        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
        }
    };

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return () => {
            console.log('Interval');
            clearInterval(IntervalId);
        }
    }, []);

    useEffect(() => {
        setTicks(ticks+1);
    }, [currentTime]);

    return (
        <Clock
            title={`ex04: Clock Component II: ${ticks}`}
            hours={currentTime.hours}
            minutes={currentTime.minutes}
            seconds={currentTime.seconds} />
    );
}