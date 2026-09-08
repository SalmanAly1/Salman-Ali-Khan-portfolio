import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolio';
import { Sparkles, Layers, ArrowUpRight, Code, Database, Palette, Wrench } from 'lucide-react';

export default function Arsenal() {
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    description: string;
    meta?: string;
    projectLinks?: string[];
    category: string;
  }>(() => ({
    name: SKILL_CATEGORIES[1].skills[0].name,
    description: SKILL_CATEGORIES[1].skills[0].description,
    meta: SKILL_CATEGORIES[1].skills[0].meta,
    projectLinks: SKILL_CATEGORIES[1].skills[0].projectLinks,
    category: SKILL_CATEGORIES[1].title,
  }));

  const getCategoryIcon = (title: string) => {
    if (title.includes('UI/UX')) return <Palette size={14} />;
    if (title.includes('FRONTEND')) return <Code size={14} />;
    if (title.includes('AI')) return <Sparkles size={14} />;
    if (title.includes('WORKFLOW') || title.includes('TOOLS')) return <Wrench size={14} />;
    return <Database size={14} />;
  };

  return (
    <section
      id="skills"
      className="py-20 md:py-28 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12 border-b border-[#d8d5cc]"
    >
      {/* Header */}
      <div className="flex flex-wrap items-baseline justify-between border-b border-[#d8d5cc] pb-6 mb-8 gap-4">
        <div>
          <span className="font-mono-code text-xs text-[#6f6f6a] block mb-1">
            TECHNICAL ARSENAL &amp; PRACTICAL CRAFT
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#111111] font-bold uppercase tracking-tight">
            SKILLS &amp; CAPABILITIES
          </h2>
        </div>
        <div className="font-mono-code text-xs text-[#6f6f6a] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#111111]" />
          <span>PRODUCTION-READY EXPERTISE</span>
        </div>
      </div>

      {/* AI / Design / Dev Workflow Statement */}
      <div className="mb-10 p-6 sm:p-8 bg-[#ffffff] border border-[#111111] shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 font-mono-code text-[11px] text-[#6f6f6a] uppercase">
              <Sparkles size={13} className="text-[#111111]" />
              <span className="text-[#111111] font-bold">AI + DESIGN + DEV WORKFLOW PHILOSOPHY</span>
            </div>
            <p className="font-editorial text-base sm:text-lg text-[#111111] font-medium leading-relaxed">
              &ldquo;I use AI as a creative and development partner to move from idea to polished digital product faster — combining AI-assisted exploration, product design, prototyping and development with human judgment, UX thinking and attention to detail.&rdquo;
            </p>
          </div>
          <div className="shrink-0 p-3.5 bg-[#111111] text-[#c7ff3d] font-mono-code text-xs font-bold uppercase tracking-wider border-l-2 border-[#c7ff3d]">
            AI + UI/UX THINKING + REACT DEV = FASTER PRODUCT ITERATION
          </div>
        </div>
      </div>

      {/* Grid of 5 categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-10">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="border border-[#d8d5cc] bg-[#ffffff] p-5 flex flex-col justify-between shadow-xs hover:border-[#111111] transition-colors"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#d8d5cc] mb-4 text-[#111111]">
                <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  {getCategoryIcon(category.title)}
                  <span>{category.title}</span>
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill) => {
                  const isSelected = activeSkill.name === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() =>
                        setActiveSkill({
                          name: skill.name,
                          description: skill.description,
                          meta: skill.meta,
                          projectLinks: skill.projectLinks,
                          category: category.title,
                        })
                      }
                      onClick={() =>
                        setActiveSkill({
                          name: skill.name,
                          description: skill.description,
                          meta: skill.meta,
                          projectLinks: skill.projectLinks,
                          category: category.title,
                        })
                      }
                      className={`p-2.5 border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#111111] bg-[#111111] text-[#F2F0EA] shadow-xs'
                          : 'border-transparent bg-[#F2F0EA]/60 hover:bg-[#F2F0EA] hover:border-[#d8d5cc] text-[#111111]'
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-1">
                        <span className="font-editorial text-sm font-bold truncate">
                          {skill.name}
                        </span>
                        <span
                          className={`font-mono-code text-[10px] uppercase shrink-0 ${
                            isSelected ? 'text-[#c7ff3d]' : 'text-[#6f6f6a]'
                          }`}
                        >
                          {skill.meta}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Inspector Dossier Bar */}
      <div className="border border-[#111111] bg-[#111111] text-[#F2F0EA] p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between border-b border-[#333333] pb-4 mb-4 gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs text-[#c7ff3d] uppercase font-bold tracking-wider">
              INSPECTED CAPABILITY / {activeSkill.category}
            </span>
            <span className="text-[#8e8e88]">•</span>
            <span className="font-editorial text-xl sm:text-2xl font-bold uppercase text-[#F2F0EA]">
              {activeSkill.name}
            </span>
          </div>
          <span className="font-mono-code text-xs text-[#8e8e88] uppercase">
            STATUS: {activeSkill.meta}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <span className="font-mono-code text-[10px] text-[#8e8e88] uppercase block">
              PRACTICAL APPLICATION &amp; ARCHITECTURAL USAGE:
            </span>
            <p className="font-editorial text-base sm:text-lg text-[#d8d5cc] leading-relaxed">
              {activeSkill.description}
            </p>
          </div>

          <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-[#333333] pt-4 md:pt-0 md:pl-6 space-y-2">
            <span className="font-mono-code text-[10px] text-[#8e8e88] uppercase block">
              DEMONSTRATED IN PROJECTS:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeSkill.projectLinks && activeSkill.projectLinks.length > 0 ? (
                activeSkill.projectLinks.map((p) => (
                  <span
                    key={p}
                    className="px-2.5 py-1 bg-[#1f1f1e] border border-[#383838] font-mono-code text-xs text-[#c7ff3d]"
                  >
                    {p}
                  </span>
                ))
              ) : (
                <span className="font-mono-code text-xs text-[#8e8e88]">
                  Integrated across all active builds
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
