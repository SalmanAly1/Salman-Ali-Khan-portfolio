import { useState } from 'react';
import {
  Compass,
  Layers,
  Building2,
  MapPin,
  ArrowUpRight,
  Maximize2,
  Calendar,
  Grid,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  FileText,
  Sliders,
} from 'lucide-react';

interface StudioKairosShowcaseProps {
  pageId: string;
  viewMode: 'desktop' | 'mobile';
}

export default function StudioKairosShowcase({ pageId, viewMode }: StudioKairosShowcaseProps) {
  // Selected Work Filter State
  const [selectedDiscipline, setSelectedDiscipline] = useState<'all' | 'cultural' | 'residential' | 'commercial'>('all');
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);

  const architecturalWorks = [
    {
      title: 'Monolith Pavilion of Light',
      location: 'Zurich, Switzerland',
      year: '2024',
      category: 'cultural',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
      area: '4,200 m²',
      tag: 'CULTURAL INSTITUTION',
    },
    {
      title: 'Solstice Cantilever Residence',
      location: 'Kyoto, Japan',
      year: '2023',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85',
      area: '850 m²',
      tag: 'PRIVATE RESIDENCE',
    },
    {
      title: 'Kinetica Headquarters Tower',
      location: 'Oslo, Norway',
      year: '2024',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85',
      area: '18,500 m²',
      tag: 'COMMERCIAL HEADQUARTERS',
    },
    {
      title: 'Atelier brutalist Museum',
      location: 'Berlin, Germany',
      year: '2023',
      category: 'cultural',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
      area: '6,100 m²',
      tag: 'CIVIC ARCHITECTURE',
    },
  ];

  const filteredWorks =
    selectedDiscipline === 'all'
      ? architecturalWorks
      : architecturalWorks.filter((w) => w.category === selectedDiscipline);

  return (
    <div className="bg-[#f7f6f2] text-[#111111] min-h-[520px]">
      {/* Studio Kairos Brand Header Bar */}
      <div className="border-b border-[#d8d5cc] px-6 py-3.5 bg-[#ffffff] flex items-center justify-between font-mono-code text-xs">
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm tracking-widest uppercase">STUDIO KAIROS</span>
          <span className="text-[#8e8e88] hidden sm:inline">/ SPATIAL ARCHITECTURE &amp; IDENTITY</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-[#6f6f6a]">
          <span className="hidden md:inline">LONDON · TOKYO · BERLIN</span>
          <span className="px-2 py-0.5 bg-[#111111] text-[#c7ff3d] font-bold">FSE THEME</span>
        </div>
      </div>

      {/* ====================================================================
          PAGE A: AGENCY HERO
          ==================================================================== */}
      {pageId === 'sk-p1' && (
        <div className="space-y-0">
          {/* Monumental Hero Visual */}
          <div className="relative h-[360px] sm:h-[420px] lg:h-[460px] overflow-hidden bg-[#111111]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
              alt="Studio Kairos Architectural Pavilion"
              className="w-full h-full object-cover object-center filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <div className="font-mono-code text-xs uppercase tracking-widest text-[#c7ff3d] mb-2">
                AGENCY HERO // SPATIAL IDENTITY &amp; MONUMENTS
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white max-w-3xl leading-none">
                FORM GIVEN TO PERMANENCE.
              </h3>
              <p className="text-sm sm:text-base text-[#d8d5cc] max-w-xl mt-3 font-light leading-relaxed">
                An international architecture and spatial design practice crafting civic landmarks, private residences, and transformative corporate environments.
              </p>
            </div>
          </div>

          {/* World Clocks & Studio Manifest Bar */}
          <div className="p-6 sm:p-8 bg-[#ffffff] border-t border-[#d8d5cc]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-code text-xs">
              <div className="p-4 bg-[#f7f6f2] border border-[#d8d5cc] space-y-1">
                <span className="text-[#8e8e88] text-[10px] uppercase">PRACTICE MATRIX</span>
                <div className="font-bold text-sm text-[#111111]">Civic &amp; Private Spatial Design</div>
                <p className="text-[11px] text-[#6f6f6a] pt-1">
                  Combining raw tectonic materials (cast concrete, blackened steel, limestone) with daylight orchestration.
                </p>
              </div>

              <div className="p-4 bg-[#f7f6f2] border border-[#d8d5cc] space-y-1">
                <span className="text-[#8e8e88] text-[10px] uppercase">STUDIO FOOTPRINT</span>
                <div className="font-bold text-sm text-[#111111]">London · Tokyo · Berlin</div>
                <p className="text-[11px] text-[#6f6f6a] pt-1">
                  Operating globally with regional project ateliers for regulatory precision and structural integrity.
                </p>
              </div>

              <div className="p-4 bg-[#f7f6f2] border border-[#d8d5cc] space-y-1">
                <span className="text-[#8e8e88] text-[10px] uppercase">GUTENBERG ARCHITECTURE</span>
                <div className="font-bold text-sm text-[#111111]">100% Custom FSE Blocks</div>
                <p className="text-[11px] text-[#6f6f6a] pt-1">
                  Zero third-party page builders. Native WordPress block templates rendering sub-second page loads.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          PAGE B: SERVICES (ARCHITECTURAL DRAFTING & DISCIPLINES)
          ==================================================================== */}
      {pageId === 'sk-p2' && (
        <div className="p-6 sm:p-10 space-y-8">
          {/* Services Visual Banner: Architectural Blueprints & Models */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#d8d5cc] bg-[#ffffff] p-6 sm:p-8">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono-code text-xs uppercase text-[#8e8e88] tracking-wider">
                DISCIPLINE BREAKDOWN // 02 SERVICES
              </span>
              <h3 className="font-editorial text-3xl font-bold uppercase tracking-tight text-[#111111]">
                ARCHITECTURAL METHODOLOGY &amp; SCOPE
              </h3>
              <p className="text-sm text-[#555758] leading-relaxed">
                From conceptual schematic sketching and structural material research through comprehensive construction administration and municipal approvals.
              </p>

              <div className="space-y-2 pt-2 font-mono-code text-xs">
                <div className="flex items-center gap-2 text-[#111111]">
                  <CheckCircle2 size={14} className="text-[#111111]" />
                  <span>01. Spatial Planning &amp; Volumetric Studies</span>
                </div>
                <div className="flex items-center gap-2 text-[#111111]">
                  <CheckCircle2 size={14} className="text-[#111111]" />
                  <span>02. Material Research &amp; Tectonic Details</span>
                </div>
                <div className="flex items-center gap-2 text-[#111111]">
                  <CheckCircle2 size={14} className="text-[#111111]" />
                  <span>03. Parametric Facade Engineering &amp; BIM Coordination</span>
                </div>
                <div className="flex items-center gap-2 text-[#111111]">
                  <CheckCircle2 size={14} className="text-[#111111]" />
                  <span>04. Sustainable Passive Energy &amp; Microclimate Modeling</span>
                </div>
              </div>
            </div>

            {/* Distinct Visual: Architectural Drafting, Blueprints, Models */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 overflow-hidden border border-[#d8d5cc] bg-[#111111]">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
                alt="Architectural Drafting, Plans and Materials"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 text-white font-mono-code text-xs">
                <span>SCHEMATIC BLUEPRINTS &amp; SCALE DRAFTING TABLE</span>
              </div>
            </div>
          </div>

          {/* 3 Discipline Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-code text-xs">
            <div className="p-5 bg-[#ffffff] border border-[#d8d5cc] space-y-2">
              <span className="text-[#8e8e88] text-[10px]">SERVICE 01</span>
              <h4 className="font-editorial text-lg font-bold uppercase text-[#111111]">MASTER PLANNING</h4>
              <p className="text-[#555758] text-[11px] leading-relaxed">
                Large-scale civic interventions, urban pedestrian circulation, and campus zoning designed with community durability.
              </p>
            </div>

            <div className="p-5 bg-[#ffffff] border border-[#d8d5cc] space-y-2">
              <span className="text-[#8e8e88] text-[10px]">SERVICE 02</span>
              <h4 className="font-editorial text-lg font-bold uppercase text-[#111111]">TACTILE INTERIORS</h4>
              <p className="text-[#555758] text-[11px] leading-relaxed">
                Custom architectural joinery, acoustic spatial treatment, and custom luminaire specifications.
              </p>
            </div>

            <div className="p-5 bg-[#ffffff] border border-[#d8d5cc] space-y-2">
              <span className="text-[#8e8e88] text-[10px]">SERVICE 03</span>
              <h4 className="font-editorial text-lg font-bold uppercase text-[#111111]">HERITAGE ADAPTATION</h4>
              <p className="text-[#555758] text-[11px] leading-relaxed">
                Sensitive historical conversions harmonizing historic brick and stone masonry with modern minimalist insertions.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          PAGE C: SELECTED WORKS (PORTFOLIO ARCHIVE GRID)
          ==================================================================== */}
      {pageId === 'sk-p3' && (
        <div className="p-6 sm:p-10 space-y-6">
          {/* Portfolio Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d8d5cc] pb-4">
            <div>
              <span className="font-mono-code text-xs uppercase text-[#8e8e88] tracking-wider block">
                CURATED ARCHITECTURAL ARCHIVE
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111111]">
                SELECTED WORKS (2021 — 2024)
              </h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 font-mono-code text-xs">
              {(['all', 'cultural', 'residential', 'commercial'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedDiscipline(filter)}
                  className={`px-3 py-1 uppercase tracking-wider transition-colors cursor-pointer ${
                    selectedDiscipline === filter
                      ? 'bg-[#111111] text-[#c7ff3d] font-bold'
                      : 'bg-white text-[#111111] border border-[#d8d5cc] hover:border-[#111111]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Multi-Card Grid with Distinct Built Buildings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredWorks.map((work) => (
              <div key={work.title} className="group border border-[#d8d5cc] bg-[#ffffff] overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="h-48 overflow-hidden bg-[#111111]">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-1.5">
                    <div className="flex items-center justify-between font-mono-code text-[10px] text-[#8e8e88]">
                      <span>{work.tag}</span>
                      <span>{work.year}</span>
                    </div>
                    <h4 className="font-editorial text-base font-bold uppercase text-[#111111] leading-snug">
                      {work.title}
                    </h4>
                    <div className="flex items-center gap-1 font-mono-code text-[11px] text-[#6f6f6a]">
                      <MapPin size={11} />
                      <span>{work.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-[#f0eee6] mt-3 font-mono-code text-[10px] text-[#8e8e88] flex justify-between">
                  <span>SCALE: {work.area}</span>
                  <span className="text-[#111111] font-bold group-hover:text-[#c7ff3d] transition-colors">
                    VIEW CASE STUDY →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ====================================================================
          PAGE D: ABOUT (STUDIO ENVIRONMENT & PROCESS)
          ==================================================================== */}
      {pageId === 'sk-p4' && (
        <div className="p-6 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#d8d5cc] bg-[#ffffff] p-6 sm:p-8">
            {/* Visual: Design Studio Workspace, physical models, collaborative design */}
            <div className="lg:col-span-6 relative h-64 sm:h-96 overflow-hidden border border-[#d8d5cc] bg-[#111111]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
                alt="Studio Kairos Atelier Workspace & Physical Models"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 text-white font-mono-code text-xs">
                <span>LONDON ATELIER // MODEL MAKING &amp; MATERIAL ARCHIVE</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono-code text-xs uppercase text-[#8e8e88] tracking-wider">
                ABOUT THE PRACTICE // MANIFESTO
              </span>
              <h3 className="font-editorial text-3xl font-bold uppercase tracking-tight text-[#111111]">
                BUILT UPON MATERIAL RIGOR &amp; PROPORTION
              </h3>
              <p className="text-sm text-[#555758] leading-relaxed">
                Founded in 2014, Studio Kairos operates as a collaborative design laboratory where architects, landscape designers, and structural craftspeople interrogate how space shapes human ritual.
              </p>
              <p className="text-sm text-[#555758] leading-relaxed">
                Every project begins with tactile physical foamcore models, solar azimuth calculations, and local geological material sourcing rather than generic computer rendering templates.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 font-mono-code text-xs">
                <div className="p-3 bg-[#f7f6f2] border border-[#d8d5cc]">
                  <div className="font-bold text-[#111111] text-base">28 ARCHITECTS</div>
                  <span className="text-[#8e8e88] text-[10px]">Interdisciplinary Staff</span>
                </div>
                <div className="p-3 bg-[#f7f6f2] border border-[#d8d5cc]">
                  <div className="font-bold text-[#111111] text-base">14 NATIONS</div>
                  <span className="text-[#8e8e88] text-[10px]">Built Project Footprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          PAGE E: CONTACT (MINIMALIST ATELIER RECEPTION & INQUIRY FORM)
          ==================================================================== */}
      {pageId === 'sk-p5' && (
        <div className="p-6 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Atmospheric Architectural Facade & Studio Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative h-60 overflow-hidden border border-[#d8d5cc] bg-[#111111]">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=85"
                  alt="Minimalist Architectural Reception Entrance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 text-white font-mono-code text-xs">
                  <span>ATELIER RECEPTION · FITZROVIA, LONDON</span>
                </div>
              </div>

              <div className="p-5 bg-[#ffffff] border border-[#d8d5cc] space-y-4 font-mono-code text-xs">
                <div>
                  <span className="text-[#8e8e88] text-[10px] uppercase block">MAIN ATELIER:</span>
                  <p className="font-bold text-[#111111] mt-0.5">
                    14 Charlotte Street, Fitzrovia, London W1T 2LX
                  </p>
                </div>
                <div className="pt-2 border-t border-[#f0eee6]">
                  <span className="text-[#8e8e88] text-[10px] uppercase block">INQUIRIES:</span>
                  <p className="font-bold text-[#111111] mt-0.5">commissions@studiokairos.archi</p>
                </div>
                <div className="pt-2 border-t border-[#f0eee6]">
                  <span className="text-[#8e8e88] text-[10px] uppercase block">TELEPHONE:</span>
                  <p className="font-bold text-[#111111] mt-0.5">+44 (0)20 7946 0842</p>
                </div>
              </div>
            </div>

            {/* Right: Commission Inquiry Form */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#ffffff] border border-[#d8d5cc] space-y-5">
              <div>
                <span className="font-mono-code text-xs uppercase text-[#8e8e88] tracking-wider block">
                  COMMISSION CONSULTATION
                </span>
                <h3 className="font-editorial text-2xl font-bold uppercase tracking-tight text-[#111111]">
                  INITIATE AN ARCHITECTURAL INQUIRY
                </h3>
              </div>

              {inquirySubmitted ? (
                <div className="p-6 bg-[#f7f6f2] border border-[#111111] text-center space-y-2">
                  <CheckCircle2 size={32} className="mx-auto text-[#111111]" />
                  <div className="font-editorial text-lg font-bold uppercase">INQUIRY DISPATCHED</div>
                  <p className="font-mono-code text-xs text-[#555758]">
                    Our partner architect will review your project brief within 2 business days.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 font-mono-code text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#6f6f6a] mb-1">CLIENT NAME *</label>
                      <input
                        type="text"
                        defaultValue="Arthur Pendelton"
                        className="w-full p-2.5 bg-[#f7f6f2] border border-[#d8d5cc] text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#6f6f6a] mb-1">CONTACT EMAIL *</label>
                      <input
                        type="email"
                        defaultValue="a.pendelton@investments.ch"
                        className="w-full p-2.5 bg-[#f7f6f2] border border-[#d8d5cc] text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#6f6f6a] mb-1">PROJECT TYPOLOGY</label>
                      <select className="w-full p-2.5 bg-[#f7f6f2] border border-[#d8d5cc] text-[#111111] focus:outline-none focus:border-[#111111]">
                        <option>Civic / Cultural Pavilion</option>
                        <option>Private Coastal Residence</option>
                        <option>Commercial Headquarters</option>
                        <option>Heritage Renovation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#6f6f6a] mb-1">ESTIMATED SITE LOCATION</label>
                      <input
                        type="text"
                        defaultValue="Lake Lucerne, Switzerland"
                        className="w-full p-2.5 bg-[#f7f6f2] border border-[#d8d5cc] text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#6f6f6a] mb-1">PROJECT SCOPE &amp; PROGRAM</label>
                    <textarea
                      rows={3}
                      defaultValue="New cultural exhibition wing incorporating cast concrete galleries and lakeside reading terrace."
                      className="w-full p-2.5 bg-[#f7f6f2] border border-[#d8d5cc] text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                  </div>

                  <button
                    onClick={() => setInquirySubmitted(true)}
                    className="w-full py-3 bg-[#111111] text-[#F2F0EA] hover:bg-[#c7ff3d] hover:text-[#111111] transition-colors cursor-pointer font-bold uppercase tracking-wider text-xs"
                  >
                    SUBMIT INQUIRY TO ATELIER DIRECTORS
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
