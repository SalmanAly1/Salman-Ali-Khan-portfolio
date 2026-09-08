import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      setIsFinished(true);
      return;
    }

    // Smooth, fast loading counter (completes in ~800-1000ms)
    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + Math.floor(Math.random() * 12) + 6;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              setIsFinished(true);
              onComplete();
            }, 500);
          }, 150);
          return 100;
        }
        return next;
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <div
      id="preloader"
      className={`fixed inset-0 z-[100] flex flex-col justify-between bg-[#111111] p-6 md:p-12 text-[#F2F0EA] transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex items-center justify-between border-b border-[#242422] pb-4">
        <span className="font-mono-code text-xs font-bold tracking-widest text-[#F2F0EA] uppercase">
          SALMAN ALI KHAN
        </span>
        <span className="font-mono-code text-xs text-[#84847f]">
          PORTFOLIO ARCHIVE / {new Date().getFullYear()}
        </span>
      </div>

      <div className="flex flex-col gap-4 max-w-xl mx-auto w-full">
        <div className="flex items-baseline justify-between">
          <span className="font-mono-code text-xs text-[#c7ff3d] uppercase tracking-wider">
            LOADING PORTFOLIO
          </span>
          <span className="font-editorial text-6xl md:text-8xl font-bold tracking-tight text-[#F2F0EA]">
            {count.toString().padStart(2, '0')}%
          </span>
        </div>

        <div className="w-full bg-[#242422] h-[2px] relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 bg-[#c7ff3d] transition-all duration-75"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[#242422] pt-4 font-mono-code text-xs text-[#84847f]">
        <span>HYDERABAD, PAKISTAN</span>
        <span>UI/UX DESIGN · REACT FRONTEND</span>
      </div>
    </div>
  );
}
