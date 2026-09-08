export default function Marquee() {
  const items = [
    'UI/UX DESIGN',
    'REACT FRONTEND',
    'FIGMA SYSTEMS',
    'INTERACTION DESIGN',
    'WEB ACCESSIBILITY',
    'REST APIS',
    'HIGH PERFORMANCE',
    'OPEN FOR OPPORTUNITIES',
  ];

  return (
    <div className="w-full bg-[#111111] text-[#F2F0EA] py-3.5 border-y border-[#242422] overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono-code text-[11px] md:text-xs tracking-[0.2em] uppercase">
        {/* Quad array for seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center gap-8">
            <span className="hover:text-[#c7ff3d] transition-colors">{item}</span>
            <span className="text-[#c7ff3d]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
