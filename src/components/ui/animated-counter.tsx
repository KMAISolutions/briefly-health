import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}
export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  prefix = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  useEffect(() => {
    if (inView) {
      let startTime: number;
      let startValue = 0;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        setCount(currentCount);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);
  return <span ref={ref} className="font-bold text-3xl md:text-4xl text-gray-50">
      {prefix}{count.toLocaleString()}{suffix}
    </span>;
}