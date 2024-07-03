import React, { useState, useEffect, useRef } from 'react';
import useOnScreen from './useOnScreen'; // Đường dẫn của bạn có thể khác

const Statistic = ({ endValue }) => {
    const [count, setCount] = useState(0);
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 1000; 
        const increment = endValue / (duration / 10);

        const interval = setInterval(() => {
            start += increment;
            if (start >= endValue) {
                clearInterval(interval);
                start = endValue;
            }
            setCount(Math.floor(start));
        }, 10);

        return () => clearInterval(interval);
    }, [isVisible, endValue]);

    return <span ref={ref} className="counter statcounter">{count}</span>;
};

export default Statistic;