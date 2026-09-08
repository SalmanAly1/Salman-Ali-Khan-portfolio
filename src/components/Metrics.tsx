import { METRICS } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Metrics() {
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollReveal();

  return (
    <section
      id="metrics"
      className="border-b border-[#d8d5cc] max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12 py-16 md:py-24"
    >
      <div
        ref={headerRef}
        className={`mb-8 flex items-center justify-between border-b border-[#d8d5cc] pb-3 transition-all duration-700 ease-out ${
          isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <span className="font-mono-code text-xs text-[#6f6f6a]">
          DISCIPLINE PROFILE &amp; CRAFT STANDARDS
        </span>
        <span className="font-mono-code text-xs text-[#111111] hidden sm:inline">
          EXPERIENCE &amp; EXECUTION · 3+ YEARS
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#d8d5cc]">
        {METRICS.map((metric) => (
          <div
            key={metric.id}
            className="p-6 md:p-8 border-r border-b border-[#d8d5cc] bg-transparent hover:bg-[#ffffff]/60 transition-colors duration-150 group"
          >
            <span className="font-mono-code text-xs text-[#6f6f6a] block mb-3 group-hover:text-[#111111] transition-colors">
              {metric.label}
            </span>
            <p className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#111111] font-bold tracking-tighter mb-2">
              {metric.value}
            </p>
            <p className="font-editorial text-xs md:text-sm text-[#6f6f6a] leading-relaxed">
              {metric.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
