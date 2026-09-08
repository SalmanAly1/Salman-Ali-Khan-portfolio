import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Volume2,
  Activity,
  GitPullRequest,
  CheckCircle2,
  Clock,
  ShoppingBag,
  Sliders,
  Check,
  ShieldCheck,
  ArrowRight,
  Maximize2,
} from 'lucide-react';
import { UiUxFigmaProject } from '../types';

/* ==========================================================================
   CAROUSEL CONTROLS BAR COMPONENT
   Horizontal scrollable screen indicator with drag / click support
   ========================================================================== */
interface CarouselNavProps {
  screens: UiUxFigmaProject['keyScreens'];
  activeIdx: number;
  onSelect: (idx: number) => void;
  onPrev: () => void;
  onNext: () => void;
  accentColor?: string;
  dark?: boolean;
}

export function CarouselNav({
  screens,
  activeIdx,
  onSelect,
  onPrev,
  onNext,
  accentColor = '#c7ff3d',
  dark = false,
}: CarouselNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`pt-4 border-t ${dark ? 'border-[#262836]' : 'border-[#d8d5cc]'} flex flex-wrap items-center justify-between gap-3 select-none`}>
      {/* Screen pills / buttons */}
      <div
        ref={containerRef}
        className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none max-w-full"
      >
        {screens.map((screen, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={screen.id}
              onClick={() => onSelect(idx)}
              className={`px-3 py-1.5 text-xs font-mono-code whitespace-nowrap transition-all duration-200 border cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? dark
                    ? 'bg-[#c7ff3d] text-[#111111] font-bold border-[#c7ff3d] shadow-sm'
                    : 'bg-[#111111] text-[#F2F0EA] font-bold border-[#111111] shadow-sm'
                  : dark
                  ? 'bg-[#12131a] text-[#8e8e98] border-[#2a2b38] hover:text-white hover:border-[#444658]'
                  : 'bg-[#ffffff] text-[#6f6f6a] border-[#d8d5cc] hover:text-[#111111] hover:border-[#888888]'
              }`}
            >
              <span className="text-[10px] opacity-75">0{idx + 1}</span>
              <span className="hidden sm:inline">
                {screen.screenBadge || screen.title.split(' ')[0]}
              </span>
              <span className="sm:hidden">{screen.title.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Prev / Next & Counter */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onPrev}
          aria-label="Previous screen"
          className={`w-8 h-8 rounded-none border flex items-center justify-center transition-colors cursor-pointer ${
            dark
              ? 'border-[#2a2b38] bg-[#12131a] text-[#d8d5cc] hover:bg-[#c7ff3d] hover:text-[#111111]'
              : 'border-[#111111] bg-[#ffffff] text-[#111111] hover:bg-[#111111] hover:text-white'
          }`}
        >
          <ChevronLeft size={15} />
        </button>
        <span
          className={`font-mono-code text-[11px] px-1 font-semibold ${
            dark ? 'text-[#8e8e98]' : 'text-[#6f6f6a]'
          }`}
        >
          {activeIdx + 1} / {screens.length}
        </span>
        <button
          onClick={onNext}
          aria-label="Next screen"
          className={`w-8 h-8 rounded-none border flex items-center justify-center transition-colors cursor-pointer ${
            dark
              ? 'border-[#2a2b38] bg-[#12131a] text-[#d8d5cc] hover:bg-[#c7ff3d] hover:text-[#111111]'
              : 'border-[#111111] bg-[#ffffff] text-[#111111] hover:bg-[#111111] hover:text-white'
          }`}
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}

/* ==========================================================================
   1. MOBILE APP SHOWCASE (AURA CIRCADIAN SLEEP)
   Realistic iPhone frames with physical buttons, dynamic island,
   multi-phone perspective stage, lifestyle photography, and realistic UI
   ========================================================================== */
export function MobileAppShowcase({
  project,
  activeScreenIdx,
  onScreenChange,
}: {
  project: UiUxFigmaProject;
  activeScreenIdx: number;
  onScreenChange: (idx: number) => void;
}) {
  const currentScreen = project.keyScreens[activeScreenIdx] || project.keyScreens[0];

  const handlePrev = () => {
    onScreenChange(activeScreenIdx > 0 ? activeScreenIdx - 1 : project.keyScreens.length - 1);
  };

  const handleNext = () => {
    onScreenChange(activeScreenIdx < project.keyScreens.length - 1 ? activeScreenIdx + 1 : 0);
  };

  return (
    <div className="space-y-6">
      {/* Visual Presentation Canvas */}
      <div className="relative rounded-xl border border-[#2a2b38] bg-gradient-to-b from-[#0c0d13] via-[#090a0f] to-[#06070a] p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#c7ff3d]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#3b82f6]/10 blur-3xl pointer-events-none" />

        {/* Top Header Badge */}
        <div className="flex items-center justify-between mb-8 border-b border-[#1f202c] pb-3 text-xs font-mono-code">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c7ff3d] animate-pulse" />
            <span className="text-[#c7ff3d] font-bold tracking-wider">iOS 18 NATIVE APPLICATION PROTOTYPE</span>
          </div>
          <span className="text-[#6f6f7c] hidden sm:inline">
            SCREEN 0{activeScreenIdx + 1} OF 0{project.keyScreens.length} · {currentScreen.screenBadge}
          </span>
        </div>

        {/* Multi-Device Perspective Stage */}
        <div className="relative flex items-center justify-center py-4 lg:py-6">
          {/* Left Companion Phone (Previous Screen in 3D Perspective) */}
          <div
            onClick={handlePrev}
            className="hidden md:block absolute -left-6 lg:left-4 z-10 w-[230px] lg:w-[250px] opacity-40 hover:opacity-75 transition-all duration-500 cursor-pointer transform -rotate-6 scale-90 hover:scale-95 [filter:drop-shadow(0_20px_30px_rgba(0,0,0,0.8))]"
            title="Click to view previous screen"
          >
            <div className="rounded-[40px] p-2.5 bg-gradient-to-b from-[#3a3b48] via-[#1a1b24] to-[#0e0f15] border border-[#484a5c] shadow-2xl">
              <div className="relative rounded-[32px] overflow-hidden bg-[#090a0f] aspect-[9/19.5] border border-[#2a2b38]">
                {/* Image preview */}
                {project.keyScreens[(activeScreenIdx - 1 + project.keyScreens.length) % project.keyScreens.length]?.imageUrl && (
                  <img
                    src={project.keyScreens[(activeScreenIdx - 1 + project.keyScreens.length) % project.keyScreens.length].imageUrl}
                    alt="Previous screen background"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/70 to-transparent" />
                <div className="absolute bottom-4 inset-x-3 text-center">
                  <span className="font-mono-code text-[10px] text-[#c7ff3d] uppercase tracking-wider block">
                    PREVIOUS SCREEN
                  </span>
                  <span className="font-editorial text-xs font-bold text-white truncate block">
                    {project.keyScreens[(activeScreenIdx - 1 + project.keyScreens.length) % project.keyScreens.length].title}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Main Active Physical iPhone */}
          <div className="relative z-20 w-full max-w-[320px] sm:max-w-[340px] transform transition-transform duration-500 hover:scale-[1.01]">
            {/* Phone Outer Chassis (Space Black Titanium) */}
            <div className="relative rounded-[48px] p-3 bg-gradient-to-b from-[#3d3e4e] via-[#20212b] to-[#12131c] border-2 border-[#525468] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.95)]">
              {/* Outer physical hardware buttons */}
              <div className="absolute -left-[5px] top-24 w-[3px] h-7 bg-[#4f5166] rounded-l" />
              <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-[#4f5166] rounded-l" />
              <div className="absolute -left-[5px] top-52 w-[3px] h-12 bg-[#4f5166] rounded-l" />
              <div className="absolute -right-[5px] top-32 w-[3px] h-16 bg-[#4f5166] rounded-r" />

              {/* OLED Screen Viewport */}
              <div className="relative rounded-[38px] overflow-hidden bg-[#090A0F] text-white aspect-[9/19.5] border border-[#2a2b38] flex flex-col justify-between select-none">
                {/* Realistic Background Imagery Layer with subtle overlay */}
                {currentScreen.imageUrl && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={currentScreen.imageUrl}
                      alt={currentScreen.title}
                      className="w-full h-full object-cover opacity-35 filter brightness-75 contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#090A0F]/60 via-[#090A0F]/80 to-[#090A0F]" />
                  </div>
                )}

                {/* iPhone Dynamic Island & Status Bar */}
                <div className="relative z-30 pt-3 px-6 pb-2 flex items-center justify-between font-mono-code text-[11px] text-white/90">
                  <span className="font-bold tracking-tight">07:24</span>
                  {/* Dynamic Island */}
                  <div className="w-24 h-5 bg-[#000000] rounded-full flex items-center justify-end px-2.5 gap-1.5 shadow-md border border-[#252525]">
                    <div className="w-2 h-2 rounded-full bg-[#1c1c1c]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c7ff3d] animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span>5G</span>
                    <div className="w-4 h-2 border border-white/80 rounded-[2px] p-[1px]">
                      <div className="w-full h-full bg-[#c7ff3d] rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Dynamic Screen Content Based on Active Index */}
                <div className="relative z-20 px-5 pt-3 flex-1 flex flex-col justify-between">
                  {activeScreenIdx === 0 && (
                    /* SCREEN 01: Home - Circadian Radial Dial */
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-mono-code text-[10px] text-[#c7ff3d] tracking-wider uppercase block">
                            CIRCADIAN PHASE · 07:24 AM
                          </span>
                          <h4 className="font-editorial text-xl font-bold tracking-tight">Morning Cortisol Rise</h4>
                        </div>
                        <span className="w-8 h-8 rounded-full bg-[#1E2235] border border-[#2a2b38] flex items-center justify-center font-mono-code text-xs font-bold text-[#c7ff3d]">
                          92
                        </span>
                      </div>

                      {/* Radial Circadian Clock Visualization */}
                      <div className="relative w-44 h-44 mx-auto my-2 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                          {/* Background Ring */}
                          <circle cx="50" cy="50" r="42" fill="none" stroke="#1E2235" strokeWidth="6" />
                          {/* Cortisol Morning Arc */}
                          <circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="#C7FF3D"
                            strokeWidth="6"
                            strokeDasharray="264"
                            strokeDashoffset="150"
                            strokeLinecap="round"
                          />
                          {/* Melatonin Evening Arc */}
                          <circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="#FFAA33"
                            strokeWidth="4"
                            strokeDasharray="264"
                            strokeDashoffset="210"
                            strokeLinecap="round"
                            opacity="0.6"
                          />
                        </svg>
                        <div className="absolute text-center">
                          <span className="font-mono-code text-[9px] text-[#8e8e98] uppercase block">Optimal Light</span>
                          <span className="font-editorial text-2xl font-bold text-[#C7FF3D]">38m</span>
                          <span className="font-mono-code text-[9px] text-white/80 block">Remaining</span>
                        </div>
                      </div>

                      {/* Actionable Morning Cards */}
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl bg-[#1E2235]/80 border border-[#2d324d] backdrop-blur-md flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-[#C7FF3D]" />
                            <div>
                              <div className="font-editorial text-xs font-bold text-white">Natural Sunlight Exposure</div>
                              <div className="font-mono-code text-[10px] text-[#8e8e98]">Step outside before 08:30 AM</div>
                            </div>
                          </div>
                          <span className="font-mono-code text-[10px] text-[#C7FF3D] font-bold">+14% Focus</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-[#1E2235]/60 border border-[#2d324d]/60 backdrop-blur-md flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-[#FFAA33]" />
                            <div>
                              <div className="font-editorial text-xs font-bold text-white">Caffeine Cutoff Window</div>
                              <div className="font-mono-code text-[10px] text-[#8e8e98]">Optimal boundary at 01:45 PM</div>
                            </div>
                          </div>
                          <span className="font-mono-code text-[10px] text-[#FFAA33]">6h 21m</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreenIdx === 1 && (
                    /* SCREEN 02: Sleep Architecture Breakdown */
                    <div className="space-y-4">
                      <div>
                        <span className="font-mono-code text-[10px] text-[#c7ff3d] tracking-wider uppercase block">
                          LAST NIGHT · 7H 42M RECORDED
                        </span>
                        <h4 className="font-editorial text-xl font-bold tracking-tight">Sleep Architecture</h4>
                      </div>

                      {/* Stage Metric Chips */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-lg bg-[#1E2235] border border-[#2d324d] text-center">
                          <div className="text-[9px] font-mono-code text-[#8e8e98]">DEEP SLEEP</div>
                          <div className="text-sm font-editorial font-bold text-[#c7ff3d]">1h 48m</div>
                          <div className="text-[9px] font-mono-code text-white/60">23% total</div>
                        </div>
                        <div className="p-2 rounded-lg bg-[#1E2235] border border-[#2d324d] text-center">
                          <div className="text-[9px] font-mono-code text-[#8e8e98]">REM STAGE</div>
                          <div className="text-sm font-editorial font-bold text-[#3b82f6]">2h 05m</div>
                          <div className="text-[9px] font-mono-code text-white/60">27% total</div>
                        </div>
                        <div className="p-2 rounded-lg bg-[#1E2235] border border-[#2d324d] text-center">
                          <div className="text-[9px] font-mono-code text-[#8e8e98]">LIGHT SLEEP</div>
                          <div className="text-sm font-editorial font-bold text-white">3h 49m</div>
                          <div className="text-[9px] font-mono-code text-white/60">50% total</div>
                        </div>
                      </div>

                      {/* Hypnogram Stage Graph Simulation */}
                      <div className="p-3 rounded-xl bg-[#1E2235]/70 border border-[#2d324d] space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono-code text-[#8e8e98]">
                          <span>HYPNOGRAM TIMELINE</span>
                          <span className="text-[#c7ff3d]">HRV 68ms (Stable)</span>
                        </div>
                        {/* Bar cycles */}
                        <div className="h-16 flex items-end gap-1 pt-2">
                          {[35, 60, 95, 80, 45, 90, 100, 70, 40, 85, 95, 60, 30, 80, 90, 50, 20].map((h, i) => (
                            <div
                              key={i}
                              className={`flex-1 rounded-t-xs transition-all ${
                                h > 75 ? 'bg-[#c7ff3d]' : h > 45 ? 'bg-[#3b82f6]' : 'bg-[#FFAA33]'
                              }`}
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between text-[8px] font-mono-code text-[#8e8e98]">
                          <span>11:30 PM</span>
                          <span>02:30 AM</span>
                          <span>05:15 AM</span>
                          <span>07:12 AM</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#000000]/60 border border-[#2a2b38] text-[10px] font-mono-code text-[#d8d5cc]">
                        <span className="text-[#c7ff3d] font-bold">Summary:</span> Deep restorative sleep was 18% above your rolling baseline, driven by consistent 10:30 PM wind-down.
                      </div>
                    </div>
                  )}

                  {activeScreenIdx === 2 && (
                    /* SCREEN 03: Acoustic Phase Synthesizer */
                    <div className="space-y-4">
                      <div>
                        <span className="font-mono-code text-[10px] text-[#c7ff3d] tracking-wider uppercase block">
                          AUDIO ENTRAINMENT · ACTIVE
                        </span>
                        <h4 className="font-editorial text-xl font-bold tracking-tight">Delta Acoustic Bath</h4>
                      </div>

                      {/* Soundwave Visualizer Circle */}
                      <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-tr from-[#1E2235] to-[#121422] border-2 border-[#c7ff3d]/40 flex items-center justify-center p-3 relative shadow-[0_0_30px_rgba(199,255,61,0.15)]">
                        <div className="absolute inset-0 rounded-full border border-[#c7ff3d]/20 animate-ping" />
                        <div className="flex items-center gap-1">
                          {[40, 70, 100, 60, 85, 45, 90, 35].map((h, i) => (
                            <div
                              key={i}
                              className="w-1.5 bg-[#c7ff3d] rounded-full animate-pulse"
                              style={{ height: `${h * 0.4}px`, animationDelay: `${i * 120}ms` }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="font-editorial text-sm font-bold text-white">432Hz Harmonic Frequency</div>
                        <div className="font-mono-code text-[10px] text-[#8e8e98]">Brown Noise · Theta-Delta Transition</div>
                      </div>

                      {/* Frequency Sliders */}
                      <div className="space-y-2 pt-1 font-mono-code text-[10px]">
                        <div className="flex items-center justify-between text-[#8e8e98]">
                          <span>Binaural Carrier (Delta)</span>
                          <span className="text-[#c7ff3d]">2.5 Hz</span>
                        </div>
                        <div className="h-1.5 bg-[#1E2235] rounded-full overflow-hidden">
                          <div className="w-2/3 h-full bg-[#c7ff3d] rounded-full" />
                        </div>
                      </div>

                      <button className="w-full py-2.5 bg-[#c7ff3d] text-[#090A0F] font-mono-code text-xs font-bold rounded-xl flex items-center justify-center gap-2">
                        <Volume2 size={14} />
                        <span>ENTRAINMENT PLAYING</span>
                      </button>
                    </div>
                  )}

                  {activeScreenIdx === 3 && (
                    /* SCREEN 04: Sleep Debt & Recovery Matrix */
                    <div className="space-y-4">
                      <div>
                        <span className="font-mono-code text-[10px] text-[#c7ff3d] tracking-wider uppercase block">
                          ROLLING 7-DAY DEFICIT
                        </span>
                        <h4 className="font-editorial text-xl font-bold tracking-tight">Recovery Telemetry</h4>
                      </div>

                      {/* Score card */}
                      <div className="p-3 rounded-xl bg-[#1E2235] border border-[#2d324d] flex items-center justify-between">
                        <div>
                          <span className="font-mono-code text-[10px] text-[#8e8e98] block">Net Sleep Deficit</span>
                          <span className="font-editorial text-2xl font-bold text-[#FFAA33]">-42m</span>
                        </div>
                        <span className="font-mono-code text-[10px] text-[#c7ff3d] px-2 py-1 bg-[#090a0f] rounded border border-[#2d324d]">
                          OPTIMAL RECOVERY
                        </span>
                      </div>

                      {/* 7-day bar comparison */}
                      <div className="space-y-1 font-mono-code text-[9px]">
                        <div className="flex justify-between text-[#8e8e98] mb-1">
                          <span>DAY</span>
                          <span>ACTUAL VS TARGET (8H)</span>
                        </div>
                        {[
                          { d: 'MON', h: '8h 12m', pct: 102, good: true },
                          { d: 'TUE', h: '7h 45m', pct: 96, good: true },
                          { d: 'WED', h: '6h 50m', pct: 85, good: false },
                          { d: 'THU', h: '7h 55m', pct: 98, good: true },
                          { d: 'FRI', h: '8h 20m', pct: 104, good: true },
                        ].map((row) => (
                          <div key={row.d} className="flex items-center gap-2">
                            <span className="w-7 text-[#8e8e98]">{row.d}</span>
                            <div className="flex-1 h-3 bg-[#1E2235] rounded-xs overflow-hidden">
                              <div
                                className={`h-full ${row.good ? 'bg-[#c7ff3d]' : 'bg-[#FFAA33]'}`}
                                style={{ width: `${Math.min(row.pct, 100)}%` }}
                              />
                            </div>
                            <span className="w-12 text-right text-white/80">{row.h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#000000]/60 border border-[#2a2b38] text-[10px] font-mono-code text-[#d8d5cc]">
                        Weekend compensatory window: +35m on Saturday morning balances systemic cortisol without shifting phase clock.
                      </div>
                    </div>
                  )}

                  {activeScreenIdx === 4 && (
                    /* SCREEN 05: Chronotype Profile & Settings */
                    <div className="space-y-4">
                      <div>
                        <span className="font-mono-code text-[10px] text-[#c7ff3d] tracking-wider uppercase block">
                          BIOMETRIC CALIBRATION
                        </span>
                        <h4 className="font-editorial text-xl font-bold tracking-tight">Chronotype Profile</h4>
                      </div>

                      <div className="p-3 rounded-xl bg-[#1E2235] border border-[#2d324d] flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#c7ff3d] text-[#090A0F] font-bold flex items-center justify-center font-editorial text-lg">
                          L
                        </div>
                        <div>
                          <div className="font-editorial text-sm font-bold text-white">Lion Chronotype (Early Riser)</div>
                          <div className="font-mono-code text-[10px] text-[#8e8e98]">Peak mental clarity: 08:00 AM - 12:00 PM</div>
                        </div>
                      </div>

                      <div className="space-y-2 font-mono-code text-xs">
                        <div className="p-2.5 rounded-lg bg-[#090A0F] border border-[#2a2b38] flex items-center justify-between">
                          <span className="text-[#8e8e98]">Apple HealthKit Sync</span>
                          <span className="text-[#c7ff3d] flex items-center gap-1">
                            <Check size={12} /> Connected
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#090A0F] border border-[#2a2b38] flex items-center justify-between">
                          <span className="text-[#8e8e98]">Oura Ring Bluetooth 5.2</span>
                          <span className="text-[#c7ff3d] flex items-center gap-1">
                            <Check size={12} /> 94% Battery
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#090A0F] border border-[#2a2b38] flex items-center justify-between">
                          <span className="text-[#8e8e98]">Bedtime Haptic Alert</span>
                          <span className="text-white">10:15 PM</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* iOS Bottom Navigation Bar */}
                <div className="relative z-30 pt-2 pb-3 px-6 border-t border-[#1f202c] bg-[#090a0f]/90 backdrop-blur-md flex items-center justify-between font-mono-code text-[9px] text-[#8e8e98]">
                  <button
                    onClick={() => onScreenChange(0)}
                    className={`flex flex-col items-center gap-1 ${activeScreenIdx === 0 ? 'text-[#c7ff3d]' : ''}`}
                  >
                    <Activity size={14} />
                    <span>Clock</span>
                  </button>
                  <button
                    onClick={() => onScreenChange(1)}
                    className={`flex flex-col items-center gap-1 ${activeScreenIdx === 1 ? 'text-[#c7ff3d]' : ''}`}
                  >
                    <Sparkles size={14} />
                    <span>Stages</span>
                  </button>
                  <button
                    onClick={() => onScreenChange(2)}
                    className={`flex flex-col items-center gap-1 ${activeScreenIdx === 2 ? 'text-[#c7ff3d]' : ''}`}
                  >
                    <Volume2 size={14} />
                    <span>Audio</span>
                  </button>
                  <button
                    onClick={() => onScreenChange(3)}
                    className={`flex flex-col items-center gap-1 ${activeScreenIdx === 3 ? 'text-[#c7ff3d]' : ''}`}
                  >
                    <Sliders size={14} />
                    <span>Debt</span>
                  </button>
                  <button
                    onClick={() => onScreenChange(4)}
                    className={`flex flex-col items-center gap-1 ${activeScreenIdx === 4 ? 'text-[#c7ff3d]' : ''}`}
                  >
                    <Clock size={14} />
                    <span>Profile</span>
                  </button>
                </div>

                {/* iPhone Home Indicator Pill */}
                <div className="relative z-30 pb-1.5 flex justify-center bg-[#090a0f]">
                  <div className="w-28 h-1 bg-white/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Companion Phone (Next Screen in 3D Perspective) */}
          <div
            onClick={handleNext}
            className="hidden md:block absolute -right-6 lg:right-4 z-10 w-[230px] lg:w-[250px] opacity-40 hover:opacity-75 transition-all duration-500 cursor-pointer transform rotate-6 scale-90 hover:scale-95 [filter:drop-shadow(0_20px_30px_rgba(0,0,0,0.8))]"
            title="Click to view next screen"
          >
            <div className="rounded-[40px] p-2.5 bg-gradient-to-b from-[#3a3b48] via-[#1a1b24] to-[#0e0f15] border border-[#484a5c] shadow-2xl">
              <div className="relative rounded-[32px] overflow-hidden bg-[#090a0f] aspect-[9/19.5] border border-[#2a2b38]">
                {/* Image preview */}
                {project.keyScreens[(activeScreenIdx + 1) % project.keyScreens.length]?.imageUrl && (
                  <img
                    src={project.keyScreens[(activeScreenIdx + 1) % project.keyScreens.length].imageUrl}
                    alt="Next screen background"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/70 to-transparent" />
                <div className="absolute bottom-4 inset-x-3 text-center">
                  <span className="font-mono-code text-[10px] text-[#c7ff3d] uppercase tracking-wider block">
                    NEXT SCREEN
                  </span>
                  <span className="font-editorial text-xs font-bold text-white truncate block">
                    {project.keyScreens[(activeScreenIdx + 1) % project.keyScreens.length].title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen Summary Bar */}
        <div className="mt-4 pt-4 border-t border-[#1f202c] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono-code">
          <div>
            <span className="text-[#c7ff3d] font-bold uppercase">{currentScreen.title}</span>
            <span className="text-[#8e8e98] ml-2">— {currentScreen.subtitle}</span>
          </div>
          <p className="text-[#8e8e98] text-[11px] max-w-md">
            {currentScreen.description}
          </p>
        </div>
      </div>

      {/* Screen Navigation Carousel */}
      <CarouselNav
        screens={project.keyScreens}
        activeIdx={activeScreenIdx}
        onSelect={onScreenChange}
        onPrev={handlePrev}
        onNext={handleNext}
        dark={false}
      />
    </div>
  );
}

/* ==========================================================================
   2. WEB APP SHOWCASE (NEXUS REVENUE INTELLIGENCE)
   Realistic browser chrome with tabs, address bar, responsive high-density
   analytics, cohort heatmaps, and latency waterfalls
   ========================================================================== */
export function WebAppShowcase({
  project,
  activeScreenIdx,
  onScreenChange,
}: {
  project: UiUxFigmaProject;
  activeScreenIdx: number;
  onScreenChange: (idx: number) => void;
}) {
  const currentScreen = project.keyScreens[activeScreenIdx] || project.keyScreens[0];

  const handlePrev = () => {
    onScreenChange(activeScreenIdx > 0 ? activeScreenIdx - 1 : project.keyScreens.length - 1);
  };

  const handleNext = () => {
    onScreenChange(activeScreenIdx < project.keyScreens.length - 1 ? activeScreenIdx + 1 : 0);
  };

  return (
    <div className="space-y-6">
      {/* Desktop Browser Window Frame */}
      <div className="rounded-xl border-2 border-[#111111] bg-[#0F0F12] text-white shadow-2xl overflow-hidden transition-all duration-300">
        {/* Browser Chrome Header */}
        <div className="bg-[#18191E] border-b border-[#262836] px-4 py-2.5 flex items-center justify-between select-none">
          {/* Mac window control dots */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
            <span className="ml-3 font-mono-code text-[11px] text-[#888B94] hidden sm:inline truncate max-w-[200px]">
              Nexus Revenue Intelligence · v3.4.2
            </span>
          </div>

          {/* Browser Address Bar */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0F0F12] border border-[#2a2b38] rounded-md font-mono-code text-[11px] text-[#a0a09a] max-w-sm w-full mx-2 justify-center truncate shadow-inner">
            <span className="text-[#3B82F6] font-semibold">https://</span>
            <span className="text-white truncate">nexus-intelligence.internal/bi/executive</span>
          </div>

          {/* Real-time status */}
          <div className="flex items-center gap-1.5 text-[10px] font-mono-code text-[#888B94]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="hidden sm:inline">LIVE SYNC</span>
          </div>
        </div>

        {/* Web App Secondary Navigation Ribbon */}
        <div className="bg-[#14151a] border-b border-[#262836] px-5 py-2.5 flex items-center justify-between text-xs font-mono-code">
          <div className="flex items-center gap-4">
            <span className="font-editorial font-bold text-white tracking-wider flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#3B82F6] inline-block" />
              NEXUS BI
            </span>
            <div className="hidden md:flex items-center gap-2 text-[#888B94]">
              <span className="text-white font-medium">Cohort Analytics</span>
              <span>/</span>
              <span>SaaS Pipeline</span>
              <span>/</span>
              <span>Query Latency</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#1F202B] text-[#3B82F6] border border-[#303348] text-[10px] font-bold">
              Q3 EXECUTIVE SLICE
            </span>
          </div>
        </div>

        {/* Screen Viewport Content */}
        <div className="p-5 sm:p-7 min-h-[440px] bg-[#0F0F12] text-white">
          {activeScreenIdx === 0 && (
            /* VIEW 1: Executive Revenue Matrix */
            <div className="space-y-6">
              {/* Executive KPI Ticker Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-3.5 bg-[#18191E] border border-[#262836] rounded-md">
                  <div className="text-[10px] font-mono-code text-[#888B94] uppercase">ANNUAL RECURRING REV</div>
                  <div className="text-2xl font-editorial font-bold text-white mt-0.5">$24.84M</div>
                  <div className="text-[10px] font-mono-code text-[#10B981] mt-1 flex items-center gap-1">
                    <span>↑ +38.4% YoY</span>
                    <span className="text-[#888B94]">vs planned</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#18191E] border border-[#262836] rounded-md">
                  <div className="text-[10px] font-mono-code text-[#888B94] uppercase">NET RETENTION (NRR)</div>
                  <div className="text-2xl font-editorial font-bold text-[#3B82F6] mt-0.5">122.4%</div>
                  <div className="text-[10px] font-mono-code text-[#10B981] mt-1">
                    <span>↑ Top Quartile SaaS</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#18191E] border border-[#262836] rounded-md">
                  <div className="text-[10px] font-mono-code text-[#888B94] uppercase">LOGO RETENTION</div>
                  <div className="text-2xl font-editorial font-bold text-white mt-0.5">96.8%</div>
                  <div className="text-[10px] font-mono-code text-[#888B94] mt-1">1.2% gross churn</div>
                </div>

                <div className="p-3.5 bg-[#18191E] border border-[#262836] rounded-md">
                  <div className="text-[10px] font-mono-code text-[#888B94] uppercase">CAC PAYBACK</div>
                  <div className="text-2xl font-editorial font-bold text-[#c7ff3d] mt-0.5">8.2 Mo</div>
                  <div className="text-[10px] font-mono-code text-[#c7ff3d] mt-1">Efficient Growth</div>
                </div>
              </div>

              {/* ARR Area Chart Visualizer */}
              <div className="p-5 bg-[#18191E] border border-[#262836] rounded-md space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#262836] pb-3">
                  <div>
                    <span className="font-mono-code text-[10px] text-[#3B82F6] uppercase tracking-wider block">
                      SYNCHRONIZED TELEMETRY
                    </span>
                    <h4 className="font-editorial text-base font-bold text-white">ARR Velocity &amp; Expansion Waterfall</h4>
                  </div>
                  <div className="flex items-center gap-3 font-mono-code text-xs">
                    <span className="flex items-center gap-1.5 text-white">
                      <span className="w-2.5 h-2.5 bg-[#3B82F6] inline-block" /> New Bookings
                    </span>
                    <span className="flex items-center gap-1.5 text-[#888B94]">
                      <span className="w-2.5 h-2.5 bg-[#c7ff3d] inline-block" /> Expansion
                    </span>
                  </div>
                </div>

                {/* Simulated High-Density Area Chart */}
                <div className="h-44 flex items-end gap-2 pt-4 relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="border-b border-[#888B94]" />
                    <div className="border-b border-[#888B94]" />
                    <div className="border-b border-[#888B94]" />
                  </div>

                  {/* Synchronized Crosshair indicator */}
                  <div className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-[#c7ff3d] z-10">
                    <div className="absolute -top-3 -left-12 px-2 py-0.5 bg-[#c7ff3d] text-[#111111] font-mono-code text-[9px] font-bold">
                      AUG: $24.8M
                    </div>
                  </div>

                  {/* Columns */}
                  {[
                    { m: 'JAN', h1: 40, h2: 15 },
                    { m: 'FEB', h1: 45, h2: 18 },
                    { m: 'MAR', h1: 52, h2: 22 },
                    { m: 'APR', h1: 58, h2: 25 },
                    { m: 'MAY', h1: 64, h2: 28 },
                    { m: 'JUN', h1: 72, h2: 32 },
                    { m: 'JUL', h1: 80, h2: 36 },
                    { m: 'AUG', h1: 90, h2: 42 },
                    { m: 'SEP', h1: 98, h2: 46 },
                  ].map((bar) => (
                    <div key={bar.m} className="flex-1 flex flex-col justify-end items-center gap-1 h-full z-0 group">
                      <div className="w-full flex flex-col justify-end gap-0.5" style={{ height: `${bar.h1}%` }}>
                        <div className="w-full bg-[#3B82F6] rounded-t-xs" style={{ height: `${bar.h1 * 0.7}%` }} />
                        <div className="w-full bg-[#c7ff3d]" style={{ height: `${bar.h2 * 0.3}%` }} />
                      </div>
                      <span className="font-mono-code text-[9px] text-[#888B94]">{bar.m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeScreenIdx === 1 && (
            /* VIEW 2: Cohort Retention Matrix */
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#262836] pb-3">
                <div>
                  <span className="font-mono-code text-[10px] text-[#3B82F6] uppercase tracking-wider block">
                    RETENTION MATRIX
                  </span>
                  <h4 className="font-editorial text-base font-bold text-white">
                    12-Month Net Expansion Cohort Heatmap
                  </h4>
                </div>
                <span className="font-mono-code text-xs text-[#888B94]">Green: &gt;110% NRR Expansion</span>
              </div>

              {/* Heatmap Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono-code text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#262836] text-[#888B94] text-[10px]">
                      <th className="py-2 px-2">COHORT</th>
                      <th className="py-2 px-2">USERS</th>
                      <th className="py-2 px-2">M0</th>
                      <th className="py-2 px-2">M1</th>
                      <th className="py-2 px-2">M2</th>
                      <th className="py-2 px-2">M3</th>
                      <th className="py-2 px-2">M4</th>
                      <th className="py-2 px-2">M5</th>
                      <th className="py-2 px-2">M6</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e2029] text-[11px]">
                    {[
                      { c: '2024 Q1', u: '142', m: [100, 104, 108, 112, 118, 122, 126] },
                      { c: '2024 Q2', u: '188', m: [100, 102, 106, 110, 115, 120] },
                      { c: '2024 Q3', u: '210', m: [100, 105, 109, 114, 119] },
                      { c: '2024 Q4', u: '264', m: [100, 103, 107, 112] },
                      { c: '2025 Q1', u: '310', m: [100, 106, 111] },
                    ].map((row) => (
                      <tr key={row.c} className="hover:bg-[#18191E]">
                        <td className="py-2.5 px-2 font-bold text-white">{row.c}</td>
                        <td className="py-2.5 px-2 text-[#888B94]">{row.u}</td>
                        {row.m.map((val, idx) => (
                          <td key={idx} className="py-2.5 px-2">
                            <span
                              className={`px-2 py-1 rounded text-[10px] font-bold ${
                                val >= 120
                                  ? 'bg-[#10B981]/25 text-[#10B981] border border-[#10B981]/40'
                                  : val >= 110
                                  ? 'bg-[#3B82F6]/25 text-[#3B82F6] border border-[#3B82F6]/40'
                                  : 'bg-[#1F202B] text-white/80'
                              }`}
                            >
                              {val}%
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeScreenIdx === 2 && (
            /* VIEW 3: Query Latency Waterfall */
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#262836] pb-3">
                <div>
                  <span className="font-mono-code text-[10px] text-[#3B82F6] uppercase tracking-wider block">
                    INFRASTRUCTURE TELEMETRY
                  </span>
                  <h4 className="font-editorial text-base font-bold text-white">
                    API Query Latency &amp; Cluster Percentiles
                  </h4>
                </div>
                <span className="font-mono-code text-xs text-[#10B981]">p99 &lt; 85ms Target Met</span>
              </div>

              <div className="space-y-3 font-mono-code text-xs">
                {[
                  { endpoint: 'POST /v3/cohorts/filter-query', p50: '18ms', p95: '42ms', p99: '68ms', status: 'HEALTHY' },
                  { endpoint: 'GET /v3/revenue/arr-waterfall', p50: '12ms', p95: '29ms', p99: '44ms', status: 'HEALTHY' },
                  { endpoint: 'GET /v3/analytics/export/csv', p50: '45ms', p95: '92ms', p99: '120ms', status: 'WARN' },
                  { endpoint: 'POST /v3/auth/session/verify', p50: '6ms', p95: '14ms', p99: '22ms', status: 'HEALTHY' },
                ].map((item) => (
                  <div key={item.endpoint} className="p-3 bg-[#18191E] border border-[#262836] rounded flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">{item.endpoint}</div>
                      <div className="text-[10px] text-[#888B94] mt-0.5">
                        p50: <span className="text-white">{item.p50}</span> · p95: <span className="text-[#3B82F6]">{item.p95}</span> · p99: <span className="text-[#c7ff3d]">{item.p99}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${item.status === 'HEALTHY' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#F59E0B]/20 text-[#F59E0B]'}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeScreenIdx === 3 && (
            /* VIEW 4: Custom Metric Builder Modal */
            <div className="relative p-6 bg-[#18191E] border-2 border-[#3B82F6] rounded-lg shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-[#262836] pb-3">
                <div>
                  <span className="font-mono-code text-[10px] text-[#3B82F6] uppercase tracking-wider block">
                    INTERACTION MODAL
                  </span>
                  <h4 className="font-editorial text-lg font-bold text-white">
                    Custom Metric Formula Constructor
                  </h4>
                </div>
                <span className="px-2 py-0.5 bg-[#262836] text-[10px] font-mono-code text-[#888B94]">
                  ESC TO DISMISS
                </span>
              </div>

              <div className="space-y-3 font-mono-code text-xs">
                <div>
                  <label className="text-[10px] text-[#888B94] uppercase block mb-1">METRIC NAME</label>
                  <input
                    type="text"
                    readOnly
                    value="Blended Magic Number & Payback Velocity"
                    className="w-full bg-[#0F0F12] border border-[#262836] p-2 text-white rounded"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#888B94] uppercase block mb-1">FORMULA LOGIC BLOCK</label>
                  <div className="p-3 bg-[#0F0F12] border border-[#3B82F6]/50 rounded text-[#3B82F6] flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#1F202B] text-white rounded">(ARR_Qtr_N - ARR_Qtr_N-1)</span>
                    <span className="text-white">÷</span>
                    <span className="px-2 py-0.5 bg-[#1F202B] text-white rounded">(Sales_Spend + Mkt_Spend)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-2.5 bg-[#0F0F12] border border-[#262836] rounded">
                    <span className="text-[10px] text-[#888B94] block">OUTPUT FORMAT</span>
                    <span className="text-white font-bold">Coefficient (Target: &gt; 1.0)</span>
                  </div>
                  <div className="p-2.5 bg-[#0F0F12] border border-[#262836] rounded">
                    <span className="text-[10px] text-[#888B94] block">BOARD REPORT DISPATCH</span>
                    <span className="text-[#10B981] font-bold">Scheduled (Monthly)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Viewport Meta Ribbon */}
        <div className="bg-[#14151a] border-t border-[#262836] px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono-code">
          <div>
            <span className="text-[#3B82F6] font-bold uppercase">{currentScreen.title}</span>
            <span className="text-[#888B94] ml-2">— {currentScreen.subtitle}</span>
          </div>
          <p className="text-[#888B94] text-[11px] max-w-md">{currentScreen.description}</p>
        </div>
      </div>

      {/* Screen Navigation Carousel */}
      <CarouselNav
        screens={project.keyScreens}
        activeIdx={activeScreenIdx}
        onSelect={onScreenChange}
        onPrev={handlePrev}
        onNext={handleNext}
        accentColor="#3B82F6"
        dark={false}
      />
    </div>
  );
}

/* ==========================================================================
   3. PRODUCT / SAAS DESIGN SHOWCASE (ORBIT SPRINT COMMAND)
   Developer velocity platform, Kanban boards with SLA alert badges,
   PR bottleneck radars, workload balancing heatmaps, and changelog composer
   ========================================================================== */
export function SaasProductShowcase({
  project,
  activeScreenIdx,
  onScreenChange,
}: {
  project: UiUxFigmaProject;
  activeScreenIdx: number;
  onScreenChange: (idx: number) => void;
}) {
  const currentScreen = project.keyScreens[activeScreenIdx] || project.keyScreens[0];

  const handlePrev = () => {
    onScreenChange(activeScreenIdx > 0 ? activeScreenIdx - 1 : project.keyScreens.length - 1);
  };

  const handleNext = () => {
    onScreenChange(activeScreenIdx < project.keyScreens.length - 1 ? activeScreenIdx + 1 : 0);
  };

  return (
    <div className="space-y-6">
      {/* SaaS Product Window Frame */}
      <div className="rounded-xl border-2 border-[#111111] bg-[#111215] text-white shadow-2xl overflow-hidden transition-all duration-300">
        {/* Window Chrome & Global Command Header */}
        <div className="bg-[#191A20] border-b border-[#2A2B35] px-5 py-2.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#8B5CF6] inline-block shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
            <span className="font-editorial font-bold text-white tracking-wider text-sm">
              ORBIT COMMAND
            </span>
            <span className="font-mono-code text-[10px] text-[#8e8e98] px-2 py-0.5 bg-[#252632] rounded">
              SPRINT 48 · DAY 6 OF 10
            </span>
          </div>

          {/* Quick Command Search Bar (Cmd + K) */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#111215] border border-[#2A2B35] rounded font-mono-code text-[11px] text-[#8e8e98] w-64 justify-between">
            <span>Filter by reviewer or SLA...</span>
            <span className="px-1.5 py-0.5 bg-[#252632] text-[9px] rounded text-white font-bold">⌘K</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-code">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-[#10B981] font-semibold">14 PRs MERGED</span>
          </div>
        </div>

        {/* Viewport Content */}
        <div className="p-5 sm:p-7 min-h-[440px] bg-[#111215] text-white">
          {activeScreenIdx === 0 && (
            /* VIEW 1: Sprint Velocity Command */
            <div className="space-y-5">
              {/* Metric Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 bg-[#191A20] border border-[#2A2B35] rounded">
                  <div className="text-[10px] font-mono-code text-[#8e8e98]">PLANNED VELOCITY</div>
                  <div className="text-xl font-editorial font-bold text-white mt-0.5">148 Story Points</div>
                  <div className="text-[10px] font-mono-code text-[#10B981]">112 completed (75.6%)</div>
                </div>
                <div className="p-3.5 bg-[#191A20] border border-[#2A2B35] rounded">
                  <div className="text-[10px] font-mono-code text-[#8e8e98]">AVG TIME TO MERGE</div>
                  <div className="text-xl font-editorial font-bold text-[#8B5CF6] mt-0.5">14.2 Hours</div>
                  <div className="text-[10px] font-mono-code text-[#10B981]">↓ 3.8h faster than S47</div>
                </div>
                <div className="p-3.5 bg-[#191A20] border border-[#2A2B35] rounded">
                  <div className="text-[10px] font-mono-code text-[#8e8e98]">STALE REVIEW ALERTS</div>
                  <div className="text-xl font-editorial font-bold text-[#F59E0B] mt-0.5">2 Blockers</div>
                  <div className="text-[10px] font-mono-code text-[#F59E0B]">Waiting on architect review</div>
                </div>
              </div>

              {/* Burndown Curve Simulation */}
              <div className="p-4 bg-[#191A20] border border-[#2A2B35] rounded space-y-3">
                <div className="flex justify-between items-center text-xs font-mono-code border-b border-[#2A2B35] pb-2">
                  <span className="font-bold text-white uppercase">Sprint Burndown Velocity vs Ideal Line</span>
                  <span className="text-[#8B5CF6]">Predicted finish: Day 9 (Ahead)</span>
                </div>
                <div className="h-32 flex items-end justify-between gap-2 pt-2 px-2 relative">
                  <div className="absolute inset-x-2 top-1/2 border-b border-[#2A2B35] border-dashed" />
                  {[148, 134, 118, 96, 74, 52, 36, 18, 4, 0].map((pts, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className={`w-full max-w-[24px] rounded-t-xs transition-all ${
                          i <= 5 ? 'bg-[#8B5CF6]' : 'bg-[#2A2B35] border border-[#444658]'
                        }`}
                        style={{ height: `${(pts / 150) * 100}%` }}
                      />
                      <span className="font-mono-code text-[9px] text-[#8e8e98]">D{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeScreenIdx === 1 && (
            /* VIEW 2: Pull Request Review Radar */
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#2A2B35] pb-3">
                <div>
                  <span className="font-mono-code text-[10px] text-[#8B5CF6] uppercase tracking-wider block">
                    CODE REVIEW SLA QUEUE
                  </span>
                  <h4 className="font-editorial text-base font-bold text-white">
                    Pull Request Bottleneck Radar
                  </h4>
                </div>
                <span className="font-mono-code text-xs text-[#F59E0B]">Auto-Alert after 18h</span>
              </div>

              <div className="space-y-2.5 font-mono-code text-xs">
                {[
                  {
                    id: '#1042',
                    title: 'feat: add distributed cache layer for query latency',
                    author: 'alex.m',
                    age: '26h waiting',
                    sla: 'CRITICAL BLOCKER',
                    files: '+480 / -120',
                    badgeColor: 'bg-[#ff5f56]/20 text-[#ff5f56] border-[#ff5f56]/40',
                  },
                  {
                    id: '#1048',
                    title: 'refactor: decouple billing telemetry webhook handlers',
                    author: 'elena.r',
                    age: '19h waiting',
                    sla: 'SLA WARNING',
                    files: '+142 / -88',
                    badgeColor: 'bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/40',
                  },
                  {
                    id: '#1052',
                    title: 'fix: edge case in cohort timestamp normalization',
                    author: 'david.k',
                    age: '4h waiting',
                    sla: 'HEALTHY',
                    files: '+18 / -4',
                    badgeColor: 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/40',
                  },
                ].map((pr) => (
                  <div
                    key={pr.id}
                    className="p-3.5 bg-[#191A20] border border-[#2A2B35] rounded flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#8B5CF6]">{pr.id}</span>
                        <span className="text-white font-medium">{pr.title}</span>
                      </div>
                      <div className="text-[11px] text-[#8e8e98] flex items-center gap-3">
                        <span>by {pr.author}</span>
                        <span>·</span>
                        <span>{pr.files} lines</span>
                        <span>·</span>
                        <span className="text-white">{pr.age}</span>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded border uppercase shrink-0 ${pr.badgeColor}`}>
                      {pr.sla}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeScreenIdx === 2 && (
            /* VIEW 3: Team Cognitive Balance Heatmap */
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#2A2B35] pb-3">
                <div>
                  <span className="font-mono-code text-[10px] text-[#8B5CF6] uppercase tracking-wider block">
                    CAPACITY VS CONTEXT SWITCHING
                  </span>
                  <h4 className="font-editorial text-base font-bold text-white">
                    Engineer Cognitive Focus &amp; Workload
                  </h4>
                </div>
                <span className="font-mono-code text-xs text-[#10B981]">Workload Balanced</span>
              </div>

              <div className="space-y-2 font-mono-code text-xs">
                {[
                  { name: 'Sarah Chen (Senior Staff)', activePRs: 2, reviewsAssigned: 1, deepWork: '4.5h block', load: 'OPTIMAL' },
                  { name: 'Marcus Vance (Lead Backend)', activePRs: 3, reviewsAssigned: 4, deepWork: '1.2h block', load: 'HIGH LOAD' },
                  { name: 'Amina Tariq (Product Eng)', activePRs: 1, reviewsAssigned: 2, deepWork: '5.0h block', load: 'OPTIMAL' },
                  { name: 'Julian Croft (Core Infra)', activePRs: 2, reviewsAssigned: 1, deepWork: '6.2h block', load: 'DEEP WORK' },
                ].map((dev) => (
                  <div key={dev.name} className="p-3 bg-[#191A20] border border-[#2A2B35] rounded flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold">{dev.name}</div>
                      <div className="text-[10px] text-[#8e8e98] mt-0.5">
                        {dev.activePRs} open PRs · {dev.reviewsAssigned} assigned reviews · {dev.deepWork} unbroken focus
                      </div>
                    </div>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                        dev.load === 'HIGH LOAD'
                          ? 'bg-[#F59E0B]/20 text-[#F59E0B]'
                          : dev.load === 'DEEP WORK'
                          ? 'bg-[#8B5CF6]/20 text-[#8B5CF6]'
                          : 'bg-[#10B981]/20 text-[#10B981]'
                      }`}
                    >
                      {dev.load}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeScreenIdx === 3 && (
            /* VIEW 4: Release Changelog Composer */
            <div className="p-4 bg-[#191A20] border border-[#8B5CF6]/50 rounded space-y-3 font-mono-code text-xs">
              <div className="flex items-center justify-between border-b border-[#2A2B35] pb-2">
                <span className="font-bold text-white uppercase">Automated GitHub Release Candidate (v3.4.2)</span>
                <span className="text-[#10B981] font-bold">READY TO PUBLISH</span>
              </div>
              <div className="p-3 bg-[#111215] border border-[#2A2B35] rounded text-[#8e8e98] space-y-2 text-[11px] leading-relaxed">
                <div className="text-[#8B5CF6] font-bold">## What's Changed in v3.4.2</div>
                <div>* <span className="text-white">feat(cache):</span> distributed Redis tier for sub-20ms cohort queries by @alex.m (#1042)</div>
                <div>* <span className="text-white">fix(billing):</span> decouple telemetry event dispatcher from webhook queue by @elena.r (#1048)</div>
                <div>* <span className="text-white">perf(db):</span> partition customer event log table by month for faster indexes by @julian.c (#1039)</div>
              </div>
              <div className="flex justify-end pt-1">
                <button className="px-4 py-1.5 bg-[#8B5CF6] text-white font-bold rounded hover:bg-[#7c4dff] transition-colors flex items-center gap-1.5">
                  <CheckCircle2 size={13} />
                  <span>PUBLISH TO GITHUB PRODUCTION</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Viewport Meta Ribbon */}
        <div className="bg-[#191A20] border-t border-[#2A2B35] px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono-code">
          <div>
            <span className="text-[#8B5CF6] font-bold uppercase">{currentScreen.title}</span>
            <span className="text-[#8e8e98] ml-2">— {currentScreen.subtitle}</span>
          </div>
          <p className="text-[#8e8e98] text-[11px] max-w-md">{currentScreen.description}</p>
        </div>
      </div>

      {/* Screen Navigation Carousel */}
      <CarouselNav
        screens={project.keyScreens}
        activeIdx={activeScreenIdx}
        onSelect={onScreenChange}
        onPrev={handlePrev}
        onNext={handleNext}
        accentColor="#8B5CF6"
        dark={false}
      />
    </div>
  );
}

/* ==========================================================================
   4. E-COMMERCE EXPERIENCE SHOWCASE (MONOLITH AUDIO OBJECTS)
   Sculptural luxury digital flagship, architectural product photography,
   interactive material configurator, acoustic frequency curves, concierge bag
   ========================================================================== */
export function EcommerceShowcase({
  project,
  activeScreenIdx,
  onScreenChange,
}: {
  project: UiUxFigmaProject;
  activeScreenIdx: number;
  onScreenChange: (idx: number) => void;
}) {
  const currentScreen = project.keyScreens[activeScreenIdx] || project.keyScreens[0];
  const [selectedFinish, setSelectedFinish] = useState<'brass' | 'obsidian' | 'walnut'>('brass');

  const handlePrev = () => {
    onScreenChange(activeScreenIdx > 0 ? activeScreenIdx - 1 : project.keyScreens.length - 1);
  };

  const handleNext = () => {
    onScreenChange(activeScreenIdx < project.keyScreens.length - 1 ? activeScreenIdx + 1 : 0);
  };

  return (
    <div className="space-y-6">
      {/* Luxury Storefront Browser Window */}
      <div className="rounded-xl border-2 border-[#111111] bg-[#F5F3ED] text-[#161514] shadow-2xl overflow-hidden transition-all duration-300">
        {/* Luxury Minimalist Header */}
        <div className="bg-[#ffffff] border-b border-[#E2DFD6] px-6 py-3.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-6">
            <span className="font-editorial text-lg font-bold tracking-widest text-[#161514] uppercase">
              MONOLITH
            </span>
            <div className="hidden sm:flex items-center gap-4 font-mono-code text-xs text-[#6f6f6a]">
              <span className="text-[#161514] font-semibold">Series 01</span>
              <span>Acoustic Theory</span>
              <span>Atelier</span>
            </div>
          </div>

          <div className="flex items-center gap-4 font-mono-code text-xs text-[#161514]">
            <span className="hidden md:inline text-[#6f6f6a]">STOCKHOLM · ZÜRICH</span>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#161514] text-[#F5F3ED] rounded-none">
              <ShoppingBag size={12} />
              <span>CONCIERGE (1)</span>
            </div>
          </div>
        </div>

        {/* Viewport Content */}
        <div className="p-6 sm:p-8 min-h-[460px] bg-[#F5F3ED]">
          {activeScreenIdx === 0 && (
            /* SCREEN 1: Architectural Speaker Hero */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono-code text-[11px] text-[#C8A265] uppercase tracking-widest block font-bold">
                  NUMBERED EDITION // 24 PIECES WORLDWIDE
                </span>
                <h4 className="font-editorial text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#161514] leading-tight">
                  MONOLITH SERIES 01 ACOUSTIC TOWER
                </h4>
                <p className="font-editorial text-sm text-[#555550] leading-relaxed">
                  Sculptural floorstanding acoustic monitor carved from monolithic resonance-damped composite, tuned for pure uncolored frequency fidelity.
                </p>

                <div className="pt-2 border-t border-[#E2DFD6] flex items-baseline gap-4 font-mono-code">
                  <span className="text-2xl font-bold text-[#161514]">$6,400</span>
                  <span className="text-xs text-[#6f6f6a]">White-Glove Installation Included</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <button className="px-6 py-2.5 bg-[#161514] text-[#F5F3ED] font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-[#C8A265] hover:text-[#161514] transition-colors">
                    RESERVE NUMBERED PAIR
                  </button>
                  <button
                    onClick={() => onScreenChange(1)}
                    className="px-4 py-2.5 border border-[#161514] text-[#161514] font-mono-code text-xs uppercase hover:bg-white transition-colors"
                  >
                    CONFIGURATOR
                  </button>
                </div>
              </div>

              {/* High-Resolution Hero Photography Card */}
              <div className="lg:col-span-7 relative rounded-lg overflow-hidden border border-[#E2DFD6] shadow-lg aspect-[16/10] bg-[#161514]">
                <img
                  src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=85"
                  alt="Monolith floorstanding speaker"
                  className="w-full h-full object-cover filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161514]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end font-mono-code text-[11px] text-white">
                  <div>
                    <span className="text-[#C8A265] block font-bold">SOLID COMPOSITE BODY</span>
                    <span>Anechoic dispersion chamber</span>
                  </div>
                  <span className="px-2 py-0.5 bg-black/60 border border-white/20">SWISS ACOUSTIC ENGINEERING</span>
                </div>
              </div>
            </div>
          )}

          {activeScreenIdx === 1 && (
            /* SCREEN 2: 360 Material Configurator */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 relative rounded-lg overflow-hidden border border-[#E2DFD6] shadow-lg aspect-[16/10] bg-[#161514]">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85"
                  alt="Material configurator close-up"
                  className="w-full h-full object-cover filter contrast-110"
                />
                <div className="absolute top-4 left-4 font-mono-code text-[10px] px-2.5 py-1 bg-black/75 text-[#C8A265] border border-[#C8A265]/40 font-bold">
                  FINISH: {selectedFinish.toUpperCase()} ACCENTS
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono-code text-[11px] text-[#C8A265] uppercase tracking-widest block font-bold">
                  TACTILE MATERIAL ARCHITECTURE
                </span>
                <h4 className="font-editorial text-2xl font-bold uppercase text-[#161514]">
                  Bespoke Metal &amp; Grain Selection
                </h4>
                <p className="text-xs text-[#555550] leading-relaxed">
                  Every Monolith monitor is hand-assembled with precision-machined solid hardware. Select your acoustic trim and cabinet dampener:
                </p>

                {/* Swatch Toggles */}
                <div className="space-y-2 pt-2">
                  {[
                    { id: 'brass', name: 'Brushed Solid Brass', desc: 'Warm resonance with aged golden patina', hex: '#C8A265' },
                    { id: 'obsidian', name: 'Fluted Obsidian Matte', desc: 'Pure non-reflective acoustic absorption', hex: '#1C1C1E' },
                    { id: 'walnut', name: 'Smoked Alpine Walnut', desc: 'Hand-rubbed organic oil grain', hex: '#5B4033' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFinish(f.id as any)}
                      className={`w-full p-3 border text-left flex items-center justify-between transition-all cursor-pointer ${
                        selectedFinish === f.id
                          ? 'border-[#161514] bg-white shadow-xs'
                          : 'border-[#E2DFD6] bg-transparent hover:border-[#888]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full border border-black/30 shrink-0" style={{ backgroundColor: f.hex }} />
                        <div>
                          <div className="font-editorial text-sm font-bold text-[#161514]">{f.name}</div>
                          <div className="font-mono-code text-[10px] text-[#6f6f6a]">{f.desc}</div>
                        </div>
                      </div>
                      {selectedFinish === f.id && <Check size={14} className="text-[#161514]" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeScreenIdx === 2 && (
            /* SCREEN 3: Frequency Dispersion Curve */
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#E2DFD6] pb-3">
                <div>
                  <span className="font-mono-code text-[10px] text-[#C8A265] uppercase tracking-wider block font-bold">
                    LABORATORY MEASUREMENTS
                  </span>
                  <h4 className="font-editorial text-xl font-bold uppercase text-[#161514]">
                    Anechoic Frequency Response Curve (20Hz - 35kHz)
                  </h4>
                </div>
                <span className="font-mono-code text-xs text-[#6f6f6a]">±0.8dB Flat Deviation</span>
              </div>

              {/* Curve Plot Simulation */}
              <div className="p-6 bg-[#ffffff] border border-[#E2DFD6] rounded space-y-4">
                <div className="h-40 flex items-center justify-between relative border-b border-l border-[#161514]/30 px-4">
                  {/* SVG smooth response wave */}
                  <svg className="w-full h-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                    <path
                      d="M 0 90 Q 50 40, 100 45 T 200 46 T 300 44 T 400 45 T 500 50"
                      fill="none"
                      stroke="#C8A265"
                      strokeWidth="3"
                    />
                    <path
                      d="M 0 90 Q 50 40, 100 45 T 200 46 T 300 44 T 400 45 T 500 50 L 500 120 L 0 120 Z"
                      fill="url(#brassGrad)"
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="brassGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C8A265" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Laboratory Markers */}
                  <div className="absolute top-2 right-4 font-mono-code text-[10px] text-[#6f6f6a] bg-[#F5F3ED] px-2 py-1 border border-[#E2DFD6]">
                    ANECHOIC CHAMBER CERTIFIED
                  </div>
                </div>

                <div className="flex justify-between font-mono-code text-[10px] text-[#6f6f6a]">
                  <span>20 Hz (Sub-Bass)</span>
                  <span>100 Hz</span>
                  <span>1 kHz (Midrange)</span>
                  <span>10 kHz</span>
                  <span>35 kHz (Ultra-Treble)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono-code text-xs">
                <div className="p-3 bg-white border border-[#E2DFD6]">
                  <span className="text-[#6f6f6a] block text-[10px]">DRIVER ARCHITECTURE</span>
                  <span className="font-bold text-[#161514]">Beryllium Dome Tweeter</span>
                </div>
                <div className="p-3 bg-white border border-[#E2DFD6]">
                  <span className="text-[#6f6f6a] block text-[10px]">EFFICIENCY SENSITIVITY</span>
                  <span className="font-bold text-[#161514]">91 dB @ 1W / 1m</span>
                </div>
                <div className="p-3 bg-white border border-[#E2DFD6]">
                  <span className="text-[#6f6f6a] block text-[10px]">NOMINAL IMPEDANCE</span>
                  <span className="font-bold text-[#161514]">8 Ohms (Linear 6.2Ω Min)</span>
                </div>
              </div>
            </div>
          )}

          {activeScreenIdx === 3 && (
            /* SCREEN 4: Curated Monograph Shop Grid */
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2DFD6] pb-3">
                <div>
                  <span className="font-mono-code text-[10px] text-[#C8A265] uppercase tracking-wider block font-bold">
                    ACOUSTIC COLLECTION
                  </span>
                  <h4 className="font-editorial text-xl font-bold uppercase text-[#161514]">
                    Handcrafted Monitors &amp; Hardware
                  </h4>
                </div>
                <span className="font-mono-code text-xs text-[#6f6f6a]">3 Models in Catalog</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    title: 'Monolith Bookshelf S-02',
                    price: '$3,800 / pair',
                    specs: 'Dual 5" Neodymium Cones',
                    img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
                  },
                  {
                    title: 'Isolation Plinth Brass',
                    price: '$650 / set',
                    specs: 'Solid CNC Milled Brass',
                    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
                  },
                  {
                    title: 'Sub-Monolith Sealed',
                    price: '$4,200',
                    specs: '10" Carbon Sub-Bass Unit',
                    img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
                  },
                ].map((item) => (
                  <div key={item.title} className="p-4 bg-white border border-[#E2DFD6] space-y-3 shadow-xs">
                    <div className="aspect-[4/3] bg-[#161514] overflow-hidden rounded">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-editorial text-sm font-bold text-[#161514]">{item.title}</h5>
                      <div className="font-mono-code text-[10px] text-[#6f6f6a]">{item.specs}</div>
                    </div>
                    <div className="pt-2 border-t border-[#E2DFD6] flex items-center justify-between font-mono-code text-xs font-bold">
                      <span>{item.price}</span>
                      <button className="text-[#C8A265] hover:underline">View</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeScreenIdx === 4 && (
            /* SCREEN 5: White-Glove Concierge Checkout */
            <div className="p-6 bg-white border-2 border-[#161514] shadow-xl space-y-5 max-w-xl mx-auto">
              <div className="flex items-center justify-between border-b border-[#E2DFD6] pb-3">
                <div>
                  <span className="font-mono-code text-[10px] text-[#C8A265] uppercase tracking-wider block font-bold">
                    ATELIER CONCIERGE
                  </span>
                  <h4 className="font-editorial text-lg font-bold uppercase text-[#161514]">
                    Numbered Edition Reservation #07 of 24
                  </h4>
                </div>
                <ShieldCheck size={18} className="text-[#C8A265]" />
              </div>

              <div className="space-y-3 font-mono-code text-xs">
                <div className="p-3 bg-[#F5F3ED] border border-[#E2DFD6] flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[#161514]">Monolith Tower Pair (Solid Brass Finish)</div>
                    <div className="text-[10px] text-[#6f6f6a]">Hand-calibrated stereo match serials</div>
                  </div>
                  <span className="font-bold text-[#161514]">$6,400</span>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2 text-[11px] text-[#555]">
                    <Check size={13} className="text-[#10B981]" />
                    <span>Complimentary in-home acoustic room calibration by engineer</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-[#555]">
                    <Check size={13} className="text-[#10B981]" />
                    <span>Temperature-controlled white-glove courier delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-[#555]">
                    <Check size={13} className="text-[#10B981]" />
                    <span>10-Year transferable artisanal warranty &amp; certificate</span>
                  </div>
                </div>

                <button className="w-full mt-4 py-3 bg-[#161514] text-[#F5F3ED] font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-[#C8A265] hover:text-[#161514] transition-colors">
                  CONFIRM CONCIERGE RESERVATION · $6,400
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Viewport Meta Ribbon */}
        <div className="bg-[#ffffff] border-t border-[#E2DFD6] px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono-code">
          <div>
            <span className="text-[#161514] font-bold uppercase">{currentScreen.title}</span>
            <span className="text-[#6f6f6a] ml-2">— {currentScreen.subtitle}</span>
          </div>
          <p className="text-[#6f6f6a] text-[11px] max-w-md">{currentScreen.description}</p>
        </div>
      </div>

      {/* Screen Navigation Carousel */}
      <CarouselNav
        screens={project.keyScreens}
        activeIdx={activeScreenIdx}
        onSelect={onScreenChange}
        onPrev={handlePrev}
        onNext={handleNext}
        accentColor="#C8A265"
        dark={false}
      />
    </div>
  );
}
