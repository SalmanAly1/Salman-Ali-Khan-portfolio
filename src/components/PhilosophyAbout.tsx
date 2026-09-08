import { Sparkles } from 'lucide-react';

export default function PhilosophyAbout() {
  return (
    <section
      id="philosophy"
      className="py-20 md:py-28 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12 border-b border-[#d8d5cc]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Section Marker & Dual Role Concept */}
        <div className="md:col-span-4">
          <span className="font-mono-code text-xs text-[#6f6f6a] block mb-2">
            ABOUT / DESIGN &amp; CODE
          </span>
          <h2 className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#111111]">
            DUAL-DISCIPLINE APPROACH
          </h2>

          {/* Minimalist Formula Box */}
          <div className="mt-6 p-4 border border-[#d8d5cc] bg-[#ffffff] font-mono-code text-xs space-y-2">
            <div className="text-[#6f6f6a] text-[11px] uppercase">
              THE CORE INTERSECTION:
            </div>
            <div className="text-[#111111] font-bold">
              REACT FRONTEND + UI/UX &amp; PRODUCT DESIGN + WORDPRESS
            </div>
            <div className="text-[#6f6f6a] pt-2 border-t border-[#d8d5cc] text-[11px] leading-relaxed">
              Taking digital ideas directly from Figma concepts to production-grade React interfaces and custom WordPress themes with zero fidelity loss.
            </div>
          </div>
        </div>

        {/* Right Column: Monumental Statement & Factual Pillars */}
        <div className="md:col-span-8 flex flex-col space-y-8 lg:space-y-12">
          <blockquote className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#111111] font-bold tracking-tight leading-tight uppercase">
            “I DESIGN DIGITAL EXPERIENCES AND BUILD THEM INTO HIGH-PERFORMANCE PRODUCTS.”
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#d8d5cc] font-editorial text-base text-[#333333] leading-relaxed">
            <div>
              <h3 className="font-mono-code text-xs text-[#111111] font-bold uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Sparkles size={13} className="text-[#111111]" />
                UI/UX Design Systems
              </h3>
              <p className="text-sm sm:text-base text-[#444748]">
                Crafting user flows, wireframes, and scalable design systems in Figma. Focused on clear visual hierarchy, accessible contrast, and measured usability improvements that reduce developer handoff time.
              </p>
            </div>

            <div>
              <h3 className="font-mono-code text-xs text-[#111111] font-bold uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#111111] rounded-full inline-block" />
                React Frontend Architecture
              </h3>
              <p className="text-sm sm:text-base text-[#444748]">
                Translating designs into clean, modular React components using modern JavaScript (ES6+), custom hooks, REST API integrations, and fast, responsive execution across all modern devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
