import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#philosophy' },
    { label: 'FRONTEND', href: '#frontend-work' },
    { label: 'UI/UX DESIGN', href: '#uiux-figma' },
    { label: 'WORDPRESS', href: '#wordpress-sites' },
    { label: 'AI CONCEPTS', href: '#ai-products' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#F2F0EA]/95 backdrop-blur-md border-[#d8d5cc] py-3 shadow-xs'
            : 'bg-[#F2F0EA]/85 backdrop-blur-xs border-[#d8d5cc]/80 py-4'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12 flex items-center justify-between">
          {/* Brand Name */}
          <a
            href="#hero"
            className="font-mono-code text-xs md:text-sm font-bold tracking-widest text-[#111111] uppercase hover:text-[#6f6f6a] transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-[#111111] rounded-full inline-block" />
            <span>SALMAN ALI KHAN</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#6f6f6a] hover:text-[#111111] font-mono-code text-xs uppercase tracking-wider transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Availability Badge & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-[#d8d5cc] bg-[#ffffff]/60">
              <span className="w-2 h-2 rounded-full bg-[#c7ff3d] animate-pulse inline-block" />
              <span className="font-mono-code text-[11px] text-[#111111] font-medium tracking-wider">
                OPEN TO REMOTE WORK
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#111111] border border-[#d8d5cc] hover:bg-[#eae8e2] transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-x-0 top-[57px] bg-[#F2F0EA] border-b border-[#d8d5cc] p-6 flex flex-col space-y-4 z-40 md:hidden shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center gap-2 pb-2 border-b border-[#d8d5cc]">
            <span className="w-2 h-2 rounded-full bg-[#c7ff3d] animate-pulse inline-block" />
            <span className="font-mono-code text-xs text-[#111111] font-medium">
              AVAILABLE FOR REMOTE &amp; INTERNATIONAL WORK
            </span>
          </div>

          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono-code text-xs uppercase py-2.5 border-b border-[#d8d5cc]/50 text-[#111111] flex items-center justify-between"
            >
              <span>{item.label}</span>
              <ArrowUpRight size={14} className="text-[#6f6f6a]" />
            </a>
          ))}

          <a
            href="https://github.com/SalmanAly1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 font-mono-code text-xs uppercase py-3 px-4 bg-[#111111] text-[#F2F0EA] text-center tracking-wider hover:bg-[#c7ff3d] hover:text-[#111111] transition-colors flex items-center justify-center gap-2"
          >
            <span>GITHUB PROFILE</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </>
  );
}
