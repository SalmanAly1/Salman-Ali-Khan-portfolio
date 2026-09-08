import { useState, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  Palette,
  CheckCircle2,
  Layers,
  Wrench,
  UserCheck,
} from 'lucide-react';
import { UIUX_FIGMA_PROJECTS } from '../data/portfolio';
import { UiUxFigmaProject } from '../types';
import {
  MobileAppShowcase,
  WebAppShowcase,
  SaasProductShowcase,
  EcommerceShowcase,
} from './UiUxProjectShowcases';

export default function UiUxFigmaSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<UiUxFigmaProject | null>(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState<{ [projectId: string]: number }>({});
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    setActiveProjectIndex((prev) => (prev > 0 ? prev - 1 : UIUX_FIGMA_PROJECTS.length - 1));
  };

  const scrollRight = () => {
    setActiveProjectIndex((prev) => (prev < UIUX_FIGMA_PROJECTS.length - 1 ? prev + 1 : 0));
  };

  const currentProject = UIUX_FIGMA_PROJECTS[activeProjectIndex];
  const currentScreenIdx = activeScreenIndex[currentProject.id] || 0;

  const handleScreenChange = (idx: number) => {
    setActiveScreenIndex((prev) => ({
      ...prev,
      [currentProject.id]: idx,
    }));
  };

  return (
    <section
      id="uiux-figma"
      className="py-20 md:py-28 border-b border-[#d8d5cc] max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12 bg-[#F2F0EA] overflow-hidden"
    >
      {/* Category Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111] pb-6 mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2.5 font-mono-code text-xs text-[#6f6f6a] uppercase tracking-wider mb-2">
            <span className="w-2.5 h-2.5 bg-[#111111]" />
            <span>DISCIPLINE 02 // UI/UX &amp; PRODUCT DESIGN</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#111111]">
            UI/UX &amp; PRODUCT DESIGN
          </h2>
        </div>
        <div className="font-mono-code text-xs text-[#6f6f6a] max-w-md text-left md:text-right">
          <span className="text-[#111111] font-semibold">4 DIVERSE PRODUCT EXPERIENCES</span> — Mobile app, enterprise web app, developer SaaS, and luxury e-commerce with realistic device mockups, interactive multi-screen carousels, and verified design systems.
        </div>
      </div>

      {/* Horizontal Carousel Project Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 font-mono-code text-xs overflow-x-auto pb-1 scrollbar-none max-w-full">
          {UIUX_FIGMA_PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveProjectIndex(idx)}
              className={`px-3 py-1.5 transition-all uppercase tracking-wider flex items-center gap-2 border cursor-pointer whitespace-nowrap ${
                activeProjectIndex === idx
                  ? 'bg-[#111111] text-[#F2F0EA] font-bold border-[#111111] shadow-xs'
                  : 'bg-[#ffffff] text-[#111111] border-[#d8d5cc] hover:border-[#888888]'
              }`}
            >
              <span className="text-[10px] opacity-70">0{idx + 1}</span>
              <span className="hidden sm:inline">{proj.title}</span>
              <span className="sm:hidden">{proj.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Carousel Prev / Next Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            aria-label="Previous project"
            className="w-10 h-10 border border-[#111111] bg-[#ffffff] hover:bg-[#111111] hover:text-white transition-colors flex items-center justify-center cursor-pointer shadow-xs"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="font-mono-code text-xs px-2 text-[#6f6f6a] font-semibold">
            {activeProjectIndex + 1} / {UIUX_FIGMA_PROJECTS.length}
          </span>
          <button
            onClick={scrollRight}
            aria-label="Next project"
            className="w-10 h-10 border border-[#111111] bg-[#ffffff] hover:bg-[#111111] hover:text-white transition-colors flex items-center justify-center cursor-pointer shadow-xs"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Featured Horizontal Card / Stage */}
      <div
        ref={carouselRef}
        className="relative border border-[#111111] bg-[#ffffff] shadow-sm transition-all duration-300"
      >
        {/* Top Card Info Ribbon */}
        <div className="border-b border-[#d8d5cc] px-6 py-4 bg-[#F2F0EA] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono-code text-xs font-bold bg-[#111111] text-[#F2F0EA] px-2 py-0.5">
              CASE {currentProject.number}
            </span>
            <span className="font-mono-code text-xs px-2 py-0.5 border border-[#111111] bg-[#ffffff] text-[#111111] uppercase font-semibold">
              {currentProject.projectTypeTag}
            </span>
            <span className="font-mono-code text-[11px] text-[#6f6f6a] uppercase hidden md:inline">
              {currentProject.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono-code text-[11px] px-2.5 py-0.5 bg-[#ffffff] border border-[#d8d5cc] text-[#6f6f6a] font-medium">
              {currentProject.statusBadge}
            </span>
            <button
              onClick={() => setSelectedCaseStudy(currentProject)}
              className="inline-flex items-center gap-1.5 bg-[#111111] text-[#F2F0EA] hover:bg-[#c7ff3d] hover:text-[#111111] px-3.5 py-1 font-mono-code text-xs transition-colors cursor-pointer"
            >
              <span>INSPECT CASE STUDY</span>
              <Eye size={13} />
            </button>
          </div>
        </div>

        {/* Carousel Body: Stage & Multi-Screen Presentation */}
        <div className="p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Editorial Summary & Authentic Product Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="font-editorial text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#111111]">
                  {currentProject.title}
                </h3>
                <p className="font-mono-code text-xs text-[#6f6f6a] mt-1 font-medium">
                  {currentProject.tagline}
                </p>
              </div>

              {/* Role & Tools Metadata Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-b border-[#e5e2d8] py-3 text-xs font-mono-code">
                {currentProject.role && (
                  <div>
                    <span className="text-[#8e8e98] text-[10px] uppercase block flex items-center gap-1">
                      <UserCheck size={11} /> ROLE
                    </span>
                    <span className="text-[#111111] font-semibold">{currentProject.role}</span>
                  </div>
                )}
                {currentProject.tools && (
                  <div>
                    <span className="text-[#8e8e98] text-[10px] uppercase block flex items-center gap-1">
                      <Wrench size={11} /> TOOLS
                    </span>
                    <span className="text-[#111111] font-semibold">{currentProject.tools.join(' · ')}</span>
                  </div>
                )}
              </div>

              <p className="text-sm text-[#444748] leading-relaxed">
                {currentProject.overview}
              </p>

              {/* Key Features List */}
              {currentProject.keyFeatures && currentProject.keyFeatures.length > 0 && (
                <div className="space-y-2.5 pt-1">
                  <div className="font-mono-code text-[11px] font-bold text-[#111111] uppercase tracking-wider flex items-center gap-1.5">
                    <Layers size={13} />
                    <span>KEY PRODUCT FEATURES</span>
                  </div>
                  <ul className="space-y-2">
                    {currentProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#444748]">
                        <CheckCircle2 size={13} className="text-[#111111] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Design Challenge & Approach Highlights */}
              <div className="space-y-3 pt-2">
                <div className="p-4 bg-[#F2F0EA] border border-[#d8d5cc]">
                  <div className="font-mono-code text-[11px] font-bold text-[#111111] uppercase mb-1">
                    UX CHALLENGE
                  </div>
                  <p className="text-xs text-[#555758] leading-relaxed">
                    {currentProject.uxChallenge}
                  </p>
                </div>

                <div className="p-4 bg-[#F2F0EA] border border-[#d8d5cc]">
                  <div className="font-mono-code text-[11px] font-bold text-[#111111] uppercase mb-1">
                    DESIGN APPROACH
                  </div>
                  <p className="text-xs text-[#555758] leading-relaxed">
                    {currentProject.designApproach}
                  </p>
                </div>
              </div>

              {/* Design Palette Swatches Preview */}
              <div>
                <div className="font-mono-code text-[11px] uppercase tracking-wider text-[#6f6f6a] mb-2 flex items-center gap-1.5">
                  <Palette size={12} />
                  <span>CORE COLOR TOKENS</span>
                </div>
                <div className="flex items-center gap-2">
                  {currentProject.uiSystem.palette.map((swatch) => (
                    <div key={swatch.name} className="flex items-center gap-1.5" title={`${swatch.name} (${swatch.hex})`}>
                      <span
                        className="w-5 h-5 rounded-full border border-[#111111]/20 inline-block shadow-xs"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <span className="font-mono-code text-[10px] text-[#6f6f6a] hidden sm:inline">
                        {swatch.hex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Custom Product Showcase per Project Type */}
            <div className="lg:col-span-7 w-full">
              {currentProject.id === 'aura-sleep' && (
                <MobileAppShowcase
                  project={currentProject}
                  activeScreenIdx={currentScreenIdx}
                  onScreenChange={handleScreenChange}
                />
              )}

              {currentProject.id === 'nexus-bi' && (
                <WebAppShowcase
                  project={currentProject}
                  activeScreenIdx={currentScreenIdx}
                  onScreenChange={handleScreenChange}
                />
              )}

              {currentProject.id === 'orbit-dev' && (
                <SaasProductShowcase
                  project={currentProject}
                  activeScreenIdx={currentScreenIdx}
                  onScreenChange={handleScreenChange}
                />
              )}

              {currentProject.id === 'monolith-audio' && (
                <EcommerceShowcase
                  project={currentProject}
                  activeScreenIdx={currentScreenIdx}
                  onScreenChange={handleScreenChange}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          MODAL: DEEP CASE STUDY INSPECTOR (UI/UX & PRODUCT DESIGN)
          ==================================================================== */}
      {selectedCaseStudy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#111111]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div className="relative w-full max-w-4xl bg-[#ffffff] border-2 border-[#111111] shadow-2xl my-8 p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-9 h-9 bg-[#111111] text-[#F2F0EA] hover:bg-[#c7ff3d] hover:text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="border-b border-[#111111] pb-6 mb-8 pr-10">
              <div className="flex items-center gap-2.5 font-mono-code text-xs text-[#6f6f6a] mb-2">
                <span className="font-bold text-[#111111]">CASE STUDY // {selectedCaseStudy.number}</span>
                <span>·</span>
                <span className="text-[#111111] font-semibold">{selectedCaseStudy.projectTypeTag}</span>
                <span>·</span>
                <span>{selectedCaseStudy.statusBadge}</span>
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl font-bold uppercase text-[#111111]">
                {selectedCaseStudy.title}
              </h3>
              <p className="font-mono-code text-sm text-[#6f6f6a] mt-1">
                {selectedCaseStudy.tagline}
              </p>
            </div>

            {/* Modal Body */}
            <div className="space-y-8">
              {/* Problem & Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-[#F2F0EA] border border-[#d8d5cc]">
                  <h4 className="font-mono-code text-xs font-bold text-[#111111] uppercase mb-2">
                    THE UX CHALLENGE
                  </h4>
                  <p className="text-sm text-[#444748] leading-relaxed">
                    {selectedCaseStudy.uxChallenge}
                  </p>
                </div>
                <div className="p-5 bg-[#F2F0EA] border border-[#d8d5cc]">
                  <h4 className="font-mono-code text-xs font-bold text-[#111111] uppercase mb-2">
                    THE DESIGN APPROACH
                  </h4>
                  <p className="text-sm text-[#444748] leading-relaxed">
                    {selectedCaseStudy.designApproach}
                  </p>
                </div>
              </div>

              {/* Step-by-Step User Flow */}
              <div className="border border-[#111111] p-6">
                <h4 className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider mb-4">
                  VALIDATED USER JOURNEY &amp; ARCHITECTURE
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedCaseStudy.userFlow.map((flow) => (
                    <div key={flow.step} className="border-t-2 border-[#111111] pt-2">
                      <span className="font-mono-code text-xs font-bold text-[#111111]">
                        STEP 0{flow.step}
                      </span>
                      <h5 className="font-editorial text-sm font-bold text-[#111111] mt-0.5 mb-1">
                        {flow.name}
                      </h5>
                      <p className="text-xs text-[#6f6f6a] leading-relaxed">
                        {flow.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design System & Color Tokens */}
              <div className="border border-[#d8d5cc] p-6 bg-[#F2F0EA]">
                <h4 className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider mb-4">
                  DESIGN TOKENS &amp; TYPOGRAPHIC SYSTEM
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <span className="font-mono-code text-xs text-[#6f6f6a] block mb-2">COLOR PALETTE</span>
                    <div className="space-y-2">
                      {selectedCaseStudy.uiSystem.palette.map((c) => (
                        <div key={c.name} className="flex items-center justify-between p-2 bg-[#ffffff] border border-[#d8d5cc] text-xs font-mono-code">
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full border border-[#111111]/30" style={{ backgroundColor: c.hex }} />
                            <span className="font-bold text-[#111111]">{c.name}</span>
                          </div>
                          <span className="text-[#6f6f6a]">{c.hex} · {c.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 font-mono-code text-xs">
                    <div>
                      <span className="text-[#6f6f6a] block mb-1">TYPOGRAPHY HIERARCHY</span>
                      <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] text-[#111111] font-semibold">
                        {selectedCaseStudy.uiSystem.typography}
                      </div>
                    </div>
                    <div>
                      <span className="text-[#6f6f6a] block mb-1">SPATIAL GRID</span>
                      <div className="p-3 bg-[#ffffff] border border-[#d8d5cc] text-[#111111]">
                        {selectedCaseStudy.uiSystem.grid}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Decisions with Rationales */}
              <div className="space-y-3">
                <h4 className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider">
                  STRATEGIC DESIGN DECISIONS
                </h4>
                <div className="space-y-2">
                  {selectedCaseStudy.designDecisions.map((dec) => (
                    <div key={dec.title} className="p-4 bg-[#ffffff] border border-[#d8d5cc] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs">
                      <span className="font-mono-code font-bold text-[#111111] sm:w-1/3">
                        {dec.title}
                      </span>
                      <span className="text-[#555758] sm:w-2/3">
                        {dec.rationale}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close Action */}
              <div className="pt-4 border-t border-[#d8d5cc] flex justify-end">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-6 py-2.5 bg-[#111111] text-[#F2F0EA] font-mono-code text-xs uppercase tracking-wider hover:bg-[#c7ff3d] hover:text-[#111111] transition-colors cursor-pointer font-bold"
                >
                  CLOSE INSPECTOR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
