import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, suffix = '', label, icon }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [end, duration]);

  return (
    <div ref={elementRef} className="flex flex-col items-center p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-cyan-400 dark:hover:border-neon-cyan/30 transition-all duration-300 group shadow-md dark:shadow-none">
      <div className="mb-4 text-cyan-600 dark:text-neon-cyan p-3 bg-cyan-50 dark:bg-neon-cyan/10 rounded-full group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-4xl font-bold font-tech text-slate-900 dark:text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider text-center">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;