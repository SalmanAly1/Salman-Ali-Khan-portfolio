import { useState } from 'react';
import { ExternalLink, BookOpen, ArrowUpRight, CheckCircle, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import ProjectVisualScreens from './ProjectVisualScreens';

export default function SelectedWork() {
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const activeProject = PROJECTS[activeProjectIndex] || PROJECTS[0];

  return (
    <section
      id="selected-work"
      className="py-20 md:py-28 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12 border-b border-[#d8d5cc]"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between border-b border-[#d8d5cc] pb-6 mb-12 md:mb-16 gap-4">
        <div>
          <span className="font-mono-code text-xs text-[#6f6f6a] block mb-1">
            PORTFOLIO ARCHIVE / 03 CURATED CASE STUDIES
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#111111] font-bold uppercase tracking-tight">
            SELECTED PROJECTS
          </h2>
        </div>
        <div className="flex items-center gap-4 font-mono-code text-xs text-[#6f6f6a]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            <span className="text-[#111111] font-semibold">01 REAL PRODUCTION</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full border border-[#111111]" />
            <span>02 DESIGN EXPLORATIONS</span>
          </div>
        </div>
      </div>

      {/* Main Container: Editorial Project List on Left/Top, Dynamic 3D Preview Stage on Right/Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Editorial Project List (Cols 1-6) */}
        <div className="lg:col-span-6 divide-y divide-[#d8d5cc] border-y border-[#d8d5cc]">
          {PROJECTS.map((project, index) => {
            const isSelected = index === activeProjectIndex;
            const isHovered = hoveredProjectId === project.id;

            return (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                aria-label={`View case study for ${project.title}`}
                onMouseEnter={() => {
                  setHoveredProjectId(project.id);
                  setActiveProjectIndex(index);
                }}
                onFocus={() => {
                  setActiveProjectIndex(index);
                }}
                onMouseLeave={() => setHoveredProjectId(null)}
                onClick={() => setSelectedModalProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedModalProject(project);
                  }
                }}
                className={`py-5 sm:py-6 px-3 sm:px-4 cursor-pointer transition-all duration-300 group relative text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                  isSelected ? 'bg-[#ffffff] shadow-sm' : 'hover:bg-[#ffffff]/60'
                }`}
              >
                {/* Active Indicator Line */}
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#111111]" />
                )}

                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`font-mono-code text-xs sm:text-sm font-bold transition-colors ${
                        isSelected ? 'text-[#111111]' : 'text-[#6f6f6a]'
                      }`}
                    >
                      {project.number}
                    </span>
                    <span className="text-[#d8d5cc]">/</span>
                    <span
                      className={`font-mono-code text-[10px] sm:text-[11px] px-2.5 py-0.5 uppercase font-semibold tracking-wider ${
                        project.isRealProject
                          ? 'bg-[#111111] text-[#F2F0EA] border border-[#111111]'
                          : 'bg-transparent text-[#111111] border border-[#111111]'
                      }`}
                    >
                      {project.isRealProject ? 'REAL PROJECT' : 'DESIGN EXPLORATION'}
                    </span>
                  </div>

                  <span className="font-mono-code text-[11px] text-[#6f6f6a] uppercase hidden sm:inline">
                    {project.technologies.slice(0, 2).join(' · ')}
                  </span>
                </div>

                {/* Project Title with arrow hover */}
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`font-editorial text-xl sm:text-2xl font-bold uppercase tracking-tight transition-transform duration-200 ${
                      isSelected
                        ? 'text-[#111111] translate-x-1'
                        : 'text-[#333333] group-hover:text-[#111111]'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-[#d8d5cc] flex items-center justify-center text-[#111111] shrink-0 group-hover:bg-[#111111] group-hover:text-[#F2F0EA] group-hover:border-[#111111] transition-all">
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                {/* Category metadata */}
                <div className="font-mono-code text-xs text-[#6f6f6a] mt-1 uppercase flex items-center gap-2">
                  <span>{project.category}</span>
                </div>

                {/* Expanded teaser when selected */}
                {isSelected && (
                  <div className="mt-3 pt-3 border-t border-[#d8d5cc]/60 animate-in fade-in duration-200">
                    <p className="font-editorial text-xs sm:text-sm text-[#444748] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between font-mono-code text-xs">
                      <span className="text-[#111111] font-bold flex items-center gap-1">
                        EXPLORE FULL CASE STUDY &rarr;
                      </span>
                      <span className="text-[#6f6f6a] text-[11px]">
                        04 HIGH-FI SCREENS
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic 3D Preview Stage & Mockup (Cols 7-12) */}
        <div className="lg:col-span-6 sticky top-24 space-y-4">
          <div className="border border-[#d8d5cc] bg-[#ffffff] p-5 sm:p-7 shadow-sm">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#d8d5cc] mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                <span className="font-mono-code text-xs font-bold uppercase text-[#111111]">
                  ACTIVE PREVIEW / PROJECT {activeProject.number}
                </span>
              </div>
              <span
                className={`font-mono-code text-[11px] px-2.5 py-0.5 font-bold uppercase tracking-wider ${
                  activeProject.isRealProject
                    ? 'bg-[#111111] text-[#F2F0EA] border border-[#111111]'
                    : 'bg-transparent text-[#111111] border border-[#111111]'
                }`}
              >
                {activeProject.isRealProject ? 'REAL PROJECT' : 'DESIGN EXPLORATION'}
              </span>
            </div>

            {/* Visual Screen Preview */}
            <div
              role="button"
              tabIndex={0}
              aria-label={`Open interactive gallery for ${activeProject.title}`}
              onClick={() => setSelectedModalProject(activeProject)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedModalProject(activeProject);
                }
              }}
              className="cursor-pointer group relative overflow-hidden transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              <div className="transform transition-transform duration-500 group-hover:scale-[1.01]">
                <ProjectVisualScreens projectId={activeProject.id} screenIndex={0} />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono-code text-xs text-[#6f6f6a]">
                <span>SCREEN 01: HERO WORKSPACE INTERFACE</span>
                <span className="text-[#111111] font-bold flex items-center gap-1 group-hover:text-[#c7ff3d]">
                  <span>CLICK TO VIEW ALL 4 SCREENS</span>
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-[#d8d5cc] font-mono-code text-xs">
              {activeProject.metrics.map((m, i) => (
                <div key={i} className="p-2 bg-[#F2F0EA] border border-[#d8d5cc]/60">
                  <span className="text-[10px] text-[#6f6f6a] block truncate">{m.label}</span>
                  <span className="font-bold text-[#111111] block truncate">{m.value}</span>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedModalProject(activeProject)}
                className="flex-1 bg-[#111111] text-[#F2F0EA] hover:bg-[#c7ff3d] hover:text-[#111111] transition-colors duration-150 py-3 px-4 font-mono-code text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <BookOpen size={14} />
                <span>READ COMPLETE CASE STUDY</span>
              </button>
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#F2F0EA] transition-colors duration-150 py-3 px-4 font-mono-code text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5"
                >
                  <span>GITHUB</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal Dialog */}
      <ProjectModal
        project={selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
      />
    </section>
  );
}
