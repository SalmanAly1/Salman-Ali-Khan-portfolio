import { useState } from 'react';
import { UI_UX_CONCEPTS } from '../data/portfolio';
import { PhoneMockup, BrowserMockup } from './DeviceMockups';
import { Sparkles, Layers, ArrowRight, Compass, Ticket, Activity, Cpu } from 'lucide-react';

export default function UiUxConceptsSection() {
  const [activeConceptId, setActiveConceptId] = useState<string>('aura');
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);

  const currentConcept = UI_UX_CONCEPTS.find((c) => c.id === activeConceptId) || UI_UX_CONCEPTS[0];

  const handleConceptChange = (id: string) => {
    setActiveConceptId(id);
    setActiveScreenIndex(0);
  };

  return (
    <section
      id="ui-ux-concepts"
      className="py-20 md:py-28 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12 border-b border-[#d8d5cc]"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between border-b border-[#d8d5cc] pb-6 mb-12 md:mb-16 gap-4">
        <div>
          <span className="font-mono-code text-xs text-[#6f6f6a] block mb-1">
            EXPLORATION ARCHIVE / UI/UX DESIGN LAB
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#111111] font-bold uppercase tracking-tight">
            SELECTED UI/UX CONCEPTS
          </h2>
        </div>
        <div className="font-mono-code text-xs text-[#6f6f6a] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#c7ff3d]" />
          <span>04 MOBILE &amp; PRODUCT CONCEPTS</span>
        </div>
      </div>

      {/* Concept Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
        {UI_UX_CONCEPTS.map((concept) => {
          const isSelected = concept.id === activeConceptId;
          return (
            <button
              key={concept.id}
              onClick={() => handleConceptChange(concept.id)}
              className={`p-4 border text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'border-[#111111] bg-[#111111] text-[#F2F0EA] shadow-md'
                  : 'border-[#d8d5cc] bg-[#ffffff] text-[#111111] hover:border-[#111111]'
              }`}
            >
              <div className="flex justify-between items-center w-full mb-2">
                <span
                  className={`font-mono-code text-xs font-bold ${
                    isSelected ? 'text-[#c7ff3d]' : 'text-[#6f6f6a]'
                  }`}
                >
                  CONCEPT {concept.number}
                </span>
                <span
                  className={`font-mono-code text-[10px] px-1.5 py-0.5 uppercase ${
                    isSelected ? 'bg-[#2a2a29] text-[#F2F0EA]' : 'bg-[#F2F0EA] text-[#6f6f6a]'
                  }`}
                >
                  UI/UX EXPLORATION
                </span>
              </div>
              <div className="font-editorial text-xl font-bold uppercase tracking-tight">
                {concept.title}
              </div>
              <div
                className={`font-mono-code text-[11px] truncate mt-1 ${
                  isSelected ? 'text-[#8e8e88]' : 'text-[#6f6f6a]'
                }`}
              >
                {concept.tagline}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Concept Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Concept Rationale, Screens Switcher, UX Focus (Cols 1-5) */}
        <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono-code text-xs text-[#6f6f6a]">
              <span className="text-[#111111] font-bold">CONCEPT {currentConcept.number}</span>
              <span>/</span>
              <span>{currentConcept.category}</span>
            </div>
            <h3 className="font-editorial text-3xl font-bold text-[#111111] uppercase tracking-tight mb-2">
              {currentConcept.title} — {currentConcept.tagline}
            </h3>
            <p className="font-editorial text-base text-[#333333] leading-relaxed mb-4">
              {currentConcept.description}
            </p>
          </div>

          {/* Design Goal Box (Truthful labeling, no fake business claims) */}
          <div className="p-4 border border-[#d8d5cc] bg-[#ffffff] font-mono-code text-xs space-y-2">
            <span className="text-[#6f6f6a] uppercase text-[10px] block font-bold">
              DESIGN EXPLORATION GOAL:
            </span>
            <p className="font-editorial text-sm text-[#111111] leading-relaxed">
              {currentConcept.designGoal}
            </p>
          </div>

          {/* UX Focus Areas */}
          <div>
            <span className="font-mono-code text-[11px] font-bold uppercase text-[#6f6f6a] block mb-2.5">
              PRIMARY UX/UI DISCIPLINES TESTED:
            </span>
            <div className="flex flex-wrap gap-2">
              {currentConcept.focus.map((f) => (
                <span
                  key={f}
                  className="px-2.5 py-1 bg-[#ffffff] border border-[#d8d5cc] font-mono-code text-xs text-[#111111]"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* 4 Interactive Screen Tabs */}
          <div className="pt-4 border-t border-[#d8d5cc] space-y-2.5">
            <span className="font-mono-code text-[11px] font-bold uppercase text-[#111111] block mb-2">
              SELECT SCREEN TO INSPECT (4 SCREENS):
            </span>
            {currentConcept.screens.map((screen, sIdx) => {
              const isActive = activeScreenIndex === sIdx;
              return (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreenIndex(sIdx)}
                  className={`w-full p-3 text-left border transition-all flex items-start justify-between gap-3 ${
                    isActive
                      ? 'border-[#111111] bg-[#111111] text-[#F2F0EA]'
                      : 'border-[#d8d5cc] bg-[#ffffff] text-[#111111] hover:border-[#111111]'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono-code text-xs font-bold ${
                          isActive ? 'text-[#c7ff3d]' : 'text-[#6f6f6a]'
                        }`}
                      >
                        0{sIdx + 1}.
                      </span>
                      <span className="font-editorial text-sm font-bold uppercase">
                        {screen.title}
                      </span>
                    </div>
                    <p
                      className={`font-editorial text-xs ${
                        isActive ? 'text-[#8e8e88]' : 'text-[#6f6f6a]'
                      }`}
                    >
                      {screen.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className={`shrink-0 mt-1 transition-transform ${
                      isActive ? 'text-[#c7ff3d] translate-x-0.5' : 'text-[#6f6f6a]'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: 3D Smartphone Device Mockup with Active Screen (Cols 6-12) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 sm:p-10 border border-[#d8d5cc] bg-[#ffffff] order-1 lg:order-2">
          <div className="w-full max-w-sm">
            <PhoneMockup tilt={true}>
              {renderConceptScreen(currentConcept.id, activeScreenIndex)}
            </PhoneMockup>
          </div>

          <div className="mt-6 flex items-center justify-between w-full max-w-sm font-mono-code text-[11px] text-[#6f6f6a]">
            <span>
              SCREEN 0{activeScreenIndex + 1} / 04: {currentConcept.screens[activeScreenIndex].title}
            </span>
            <span className="text-[#111111] font-bold">FIGMA HI-FI PROTOTYPE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderConceptScreen(conceptId: string, screenIndex: number) {
  // AURA — Mobile Wellness & Habit Architecture
  if (conceptId === 'aura') {
    if (screenIndex === 0) {
      // Onboarding
      return (
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <span className="text-[10px] text-[#6f6f6a] uppercase block mb-1">AURA ONBOARDING</span>
            <h4 className="font-editorial text-xl font-bold uppercase text-[#111111] mb-2 leading-tight">
              ALIGN WITH YOUR CIRCADIAN PEAK
            </h4>
            <p className="font-editorial text-xs text-[#444748] mb-4">
              Select when your mind naturally feels most alert and receptive to deep focus:
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-[#111111] text-[#c7ff3d] border border-[#111111] rounded">
                <span className="font-bold block">Early Lark (05:30 — 09:00 AM)</span>
                <span className="text-[10px] text-[#8e8e88]">Quiet dawn meditation &amp; journaling</span>
              </div>
              <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded text-[#111111]">
                <span className="font-bold block">Solar Midday (11:00 AM — 02:00 PM)</span>
                <span className="text-[10px] text-[#6f6f6a]">Peak cognitive problem-solving</span>
              </div>
              <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded text-[#111111]">
                <span className="font-bold block">Obsidian Owl (08:00 — 11:30 PM)</span>
                <span className="text-[10px] text-[#6f6f6a]">Reflective synthesis &amp; quiet reading</span>
              </div>
            </div>
          </div>
          <button className="w-full py-2.5 bg-[#111111] text-[#F2F0EA] font-bold text-xs uppercase tracking-wider text-center">
            BEGIN DAILY RHYTHM →
          </button>
        </div>
      );
    }
    if (screenIndex === 1) {
      // Home
      return (
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-[#d8d5cc] mb-3">
              <span className="text-xs font-bold text-[#111111]">TODAY'S RITUAL</span>
              <span className="text-[10px] text-[#c7ff3d] bg-[#111111] px-1.5 py-0.5 rounded">DAWN</span>
            </div>
            <div className="p-4 bg-[#ffffff] border border-[#d8d5cc] rounded-lg text-center mb-3">
              <div className="w-20 h-20 rounded-full border-4 border-[#111111] mx-auto flex items-center justify-center mb-2">
                <span className="font-editorial text-lg font-bold text-[#111111]">15m</span>
              </div>
              <div className="font-bold text-xs text-[#111111]">Silent Sensory Meditation</div>
              <span className="text-[10px] text-[#6f6f6a]">Breathing pacing: 4s in · 6s out</span>
            </div>
            <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded text-[11px] text-[#444748] text-center">
              “Still waters reflect clearly. Unclutter your morning thoughts before entering the screen world.”
            </div>
          </div>
          <div className="text-[10px] text-[#6f6f6a] text-center">Touch ring to start session</div>
        </div>
      );
    }
    if (screenIndex === 2) {
      // Tracking
      return (
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="pb-2 border-b border-[#d8d5cc] mb-3">
              <span className="font-bold text-xs text-[#111111]">MINDFUL RITUALS (4/4)</span>
            </div>
            <div className="space-y-2">
              {[
                { title: 'Morning Sunlight Exposure', done: true, time: '06:45 AM' },
                { title: 'Diaphragmatic Breathwork', done: true, time: '08:15 AM' },
                { title: 'Deep Work Block (90m)', done: true, time: '10:00 AM' },
                { title: 'Digital Screen Sunset', done: false, time: '09:30 PM' },
              ].map((r) => (
                <div
                  key={r.title}
                  className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded flex justify-between items-center"
                >
                  <div>
                    <span className="font-bold text-xs block text-[#111111]">{r.title}</span>
                    <span className="text-[10px] text-[#6f6f6a]">{r.time}</span>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      r.done ? 'bg-[#111111] text-[#c7ff3d]' : 'bg-[#eae8e2] text-[#6f6f6a]'
                    }`}
                  >
                    {r.done ? 'DONE' : 'PENDING'}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-[#6f6f6a] text-center">Haptic Feedback Complete</div>
        </div>
      );
    }
    // Insights
    return (
      <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
        <div>
          <div className="pb-2 border-b border-[#d8d5cc] mb-3">
            <span className="font-bold text-xs text-[#111111]">WEEKLY REFLECTION</span>
          </div>
          <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded mb-3">
            <span className="text-[10px] text-[#6f6f6a] block">CONSISTENCY SCORE</span>
            <div className="font-editorial text-2xl font-bold text-[#111111] my-1">94%</div>
            <span className="text-[10px] text-[#0e8a16]">7 consecutive days logged</span>
          </div>
          <p className="font-editorial text-xs text-[#444748] leading-relaxed">
            Your afternoon focus dip was mitigated this week through timed hydration breaks. Cognitive clarity reported highest on Tuesday and Thursday mornings.
          </p>
        </div>
        <div className="text-[10px] text-[#6f6f6a] text-center">Export reflection to Journal</div>
      </div>
    );
  }

  // PULSE — Event Discovery & 3D Tickets
  if (conceptId === 'pulse') {
    if (screenIndex === 0) {
      return (
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="flex justify-between pb-2 border-b border-[#d8d5cc] mb-3">
              <span className="font-bold text-xs text-[#111111]">PULSE LONDON</span>
              <span className="text-[10px] text-[#6f6f6a]">OCTOBER 2024</span>
            </div>
            <div className="border border-[#d8d5cc] bg-[#ffffff] p-2.5 mb-2">
              <div className="aspect-[16/9] bg-[#eae8e2] mb-2 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80"
                  alt="Live electronic performance at Bermondsey Arches in PULSE underground event discovery app"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[10px] text-[#6f6f6a]">BERMONDSEY ARCHES · LIVE</div>
              <div className="font-editorial text-sm font-bold text-[#111111]">KINETIC SOUND LAB</div>
            </div>
            <div className="p-2 bg-[#ffffff] border border-[#d8d5cc] text-[11px] flex justify-between">
              <span>HACKNEY WAREHOUSE</span>
              <span className="font-bold text-[#111111]">FRI 18 OCT</span>
            </div>
          </div>
          <div className="text-[10px] text-[#6f6f6a] text-center">Swipe to explore underground listings</div>
        </div>
      );
    }
    if (screenIndex === 1) {
      return (
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="text-[10px] text-[#6f6f6a] mb-1">EVENT DOSSIER</div>
            <h4 className="font-editorial text-lg font-bold text-[#111111] uppercase mb-2">
              KINETIC SOUND LAB
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-2 bg-[#ffffff] border border-[#d8d5cc]">
                <span className="text-[#6f6f6a] block text-[10px]">LINEUP</span>
                <span className="font-bold text-[#111111]">Floating Points · Joy Orbison · Special Guest</span>
              </div>
              <div className="p-2 bg-[#ffffff] border border-[#d8d5cc]">
                <span className="text-[#6f6f6a] block text-[10px]">VENUE</span>
                <span className="font-bold text-[#111111]">Arch 14, Bermondsey SE16</span>
              </div>
            </div>
          </div>
          <button className="py-2.5 bg-[#111111] text-[#F2F0EA] font-bold text-xs uppercase text-center">
            RESERVE PASS — £28.00
          </button>
        </div>
      );
    }
    if (screenIndex === 2) {
      return (
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="pb-2 border-b border-[#d8d5cc] mb-3">
              <span className="font-bold text-xs text-[#111111]">3D DIGITAL TICKET PASS</span>
            </div>
            <div className="p-4 bg-[#111111] text-[#F2F0EA] border-2 border-[#c7ff3d] rounded-lg text-center space-y-2">
              <span className="text-[10px] text-[#c7ff3d] block">VERIFIED NFT BARCODE</span>
              <div className="font-editorial text-lg font-bold">KINETIC SOUND LAB</div>
              <div className="text-xs text-[#8e8e88]">SECTION: VIP MEZZANINE · PASS #8819</div>
              <div className="py-2 px-3 bg-[#ffffff] text-[#111111] font-mono-code font-bold tracking-widest text-sm rounded">
                ||| | |||| | ||||| ||
              </div>
            </div>
          </div>
          <div className="text-[10px] text-[#6f6f6a] text-center">Add to Apple Wallet · Holographic Foil</div>
        </div>
      );
    }
    return (
      <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
        <div>
          <div className="pb-2 border-b border-[#d8d5cc] mb-3">
            <span className="font-bold text-xs text-[#111111]">COLLECTOR ARCHIVE</span>
          </div>
          <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded mb-2">
            <span className="text-[10px] text-[#6f6f6a]">TOTAL ATTENDED SHOWS</span>
            <div className="font-editorial text-xl font-bold text-[#111111]">24 PERFORMANCES</div>
          </div>
          <div className="space-y-1 text-[11px] text-[#444748]">
            <div>• Printworks Closing Series (London)</div>
            <div>• Mutek Spatial Sound (Montreal)</div>
            <div>• Sonar D+ Stage (Barcelona)</div>
          </div>
        </div>
        <div className="text-[10px] text-[#6f6f6a] text-center">Curated Community Passport</div>
      </div>
    );
  }

  // ATLAS — Spatial Travel & Wilderness Navigation
  if (conceptId === 'atlas') {
    if (screenIndex === 0) {
      return (
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="flex justify-between pb-2 border-b border-[#d8d5cc] mb-3">
              <span className="font-bold text-xs text-[#111111]">ATLAS CARTOGRAPHY</span>
              <span className="text-[#0e8a16] text-[10px] font-bold">GPS READY</span>
            </div>
            <div className="p-3 bg-[#111111] text-[#F2F0EA] border border-[#333333] rounded mb-3">
              <span className="text-[10px] text-[#c7ff3d] block">ACTIVE SECTOR:</span>
              <div className="font-editorial text-base font-bold">TORRES DEL PAINE (CHILE)</div>
              <div className="text-[10px] text-[#8e8e88] mt-1">Coordinates: 51.2532° S, 72.8814° W</div>
            </div>
            <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-[#6f6f6a]">ELEVATION:</span>
                <span className="font-bold">2,850m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6f6f6a]">BASE CAMP:</span>
                <span className="font-bold">Campamento Italiano (8.4 km)</span>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-[#6f6f6a] text-center">Topographical 3D Mesh Active</div>
        </div>
      );
    }
    if (screenIndex === 1) {
      return (
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="pb-2 border-b border-[#d8d5cc] mb-3">
              <span className="font-bold text-xs text-[#111111]">WAYPOINT DOSSIER</span>
            </div>
            <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded space-y-2">
              <div className="font-bold text-sm text-[#111111]">Mirador Britanico Glacier</div>
              <p className="font-editorial text-xs text-[#444748]">
                A 360-degree natural amphitheater surrounded by granite spires and hanging glaciers.
              </p>
              <div className="text-[10px] text-[#6f6f6a] pt-2 border-t border-[#d8d5cc]">
                TERRAIN DIFFICULTY: CLASS 3 SCRAMBLE · WATER SPRINGS: 2 FOUND
              </div>
            </div>
          </div>
          <button className="py-2.5 bg-[#111111] text-[#F2F0EA] font-bold text-xs uppercase text-center">
            DOWNLOAD OFFLINE MAP (42 MB)
          </button>
        </div>
      );
    }
    if (screenIndex === 2) {
      return (
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="pb-2 border-b border-[#d8d5cc] mb-3">
              <span className="font-bold text-xs text-[#111111]">COMPASS &amp; HUD</span>
            </div>
            <div className="w-24 h-24 rounded-full border-2 border-[#111111] mx-auto flex items-center justify-center my-4 relative">
              <div className="font-bold text-base text-[#111111]">342° NW</div>
              <div className="absolute top-1 text-[9px] text-[#c7ff3d] bg-[#111111] px-1 rounded">N</div>
            </div>
            <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded text-center text-xs">
              <span className="text-[#6f6f6a]">SUNSET WINDOW:</span>
              <span className="font-bold text-[#111111] ml-1">20:42 PM (1h 14m remaining)</span>
            </div>
          </div>
          <div className="text-[10px] text-[#6f6f6a] text-center">High-Contrast Emergency Mode</div>
        </div>
      );
    }
    return (
      <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
        <div>
          <div className="pb-2 border-b border-[#d8d5cc] mb-3">
            <span className="font-bold text-xs text-[#111111]">EXPEDITION PLANNER</span>
          </div>
          <div className="space-y-2">
            <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded flex justify-between">
              <span>Day 1: Laguna Amarga → Seron</span>
              <span className="font-bold">13 km</span>
            </div>
            <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded flex justify-between">
              <span>Day 2: Seron → Dickson Lake</span>
              <span className="font-bold">18 km</span>
            </div>
            <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded flex justify-between">
              <span>Day 3: Dickson → Los Perros Pass</span>
              <span className="font-bold">11 km</span>
            </div>
          </div>
        </div>
        <div className="text-[10px] text-[#6f6f6a] text-center">Calculated Caloric Demand: 3,800 kcal/day</div>
      </div>
    );
  }

  // ORBIT — High-Velocity SaaS Sprint Command
  if (screenIndex === 0) {
    return (
      <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
        <div>
          <div className="flex justify-between pb-2 border-b border-[#d8d5cc] mb-3">
            <span className="font-bold text-xs text-[#111111]">ORBIT COMMAND</span>
            <span className="text-[#0e8a16] font-bold text-[10px]">ALL SYSTEMS GO</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded">
              <span className="text-[10px] text-[#6f6f6a] block">OPEN PRs</span>
              <span className="font-bold text-base text-[#111111]">12 QUEUED</span>
            </div>
            <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded">
              <span className="text-[10px] text-[#6f6f6a] block">PIPELINE</span>
              <span className="font-bold text-base text-[#0e8a16]">PASSING</span>
            </div>
          </div>
          <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded space-y-1">
            <div className="text-[10px] text-[#6f6f6a]">BOTTLENECK ALERT</div>
            <div className="font-bold text-xs text-[#111111]">API Gateway Migration awaiting 1 review</div>
          </div>
        </div>
        <div className="text-[10px] text-[#6f6f6a] text-center">Real-Time Team Velocity Stream</div>
      </div>
    );
  }
  if (screenIndex === 1) {
    return (
      <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
        <div>
          <div className="pb-2 border-b border-[#d8d5cc] mb-3">
            <span className="font-bold text-xs text-[#111111]">PR #104 · CODE DIFF</span>
          </div>
          <div className="p-2.5 bg-[#111111] text-[#F2F0EA] border border-[#333333] rounded text-[10px] font-mono-code space-y-1">
            <div className="text-[#8e8e88]">// packages/theme/tokens.ts</div>
            <div className="text-[#ff5f56]">- const accent = '#5500ff';</div>
            <div className="text-[#c7ff3d]">+ const accent = '#c7ff3d';</div>
          </div>
          <div className="mt-3 p-2 bg-[#ffffff] border border-[#d8d5cc] rounded text-xs">
            Reviewed by 2 Staff Engineers · Zero test regressions
          </div>
        </div>
        <button className="py-2.5 bg-[#111111] text-[#c7ff3d] font-bold text-xs uppercase text-center rounded">
          APPROVE &amp; MERGE (QUICK GESTURE)
        </button>
      </div>
    );
  }
  if (screenIndex === 2) {
    return (
      <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
        <div>
          <div className="pb-2 border-b border-[#d8d5cc] mb-3">
            <span className="font-bold text-xs text-[#111111]">CLUSTER TELEMETRY</span>
          </div>
          <div className="space-y-2">
            <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded flex justify-between items-center">
              <span>Edge Ingress (us-east-1)</span>
              <span className="text-[#0e8a16] font-bold">14ms p99</span>
            </div>
            <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded flex justify-between items-center">
              <span>Postgres Connection Pool</span>
              <span className="font-bold">42/100 active</span>
            </div>
          </div>
        </div>
        <div className="text-[10px] text-[#6f6f6a] text-center">Instant Rollback Trigger Available</div>
      </div>
    );
  }
  return (
    <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
      <div>
        <div className="pb-2 border-b border-[#d8d5cc] mb-3">
          <span className="font-bold text-xs text-[#111111]">SECURITY &amp; ACCESS</span>
        </div>
        <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded space-y-2">
          <div className="flex justify-between items-center">
            <span>2FA Enforcement</span>
            <span className="text-[#0e8a16] font-bold">ACTIVE</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Production Secrets</span>
            <span className="text-[#6f6f6a]">ROTATED 3D AGO</span>
          </div>
        </div>
      </div>
      <div className="text-[10px] text-[#6f6f6a] text-center">Granular RBAC Workspace Controls</div>
    </div>
  );
}
