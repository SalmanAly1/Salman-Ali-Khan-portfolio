import { lazy, Suspense, useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles, Code, Layout, Globe, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

const Hero3DScene = lazy(() => import('./Hero3DScene'));

export default function Hero() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Karachi',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(`${timeStr} PKT (HYD)`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const disciplinePillars = [
    {
      num: '01',
      title: 'FRONTEND DEVELOPMENT',
      tag: 'REACT + JAVASCRIPT',
      icon: Code,
      href: '#frontend-work',
      technologies: ['React.js', 'JavaScript ES6+', 'REST APIs', 'Tailwind CSS'],
      metric: 'PRODUCTION APPS',
      description: 'Modular, component-driven web applications built with scalable component hierarchies, reusable hooks, and responsive UX.',
    },
    {
      num: '02',
      title: 'UI/UX DESIGN',
      tag: 'FIGMA & DESIGN SYSTEMS',
      icon: Layout,
      href: '#uiux-figma',
      technologies: ['Figma Prototypes', 'Design Tokens', 'User Research', 'Auto-Layout'],
      metric: 'HIGH-FIDELITY',
      description: 'Human-centered product design, design token architectures, intuitive multi-view dashboards, and validated user flows.',
    },
    {
      num: '03',
      title: 'WORDPRESS WEBSITES',
      tag: 'COMMERCE + HOSPITALITY + AGENCY',
      icon: Globe,
      href: '#wordpress-sites',
      technologies: ['Custom Block Themes', 'WooCommerce', 'Editorial Typography', 'WP Engine'],
      metric: 'CUSTOM ARCHITECTURE',
      description: 'Bespoke, website-style digital destinations with striking editorial art direction, WooCommerce pipelines, and responsive layouts.',
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-12 flex flex-col justify-between border-b border-[#d8d5cc] max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12 overflow-hidden bg-[#F2F0EA]"
    >
      {/* Subtle 3D Ambient Scene */}
      <Suspense fallback={null}>
        <Hero3DScene />
      </Suspense>

      {/* Structural Top Meta Row */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-y-3 items-center border-b border-[#d8d5cc] pb-5">
        <div className="md:col-span-4 flex items-center gap-2 font-mono-code text-xs text-[#6f6f6a]">
          <span className="w-2 h-2 rounded-full bg-[#111111]" />
          <span>PERSONAL PORTFOLIO ARCHIVE</span>
        </div>

        <div className="md:col-span-5 flex items-center gap-2 font-mono-code text-xs text-[#111111]">
          <MapPin size={13} className="text-[#6f6f6a]" />
          <span>{PERSONAL_INFO.location.toUpperCase()}</span>
          <span className="text-[#d8d5cc]">·</span>
          <span className="text-[#6f6f6a]">{currentTime || '19:00 PKT (HYD)'}</span>
        </div>

        <div className="md:col-span-3 text-left md:text-right font-mono-code text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#111111] text-[#F2F0EA] font-medium tracking-wider text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff3d] animate-pulse" />
            OPEN TO REMOTE WORK
          </span>
        </div>
      </div>

      {/* Main Hero Composition — Editorial Typography & Architectural 3-Pillar Console */}
      <div className="relative z-10 my-auto py-6 md:py-10 lg:py-12">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left / Primary Column: Monumental Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Role Header Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6 font-mono-code text-[11px] sm:text-xs tracking-wider uppercase text-[#6f6f6a]">
              <span className="text-[#111111] font-bold">REACT FRONTEND DEVELOPER</span>
              <span className="text-[#d8d5cc]">/</span>
              <span className="text-[#111111] font-bold">UI/UX DESIGNER</span>
              <span className="text-[#d8d5cc]">/</span>
              <span className="text-[#111111] font-bold">WORDPRESS CREATOR</span>
            </div>

            {/* Monumental Name Display */}
            <h1 className="font-editorial uppercase tracking-tighter leading-[0.88] select-none text-[#111111]">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[98px] xl:text-[116px] font-light text-transparent [-webkit-text-stroke:1.5px_#111111] md:[-webkit-text-stroke:2px_#111111] transition-all hover:text-[#111111]/10">
                SALMAN
              </span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[98px] xl:text-[116px] font-bold text-[#111111] mt-1 sm:mt-2">
                ALI KHAN
              </span>
            </h1>

            {/* Editorial Manifesto Hook */}
            <div className="mt-6 sm:mt-8 max-w-xl">
              <p className="font-editorial text-lg sm:text-xl md:text-2xl text-[#111111] leading-snug font-normal">
                Designing intuitive digital experiences in Figma, engineering high-performance React products, and crafting bespoke WordPress websites.
              </p>
              <p className="font-mono-code text-xs sm:text-sm text-[#6f6f6a] mt-3 leading-relaxed">
                Specialized in component-driven frontend architecture, responsive design systems, and conversion-focused editorial websites.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[#d8d5cc]/70">
              <a
                href="#frontend-work"
                className="inline-flex items-center gap-2.5 bg-[#111111] text-[#F2F0EA] hover:bg-[#c7ff3d] hover:text-[#111111] px-6 py-3 font-mono-code text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-sm"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown size={14} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#F2F0EA] px-6 py-3 font-mono-code text-xs uppercase tracking-wider transition-all duration-200"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Discipline Console (Replacing Person Image) */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            {/* Ambient Label */}
            <div className="flex items-center justify-between mb-3 font-mono-code text-[11px] text-[#6f6f6a]">
              <div className="flex items-center gap-2">
                <Sparkles size={12} className="text-[#111111]" />
                <span className="text-[#111111] font-semibold">CORE DISCIPLINES</span>
              </div>
              <span>03 PRODUCTION PILLARS</span>
            </div>

            {/* 3-Pillar Interactive Architectural Box */}
            <div className="border border-[#111111] bg-[#ffffff] p-5 sm:p-6 shadow-sm relative">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#111111]" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#111111]" />
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#111111]" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#111111]" />

              <div className="space-y-4">
                {disciplinePillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  const isCurrent = activeTab === idx;

                  return (
                    <div
                      key={pillar.num}
                      onMouseEnter={() => setActiveTab(idx)}
                      className={`p-4 border transition-all duration-200 cursor-pointer ${
                        isCurrent
                          ? 'border-[#111111] bg-[#F2F0EA] shadow-xs'
                          : 'border-[#d8d5cc] bg-[#ffffff] hover:border-[#84847f]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono-code text-xs font-bold text-[#111111] bg-[#ffffff] px-1.5 py-0.5 border border-[#d8d5cc]">
                            {pillar.num}
                          </span>
                          <h2 className="font-editorial text-base sm:text-lg font-bold uppercase tracking-tight text-[#111111]">
                            {pillar.title}
                          </h2>
                        </div>
                        <Icon size={16} className={isCurrent ? 'text-[#111111]' : 'text-[#6f6f6a]'} />
                      </div>

                      <p className="text-xs text-[#444748] mb-3 leading-relaxed">
                        {pillar.description}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#d8d5cc]/60 font-mono-code text-[10px]">
                        <div className="flex flex-wrap gap-1">
                          {pillar.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="px-1.5 py-0.5 bg-[#ffffff] text-[#111111] border border-[#d8d5cc]/80">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={pillar.href}
                          className="inline-flex items-center gap-1 text-[#111111] hover:text-[#6f6f6a] font-semibold underline underline-offset-2"
                        >
                          <span>VIEW WORK</span>
                          <ChevronRight size={12} />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Console Status Bar */}
              <div className="mt-4 pt-3 border-t border-[#d8d5cc] flex items-center justify-between font-mono-code text-[10px] text-[#6f6f6a]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#c7ff3d] inline-block" />
                  <span>CRAFT ACROSS THREE CORE DISCIPLINES</span>
                </span>
                <span className="text-[#111111] font-semibold">HYDERABAD, PK</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-y-4 items-center border-t border-[#d8d5cc] pt-5">
        <div className="md:col-span-8 flex flex-wrap items-center gap-4 sm:gap-6 font-mono-code text-xs text-[#6f6f6a]">
          <div>
            <span className="text-[#111111] font-bold">REACT</span> FRONTEND
          </div>
          <span className="text-[#d8d5cc] hidden sm:inline">·</span>
          <div>
            <span className="text-[#111111] font-bold">FIGMA</span> UI/UX DESIGN
          </div>
          <span className="text-[#d8d5cc] hidden sm:inline">·</span>
          <div>
            <span className="text-[#111111] font-bold">WORDPRESS</span> WEBSITES
          </div>
          <span className="text-[#d8d5cc] hidden sm:inline">·</span>
          <div>
            <span className="text-[#111111] font-bold">RESPONSIVE</span> ARCHITECTURE
          </div>
        </div>

        <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-3 font-mono-code text-xs">
          <a
            href="#frontend-work"
            className="inline-flex items-center gap-2 text-[#111111] hover:text-[#6f6f6a] transition-colors"
          >
            <span>SCROLL TO VIEW PROJECTS</span>
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
