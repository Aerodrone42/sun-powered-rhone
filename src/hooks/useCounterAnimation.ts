import { useEffect, useState } from 'react';

interface UseCounterAnimationOptions {
  end: number;
  duration?: number;
  decimals?: number;
  start?: number;
}

export const useCounterAnimation = ({
  end,
  duration = 2000,
  decimals = 0,
  start = 0,
}: UseCounterAnimationOptions) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (ease-out)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = start + (end - start) * easeOutQuart;
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return decimals > 0 ? count.toFixed(decimals) : Math.floor(count);
};
