import {
  TrendingUp,
  MapPin,
  Clock,
  Check,
  Calendar,
  Layers,
  ArrowUpRight,
  Search,
  Filter,
  CreditCard,
  Compass,
  Wallet,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { BrowserMockup, PhoneMockup } from './DeviceMockups';

interface VisualScreenProps {
  projectId: string;
  screenIndex: number;
}

export default function ProjectVisualScreens({ projectId, screenIndex }: VisualScreenProps) {
  // LUXURY CHAUFFEUR BOOKING PLATFORM
  if (projectId === 'chauffeur') {
    if (screenIndex === 0) {
      return (
        <BrowserMockup url="luxurychauffeur.vip/book" title="Luxury Chauffeur · Fleet Booking Engine">
          <div className="p-4 sm:p-6 bg-[#111111] text-[#F2F0EA]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2d2d2c] pb-4 mb-5">
              <div>
                <span className="font-mono-code text-[10px] text-[#c7ff3d] uppercase tracking-wider block">
                  REAL-TIME FLEET DISPATCH
                </span>
                <h4 className="font-editorial text-lg sm:text-xl font-bold uppercase tracking-tight text-[#F2F0EA]">
                  RESERVATION &amp; ROUTE PLANNER
                </h4>
              </div>
              <div className="flex items-center gap-3 font-mono-code text-xs">
                <span className="px-2.5 py-1 bg-[#1e1e1d] border border-[#333333] text-[#F2F0EA]">
                  HEATHROW T5 → MAYFAIR
                </span>
                <span className="text-[#c7ff3d] font-bold">28.4 MI · 42 MIN</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Route Map Preview */}
              <div className="lg:col-span-7 bg-[#1a1a1a] border border-[#2d2d2c] rounded-lg p-4 relative overflow-hidden h-64 sm:h-72 flex flex-col justify-between">
                {/* Simulated Google Maps Graphic */}
                <div className="absolute inset-0 opacity-25">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid-chauffeur" width="24" height="24" patternUnits="userSpaceOnUse">
                        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#6f6f6a" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-chauffeur)" />
                    <path
                      d="M 40 220 C 120 180, 180 200, 260 120 C 320 60, 420 80, 520 40"
                      fill="none"
                      stroke="#c7ff3d"
                      strokeWidth="3"
                      strokeDasharray="4 2"
                    />
                  </svg>
                </div>

                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-[#111111]/90 backdrop-blur-xs p-2.5 border border-[#333333] rounded">
                    <span className="font-mono-code text-[10px] text-[#8e8e88] block">PICKUP:</span>
                    <span className="font-mono-code text-xs text-[#F2F0EA] font-semibold flex items-center gap-1">
                      <MapPin size={11} className="text-[#c7ff3d]" /> Heathrow Airport (LHR)
                    </span>
                  </div>
                  <div className="bg-[#111111]/90 backdrop-blur-xs p-2.5 border border-[#333333] rounded">
                    <span className="font-mono-code text-[10px] text-[#8e8e88] block">DESTINATION:</span>
                    <span className="font-mono-code text-xs text-[#F2F0EA] font-semibold flex items-center gap-1">
                      <MapPin size={11} className="text-[#c7ff3d]" /> The Connaught, Mayfair
                    </span>
                  </div>
                </div>

                <div className="relative z-10 bg-[#111111]/90 border border-[#333333] p-2.5 rounded flex items-center justify-between text-xs font-mono-code">
                  <span className="text-[#8e8e88]">LIVE TRAFFIC: LIGHT · DYNAMIC ROUTING ACTIVE</span>
                  <span className="text-[#c7ff3d]">ETA: 14:22 GMT</span>
                </div>
              </div>

              {/* Vehicle Selection Cards */}
              <div className="lg:col-span-5 space-y-3">
                <div className="p-3 bg-[#1e1e1d] border-2 border-[#c7ff3d] rounded-lg">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-editorial text-sm font-bold uppercase text-[#F2F0EA]">
                      MERCEDES-MAYBACH S 680
                    </span>
                    <span className="font-mono-code text-xs text-[#c7ff3d] font-bold">£240.00</span>
                  </div>
                  <p className="font-mono-code text-[10px] text-[#8e8e88]">
                    First Class · Max 3 Passengers · 3 Luggage · Wi-Fi &amp; Champagne
                  </p>
                </div>

                <div className="p-3 bg-[#141414] border border-[#2d2d2c] rounded-lg opacity-85">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-editorial text-sm font-bold uppercase text-[#F2F0EA]">
                      RANGE ROVER AUTOBIOGRAPHY
                    </span>
                    <span className="font-mono-code text-xs text-[#F2F0EA]">£210.00</span>
                  </div>
                  <p className="font-mono-code text-[10px] text-[#8e8e88]">
                    Executive SUV · Max 4 Passengers · 4 Luggage · Panoramic Glass
                  </p>
                </div>

                <div className="p-3 bg-[#141414] border border-[#2d2d2c] rounded-lg opacity-85">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-editorial text-sm font-bold uppercase text-[#F2F0EA]">
                      MERCEDES V-CLASS EXTRA LONG
                    </span>
                    <span className="font-mono-code text-xs text-[#F2F0EA]">£185.00</span>
                  </div>
                  <p className="font-mono-code text-[10px] text-[#8e8e88]">
                    Business Van · Max 6 Passengers · 7 Luggage · Conference Seating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BrowserMockup>
      );
    }
    if (screenIndex === 1) {
      return (
        <BrowserMockup url="luxurychauffeur.vip/book/passenger-profile" title="Passenger Specification & Flight Tracking">
          <div className="p-6 bg-[#F2F0EA] text-[#111111]">
            <div className="max-w-xl mx-auto bg-[#ffffff] border border-[#d8d5cc] p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#d8d5cc] mb-4">
                <span className="font-mono-code text-xs font-bold uppercase text-[#111111]">
                  STEP 02 / PASSENGER &amp; FLIGHT VERIFICATION
                </span>
                <span className="font-mono-code text-[11px] text-[#6f6f6a]">AUTOMATED FLIGHT RADAR</span>
              </div>
              <div className="space-y-4 font-mono-code text-xs">
                <div>
                  <label className="block text-[#6f6f6a] mb-1">FLIGHT NUMBER (OPTIONAL FOR AIRPORT PICKUP)</label>
                  <div className="p-2.5 bg-[#F2F0EA] border border-[#d8d5cc] flex justify-between items-center text-[#111111] font-bold">
                    <span>BA 0178 (JFK → LHR)</span>
                    <span className="text-[#0e8a16] text-[10px]">ON SCHEDULE · ARRIVAL 13:40</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#6f6f6a] mb-1">PASSENGER NAME</label>
                    <div className="p-2.5 bg-[#F2F0EA] border border-[#d8d5cc] text-[#111111]">Lord Alexander Wright</div>
                  </div>
                  <div>
                    <label className="block text-[#6f6f6a] mb-1">CONTACT TELEPHONE</label>
                    <div className="p-2.5 bg-[#F2F0EA] border border-[#d8d5cc] text-[#111111]">+44 7700 900821</div>
                  </div>
                </div>
                <div>
                  <label className="block text-[#6f6f6a] mb-1">SPECIAL CHAUFFEUR PROTOCOLS</label>
                  <div className="p-2.5 bg-[#F2F0EA] border border-[#d8d5cc] text-[#6f6f6a]">
                    Chilled sparkling water, quiet cabin requested, meet &amp; greet with nameboard at Arrivals Hall.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BrowserMockup>
      );
    }
    if (screenIndex === 2) {
      return (
        <BrowserMockup url="luxurychauffeur.vip/book/payment-verification" title="Stripe Verified Checkout Flow">
          <div className="p-6 bg-[#111111] text-[#F2F0EA]">
            <div className="max-w-lg mx-auto bg-[#1c1c1c] border border-[#333333] p-6 rounded-lg">
              <div className="flex items-center justify-between pb-3 border-b border-[#333333] mb-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-[#c7ff3d]" size={18} />
                  <span className="font-mono-code text-xs font-bold text-[#F2F0EA]">SECURE STRIPE CHECKOUT</span>
                </div>
                <span className="font-mono-code text-[11px] text-[#8e8e88]">256-BIT SSL</span>
              </div>
              <div className="space-y-3 font-mono-code text-xs">
                <div className="flex justify-between py-2 border-b border-[#2d2d2c]">
                  <span className="text-[#8e8e88]">Service:</span>
                  <span className="text-[#F2F0EA] font-semibold">Airport Meet &amp; Chauffeur Transfer</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#2d2d2c]">
                  <span className="text-[#8e8e88]">Fleet:</span>
                  <span className="text-[#F2F0EA] font-semibold">Mercedes-Maybach S 680</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#2d2d2c]">
                  <span className="text-[#8e8e88]">Gratuity &amp; Airport Tolls:</span>
                  <span className="text-[#F2F0EA]">Included (100% transparent)</span>
                </div>
                <div className="flex justify-between py-3 text-sm">
                  <span className="text-[#8e8e88] font-bold">TOTAL CHARGE:</span>
                  <span className="text-[#c7ff3d] font-bold">£240.00 GBP</span>
                </div>
                <div className="p-3 bg-[#242424] border border-[#383838] rounded text-[11px] flex items-center justify-between text-[#a0a09a]">
                  <span className="flex items-center gap-1.5">
                    <CreditCard size={14} className="text-[#c7ff3d]" /> •••• •••• •••• 4242
                  </span>
                  <span className="text-[#c7ff3d] font-bold">INSTANTLY AUTHORIZED</span>
                </div>
              </div>
            </div>
          </div>
        </BrowserMockup>
      );
    }
    // Mobile driver tracker
    return (
      <PhoneMockup>
        <div className="px-4 py-2 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#d8d5cc] mb-3">
              <span className="font-bold text-[#111111] text-[11px]">CHAUFFEUR ARRIVING</span>
              <span className="text-[#0e8a16] font-bold text-[10px]">3 MIN AWAY</span>
            </div>
            <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded-lg mb-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#111111] text-[#F2F0EA] flex items-center justify-center font-bold text-sm">
                  DW
                </div>
                <div>
                  <span className="font-bold text-[#111111] text-xs block">David Williams</span>
                  <span className="text-[10px] text-[#6f6f6a]">Mercedes S 680 · LN73 VIP</span>
                </div>
              </div>
              <div className="text-[10px] text-[#6f6f6a] pt-2 border-t border-[#d8d5cc]">
                Rating: 4.96 ★ · 1,420 Completed Rides
              </div>
            </div>
            <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded-lg space-y-1.5 text-[11px]">
              <div className="text-[#6f6f6a]">PICKUP TERMINAL:</div>
              <div className="font-bold text-[#111111]">Heathrow Terminal 5 · VIP Lane 2</div>
            </div>
          </div>
          <button className="w-full py-3 bg-[#111111] text-[#F2F0EA] font-bold text-xs uppercase tracking-wider text-center">
            CALL CHAUFFEUR DIRECT
          </button>
        </div>
      </PhoneMockup>
    );
  }

  // QFLOW — REAL-TIME SCHEDULER
  if (projectId === 'qflow') {
    if (screenIndex === 0) {
      return (
        <BrowserMockup url="qflow.app/schedule/salman-consult" title="QFLOW · Real-Time Appointment Synchronization">
          <div className="p-4 sm:p-6 bg-[#F2F0EA] text-[#111111]">
            <div className="flex flex-wrap items-center justify-between pb-3 border-b border-[#d8d5cc] mb-4 gap-2">
              <div>
                <span className="font-mono-code text-[10px] text-[#6f6f6a] uppercase">FIREBASE REALTIME DB</span>
                <h4 className="font-editorial text-lg font-bold text-[#111111]">SELECT MEETING APPOINTMENT</h4>
              </div>
              <div className="font-mono-code text-xs px-2.5 py-1 bg-[#ffffff] border border-[#d8d5cc]">
                TIMEZONE: <span className="font-bold">GMT+5 (Islamabad / Karachi)</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {['MON 14', 'TUE 15', 'WED 16', 'THU 17', 'FRI 18'].map((day, dIdx) => (
                <div key={day} className="bg-[#ffffff] border border-[#d8d5cc] p-2.5">
                  <div className="font-mono-code text-[11px] font-bold text-center pb-2 border-b border-[#d8d5cc] mb-2 text-[#111111]">
                    {day}
                  </div>
                  <div className="space-y-1.5">
                    {['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'].map((slot, sIdx) => {
                      const isTaken = (dIdx + sIdx) % 3 === 0;
                      const isSelected = dIdx === 1 && sIdx === 2;
                      return (
                        <div
                          key={slot}
                          className={`p-1.5 font-mono-code text-[10px] text-center rounded transition-colors ${
                            isSelected
                              ? 'bg-[#111111] text-[#c7ff3d] font-bold border border-[#111111]'
                              : isTaken
                              ? 'bg-[#eae8e2] text-[#8e8e88] line-through cursor-not-allowed'
                              : 'bg-[#F2F0EA] text-[#111111] hover:bg-[#c7ff3d] cursor-pointer'
                          }`}
                        >
                          {slot}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BrowserMockup>
      );
    }
    if (screenIndex === 1) {
      return (
        <BrowserMockup url="qflow.app/admin/preferences" title="Organizer Multi-Timezone & Buffer Rules">
          <div className="p-6 bg-[#ffffff] text-[#111111]">
            <div className="max-w-xl mx-auto border border-[#d8d5cc] p-5 font-mono-code text-xs space-y-4">
              <div className="flex justify-between border-b border-[#d8d5cc] pb-2">
                <span className="font-bold text-[#111111]">MEETING BUFFER RULES</span>
                <span className="text-[#0e8a16]">LIVE SYNCED</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#d8d5cc]/50">
                <span className="text-[#6f6f6a]">Between-Meetings Buffer:</span>
                <span className="font-bold text-[#111111]">15 Minutes (Auto-Injected)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#d8d5cc]/50">
                <span className="text-[#6f6f6a]">Minimum Notice Window:</span>
                <span className="font-bold text-[#111111]">4 Hours in Advance</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#d8d5cc]/50">
                <span className="text-[#6f6f6a]">Multi-Timezone Detection:</span>
                <span className="font-bold text-[#111111]">Client Browser Geolocation + IANA</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-[#6f6f6a]">Automated Calendar Invite:</span>
                <span className="text-[#111111] font-bold">Google Calendar / Outlook / ICS</span>
              </div>
            </div>
          </div>
        </BrowserMockup>
      );
    }
    if (screenIndex === 2) {
      return (
        <BrowserMockup url="qflow.app/confirmed/invite-9921" title="Instant Calendar Confirmation">
          <div className="p-6 bg-[#111111] text-[#F2F0EA] flex items-center justify-center">
            <div className="p-6 bg-[#1a1a1a] border border-[#333333] max-w-md w-full text-center space-y-3 font-mono-code">
              <div className="w-10 h-10 rounded-full bg-[#c7ff3d] text-[#111111] flex items-center justify-center mx-auto">
                <Check size={20} />
              </div>
              <h4 className="font-editorial text-xl font-bold uppercase text-[#F2F0EA]">
                APPOINTMENT CONFIRMED
              </h4>
              <p className="text-xs text-[#8e8e88]">
                Frontend Architecture &amp; UI/UX Discovery Call with Salman Ali Khan
              </p>
              <div className="p-3 bg-[#111111] border border-[#2d2d2c] text-xs space-y-1 text-left">
                <div className="flex justify-between">
                  <span className="text-[#8e8e88]">Date:</span>
                  <span className="text-[#c7ff3d]">Tuesday, October 15, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e8e88]">Time:</span>
                  <span className="text-[#F2F0EA]">02:00 PM (GMT+5)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e8e88]">Platform:</span>
                  <span className="text-[#F2F0EA]">Google Meet (URL Generated)</span>
                </div>
              </div>
            </div>
          </div>
        </BrowserMockup>
      );
    }
    return (
      <PhoneMockup>
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="text-[10px] text-[#6f6f6a] uppercase">QFLOW TOUCH</div>
            <h4 className="font-editorial text-base font-bold text-[#111111] mb-3">BOOK WITH SALMAN</h4>
            <div className="space-y-2">
              {['10:00 AM', '01:30 PM', '03:45 PM'].map((t) => (
                <div key={t} className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded flex justify-between items-center">
                  <span className="font-bold text-[#111111]">{t}</span>
                  <span className="text-[10px] text-[#c7ff3d] bg-[#111111] px-2 py-0.5 rounded">SELECT</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded text-[10px] text-[#6f6f6a] text-center">
            Multi-timezone synchronized over Firebase RTDB
          </div>
        </div>
      </PhoneMockup>
    );
  }

  // NEXUS ANALYTICS (CONCEPT PROJECT)
  if (projectId === 'nexus-analytics') {
    if (screenIndex === 0) {
      return (
        <BrowserMockup url="nexus.bi/intelligence/overview" title="Nexus Analytics · Swiss BI Dashboard">
          <div className="p-4 sm:p-6 bg-[#111111] text-[#F2F0EA]">
            <div className="flex flex-wrap items-baseline justify-between border-b border-[#2d2d2c] pb-4 mb-5 gap-3">
              <div>
                <span className="font-mono-code text-[10px] text-[#c7ff3d] uppercase tracking-wider block">
                  SWISS MINIMALIST DATA SYSTEM
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold uppercase text-[#F2F0EA]">
                  EXECUTIVE REVENUE STREAM
                </h3>
              </div>
              <div className="flex items-center gap-3 font-mono-code text-xs">
                <span className="text-[#8e8e88]">PERIOD: LAST 90 DAYS</span>
                <span className="px-2 py-0.5 bg-[#1f1f1e] text-[#c7ff3d] border border-[#333333]">
                  +28.4% YOY
                </span>
              </div>
            </div>

            {/* Swiss KPI Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {[
                { label: 'ANNUAL RUN RATE', val: '$2,840,500', trend: '+14.2%' },
                { label: 'NET RETENTION', val: '118.6%', trend: '+3.1%' },
                { label: 'CAC PAYBACK', val: '4.2 MOS', trend: '-1.2 mo' },
                { label: 'ACTIVE COHORTS', val: '14,280', trend: '+820' },
              ].map((k) => (
                <div key={k.label} className="p-3 bg-[#181818] border border-[#2d2d2c] rounded">
                  <span className="font-mono-code text-[10px] text-[#8e8e88] block uppercase mb-1">
                    {k.label}
                  </span>
                  <div className="font-mono-code text-base sm:text-lg font-bold text-[#F2F0EA]">
                    {k.val}
                  </div>
                  <span className="font-mono-code text-[10px] text-[#c7ff3d]">{k.trend}</span>
                </div>
              ))}
            </div>

            {/* Clean Data Vector Curve */}
            <div className="p-4 bg-[#181818] border border-[#2d2d2c] rounded">
              <div className="flex justify-between items-center mb-2 font-mono-code text-xs">
                <span className="text-[#8e8e88]">MRR RECURRING REVENUE EXPANSION (USD)</span>
                <span className="text-[#c7ff3d]">ALL-TIME HIGH</span>
              </div>
              <div className="h-40 sm:h-48 w-full relative">
                <svg className="w-full h-full" viewBox="0 0 500 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="nexus-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c7ff3d" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#c7ff3d" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 140 C 60 130, 100 110, 160 115 C 220 120, 260 70, 320 60 C 380 50, 440 30, 500 15 L 500 160 L 0 160 Z"
                    fill="url(#nexus-grad)"
                  />
                  <path
                    d="M 0 140 C 60 130, 100 110, 160 115 C 220 120, 260 70, 320 60 C 380 50, 440 30, 500 15"
                    fill="none"
                    stroke="#c7ff3d"
                    strokeWidth="2.5"
                  />
                  <circle cx="500" cy="15" r="4" fill="#c7ff3d" />
                </svg>
              </div>
              <div className="flex justify-between font-mono-code text-[10px] text-[#6f6f6a] pt-2 border-t border-[#2d2d2c]">
                <span>JAN</span>
                <span>MAR</span>
                <span>MAY</span>
                <span>JUL</span>
                <span>SEP</span>
                <span>CURRENT</span>
              </div>
            </div>
          </div>
        </BrowserMockup>
      );
    }
    if (screenIndex === 1) {
      return (
        <BrowserMockup url="nexus.bi/intelligence/cohorts" title="Cohort Retention & Churn Matrix">
          <div className="p-6 bg-[#ffffff] text-[#111111]">
            <div className="flex justify-between items-center pb-3 border-b border-[#d8d5cc] mb-4">
              <span className="font-mono-code text-xs font-bold uppercase text-[#111111]">
                RETENTION HEATMAP (MONTH-OVER-MONTH)
              </span>
              <span className="font-mono-code text-[11px] text-[#6f6f6a]">SWISS PRECISION LAYOUT</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full font-mono-code text-xs">
                <thead>
                  <tr className="border-b border-[#d8d5cc] text-[#6f6f6a] text-[10px]">
                    <th className="text-left py-2">COHORT</th>
                    <th className="py-2">USERS</th>
                    <th className="py-2">M1</th>
                    <th className="py-2">M2</th>
                    <th className="py-2">M3</th>
                    <th className="py-2">M4</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d8d5cc]/40 text-center">
                  {[
                    { c: '2024-Q1', u: '1,420', m1: '100%', m2: '94.2%', m3: '89.1%', m4: '87.4%' },
                    { c: '2024-Q2', u: '2,180', m1: '100%', m2: '96.0%', m3: '91.8%', m4: '89.0%' },
                    { c: '2024-Q3', u: '3,840', m1: '100%', m2: '97.4%', m3: '93.2%', m4: '92.1%' },
                  ].map((row) => (
                    <tr key={row.c}>
                      <td className="text-left py-2 font-bold text-[#111111]">{row.c}</td>
                      <td className="py-2 text-[#6f6f6a]">{row.u}</td>
                      <td className="py-2 bg-[#F2F0EA] font-semibold">{row.m1}</td>
                      <td className="py-2 bg-[#eae8e2] font-semibold">{row.m2}</td>
                      <td className="py-2 bg-[#e2ded6] font-semibold">{row.m3}</td>
                      <td className="py-2 bg-[#d8d5cc] font-semibold">{row.m4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </BrowserMockup>
      );
    }
    if (screenIndex === 2) {
      return (
        <BrowserMockup url="nexus.bi/intelligence/query" title="Filterable Data & Transaction Inspector">
          <div className="p-6 bg-[#111111] text-[#F2F0EA]">
            <div className="flex justify-between items-center pb-3 border-b border-[#2d2d2c] mb-4">
              <span className="font-mono-code text-xs font-bold text-[#c7ff3d]">
                EVENT DISPATCH LOGS
              </span>
              <div className="flex items-center gap-2 font-mono-code text-[11px] text-[#8e8e88]">
                <Filter size={12} /> STATUS: 200 OK ONLY
              </div>
            </div>
            <div className="space-y-2 font-mono-code text-xs">
              {[
                { time: '14:22:01', event: 'subscription.created', val: '+$180.00', id: 'evt_9918a' },
                { time: '14:21:44', event: 'api.key.rotated', val: 'security', id: 'evt_9917f' },
                { time: '14:20:12', event: 'usage.threshold_80', val: 'notice', id: 'evt_9916b' },
                { time: '14:18:55', event: 'invoice.settled', val: '+$2,400.00', id: 'evt_9915e' },
              ].map((log) => (
                <div
                  key={log.id}
                  className="p-2 bg-[#181818] border border-[#2d2d2c] rounded flex justify-between items-center"
                >
                  <span className="text-[#8e8e88]">{log.time}</span>
                  <span className="text-[#F2F0EA] font-semibold">{log.event}</span>
                  <span className="text-[#c7ff3d]">{log.val}</span>
                  <span className="text-[#6f6f6a] text-[10px]">{log.id}</span>
                </div>
              ))}
            </div>
          </div>
        </BrowserMockup>
      );
    }
    return (
      <PhoneMockup>
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="flex justify-between pb-2 border-b border-[#d8d5cc] mb-3">
              <span className="font-bold text-[#111111] text-xs">NEXUS MOBILE</span>
              <span className="text-[#c7ff3d] bg-[#111111] px-1.5 py-0.5 rounded text-[10px]">LIVE</span>
            </div>
            <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded mb-3">
              <span className="text-[10px] text-[#6f6f6a] block">DAILY REVENUE</span>
              <span className="font-bold text-lg text-[#111111]">$14,290.40</span>
              <span className="text-[#0e8a16] text-[10px] block">+12.4% vs yesterday</span>
            </div>
            <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded space-y-1">
              <span className="text-[10px] text-[#6f6f6a] block">CURRENT ACTIVE SESSIONS</span>
              <span className="font-bold text-sm text-[#111111]">1,842 CONCURRENT</span>
            </div>
          </div>
          <div className="text-center font-mono-code text-[10px] text-[#6f6f6a]">
            Responsive Swiss Interface Parity
          </div>
        </div>
      </PhoneMockup>
    );
  }

  // NOMAD TRAVEL PLATFORM (CONCEPT PROJECT)
  if (projectId === 'nomad') {
    if (screenIndex === 0) {
      return (
        <BrowserMockup url="nomad.journal/explore" title="Nomad · Editorial Travel Curation">
          <div className="p-6 bg-[#F2F0EA] text-[#111111]">
            <div className="flex justify-between items-baseline border-b border-[#d8d5cc] pb-3 mb-5">
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#6f6f6a]">
                ISSUE 04 / KYOTO &amp; NORDIC ARCHIPELAGO
              </span>
              <span className="font-mono-code text-xs text-[#111111] font-bold">SPRING 2024</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-[#d8d5cc] bg-[#ffffff] p-3 group">
                <div className="aspect-[4/3] bg-[#eae8e2] mb-3 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
                    alt="Kyoto Zen architectural pavilion and rock garden guide in Nomad travel platform"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="font-mono-code text-[10px] text-[#6f6f6a] block">JAPAN · 35.0116° N</span>
                <h4 className="font-editorial text-base font-bold uppercase text-[#111111]">
                  KYOTO ZEN ARCHITECTURE
                </h4>
              </div>
              <div className="border border-[#d8d5cc] bg-[#ffffff] p-3 group">
                <div className="aspect-[4/3] bg-[#eae8e2] mb-3 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80"
                    alt="Amalfi Coast cliffside retreats destination guide in Nomad travel platform"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="font-mono-code text-[10px] text-[#6f6f6a] block">ITALY · 40.6340° N</span>
                <h4 className="font-editorial text-base font-bold uppercase text-[#111111]">
                  AMALFI CLIFFSIDE RETREATS
                </h4>
              </div>
              <div className="border border-[#d8d5cc] bg-[#ffffff] p-3 group">
                <div className="aspect-[4/3] bg-[#eae8e2] mb-3 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
                    alt="Dolomites alpine high trails and mountain passes in Nomad travel platform"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="font-mono-code text-[10px] text-[#6f6f6a] block">ALPS · 46.4102° N</span>
                <h4 className="font-editorial text-base font-bold uppercase text-[#111111]">
                  DOLOMITES HIGH TRAILS
                </h4>
              </div>
            </div>
          </div>
        </BrowserMockup>
      );
    }
    if (screenIndex === 1) {
      return (
        <BrowserMockup url="nomad.journal/destination/kyoto" title="Destination Dossier & Curated Waypoints">
          <div className="p-6 bg-[#ffffff] text-[#111111]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              <div className="md:col-span-5 space-y-3 font-editorial">
                <span className="font-mono-code text-xs text-[#6f6f6a] block">DISTRICT REPORT</span>
                <h3 className="text-2xl font-bold uppercase text-[#111111]">HIGASHIYAMA HISTORIC PRESERVE</h3>
                <p className="text-xs text-[#444748] leading-relaxed">
                  Preserved 14th-century wooden machiya residences, stone-paved lanes, and hidden matcha tea sanctuaries nestled beneath temple gardens.
                </p>
                <div className="font-mono-code text-xs pt-3 border-t border-[#d8d5cc] space-y-1">
                  <div>BEST HOURS: 05:30 — 08:00 AM</div>
                  <div>ALTITUDE: 105M ABOVE SEA</div>
                </div>
              </div>
              <div className="md:col-span-7 bg-[#F2F0EA] border border-[#d8d5cc] p-4 font-mono-code text-xs space-y-2">
                <span className="font-bold text-[#111111] block mb-1">CURATED WAYPOINTS:</span>
                <div className="p-2 bg-[#ffffff] border border-[#d8d5cc]">01. Kiyomizu-dera Veranda Viewpoint</div>
                <div className="p-2 bg-[#ffffff] border border-[#d8d5cc]">02. Hokan-ji Pagoda Sunset Axis</div>
                <div className="p-2 bg-[#ffffff] border border-[#d8d5cc]">03. Kodai-ji Bamboo Sanctuary</div>
              </div>
            </div>
          </div>
        </BrowserMockup>
      );
    }
    if (screenIndex === 2) {
      return (
        <BrowserMockup url="nomad.journal/planner/trip-401" title="Interactive Day-by-Day Itinerary Planner">
          <div className="p-6 bg-[#111111] text-[#F2F0EA]">
            <div className="flex justify-between items-center pb-3 border-b border-[#2d2d2c] mb-4">
              <span className="font-mono-code text-xs font-bold text-[#c7ff3d]">
                DAY 03 / HIGASHIYAMA &amp; GION EXPEDITION
              </span>
              <span className="font-mono-code text-xs text-[#8e8e88]">EST. 14.2 KM ON FOOT</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono-code text-xs">
              <div className="p-3 bg-[#181818] border border-[#2d2d2c] rounded">
                <span className="text-[#c7ff3d] block text-[10px]">06:00 — 08:30</span>
                <span className="font-bold text-[#F2F0EA] block">Temple Sunrise Walk</span>
                <p className="text-[10px] text-[#8e8e88] mt-1">Light breakfast at Ninenzaka cafe.</p>
              </div>
              <div className="p-3 bg-[#181818] border border-[#2d2d2c] rounded">
                <span className="text-[#c7ff3d] block text-[10px]">10:00 — 12:30</span>
                <span className="font-bold text-[#F2F0EA] block">Ceramics Workshop</span>
                <p className="text-[10px] text-[#8e8e88] mt-1">Private wheel session in Gojozaka.</p>
              </div>
              <div className="p-3 bg-[#181818] border border-[#2d2d2c] rounded">
                <span className="text-[#c7ff3d] block text-[10px]">18:00 — 21:00</span>
                <span className="font-bold text-[#F2F0EA] block">Kaiseki Seasonal Tasting</span>
                <p className="text-[10px] text-[#8e8e88] mt-1">7-course menu featuring local duck &amp; tofu.</p>
              </div>
            </div>
          </div>
        </BrowserMockup>
      );
    }
    return (
      <PhoneMockup>
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="pb-2 border-b border-[#d8d5cc] mb-3">
              <span className="text-[10px] text-[#6f6f6a] block">NOMAD COMPANION</span>
              <span className="font-bold text-sm text-[#111111]">KYOTO ITINERARY</span>
            </div>
            <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded mb-2">
              <span className="text-[#c7ff3d] bg-[#111111] px-1.5 py-0.5 rounded text-[10px] font-bold">
                NEXT STOP
              </span>
              <div className="font-bold text-xs text-[#111111] mt-1">Hokan-ji 5-Story Pagoda</div>
              <div className="text-[10px] text-[#6f6f6a]">420m away · 6 min walk</div>
            </div>
            <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded">
              <span className="text-[10px] text-[#6f6f6a] block">WEATHER:</span>
              <span className="font-bold text-xs text-[#111111]">19°C · Clear Golden Hour</span>
            </div>
          </div>
          <button className="py-2.5 bg-[#111111] text-[#F2F0EA] text-center font-bold text-xs">
            VIEW OFFLINE PASSES
          </button>
        </div>
      </PhoneMockup>
    );
  }

  // FINFLOW (CONCEPT PROJECT)
  if (projectId === 'finflow') {
    if (screenIndex === 0) {
      return (
        <PhoneMockup>
          <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
            <div>
              <div className="flex justify-between items-center pb-2 border-b border-[#d8d5cc] mb-3">
                <span className="font-bold text-xs text-[#111111]">FINFLOW CASH</span>
                <span className="text-[10px] text-[#0e8a16] font-bold">CONNECTED</span>
              </div>
              <div className="p-4 bg-[#ffffff] border border-[#d8d5cc] rounded-lg mb-3">
                <span className="text-[10px] text-[#6f6f6a] uppercase block">TOTAL NET LIQUIDITY</span>
                <div className="font-editorial text-2xl font-bold text-[#111111] my-1">$48,290.15</div>
                <div className="flex justify-between text-[10px] text-[#6f6f6a] pt-2 border-t border-[#d8d5cc]">
                  <span>FREE CASH FLOW:</span>
                  <span className="font-bold text-[#111111]">+$3,410.00 / mo</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded flex justify-between items-center text-xs">
                  <span>Vault Savings (4.8% APY)</span>
                  <span className="font-bold">$32,000</span>
                </div>
                <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded flex justify-between items-center text-xs">
                  <span>Operating Checking</span>
                  <span className="font-bold">$16,290</span>
                </div>
              </div>
            </div>
            <button className="w-full py-2.5 bg-[#111111] text-[#F2F0EA] font-bold text-xs text-center rounded">
              TRANSFER / ALLOCATE FUNDS
            </button>
          </div>
        </PhoneMockup>
      );
    }
    if (screenIndex === 1) {
      return (
        <PhoneMockup>
          <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
            <div>
              <div className="pb-2 border-b border-[#d8d5cc] mb-3">
                <span className="font-bold text-xs text-[#111111]">MONTHLY SPEND BREAKDOWN</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#6f6f6a]">Housing &amp; Utilities</span>
                    <span className="font-bold text-[#111111]">$2,100 (45%)</span>
                  </div>
                  <div className="w-full h-2 bg-[#d8d5cc] rounded-full overflow-hidden">
                    <div className="w-[45%] h-full bg-[#111111]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#6f6f6a]">Food &amp; Dining</span>
                    <span className="font-bold text-[#111111]">$840 (18%)</span>
                  </div>
                  <div className="w-full h-2 bg-[#d8d5cc] rounded-full overflow-hidden">
                    <div className="w-[18%] h-full bg-[#111111]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#6f6f6a]">Travel &amp; Flights</span>
                    <span className="font-bold text-[#111111]">$620 (13%)</span>
                  </div>
                  <div className="w-full h-2 bg-[#d8d5cc] rounded-full overflow-hidden">
                    <div className="w-[13%] h-full bg-[#111111]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded text-center text-[10px] text-[#0e8a16] font-bold">
              ✓ 14% under target budget for this cycle
            </div>
          </div>
        </PhoneMockup>
      );
    }
    if (screenIndex === 2) {
      return (
        <PhoneMockup>
          <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
            <div>
              <div className="pb-2 border-b border-[#d8d5cc] mb-3">
                <span className="font-bold text-xs text-[#111111]">SAVINGS TARGETS</span>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Emergency Runway</span>
                    <span className="text-[#0e8a16]">100%</span>
                  </div>
                  <div className="text-[10px] text-[#6f6f6a]">$24,000 / $24,000 (Funded)</div>
                </div>
                <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] rounded">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Tokyo Expedition</span>
                    <span className="text-[#111111]">78%</span>
                  </div>
                  <div className="text-[10px] text-[#6f6f6a]">$4,680 / $6,000 ($1,320 left)</div>
                </div>
              </div>
            </div>
            <div className="text-[10px] text-[#6f6f6a] text-center">
              Automated Micro-Deposit Engine
            </div>
          </div>
        </PhoneMockup>
      );
    }
    return (
      <PhoneMockup>
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="pb-2 border-b border-[#d8d5cc] mb-3">
              <span className="font-bold text-xs text-[#111111]">RECENT LEDGER</span>
            </div>
            <div className="space-y-2">
              {[
                { merchant: 'Apple Store Regent St', amount: '-$149.00', cat: 'Tech' },
                { merchant: 'Monmouth Coffee', amount: '-$4.80', cat: 'Dining' },
                { merchant: 'British Airways LHR', amount: '-$340.00', cat: 'Travel' },
                { merchant: 'Client Retainer Wire', amount: '+$4,200.00', cat: 'Income' },
              ].map((tx) => (
                <div key={tx.merchant} className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded flex justify-between items-center">
                  <div>
                    <span className="font-bold text-xs block text-[#111111]">{tx.merchant}</span>
                    <span className="text-[10px] text-[#6f6f6a]">{tx.cat}</span>
                  </div>
                  <span className={`font-bold ${tx.amount.startsWith('+') ? 'text-[#0e8a16]' : 'text-[#111111]'}`}>
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-[#6f6f6a] text-center">
            Encrypted Biometric Verification
          </div>
        </div>
      </PhoneMockup>
    );
  }

  // FLOWSPACE (CONCEPT PROJECT)
  if (projectId === 'flowspace') {
    if (screenIndex === 0) {
      return (
        <BrowserMockup url="flowspace.co/team/core-sprint" title="FlowSpace · Sprint Command & Team Workspace">
          <div className="p-6 bg-[#111111] text-[#F2F0EA]">
            <div className="flex justify-between items-center pb-3 border-b border-[#2d2d2c] mb-5">
              <div>
                <span className="font-mono-code text-[10px] text-[#c7ff3d] uppercase">SPRINT 24 COMMAND</span>
                <h4 className="font-editorial text-xl font-bold uppercase text-[#F2F0EA]">
                  CORE REFACTOR &amp; DESIGN SYSTEM V2
                </h4>
              </div>
              <div className="flex items-center gap-2 font-mono-code text-xs">
                <span className="px-2 py-0.5 bg-[#1e1e1d] text-[#c7ff3d] border border-[#333333]">8 DAYS LEFT</span>
                <span className="text-[#8e8e88]">78% VELOCITY</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 font-mono-code text-xs">
              {['BACKLOG', 'IN PROGRESS', 'IN REVIEW', 'RELEASED'].map((col, cIdx) => (
                <div key={col} className="p-3 bg-[#181818] border border-[#2d2d2c] rounded">
                  <div className="flex justify-between items-center mb-2 pb-1 border-b border-[#2d2d2c] text-[10px] text-[#8e8e88]">
                    <span>{col}</span>
                    <span className="font-bold text-[#F2F0EA]">0{cIdx + 2}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 bg-[#222222] border border-[#333333] rounded">
                      <div className="text-[11px] text-[#F2F0EA] font-semibold">Modular Layout Refactor</div>
                      <span className="text-[9px] text-[#c7ff3d]">PRIORITY HIGH</span>
                    </div>
                    <div className="p-2 bg-[#222222] border border-[#333333] rounded">
                      <div className="text-[11px] text-[#F2F0EA] font-semibold">Accessibility WCAG Audit</div>
                      <span className="text-[9px] text-[#8e8e88]">FRONTEND</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BrowserMockup>
      );
    }
    if (screenIndex === 1) {
      return (
        <BrowserMockup url="flowspace.co/team/kanban" title="Interactive Kanban Board">
          <div className="p-6 bg-[#ffffff] text-[#111111]">
            <div className="flex justify-between items-center pb-3 border-b border-[#d8d5cc] mb-4">
              <span className="font-mono-code text-xs font-bold uppercase text-[#111111]">
                KANBAN BOARD / STAGE TRANSITIONS
              </span>
              <span className="font-mono-code text-xs text-[#6f6f6a]">DRAG &amp; DROP ARCHITECTURE</span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-mono-code text-xs">
              <div className="border border-[#d8d5cc] p-3 bg-[#F2F0EA]">
                <div className="font-bold text-[#111111] mb-2">DESIGN SPECS (2)</div>
                <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded mb-2">
                  <div className="font-bold">Typography Scale Update</div>
                  <div className="text-[10px] text-[#6f6f6a]">Figma Tokens → Tailwind config</div>
                </div>
              </div>
              <div className="border border-[#d8d5cc] p-3 bg-[#F2F0EA]">
                <div className="font-bold text-[#111111] mb-2">REACT HOOKS (3)</div>
                <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded mb-2">
                  <div className="font-bold">useMultiTimezone()</div>
                  <div className="text-[10px] text-[#6f6f6a]">Memoized offset calculations</div>
                </div>
              </div>
              <div className="border border-[#d8d5cc] p-3 bg-[#F2F0EA]">
                <div className="font-bold text-[#111111] mb-2">COMPLETED (6)</div>
                <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded mb-2">
                  <div className="font-bold text-[#0e8a16]">Bundle Reduction 38%</div>
                  <div className="text-[10px] text-[#6f6f6a]">Tree-shaking unused icons</div>
                </div>
              </div>
            </div>
          </div>
        </BrowserMockup>
      );
    }
    if (screenIndex === 2) {
      return (
        <BrowserMockup url="flowspace.co/docs/rfc-012" title="Collaborative Document & Task Inspector">
          <div className="p-6 bg-[#111111] text-[#F2F0EA]">
            <div className="max-w-xl mx-auto border border-[#333333] p-5 bg-[#181818] rounded font-mono-code text-xs space-y-3">
              <div className="flex justify-between border-b border-[#2d2d2c] pb-2">
                <span className="font-bold text-[#c7ff3d]">RFC #012 / DESIGN SYSTEM TOKENS</span>
                <span className="text-[#8e8e88]">3 COLLABORATORS ACTIVE</span>
              </div>
              <p className="text-xs text-[#d8d5cc] leading-relaxed">
                Proposal to migrate legacy CSS variables to a central JSON token schema, allowing continuous synchronization between Figma design styles and React Tailwind themes.
              </p>
              <div className="p-2 bg-[#111111] border border-[#2d2d2c] text-[11px] text-[#a0a09a]">
                ✓ Approved by Lead UI/UX Designer and Frontend Staff Engineer
              </div>
            </div>
          </div>
        </BrowserMockup>
      );
    }
    return (
      <PhoneMockup>
        <div className="p-4 flex flex-col justify-between h-full font-mono-code text-xs">
          <div>
            <div className="pb-2 border-b border-[#d8d5cc] mb-3">
              <span className="text-[10px] text-[#6f6f6a] block">FLOWSPACE POCKET</span>
              <span className="font-bold text-xs text-[#111111]">MY DAILY ACTIONS (4)</span>
            </div>
            <div className="space-y-2">
              <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#0e8a16]" />
                <span className="text-xs font-semibold">Review PR #88: Map Markers</span>
              </div>
              <div className="p-2.5 bg-[#ffffff] border border-[#d8d5cc] rounded flex items-center gap-2">
                <div className="w-3.5 h-3.5 border border-[#111111] rounded-xs" />
                <span className="text-xs">Approve Figma token exports</span>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-[#6f6f6a] text-center">
            Synchronized with Sprint 24
          </div>
        </div>
      </PhoneMockup>
    );
  }

  return null;
}
