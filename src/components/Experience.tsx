import { EXPERIENCES } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollReveal();

  return (
    <section
      id="experience"
      className="py-20 md:py-28 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12 border-b border-[#d8d5cc]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        <div
          ref={headerRef}
          className={`md:col-span-4 transition-all duration-700 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <span className="font-mono-code text-xs text-[#6f6f6a] block mb-2">
            PROFESSIONAL EXPERIENCE
          </span>
          <h2 className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#111111]">
            CAREER HISTORY
          </h2>
          <p className="font-editorial text-sm text-[#6f6f6a] mt-4 max-w-xs leading-relaxed hidden md:block">
            Commercial background delivering responsive React interfaces, component libraries, and end-to-end UI/UX designs.
          </p>
        </div>

        <div className="md:col-span-8 flex flex-col space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="border-b border-[#d8d5cc] pb-10 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
                <div>
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#111111] font-bold tracking-tight uppercase">
                    {exp.company}
                  </h3>
                  <p className="font-mono-code text-xs text-[#111111] font-semibold uppercase mt-1">
                    {exp.role} <span className="text-[#6f6f6a] font-normal">· Hyderabad, Pakistan</span>
                  </p>
                </div>
                <span className="font-mono-code text-xs text-[#6f6f6a] mt-2 sm:mt-0 font-medium">
                  {exp.period}
                </span>
              </div>

              {/* Achievements List */}
              <ul className="space-y-2.5 font-editorial text-sm sm:text-base text-[#333333] leading-relaxed mb-6">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-mono-code text-xs text-[#6f6f6a] mt-1 shrink-0">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-code text-[11px] uppercase px-2.5 py-1 border border-[#d8d5cc] bg-[#ffffff] text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
