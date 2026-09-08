import { EDUCATION, CERTIFICATIONS } from '../data/portfolio';
import { Award, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Credentials() {
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollReveal();

  return (
    <section
      id="credentials"
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
            EDUCATION &amp; CERTIFICATIONS
          </span>
          <h2 className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#111111]">
            FOUNDATION &amp; CREDENTIALS
          </h2>
          <p className="font-editorial text-sm text-[#6f6f6a] mt-4 max-w-xs leading-relaxed hidden md:block">
            Degree in Information Technology combined with professional certifications in user experience design and React frontend development.
          </p>
        </div>

        <div className="md:col-span-8 space-y-10">
          {/* Degree Card */}
          <div className="border border-[#d8d5cc] p-6 sm:p-8 bg-[#ffffff]">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#111111] uppercase font-bold mb-3">
              <GraduationCap size={16} />
              <span>ACADEMIC DEGREE</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
              <h3 className="font-editorial text-xl sm:text-2xl text-[#111111] font-bold tracking-tight uppercase">
                {EDUCATION.degree}
              </h3>
              <span className="font-mono-code text-xs text-[#6f6f6a] mt-1 sm:mt-0 font-medium">
                {EDUCATION.period}
              </span>
            </div>

            <p className="font-mono-code text-xs text-[#111111] font-semibold mb-4">
              {EDUCATION.institution} · {EDUCATION.location}
            </p>

            <p className="font-editorial text-sm text-[#444748] leading-relaxed">
              {EDUCATION.description}
            </p>
          </div>

          {/* Industry Certifications */}
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#111111] uppercase font-bold mb-4">
              <Award size={16} />
              <span>PROFESSIONAL CERTIFICATIONS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-[#d8d5cc]">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="p-6 border-r border-b border-[#d8d5cc] bg-[#ffffff] hover:bg-[#F2F0EA]/60 transition-colors"
                >
                  <div className="flex items-center justify-between font-mono-code text-[11px] text-[#6f6f6a] mb-2">
                    <span className="text-[#111111] font-bold">{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>

                  <h4 className="font-editorial text-base font-bold text-[#111111] uppercase mb-2">
                    {cert.title}
                  </h4>

                  <p className="font-editorial text-xs text-[#6f6f6a] leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
