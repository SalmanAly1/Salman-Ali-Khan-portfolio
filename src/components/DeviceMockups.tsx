import React from 'react';

interface BrowserMockupProps {
  url?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}

export function BrowserMockup({
  url = 'nexus-analytics.internal/command',
  title = 'Nexus Analytics · Intelligence Platform',
  children,
  className = '',
  tilt = false,
}: BrowserMockupProps) {
  return (
    <div
      className={`rounded-xl border border-[#d8d5cc] bg-[#111111] text-[#F2F0EA] shadow-2xl overflow-hidden transition-all duration-500 group ${
        tilt
          ? 'hover:[transform:rotateX(2deg)_rotateY(-2deg)_translateY(-4px)] [transform:perspective(1200px)]'
          : ''
      } ${className}`}
    >
      {/* Browser chrome header */}
      <div className="bg-[#1a1a1a] border-b border-[#2d2d2c] px-4 py-2.5 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3d3d3c] border border-[#4d4d4c] transition-colors group-hover:bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3d3d3c] border border-[#4d4d4c] transition-colors group-hover:bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3d3d3c] border border-[#4d4d4c] transition-colors group-hover:bg-[#27c93f]" />
          <span className="ml-3 hidden sm:inline-block font-mono-code text-[11px] text-[#8e8e88] truncate max-w-[200px]">
            {title}
          </span>
        </div>

        {/* Address bar */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#111111] border border-[#333333] rounded-md font-mono-code text-[10px] text-[#a0a09a] max-w-[280px] w-full mx-2 justify-center truncate">
          <span className="text-[#c7ff3d]">https://</span>
          <span className="truncate">{url}</span>
        </div>

        <div className="flex items-center gap-1.5 text-[#6f6f6a] font-mono-code text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff3d]" />
          <span className="hidden sm:inline">LIVE</span>
        </div>
      </div>

      {/* Screen viewport */}
      <div className="relative overflow-hidden bg-[#F2F0EA] text-[#111111]">
        {children}
      </div>
    </div>
  );
}

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  time?: string;
  battery?: string;
  tilt?: boolean;
}

export function PhoneMockup({
  children,
  className = '',
  time = '9:41',
  tilt = false,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[320px] sm:max-w-[340px] rounded-[44px] p-3 bg-gradient-to-b from-[#2a2a2a] via-[#1c1c1c] to-[#111111] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border-[3px] border-[#383838] transition-all duration-500 group ${
        tilt
          ? 'hover:[transform:rotateX(3deg)_rotateY(3deg)_translateY(-4px)] [transform:perspective(1200px)]'
          : ''
      } ${className}`}
    >
      {/* Outer antenna & button accents */}
      <div className="absolute -left-[5px] top-24 w-[3px] h-8 bg-[#3d3d3c] rounded-l" />
      <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-[#3d3d3c] rounded-l" />
      <div className="absolute -left-[5px] top-52 w-[3px] h-12 bg-[#3d3d3c] rounded-l" />
      <div className="absolute -right-[5px] top-28 w-[3px] h-16 bg-[#3d3d3c] rounded-r" />

      {/* Screen container */}
      <div className="relative rounded-[36px] overflow-hidden bg-[#F2F0EA] text-[#111111] border border-[#2d2d2c] aspect-[9/19] flex flex-col justify-between select-none">
        {/* Notch / Dynamic Island */}
        <div className="absolute top-2.5 inset-x-0 z-30 flex justify-between items-center px-6 pointer-events-none">
          <span className="font-mono-code text-[11px] font-bold text-[#111111] tracking-tight">
            {time}
          </span>
          <div className="w-24 h-5 bg-[#111111] rounded-full flex items-center justify-end px-2 gap-1.5 shadow-xs">
            <div className="w-2 h-2 rounded-full bg-[#1c1c1c] border border-[#333333]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#c7ff3d]/60 animate-pulse" />
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono-code font-bold text-[#111111]">
            <span>5G</span>
            <div className="w-4 h-2 border border-[#111111] rounded-[2px] p-[1px] flex items-center">
              <div className="w-full h-full bg-[#111111] rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Screen inner content */}
        <div className="pt-10 pb-6 h-full overflow-y-auto overflow-x-hidden flex flex-col">
          {children}
        </div>

        {/* Home indicator bar */}
        <div className="absolute bottom-2 inset-x-0 flex justify-center pointer-events-none z-30">
          <div className="w-28 h-1 bg-[#111111]/70 rounded-full" />
        </div>
      </div>
    </div>
  );
}
