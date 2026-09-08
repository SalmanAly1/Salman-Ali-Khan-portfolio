import { useState } from 'react';
import {
  Hotel,
  Calendar,
  Users,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Sun,
  Wine,
  Waves,
  Utensils,
  Maximize2,
  Phone,
  Bed,
  Bath,
} from 'lucide-react';

interface VillaSerenaShowcaseProps {
  pageId: string;
  viewMode: 'desktop' | 'mobile';
}

export default function VillaSerenaShowcase({ pageId, viewMode }: VillaSerenaShowcaseProps) {
  // Booking State
  const [checkInDate, setCheckInDate] = useState<string>('2026-06-14');
  const [checkOutDate, setCheckOutDate] = useState<string>('2026-06-19');
  const [selectedSuiteTier, setSelectedSuiteTier] = useState<string>('cliff-villa');
  const [reservationConfirmed, setReservationConfirmed] = useState<boolean>(false);

  // Rooms Directory Data with distinct images
  const resortSuites = [
    {
      id: 'azure-suite',
      name: 'Azure Oceanfront Suite',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=85',
      rate: '€850 / night',
      area: '85 m²',
      view: 'Direct Mediterranean Sea View',
      features: ['Private stone terrace', 'King featherbed', 'Carrara marble rain shower'],
    },
    {
      id: 'cliff-villa',
      name: 'Grand Cliff Pool Villa',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85',
      rate: '€1,450 / night',
      area: '160 m²',
      view: 'Panoramic Cliffside & Sunken Infinity Pool',
      features: ['Private heated infinity plunge pool', 'Outdoor sun lounge', '24/7 Butler concierge'],
    },
    {
      id: 'garden-pavilion',
      name: 'Olive Grove Garden Pavilion',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=85',
      rate: '€680 / night',
      area: '70 m²',
      view: 'Ancient Olive Grove & Fragrant Citrus Courtyard',
      features: ['Private walled stone garden', 'Freestanding soaking tub', 'Outdoor daybed'],
    },
  ];

  // Experience Data with distinct visuals
  const curatedExperiences = [
    {
      title: 'Private Sunset Catamaran Charter',
      category: 'COASTAL NAVIGATION',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85',
      description: 'Charter our 48ft private catamaran along the hidden sea grottos of Capri with champagne pairing.',
    },
    {
      title: 'Cliffside Michelin Tasting Experience',
      category: 'CULINARY ARTISTRY',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85',
      description: 'Seven-course seafood tasting menu curated by Chef Matteo overlooking the glowing dusk coastline.',
    },
    {
      title: 'Thermal Thalassotherapy & Spa',
      category: 'HOLISTIC WELLNESS',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=85',
      description: 'Natural mineral saltwater plunge pools and restorative Mediterranean herbal steam therapy.',
    },
  ];

  return (
    <div className="bg-[#faf8f5] text-[#1c1b18] min-h-[520px]">
      {/* Villa Serena Luxury Navigation Header */}
      <div className="border-b border-[#e5e0d8] px-6 py-3.5 bg-[#ffffff] flex items-center justify-between font-mono-code text-xs">
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm tracking-widest uppercase text-[#111111]">VILLA SERENA</span>
          <span className="text-[#8e8e88] hidden sm:inline">· CLIFFSIDE SANCTUARY · AMALFI COAST</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-[#6f6f6a]">
          <span className="hidden md:inline">DIRECT BOOKING GUARANTEE</span>
          <span className="px-2 py-0.5 bg-[#111111] text-[#c7ff3d] font-bold">FSE THEME</span>
        </div>
      </div>

      {/* ====================================================================
          PAGE A: HERO / INTRO (PANORAMIC RESORT EXTERIOR & LOCATION)
          ==================================================================== */}
      {pageId === 'vs-p1' && (
        <div className="space-y-0">
          {/* Panoramic Cliffside Resort Exterior Hero */}
          <div className="relative h-[360px] sm:h-[440px] lg:h-[480px] overflow-hidden bg-[#111111]">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85"
              alt="Villa Serena Cliffside Infinity Pool & Mediterranean Horizon"
              className="w-full h-full object-cover object-center filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <div className="font-mono-code text-xs uppercase tracking-widest text-[#c7ff3d] mb-2">
                HERO &amp; INTRO // MEDITERRANEAN CLIFFSIDE RETREAT
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white max-w-3xl leading-none">
                SANCTUARY AT THE CLIFF’S EDGE.
              </h3>
              <p className="text-sm sm:text-base text-[#e8e4dc] max-w-xl mt-3 font-light leading-relaxed">
                Carved into the limestone promontories of the Amalfi Coast, Villa Serena offers unhurried tranquility, private sea access, and Michelin-starred coastal dining.
              </p>
            </div>
          </div>

          {/* Direct Booking Sticky Strip */}
          <div className="p-5 sm:p-6 bg-[#ffffff] border-t border-[#e5e0d8]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono-code text-xs">
              <div className="p-3 bg-[#faf8f5] border border-[#e5e0d8]">
                <span className="text-[#8e8e88] text-[10px] uppercase block">LOCATION</span>
                <span className="font-bold text-[#111111]">Amalfi, Italy</span>
              </div>
              <div className="p-3 bg-[#faf8f5] border border-[#e5e0d8]">
                <span className="text-[#8e8e88] text-[10px] uppercase block">ACCOMMODATIONS</span>
                <span className="font-bold text-[#111111]">18 Suites &amp; 4 Private Villas</span>
              </div>
              <div className="p-3 bg-[#faf8f5] border border-[#e5e0d8]">
                <span className="text-[#8e8e88] text-[10px] uppercase block">AUTHENTICATION</span>
                <span className="font-bold text-[#111111]">Relais &amp; Châteaux Partner</span>
              </div>
              <div className="p-3 bg-[#111111] text-[#F2F0EA] flex items-center justify-between">
                <span>RESERVE DATES</span>
                <span className="text-[#c7ff3d] font-bold">BEST RATE →</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          PAGE B: ROOMS / DIRECTORY (MULTIPLE DIFFERENT ROOMS CATALOG)
          ==================================================================== */}
      {pageId === 'vs-p2' && (
        <div className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-baseline justify-between border-b border-[#e5e0d8] pb-4 gap-2">
            <div>
              <span className="font-mono-code text-xs uppercase text-[#8e8e88] tracking-wider block">
                SUITES &amp; VILLAS DIRECTORY
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111111]">
                COASTAL LIVING ACCOMMODATIONS
              </h3>
            </div>
            <span className="font-mono-code text-xs text-[#6f6f6a]">ALL ROOMS FEATURE SEA VISTAS</span>
          </div>

          {/* Directory Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resortSuites.map((suite) => (
              <div key={suite.id} className="group border border-[#e5e0d8] bg-[#ffffff] overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="h-52 overflow-hidden bg-[#111111] relative">
                    <img
                      src={suite.image}
                      alt={suite.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white font-mono-code text-[11px] px-2.5 py-1">
                      {suite.rate}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="font-editorial text-lg font-bold uppercase text-[#111111]">
                      {suite.name}
                    </h4>
                    <p className="font-mono-code text-xs text-[#8e8e88]">
                      {suite.area} · {suite.view}
                    </p>
                    <div className="pt-3 border-t border-[#f2ede4] space-y-1 font-mono-code text-[11px] text-[#555758]">
                      {suite.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-[#111111] rounded-full" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-4">
                  <button className="w-full py-2 bg-[#faf8f5] hover:bg-[#111111] hover:text-white border border-[#e5e0d8] font-mono-code text-xs uppercase tracking-wider transition-colors cursor-pointer font-bold">
                    SELECT &amp; VIEW VILLA DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ====================================================================
          PAGE C: VILLA DETAIL (INTERIOR + BEDROOM + PLUNGE POOL + BATHROOM)
          ==================================================================== */}
      {pageId === 'vs-p3' && (
        <div className="p-6 sm:p-10 space-y-8">
          <div className="border border-[#e5e0d8] bg-[#ffffff] p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Detailed Suite Photography Gallery */}
              <div className="lg:col-span-7 space-y-4">
                <div className="h-72 sm:h-96 overflow-hidden border border-[#e5e0d8] bg-[#111111] relative">
                  <img
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85"
                    alt="Master Cliff Villa with Private Plunge Pool & Bedroom"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 text-white font-mono-code text-xs">
                    <span>MASTER CLIFF SUITE &amp; PRIVATE PLUNGE POOL</span>
                  </div>
                </div>

                {/* Sub-gallery of detailed rooms: Marble bath and terrace */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-36 overflow-hidden border border-[#e5e0d8] bg-[#111111] relative">
                    <img
                      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=85"
                      alt="Marble Soaking Bath and Rain Shower"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-white font-mono-code text-[10px] px-2 py-0.5">
                      CARRARA MARBLE BATH
                    </span>
                  </div>
                  <div className="h-36 overflow-hidden border border-[#e5e0d8] bg-[#111111] relative">
                    <img
                      src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=85"
                      alt="Private Sunset Terrace & Loungers"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-white font-mono-code text-[10px] px-2 py-0.5">
                      CLIFF TERRACE LOUNGE
                    </span>
                  </div>
                </div>
              </div>

              {/* Villa Specification Details */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center gap-2 font-mono-code text-xs text-[#8e8e88] mb-1">
                    <span>SUITE #04</span>
                    <span>·</span>
                    <span className="text-[#111111] font-bold">PRIVATE SANCTUARY</span>
                  </div>
                  <h3 className="font-editorial text-3xl font-bold uppercase tracking-tight text-[#111111]">
                    GRAND CLIFF POOL VILLA
                  </h3>
                  <div className="font-mono-code text-base font-bold text-[#111111] mt-1">
                    €1,450 / night
                  </div>
                </div>

                <p className="text-sm text-[#555758] leading-relaxed">
                  Perched dramatically atop the cliffs, this 160m² freestanding villa features an open-concept master bedroom with French limestone floors, hand-loomed linen drapery, and unobstructed 180° Mediterranean sea views.
                </p>

                <div className="space-y-3 pt-2 font-mono-code text-xs border-t border-[#f2ede4]">
                  <div className="flex justify-between py-1 border-b border-[#f2ede4]">
                    <span className="text-[#8e8e88]">INTERIOR CAPACITY:</span>
                    <span className="font-bold">Up to 3 Guests (1 King + Daybed)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f2ede4]">
                    <span className="text-[#8e8e88]">TERRACE FOOTPRINT:</span>
                    <span className="font-bold">65 m² with Heated Plunge Pool</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f2ede4]">
                    <span className="text-[#8e8e88]">BATHROOM SUITE:</span>
                    <span className="font-bold">Freestanding Stone Tub + Steam Shower</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f2ede4]">
                    <span className="text-[#8e8e88]">INCLUDED SERVICES:</span>
                    <span className="font-bold text-[#111111]">Daily Breakfast &amp; Private Bar</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-[#111111] text-[#F2F0EA] hover:bg-[#c7ff3d] hover:text-[#111111] transition-colors cursor-pointer font-bold uppercase tracking-wider text-xs">
                  BOOK THE GRAND CLIFF POOL VILLA
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          PAGE D: BOOKING (INTERACTIVE DIRECT RESERVATION INTERFACE)
          ==================================================================== */}
      {pageId === 'vs-p4' && (
        <div className="p-6 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Supporting Visual: Scenic Resort Cabana & Sea Landscape */}
            <div className="lg:col-span-5 space-y-4">
              <div className="h-64 sm:h-80 overflow-hidden border border-[#e5e0d8] bg-[#111111] relative">
                <img
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=85"
                  alt="Scenic Mediterranean Cabana & Landscape"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 text-white font-mono-code text-xs">
                  <span>RESERVATION VERIFICATION &amp; CONCIERGE</span>
                </div>
              </div>

              <div className="p-4 bg-[#ffffff] border border-[#e5e0d8] font-mono-code text-xs space-y-2">
                <div className="font-bold text-[#111111] uppercase">DIRECT RESERVATION PRIVILEGES</div>
                <div className="text-[#555758] space-y-1 text-[11px]">
                  <div>✔ Complimentary airport transfer from Naples (NAP)</div>
                  <div>✔ Welcome bottle of regional Amalfi Reserve Limoncello</div>
                  <div>✔ Priority seating at Il Faro Michelin restaurant</div>
                </div>
              </div>
            </div>

            {/* Direct Booking Interactive Form */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#ffffff] border border-[#e5e0d8] space-y-5">
              <div>
                <span className="font-mono-code text-xs uppercase text-[#8e8e88] tracking-wider block">
                  DIRECT RESERVATION PORTAL
                </span>
                <h3 className="font-editorial text-2xl font-bold uppercase tracking-tight text-[#111111]">
                  CHECK AVAILABILITY &amp; SECURE SUITE
                </h3>
              </div>

              {reservationConfirmed ? (
                <div className="p-6 bg-[#faf8f5] border border-[#111111] text-center space-y-2 font-mono-code">
                  <CheckCircle2 size={32} className="mx-auto text-[#111111]" />
                  <div className="font-editorial text-lg font-bold uppercase">RESERVATION PROVISIONALLY HELD</div>
                  <p className="text-xs text-[#555758]">
                    Reference #VS-2026-8491. Our reservation concierge has dispatched your provisional itinerary.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 font-mono-code text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#6f6f6a] mb-1">ARRIVAL DATE</label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full p-2.5 bg-[#faf8f5] border border-[#e5e0d8] text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#6f6f6a] mb-1">DEPARTURE DATE</label>
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full p-2.5 bg-[#faf8f5] border border-[#e5e0d8] text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#6f6f6a] mb-1">SELECTED ACCOMMODATION</label>
                      <select
                        value={selectedSuiteTier}
                        onChange={(e) => setSelectedSuiteTier(e.target.value)}
                        className="w-full p-2.5 bg-[#faf8f5] border border-[#e5e0d8] text-[#111111] focus:outline-none focus:border-[#111111]"
                      >
                        <option value="cliff-villa">Grand Cliff Pool Villa (€1,450 / night)</option>
                        <option value="azure-suite">Azure Oceanfront Suite (€850 / night)</option>
                        <option value="garden-pavilion">Olive Grove Pavilion (€680 / night)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#6f6f6a] mb-1">GUESTS</label>
                      <select className="w-full p-2.5 bg-[#faf8f5] border border-[#e5e0d8] text-[#111111] focus:outline-none focus:border-[#111111]">
                        <option>2 Adults</option>
                        <option>2 Adults + 1 Child</option>
                        <option>1 Adult</option>
                      </select>
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 bg-[#faf8f5] border border-[#e5e0d8] flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[#8e8e88] block text-[10px]">ESTIMATED 5-NIGHT STAY:</span>
                      <span className="font-bold text-[#111111] text-base">€7,250.00</span>
                    </div>
                    <span className="text-[#10b981] font-bold text-[11px]">● ROOM GUARANTEED</span>
                  </div>

                  <button
                    onClick={() => setReservationConfirmed(true)}
                    className="w-full py-3 bg-[#111111] text-[#F2F0EA] hover:bg-[#c7ff3d] hover:text-[#111111] transition-colors cursor-pointer font-bold uppercase tracking-wider text-xs"
                  >
                    CONTINUE TO CONCIERGE CONFIRMATION
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          PAGE E: EXPERIENCE (LIFESTYLE, POOL, DINING, SPA, YACHTING)
          ==================================================================== */}
      {pageId === 'vs-p5' && (
        <div className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-baseline justify-between border-b border-[#e5e0d8] pb-4 gap-2">
            <div>
              <span className="font-mono-code text-xs uppercase text-[#8e8e88] tracking-wider block">
                COASTAL LIFESTYLE &amp; REJUVENATION
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111111]">
                CURATED RESORT EXPERIENCES
              </h3>
            </div>
            <span className="font-mono-code text-xs text-[#6f6f6a]">EXCLUSIVE TO RESORT GUESTS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curatedExperiences.map((exp) => (
              <div key={exp.title} className="group border border-[#e5e0d8] bg-[#ffffff] overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="h-48 overflow-hidden bg-[#111111]">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="font-mono-code text-[10px] text-[#8e8e88] uppercase block">
                      {exp.category}
                    </span>
                    <h4 className="font-editorial text-base font-bold uppercase text-[#111111]">
                      {exp.title}
                    </h4>
                    <p className="text-xs text-[#555758] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-3 font-mono-code text-[11px]">
                  <span className="text-[#111111] font-bold group-hover:text-[#c7ff3d] transition-colors">
                    INQUIRE WITH CONCIERGE →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
