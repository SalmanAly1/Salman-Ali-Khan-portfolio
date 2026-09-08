import { useState } from 'react';
import {
  Globe,
  Monitor,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight,
  ShoppingBag,
  Hotel,
  Compass,
  Code2,
  Maximize2,
  ChevronRight,
} from 'lucide-react';
import { WORDPRESS_PROJECTS } from '../data/portfolio';
import { WordPressProject } from '../types';
import AtelierNoirShowcase from './AtelierNoirShowcase';

export default function WordPressSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [activePageTab, setActivePageTab] = useState<{ [key: string]: number }>({});
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const currentProject = WORDPRESS_PROJECTS[activeProjectIndex];
  const currentPageIdx = activePageTab[currentProject.id] || 0;
  const currentPage = currentProject.pages[currentPageIdx];

  const getWebsiteIcon = (type: string) => {
    switch (type) {
      case 'PREMIUM E-COMMERCE':
        return ShoppingBag;
      case 'LUXURY HOTEL & RESORT':
        return Hotel;
      case 'CREATIVE AGENCY':
        return Compass;
      default:
        return Globe;
    }
  };

  const IconComponent = getWebsiteIcon(currentProject.websiteType);

  return (
    <section
      id="wordpress-sites"
      className="py-20 md:py-28 border-b border-[#d8d5cc] max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12 bg-[#F2F0EA]"
    >
      {/* Category Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111] pb-6 mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2.5 font-mono-code text-xs text-[#6f6f6a] uppercase tracking-wider mb-2">
            <span className="w-2.5 h-2.5 bg-[#111111]" />
            <span>DISCIPLINE 03 // CMS ARCHITECTURE &amp; BRAND WEBSITES</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#111111]">
            WORDPRESS WEBSITES
          </h2>
        </div>
        <div className="font-mono-code text-xs text-[#6f6f6a] max-w-md text-left md:text-right">
          <span className="text-[#111111] font-semibold">3 BESPOKE WEBSITES</span> — Full Site Editing (FSE), custom Gutenberg block development, WooCommerce integrations, and high-conversion editorial layouts.
        </div>
      </div>

      {/* Website Category Navigation Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {WORDPRESS_PROJECTS.map((proj, idx) => {
          const Icon = getWebsiteIcon(proj.websiteType);
          const isSelected = activeProjectIndex === idx;

          return (
            <button
              key={proj.id}
              onClick={() => setActiveProjectIndex(idx)}
              className={`p-5 text-left border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'border-[#111111] bg-[#ffffff] shadow-md ring-1 ring-[#111111]'
                  : 'border-[#d8d5cc] bg-[#F8F7F3] hover:border-[#888888]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-code text-xs font-bold text-[#111111] bg-[#ffffff] px-2 py-0.5 border border-[#d8d5cc]">
                  0{idx + 1}
                </span>
                <Icon size={18} className={isSelected ? 'text-[#111111]' : 'text-[#8e8e98]'} />
              </div>
              <div className="font-mono-code text-[11px] text-[#6f6f6a] uppercase font-medium mb-1">
                {proj.websiteType}
              </div>
              <h3 className="font-editorial text-xl font-bold uppercase tracking-tight text-[#111111]">
                {proj.title}
              </h3>
              <p className="text-xs text-[#555758] mt-1.5 line-clamp-2">
                {proj.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Main Website Showcase Container */}
      <div className="border border-[#111111] bg-[#ffffff] shadow-sm mb-12">
        {/* Browser / Website Navigation Bar */}
        <div className="bg-[#111111] text-[#F2F0EA] px-5 py-3.5 flex flex-wrap items-center justify-between gap-4 select-none">
          <div className="flex items-center gap-3">
            <IconComponent size={18} className="text-[#c7ff3d]" />
            <div>
              <span className="font-editorial text-base font-bold tracking-wider text-white">
                {currentProject.title}
              </span>
              <span className="font-mono-code text-[11px] text-[#aaaaaa] ml-2 hidden sm:inline">
                {currentProject.category}
              </span>
            </div>
          </div>

          {/* View Mode Toggle: Desktop vs Mobile */}
          <div className="flex items-center gap-1 bg-[#222228] p-1 border border-[#33333e] rounded-xs font-mono-code text-xs">
            <button
              onClick={() => setViewMode('desktop')}
              className={`px-3 py-1 flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'desktop'
                  ? 'bg-[#ffffff] text-[#111111] font-bold shadow-xs'
                  : 'text-[#aaaaaa] hover:text-white'
              }`}
            >
              <Monitor size={13} />
              <span>DESKTOP (1440PX)</span>
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`px-3 py-1 flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'mobile'
                  ? 'bg-[#ffffff] text-[#111111] font-bold shadow-xs'
                  : 'text-[#aaaaaa] hover:text-white'
              }`}
            >
              <Smartphone size={13} />
              <span>MOBILE VIEW</span>
            </button>
          </div>
        </div>

        {/* Interactive Page Switcher Ribbon */}
        <div className="bg-[#F2F0EA] border-b border-[#d8d5cc] px-4 py-2 flex items-center gap-2 overflow-x-auto">
          <span className="font-mono-code text-[11px] text-[#6f6f6a] uppercase mr-2 hidden sm:inline">
            PREVIEW TEMPLATES:
          </span>
          {currentProject.pages.map((page, idx) => (
            <button
              key={page.id}
              onClick={() =>
                setActivePageTab((prev) => ({
                  ...prev,
                  [currentProject.id]: idx,
                }))
              }
              className={`px-3 py-1.5 font-mono-code text-xs whitespace-nowrap transition-all border ${
                currentPageIdx === idx
                  ? 'bg-[#111111] text-[#F2F0EA] border-[#111111] font-bold'
                  : 'bg-[#ffffff] text-[#111111] border-[#d8d5cc] hover:border-[#888888]'
              }`}
            >
              <span>{page.label}</span>
            </button>
          ))}
        </div>

        {/* Website Content Viewport (Desktop vs Mobile Mode) */}
        <div className="p-6 md:p-10 bg-[#faf9f5] flex justify-center">
          {viewMode === 'desktop' ? (
            /* Desktop Browser View */
            <div className="w-full border border-[#d8d5cc] bg-[#ffffff] shadow-lg overflow-hidden transition-all duration-300">
              {/* Desktop Browser URL Bar */}
              <div className="bg-[#f0eee6] border-b border-[#d8d5cc] px-4 py-2 flex items-center gap-3 font-mono-code text-[11px] text-[#6f6f6a]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d8d5cc]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d8d5cc]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d8d5cc]" />
                </div>
                <div className="flex-1 bg-[#ffffff] border border-[#d8d5cc] px-3 py-1 rounded-xs text-[#111111]">
                  https://www.{currentProject.id}.com/{currentPage.id}
                </div>
                <span className="font-bold text-[#111111]">WP 6.5+ FSE</span>
              </div>

              {/* Website Page Representation */}
              {currentProject.id === 'atelier-noir' ? (
                <AtelierNoirShowcase pageId={currentPage.id} viewMode={viewMode} />
              ) : (
                <div className="relative">
                  {/* Visual Editorial Image */}
                  <div className="relative h-[360px] sm:h-[440px] lg:h-[500px] overflow-hidden bg-[#111111]">
                    <img
                      src={currentPage.heroImage || currentProject.visualAssets.heroImage}
                      alt={currentPage.name}
                      className="w-full h-full object-cover object-center filter contrast-105"
                      loading="lazy"
                    />
                    {/* Subtle Gradient & Editorial Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
                      <div className="font-mono-code text-xs uppercase tracking-widest text-[#c7ff3d] mb-2">
                        {currentPage.label} // {currentProject.websiteType}
                      </div>
                      <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white max-w-2xl leading-none">
                        {currentPage.name}
                      </h3>
                      <p className="text-sm sm:text-base text-[#d8d5cc] max-w-xl mt-3 font-light leading-relaxed">
                        {currentPage.description}
                      </p>
                    </div>
                  </div>

                  {/* Simulated Content Grid Below Hero */}
                  <div className="p-6 sm:p-8 bg-[#ffffff] border-t border-[#d8d5cc]">
                    <div className="flex items-center justify-between font-mono-code text-xs text-[#6f6f6a] border-b border-[#d8d5cc] pb-3 mb-6">
                      <span className="uppercase font-bold text-[#111111]">
                        PAGE ARCHITECTURE &amp; SECTIONS
                      </span>
                      <span>100% RESPONSIVE GUTENBERG BLOCKS</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {currentProject.visualAssets.gridImages.map((img, i) => (
                        <div key={i} className="group border border-[#d8d5cc] overflow-hidden bg-[#F2F0EA]">
                          <div className="h-44 overflow-hidden">
                            <img
                              src={img}
                              alt={`Preview asset ${i + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                          <div className="p-4">
                            <div className="font-mono-code text-[10px] text-[#6f6f6a] uppercase">
                              BLOCK 0{i + 1}
                            </div>
                            <div className="font-editorial text-sm font-bold text-[#111111] uppercase mt-0.5">
                              {i === 0 ? 'Featured Architecture' : i === 1 ? 'Editorial Content' : 'Client Inquiries'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Mobile Device View (390px Viewport) */
            <div className="w-full max-w-[360px] bg-[#111111] p-3 rounded-[40px] border-[5px] border-[#333333] shadow-2xl">
              <div className="bg-[#ffffff] text-[#111111] rounded-[30px] overflow-hidden min-h-[580px] flex flex-col justify-between">
                {/* Mobile Browser Bar */}
                <div className="bg-[#111111] text-white px-4 py-2 text-center font-mono-code text-[10px]">
                  {currentProject.id}.com/{currentPage.id}
                </div>

                {/* Mobile Hero View */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={currentPage.heroImage || currentProject.visualAssets.heroImage}
                    alt={currentPage.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="font-mono-code text-[9px] text-[#c7ff3d] uppercase">
                      {currentPage.label}
                    </span>
                    <h4 className="font-editorial text-lg font-bold leading-tight mt-0.5">
                      {currentPage.name}
                    </h4>
                  </div>
                </div>

                {/* Mobile Body Content */}
                <div className="p-4 space-y-3 font-mono-code text-xs">
                  <p className="text-[11px] text-[#555758] leading-relaxed">
                    {currentPage.description}
                  </p>
                  <div className="pt-2 border-t border-[#d8d5cc] space-y-2">
                    <div className="p-2 bg-[#F2F0EA] border border-[#d8d5cc] text-[10px]">
                      ✔ Mobile Navigation Drawer with Touch Gestures
                    </div>
                    <div className="p-2 bg-[#F2F0EA] border border-[#d8d5cc] text-[10px]">
                      ✔ Express Apple Pay / Google Pay Checkout
                    </div>
                  </div>
                </div>

                {/* Mobile Footer */}
                <div className="p-3 bg-[#F2F0EA] border-t border-[#d8d5cc] text-center font-mono-code text-[9px] text-[#6f6f6a]">
                  MOBILE VIEWPORT OPTIMIZED (390PX)
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Case Study Details & CMS Architecture */}
        <div className="p-6 md:p-10 border-t border-[#111111] bg-[#ffffff]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Project Overview & CMS Stack */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#111111] uppercase tracking-tight">
                  {currentProject.title}
                </h3>
                <p className="font-mono-code text-xs text-[#6f6f6a] mt-1">
                  {currentProject.tagline}
                </p>
              </div>

              <div className="border-t border-[#d8d5cc] pt-4 space-y-2.5 font-mono-code text-xs">
                <div className="flex justify-between">
                  <span className="text-[#6f6f6a]">MY ROLE:</span>
                  <span className="text-[#111111] font-semibold">{currentProject.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6f6f6a]">PROJECT TYPE:</span>
                  <span className="text-[#111111]">{currentProject.websiteType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6f6f6a]">CLIENT CONTEXT:</span>
                  <span className="text-[#111111]">{currentProject.clientContext}</span>
                </div>
              </div>

              {/* CMS & Tech Stack */}
              <div className="border-t border-[#d8d5cc] pt-4">
                <div className="font-mono-code text-[11px] uppercase tracking-wider text-[#6f6f6a] mb-2 flex items-center gap-1.5">
                  <Code2 size={13} />
                  <span>WORDPRESS CMS ARCHITECTURE</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.cmsStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#F2F0EA] border border-[#d8d5cc] text-[#111111] font-mono-code text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcome Badge */}
              <div className="p-4 bg-[#F2F0EA] border border-[#111111]">
                <div className="font-mono-code text-[10px] uppercase font-bold text-[#111111] mb-1">
                  DEVELOPMENT OUTCOME
                </div>
                <p className="text-xs text-[#444748] leading-relaxed">
                  {currentProject.outcome}
                </p>
              </div>
            </div>

            {/* Right Column: Challenge, Approach & Features */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-[#F8F7F3] border border-[#d8d5cc]">
                  <div className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                    THE WEBSITE CHALLENGE
                  </div>
                  <p className="text-xs text-[#444748] leading-relaxed">
                    {currentProject.challenge}
                  </p>
                </div>

                <div className="p-5 bg-[#F8F7F3] border border-[#d8d5cc]">
                  <div className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                    THE WORDPRESS APPROACH
                  </div>
                  <p className="text-xs text-[#444748] leading-relaxed">
                    {currentProject.approach}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="p-6 bg-[#F8F7F3] border border-[#d8d5cc]">
                <div className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider mb-3">
                  BESPOKE WORDPRESS FEATURES &amp; CAPABILITIES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentProject.keyFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-[#222224]">
                      <CheckCircle2 size={13} className="text-[#10b981] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
