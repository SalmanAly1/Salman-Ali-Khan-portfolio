import { useState, MouseEvent } from 'react';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Monitor,
  Smartphone,
  Layers,
  ArrowUpRight,
  Lock,
  Wifi,
  Battery,
  Calendar,
  Clock,
  Car,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { FRONTEND_PROJECTS } from '../data/portfolio';

export default function FrontendWorkSection() {
  const [activeWebScreen, setActiveWebScreen] = useState<number>(0);
  const [activeMobileScreen, setActiveMobileScreen] = useState<number>(0);
  const [webTilt, setWebTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [mobileTilt, setMobileTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const webProject = FRONTEND_PROJECTS.find((p) => p.typeTag === 'WEB APP') || FRONTEND_PROJECTS[0];
  const mobileProject = FRONTEND_PROJECTS.find((p) => p.typeTag === 'MOBILE APP') || FRONTEND_PROJECTS[1];

  const handleWebMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    setWebTilt({ x, y });
  };

  const handleMobileMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setMobileTilt({ x, y });
  };

  const resetTilt = (setter: (val: { x: number; y: number }) => void) => {
    setter({ x: 0, y: 0 });
  };

  return (
    <section
      id="frontend-work"
      className="py-20 md:py-28 border-b border-[#d8d5cc] max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12 bg-[#F2F0EA]"
    >
      {/* Category Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111] pb-6 mb-12 md:mb-16 gap-4">
        <div>
          <div className="flex items-center gap-2.5 font-mono-code text-xs text-[#6f6f6a] uppercase tracking-wider mb-2">
            <span className="w-2.5 h-2.5 bg-[#111111]" />
            <span>DISCIPLINE 01 // PRODUCTION CODE</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#111111]">
            FRONTEND DEVELOPMENT
          </h2>
        </div>
        <div className="font-mono-code text-xs text-[#6f6f6a] max-w-sm text-left md:text-right">
          <span className="text-[#111111] font-semibold">2 CURATED PRODUCTS</span> — 01 Web Application &amp; 01 Mobile PWA engineered with React 19, TypeScript, dynamic APIs, and responsive design systems.
        </div>
      </div>

      {/* ====================================================================
          PROJECT 01: WEB APPLICATION (LUXURY CHAUFFEUR)
          ==================================================================== */}
      <div className="mb-24 pb-20 border-b border-[#d8d5cc]">
        {/* Project Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-sm font-bold bg-[#111111] text-[#F2F0EA] px-2.5 py-1">
              01
            </span>
            <span className="font-mono-code text-xs px-2.5 py-1 border border-[#111111] bg-[#ffffff] font-semibold text-[#111111] uppercase tracking-wider flex items-center gap-1.5">
              <Monitor size={13} className="text-[#111111]" />
              {webProject.typeTag}
            </span>
            <span className="font-mono-code text-[11px] text-[#6f6f6a] uppercase hidden sm:inline">
              {webProject.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#ffffff] border border-[#d8d5cc] font-mono-code text-[11px] font-semibold text-[#111111]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              {webProject.projectType}
            </span>
            {webProject.liveUrl && (
              <a
                href={webProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#111111] text-[#F2F0EA] hover:bg-[#c7ff3d] hover:text-[#111111] px-3.5 py-1 font-mono-code text-xs transition-colors font-medium"
              >
                <span>LIVE APP</span>
                <ArrowUpRight size={13} />
              </a>
            )}
            {webProject.githubUrl && (
              <a
                href={webProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#F2F0EA] px-3.5 py-1 font-mono-code text-xs transition-colors"
              >
                <Github size={13} />
                <span>GITHUB</span>
              </a>
            )}
          </div>
        </div>

        {/* Large Browser / Product Presentation with 3D Perspective */}
        <div
          onMouseMove={handleWebMouseMove}
          onMouseLeave={() => resetTilt(setWebTilt)}
          style={{
            transform: `perspective(1200px) rotateX(${webTilt.y}deg) rotateY(${webTilt.x}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
          className="relative border-2 border-[#111111] bg-[#111111] shadow-2xl rounded-sm overflow-hidden mb-10 transition-shadow duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
        >
          {/* Browser Chrome Header */}
          <div className="bg-[#1e1e24] px-4 py-3 border-b border-[#333333] flex flex-wrap items-center justify-between gap-3 select-none">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="text-[11px] font-mono-code text-[#888888] ml-2 hidden sm:inline">
                Google Chrome · Production Build
              </span>
            </div>

            {/* URL Omnibar */}
            <div className="flex-1 max-w-xl mx-auto flex items-center justify-center">
              <div className="w-full bg-[#111111] border border-[#383838] px-3 py-1 rounded-sm flex items-center gap-2 font-mono-code text-[11px] text-[#cccccc]">
                <Lock size={12} className="text-[#10b981]" />
                <span className="text-[#10b981]">https://</span>
                <span className="text-white font-medium">luxurychauffeurservice.co.uk</span>
                <span className="text-[#888888]">/reservation</span>
              </div>
            </div>

            {/* Screen Count Badge */}
            <div className="font-mono-code text-[11px] text-[#888888] hidden md:flex items-center gap-2">
              <span className="text-[#c7ff3d]">●</span>
              <span>SCREEN {activeWebScreen + 1} OF {webProject.screens.length}</span>
            </div>
          </div>

          {/* Interactive Screen Tabs */}
          <div className="bg-[#16161a] border-b border-[#2a2a2e] px-3 sm:px-4 py-2 flex items-center gap-2 overflow-x-auto">
            {webProject.screens.map((screen, idx) => (
              <button
                key={screen.id}
                onClick={() => setActiveWebScreen(idx)}
                className={`px-3 py-1.5 font-mono-code text-xs whitespace-nowrap transition-all flex items-center gap-2 rounded-xs ${
                  activeWebScreen === idx
                    ? 'bg-[#ffffff] text-[#111111] font-bold shadow-xs'
                    : 'bg-[#222228] text-[#aaaaaa] hover:text-white hover:bg-[#2c2c34]'
                }`}
              >
                <span className="text-[10px] opacity-70">0{idx + 1}</span>
                <span>{screen.title}</span>
              </button>
            ))}
          </div>

          {/* Screen Display Area (Interactive Simulation) */}
          <div className="relative min-h-[460px] sm:min-h-[540px] lg:min-h-[580px] bg-[#0c0d10] text-[#F2F0EA] p-5 sm:p-8 flex flex-col justify-between">
            {/* Screen Content View: Active Screen 0 */}
            {activeWebScreen === 0 && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between border-b border-[#24252e] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#c7ff3d] text-[#111111] flex items-center justify-center font-mono-code font-bold text-xs">
                      LC
                    </div>
                    <div>
                      <h3 className="font-editorial text-lg font-bold text-white tracking-tight">
                        FLEET RESERVATION &amp; DYNAMIC ROUTE MATRIX
                      </h3>
                      <p className="font-mono-code text-[11px] text-[#8e8e98]">
                        Google Maps Directions API integration with dynamic ETA &amp; class multipliers
                      </p>
                    </div>
                  </div>
                  <span className="font-mono-code text-xs px-2 py-0.5 bg-[#1f2028] text-[#c7ff3d] border border-[#303240]">
                    LIVE TELEMETRY
                  </span>
                </div>

                {/* Simulated Product UI Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Route Inputs */}
                  <div className="lg:col-span-5 bg-[#14151a] border border-[#262833] p-5 rounded-xs space-y-4">
                    <div className="font-mono-code text-[11px] uppercase tracking-wider text-[#8e8e98]">
                      Step 1 · Location Waypoints
                    </div>
                    <div>
                      <label className="block font-mono-code text-[10px] text-[#8e8e98] mb-1">PICKUP LOCATION</label>
                      <div className="bg-[#0e0f12] border border-[#333544] px-3 py-2 text-xs font-mono-code text-white flex items-center justify-between">
                        <span>The Savoy Hotel, Strand, London WC2R</span>
                        <span className="text-[#10b981] text-[10px]">VERIFIED</span>
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono-code text-[10px] text-[#8e8e98] mb-1">DROP-OFF DESTINATION</label>
                      <div className="bg-[#0e0f12] border border-[#333544] px-3 py-2 text-xs font-mono-code text-white flex items-center justify-between">
                        <span>London Heathrow Airport (LHR) Terminal 5</span>
                        <span className="text-[#10b981] text-[10px]">AIRPORT WAYPOINT</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-[#262833] flex items-center justify-between font-mono-code text-xs">
                      <span className="text-[#8e8e98]">ESTIMATED DISTANCE</span>
                      <span className="text-white font-bold">18.4 MILES / 42 MINS</span>
                    </div>
                  </div>

                  {/* Right Column: Vehicle Class Cards */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="font-mono-code text-[11px] uppercase tracking-wider text-[#8e8e98] mb-1">
                      Step 2 · Select Chauffeur Tier
                    </div>

                    {[
                      { name: 'FIRST CLASS SEDAN', model: 'Mercedes-Benz S-Class (W223)', pax: '3 Passengers', bags: '3 Luggage', price: '£145.00', active: true },
                      { name: 'EXECUTIVE MPV', model: 'Mercedes-Benz V-Class Extra-Long', pax: '7 Passengers', bags: '7 Luggage', price: '£180.00', active: false },
                      { name: 'ULTRA LUXURY', model: 'Rolls-Royce Ghost Extended', pax: '3 Passengers', bags: '3 Luggage', price: '£420.00', active: false },
                    ].map((tier) => (
                      <div
                        key={tier.name}
                        className={`p-4 border transition-all flex items-center justify-between ${
                          tier.active
                            ? 'bg-[#181922] border-[#c7ff3d] shadow-sm'
                            : 'bg-[#121318] border-[#262833] opacity-75'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Car size={20} className={tier.active ? 'text-[#c7ff3d]' : 'text-[#666672]'} />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-editorial text-sm font-bold text-white tracking-wide">{tier.name}</span>
                              {tier.active && (
                                <span className="bg-[#c7ff3d] text-[#111111] font-mono-code text-[9px] px-1.5 py-0.2 font-bold">
                                  SELECTED
                                </span>
                              )}
                            </div>
                            <div className="font-mono-code text-[11px] text-[#8e8e98]">
                              {tier.model} · {tier.pax} · {tier.bags}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono-code text-base font-bold text-white">{tier.price}</div>
                          <div className="font-mono-code text-[10px] text-[#8e8e98]">Fixed Guaranteed</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Screen 1: Passenger Specs */}
            {activeWebScreen === 1 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#24252e] pb-4">
                  <div>
                    <h3 className="font-editorial text-lg font-bold text-white tracking-tight">
                      PASSENGER DETAILS &amp; FLIGHT NUMBER DETECTION
                    </h3>
                    <p className="font-mono-code text-[11px] text-[#8e8e98]">
                      Auto-linking flight delays with driver dispatch time buffers
                    </p>
                  </div>
                  <span className="font-mono-code text-xs px-2 py-0.5 bg-[#1f2028] text-white border border-[#303240]">
                    STEP 2 OF 4
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#14151a] border border-[#262833] p-6 rounded-xs">
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono-code text-[10px] text-[#8e8e98] mb-1">PRIMARY PASSENGER NAME</label>
                      <div className="bg-[#0e0f12] border border-[#333544] px-3 py-2 text-xs font-mono-code text-white">
                        Arthur Pendelton
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono-code text-[10px] text-[#8e8e98] mb-1">CONTACT TELEPHONE (INTERNATIONAL)</label>
                      <div className="bg-[#0e0f12] border border-[#333544] px-3 py-2 text-xs font-mono-code text-white">
                        +44 7911 123456
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono-code text-[10px] text-[#8e8e98] mb-1">INBOUND FLIGHT NUMBER</label>
                      <div className="bg-[#0e0f12] border border-[#333544] px-3 py-2 text-xs font-mono-code text-[#c7ff3d] flex items-center justify-between">
                        <span>BA 0178 (JFK → LHR)</span>
                        <span className="text-[10px] text-[#10b981]">FLIGHT TRACKED</span>
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono-code text-[10px] text-[#8e8e98] mb-1">COMPLIMENTARY WAIT TIME</label>
                      <div className="bg-[#0e0f12] border border-[#333544] px-3 py-2 text-xs font-mono-code text-white">
                        60 Minutes post-touchdown (Free Cancellation)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Screen 2: Stripe Checkout */}
            {activeWebScreen === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#24252e] pb-4">
                  <div>
                    <h3 className="font-editorial text-lg font-bold text-white tracking-tight">
                      STRIPE PAYMENT ELEMENTS &amp; INVOICE VERIFICATION
                    </h3>
                    <p className="font-mono-code text-[11px] text-[#8e8e98]">
                      Encrypted PCI DSS Level 1 payment gateway with 3D Secure 2.0 authentication
                    </p>
                  </div>
                  <span className="font-mono-code text-xs px-2 py-0.5 bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40">
                    256-BIT ENCRYPTION
                  </span>
                </div>

                <div className="max-w-xl mx-auto bg-[#14151a] border border-[#262833] p-6 rounded-xs space-y-4">
                  <div className="flex items-center justify-between font-mono-code text-xs border-b border-[#262833] pb-3">
                    <span className="text-[#8e8e98]">RESERVATION TOTAL</span>
                    <span className="text-white font-bold text-lg">£145.00 GBP</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-[#0e0f12] border border-[#333544] p-3 text-xs font-mono-code text-white flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-4 bg-[#3b82f6] rounded-xs inline-block" />
                        <span>•••• •••• •••• 4242</span>
                      </div>
                      <span className="text-[#8e8e98]">12/28</span>
                    </div>
                    <div className="bg-[#c7ff3d] text-[#111111] p-3 text-center font-mono-code text-xs font-bold uppercase tracking-wider">
                      CONFIRM &amp; DISPATCH CHAUFFEUR
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Screen 3: Live Driver Dispatch */}
            {activeWebScreen === 3 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#24252e] pb-4">
                  <div>
                    <h3 className="font-editorial text-lg font-bold text-white tracking-tight">
                      REAL-TIME DRIVER GPS DISPATCH &amp; WAYPOINTS
                    </h3>
                    <p className="font-mono-code text-[11px] text-[#8e8e98]">
                      Dynamic web sockets telemetry updating vehicle coordinates every 3 seconds
                    </p>
                  </div>
                  <span className="font-mono-code text-xs px-2 py-0.5 bg-[#c7ff3d] text-[#111111] font-bold">
                    DRIVER EN ROUTE
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 bg-[#14151a] border border-[#262833] p-5 rounded-xs space-y-3 font-mono-code text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#8e8e98]">ASSIGNED CHAUFFEUR</span>
                      <span className="text-white font-bold">James Crawford (Rating 4.98 ★)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#8e8e98]">VEHICLE</span>
                      <span className="text-white">Mercedes S580e · Obsidian Black (LC23 YTR)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#8e8e98]">CURRENT ESTIMATED ARRIVAL</span>
                      <span className="text-[#c7ff3d] font-bold text-sm">7 MINUTES AWAY (2.1 MILES)</span>
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-[#0e0f12] border border-[#262833] p-5 text-center space-y-2">
                    <div className="font-mono-code text-[10px] text-[#8e8e98] uppercase">SMS Notification Sent</div>
                    <p className="text-xs text-white">Passenger notified via SMS with driver direct line.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Screen Bottom Bar */}
            <div className="mt-8 pt-4 border-t border-[#22232c] flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-[#8e8e98]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                <span>{webProject.screens[activeWebScreen].description}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveWebScreen((prev) => (prev > 0 ? prev - 1 : webProject.screens.length - 1))}
                  className="px-2 py-1 bg-[#1a1b22] text-white hover:bg-[#282935] text-[11px]"
                >
                  PREV
                </button>
                <button
                  onClick={() => setActiveWebScreen((prev) => (prev < webProject.screens.length - 1 ? prev + 1 : 0))}
                  className="px-2 py-1 bg-[#1a1b22] text-white hover:bg-[#282935] text-[11px]"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Case Study Grid for Web App */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="font-editorial text-2xl font-bold text-[#111111] uppercase tracking-tight">
                {webProject.title}
              </h3>
              <p className="font-mono-code text-xs text-[#6f6f6a] mt-1">
                {webProject.subtitle}
              </p>
            </div>

            <div className="border-t border-[#d8d5cc] pt-4 space-y-3 font-mono-code text-xs">
              <div className="flex justify-between">
                <span className="text-[#6f6f6a]">MY ROLE:</span>
                <span className="text-[#111111] font-semibold">{webProject.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6f6f6a]">TIMELINE:</span>
                <span className="text-[#111111]">6 MONTH PRODUCTION ENGAGEMENT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6f6f6a]">DELIVERABLE:</span>
                <span className="text-[#111111]">FULL RESPONSIVE WEB APP</span>
              </div>
            </div>

            <div className="border-t border-[#d8d5cc] pt-4">
              <div className="font-mono-code text-[11px] uppercase tracking-wider text-[#6f6f6a] mb-2">
                TECHNOLOGY STACK
              </div>
              <div className="flex flex-wrap gap-1.5">
                {webProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#ffffff] border border-[#d8d5cc] text-[#111111] font-mono-code text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {webProject.metrics.map((m) => (
                <div key={m.label} className="p-3 bg-[#ffffff] border border-[#d8d5cc]">
                  <div className="font-mono-code text-[10px] text-[#6f6f6a]">{m.label}</div>
                  <div className="font-mono-code text-base font-bold text-[#111111] mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {/* Problem & Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#ffffff] border border-[#d8d5cc]">
                <div className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ff5f56]" />
                  <span>THE PROBLEM</span>
                </div>
                <p className="text-sm text-[#444748] leading-relaxed">
                  {webProject.problem}
                </p>
              </div>

              <div className="p-6 bg-[#ffffff] border border-[#d8d5cc]">
                <div className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#10b981]" />
                  <span>THE TECHNICAL APPROACH</span>
                </div>
                <p className="text-sm text-[#444748] leading-relaxed">
                  {webProject.approach}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="p-6 bg-[#ffffff] border border-[#d8d5cc]">
              <div className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider mb-3">
                KEY PRODUCTION FEATURES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {webProject.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-xs text-[#222224]">
                    <CheckCircle2 size={14} className="text-[#10b981] mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Process */}
            <div className="p-6 bg-[#ffffff] border border-[#111111]">
              <div className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider mb-4">
                DEVELOPMENT &amp; ARCHITECTURE PROCESS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {webProject.process.map((step) => (
                  <div key={step.step} className="border-t-2 border-[#111111] pt-2">
                    <span className="font-mono-code text-[11px] font-bold text-[#111111] block mb-1">
                      STEP {step.step}
                    </span>
                    <h4 className="font-editorial text-sm font-bold text-[#111111] leading-tight mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-[#6f6f6a] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          PROJECT 02: MOBILE APPLICATION (QFLOW)
          ==================================================================== */}
      <div>
        {/* Project Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-sm font-bold bg-[#111111] text-[#F2F0EA] px-2.5 py-1">
              02
            </span>
            <span className="font-mono-code text-xs px-2.5 py-1 border border-[#111111] bg-[#ffffff] font-semibold text-[#111111] uppercase tracking-wider flex items-center gap-1.5">
              <Smartphone size={13} className="text-[#111111]" />
              {mobileProject.typeTag}
            </span>
            <span className="font-mono-code text-[11px] text-[#6f6f6a] uppercase hidden sm:inline">
              {mobileProject.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#ffffff] border border-[#d8d5cc] font-mono-code text-[11px] font-semibold text-[#111111]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              {mobileProject.projectType}
            </span>
            {mobileProject.githubUrl && (
              <a
                href={mobileProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#F2F0EA] px-3.5 py-1 font-mono-code text-xs transition-colors"
              >
                <Github size={13} />
                <span>GITHUB REPO</span>
              </a>
            )}
          </div>
        </div>

        {/* Realistic Smartphone Mockup Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-10">
          {/* Left Column: Interactive Mobile Frame Presentation */}
          <div
            onMouseMove={handleMobileMouseMove}
            onMouseLeave={() => resetTilt(setMobileTilt)}
            className="lg:col-span-6 flex justify-center py-6"
          >
            <div
              style={{
                transform: `perspective(1000px) rotateX(${mobileTilt.y}deg) rotateY(${mobileTilt.x}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] bg-[#1a1b22] p-4 rounded-[48px] border-[6px] border-[#2c2d38] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] transition-transform duration-300"
            >
              {/* Outer Phone Hardware Details */}
              <div className="absolute -left-[9px] top-24 w-1.5 h-10 bg-[#3a3b48] rounded-l-xs" />
              <div className="absolute -left-[9px] top-38 w-1.5 h-12 bg-[#3a3b48] rounded-l-xs" />
              <div className="absolute -right-[9px] top-28 w-1.5 h-14 bg-[#3a3b48] rounded-r-xs" />

              {/* Screen Glass Bezel */}
              <div className="relative bg-[#0b0c10] text-white rounded-[38px] overflow-hidden min-h-[620px] flex flex-col justify-between border border-[#2b2c3a] p-4">
                {/* Dynamic Island Header */}
                <div className="flex items-center justify-between pt-1 px-3 select-none">
                  <span className="font-mono-code text-xs font-bold text-white">9:41</span>
                  {/* Pill */}
                  <div className="w-24 h-5 bg-[#000000] rounded-full flex items-center justify-center gap-2 px-2 border border-[#222222]">
                    <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                    <span className="text-[9px] font-mono-code text-[#cccccc]">QFLOW</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white">
                    <Wifi size={12} />
                    <Battery size={13} />
                  </div>
                </div>

                {/* Main App Content View Switcher */}
                <div className="my-auto py-4">
                  {/* Screen 0: Availability Matrix */}
                  {activeMobileScreen === 0 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="flex items-center justify-between border-b border-[#22232e] pb-2">
                        <div>
                          <div className="text-[10px] font-mono-code text-[#8e8e98] uppercase">HOST CALENDAR</div>
                          <div className="font-editorial text-sm font-bold text-white">Select Consultation Date</div>
                        </div>
                        <span className="font-mono-code text-[10px] text-[#c7ff3d] bg-[#1a1b24] px-2 py-0.5 rounded-full">
                          OCTOBER 2024
                        </span>
                      </div>

                      {/* Horizontal Date Picker */}
                      <div className="grid grid-cols-5 gap-1.5 text-center font-mono-code text-xs">
                        {[
                          { day: 'MON', date: '21', slots: '4 slots', active: false },
                          { day: 'TUE', date: '22', slots: '6 slots', active: true },
                          { day: 'WED', date: '23', slots: '2 slots', active: false },
                          { day: 'THU', date: '24', slots: '5 slots', active: false },
                          { day: 'FRI', date: '25', slots: '3 slots', active: false },
                        ].map((d) => (
                          <div
                            key={d.date}
                            className={`p-2 rounded-lg border transition-all ${
                              d.active
                                ? 'bg-[#c7ff3d] text-[#111111] border-[#c7ff3d] font-bold'
                                : 'bg-[#151620] text-[#aaaaaa] border-[#252634]'
                            }`}
                          >
                            <div className="text-[9px]">{d.day}</div>
                            <div className="text-sm font-bold">{d.date}</div>
                            <div className="text-[8px] opacity-80">{d.slots}</div>
                          </div>
                        ))}
                      </div>

                      {/* Timezone Indicator */}
                      <div className="bg-[#151620] border border-[#252634] p-2.5 rounded-lg flex items-center justify-between text-[11px] font-mono-code">
                        <span className="text-[#8e8e98]">DETECTED TIMEZONE</span>
                        <span className="text-white font-medium">GMT+1 (London, UK)</span>
                      </div>

                      {/* Slot Grid */}
                      <div className="space-y-1.5">
                        <div className="text-[10px] font-mono-code text-[#8e8e98]">AVAILABLE TIME SLOTS</div>
                        <div className="grid grid-cols-2 gap-2 font-mono-code text-xs">
                          {['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM'].map((slot, i) => (
                            <div
                              key={slot}
                              className={`p-2.5 text-center rounded-lg border transition-all ${
                                i === 1
                                  ? 'bg-[#ffffff] text-[#111111] border-white font-bold shadow-xs'
                                  : 'bg-[#151620] text-white border-[#252634]'
                              }`}
                            >
                              {slot}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Screen 1: Tactile Slot Selector */}
                  {activeMobileScreen === 1 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="border-b border-[#22232e] pb-2">
                        <div className="text-[10px] font-mono-code text-[#8e8e98] uppercase">DURATION &amp; BUFFER</div>
                        <div className="font-editorial text-sm font-bold text-white">Consultation Type</div>
                      </div>

                      <div className="space-y-2">
                        {[
                          { title: '30-Min Strategy Call', desc: 'High-level roadmap & scope review', active: true },
                          { title: '60-Min Architecture Deep-Dive', desc: 'Code review & tech stack planning', active: false },
                          { title: '15-Min Quick Intro', desc: 'Casual touchpoint & alignment check', active: false },
                        ].map((item) => (
                          <div
                            key={item.title}
                            className={`p-3 rounded-lg border ${
                              item.active
                                ? 'bg-[#181a24] border-[#c7ff3d] text-white'
                                : 'bg-[#12131a] border-[#222432] text-[#8e8e98]'
                            }`}
                          >
                            <div className="font-mono-code text-xs font-bold text-white">{item.title}</div>
                            <div className="text-[10px] mt-0.5">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Screen 2: Client Intake Form */}
                  {activeMobileScreen === 2 && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="border-b border-[#22232e] pb-2">
                        <div className="text-[10px] font-mono-code text-[#8e8e98] uppercase">STEP 3 · INTAKE</div>
                        <div className="font-editorial text-sm font-bold text-white">Attendee Details</div>
                      </div>

                      <div className="space-y-2 text-xs font-mono-code">
                        <div>
                          <label className="text-[10px] text-[#8e8e98] block mb-1">FULL NAME</label>
                          <div className="bg-[#151620] border border-[#2b2d3c] p-2 text-white rounded-md">
                            Elena Vance
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] text-[#8e8e98] block mb-1">EMAIL ADDRESS</label>
                          <div className="bg-[#151620] border border-[#2b2d3c] p-2 text-white rounded-md">
                            elena.vance@techcorp.io
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] text-[#8e8e98] block mb-1">MEETING PURPOSE</label>
                          <div className="bg-[#151620] border border-[#2b2d3c] p-2 text-white rounded-md text-[11px]">
                            Frontend architecture review for Q4 launch
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Screen 3: Instant Confirmation */}
                  {activeMobileScreen === 3 && (
                    <div className="space-y-4 text-center animate-fadeIn py-2">
                      <div className="w-12 h-12 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center mx-auto border border-[#10b981]/40">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h4 className="font-editorial text-base font-bold text-white">Session Confirmed!</h4>
                        <p className="font-mono-code text-[11px] text-[#8e8e98] mt-1">
                          Calendar invite dispatched to your inbox.
                        </p>
                      </div>

                      <div className="bg-[#151620] border border-[#252634] p-3 text-left font-mono-code text-xs rounded-lg space-y-1">
                        <div className="flex justify-between">
                          <span className="text-[#8e8e98]">DATE:</span>
                          <span className="text-white">Tuesday, Oct 22, 2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8e8e98]">TIME:</span>
                          <span className="text-[#c7ff3d]">11:30 AM — 12:00 PM GMT+1</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8e8e98]">PLATFORM:</span>
                          <span className="text-white">Google Meet (Auto-Created)</span>
                        </div>
                      </div>

                      <div className="bg-[#c7ff3d] text-[#111111] py-2.5 font-mono-code text-xs font-bold rounded-lg uppercase">
                        Add to Apple / Google Calendar
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Home Indicator Bar & Screen Switcher */}
                <div className="pt-2 border-t border-[#22232e] select-none">
                  {/* Interactive Screen Selector Dots */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    {mobileProject.screens.map((screen, idx) => (
                      <button
                        key={screen.id}
                        onClick={() => setActiveMobileScreen(idx)}
                        className={`transition-all rounded-full ${
                          activeMobileScreen === idx
                            ? 'w-6 h-1.5 bg-[#c7ff3d]'
                            : 'w-1.5 h-1.5 bg-[#3a3b48] hover:bg-[#666677]'
                        }`}
                        title={screen.title}
                      />
                    ))}
                  </div>

                  {/* iPhone Home Swipe Bar */}
                  <div className="w-32 h-1 bg-[#444455] rounded-full mx-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Case Study Details for Mobile App */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="font-editorial text-2xl font-bold text-[#111111] uppercase tracking-tight">
                {mobileProject.title}
              </h3>
              <p className="font-mono-code text-xs text-[#6f6f6a] mt-1">
                {mobileProject.subtitle}
              </p>
            </div>

            {/* Screen Selector Pills */}
            <div>
              <div className="font-mono-code text-[11px] uppercase tracking-wider text-[#6f6f6a] mb-2">
                ACTIVE SMARTPHONE VIEW:
              </div>
              <div className="grid grid-cols-2 gap-2">
                {mobileProject.screens.map((screen, idx) => (
                  <button
                    key={screen.id}
                    onClick={() => setActiveMobileScreen(idx)}
                    className={`p-2.5 text-left border font-mono-code text-xs transition-all ${
                      activeMobileScreen === idx
                        ? 'bg-[#111111] text-[#F2F0EA] border-[#111111] font-semibold'
                        : 'bg-[#ffffff] text-[#111111] border-[#d8d5cc] hover:border-[#888888]'
                    }`}
                  >
                    <div className="text-[10px] opacity-70">SCREEN 0{idx + 1}</div>
                    <div className="truncate text-xs font-bold">{screen.title}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Problem & Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-[#ffffff] border border-[#d8d5cc]">
                <div className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                  THE CHALLENGE
                </div>
                <p className="text-xs text-[#444748] leading-relaxed">
                  {mobileProject.problem}
                </p>
              </div>

              <div className="p-5 bg-[#ffffff] border border-[#d8d5cc]">
                <div className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                  THE MOBILE SOLUTION
                </div>
                <p className="text-xs text-[#444748] leading-relaxed">
                  {mobileProject.approach}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="p-5 bg-[#ffffff] border border-[#d8d5cc]">
              <div className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                PWA SPECIFICATIONS &amp; FEATURES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {mobileProject.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-xs text-[#222224]">
                    <CheckCircle2 size={13} className="text-[#10b981] mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {mobileProject.metrics.map((m) => (
                <div key={m.label} className="p-3 bg-[#ffffff] border border-[#d8d5cc]">
                  <div className="font-mono-code text-[10px] text-[#6f6f6a]">{m.label}</div>
                  <div className="font-mono-code text-sm font-bold text-[#111111] mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
