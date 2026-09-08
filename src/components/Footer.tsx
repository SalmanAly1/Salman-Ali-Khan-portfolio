import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#84847f] border-t border-[#242422] py-12">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#242422] pb-8 font-mono-code text-xs">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2F0EA] hover:text-[#c7ff3d] transition-colors"
            >
              GITHUB
            </a>
            {PERSONAL_INFO.linkedinUrl && (
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F2F0EA] hover:text-[#c7ff3d] transition-colors"
              >
                LINKEDIN
              </a>
            )}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#F2F0EA] hover:text-[#c7ff3d] transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            {PERSONAL_INFO.phone && (
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-[#F2F0EA] hover:text-[#c7ff3d] transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
            )}
            <span className="text-[#84847f] hidden md:inline">
              {PERSONAL_INFO.location.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#F2F0EA] hover:text-[#c7ff3d] transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-[11px] text-[#6f6f6a]">
          <p>© {new Date().getFullYear()} Salman Ali Khan. All rights reserved.</p>
          <p className="flex items-center gap-2 text-[#84847f]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff3d]" />
            <span className="font-semibold text-[#F2F0EA]">SALMAN ALI KHAN</span>
            <span>·</span>
            <span>UI/UX DESIGNER · REACT FRONTEND DEVELOPER</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
