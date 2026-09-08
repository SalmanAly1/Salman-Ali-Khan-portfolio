import { useEffect, useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Eye, Shield, Target, Award } from 'lucide-react';
import { Project } from '../types';
import ProjectVisualScreens from './ProjectVisualScreens';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);

  useEffect(() => {
    setActiveScreenIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#111111]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#F2F0EA] text-[#111111] border border-[#d8d5cc] w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#F2F0EA]/95 backdrop-blur-sm border-b border-[#d8d5cc] p-4 sm:p-6 flex items-center justify-between z-20">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-mono-code text-xs px-2.5 py-1 bg-[#111111] text-[#F2F0EA] font-semibold">
              PROJECT {project.number}
            </span>
            <span
              className={`font-mono-code text-[11px] px-2.5 py-1 font-bold border uppercase tracking-wider ${
                project.isRealProject
                  ? 'bg-[#111111] text-[#F2F0EA] border-[#111111]'
                  : 'bg-transparent text-[#111111] border-[#111111]'
              }`}
            >
              {project.isRealProject ? 'REAL PROJECT' : 'DESIGN EXPLORATION'}
            </span>
            <span className="font-mono-code text-xs text-[#6f6f6a] uppercase hidden sm:inline">
              {project.role}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 border border-[#d8d5cc] hover:bg-[#111111] hover:text-[#F2F0EA] transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 md:p-10 space-y-10">
          {/* Title & Classification */}
          <div>
            <div className="flex flex-wrap items-center gap-2 font-mono-code text-xs text-[#6f6f6a] uppercase mb-2">
              <span>{project.category}</span>
              {project.year && (
                <>
                  <span>·</span>
                  <span>{project.year}</span>
                </>
              )}
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#111111] leading-tight">
              {project.title}
            </h2>
            <p className="font-editorial text-lg text-[#444748] mt-3 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* VISUAL SHOWCASE: 3-4 Visual Screens with Device Frame */}
          <div className="border border-[#d8d5cc] bg-[#ffffff] p-4 sm:p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#d8d5cc] gap-3 mb-6">
              <div>
                <span className="font-mono-code text-xs text-[#6f6f6a] uppercase block">
                  INTERACTIVE CASE STUDY PRESENTATION
                </span>
                <h3 className="font-editorial text-xl font-bold uppercase text-[#111111]">
                  VISUAL SHOWCASE (04 SCREENS)
                </h3>
              </div>
              {/* Screen selection tabs */}
              <div className="flex flex-wrap gap-1.5 font-mono-code text-xs">
                {project.screens.map((sc, sIdx) => {
                  const isActive = activeScreenIndex === sIdx;
                  return (
                    <button
                      key={sc.id}
                      onClick={() => setActiveScreenIndex(sIdx)}
                      className={`px-3 py-1.5 border transition-all ${
                        isActive
                          ? 'bg-[#111111] text-[#c7ff3d] border-[#111111] font-bold'
                          : 'bg-[#F2F0EA] text-[#111111] border-[#d8d5cc] hover:border-[#111111]'
                      }`}
                    >
                      0{sIdx + 1} · {sc.title.split(' ')[0]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Render active screen mockup */}
            <div className="py-2">
              <ProjectVisualScreens projectId={project.id} screenIndex={activeScreenIndex} />
            </div>

            {/* Screen caption */}
            <div className="mt-4 pt-3 border-t border-[#d8d5cc] flex flex-wrap items-center justify-between font-mono-code text-xs text-[#6f6f6a] gap-2">
              <span>
                SCREEN 0{activeScreenIndex + 1}:{' '}
                <strong className="text-[#111111]">
                  {project.screens[activeScreenIndex]?.title}
                </strong>
              </span>
              <span className="text-right">
                {project.screens[activeScreenIndex]?.description}
              </span>
            </div>
          </div>

          {/* Metrics or Design Goal Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border border-[#d8d5cc] p-4 bg-[#ffffff]">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-mono-code text-[10px] text-[#6f6f6a] uppercase block">
                  {m.label}
                </span>
                <span className="font-mono-code text-sm font-bold text-[#111111] block">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Narrative Case Study Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-[#d8d5cc]">
            {/* Left: Overview & Challenge */}
            <div className="md:col-span-6 space-y-6 font-editorial">
              <div>
                <h3 className="font-mono-code text-xs font-bold uppercase text-[#6f6f6a] tracking-wider mb-2">
                  PROJECT OVERVIEW
                </h3>
                <p className="text-sm sm:text-base text-[#111111] leading-relaxed">
                  {project.fullCaseStudy}
                </p>
              </div>

              {project.challenge && (
                <div className="p-4 border border-[#d8d5cc] bg-[#ffffff]">
                  <h3 className="font-mono-code text-xs font-bold uppercase text-[#111111] tracking-wider mb-2 flex items-center gap-1.5">
                    <Target size={14} /> THE CHALLENGE
                  </h3>
                  <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}
            </div>

            {/* Right: Approach & Outcome / Design Goal */}
            <div className="md:col-span-6 space-y-6 font-editorial">
              {project.approach && (
                <div>
                  <h3 className="font-mono-code text-xs font-bold uppercase text-[#6f6f6a] tracking-wider mb-2">
                    THE APPROACH &amp; ARCHITECTURE
                  </h3>
                  <p className="text-sm sm:text-base text-[#111111] leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              )}

              {/* OUTCOME / DESIGN GOAL */}
              <div className="p-4 border border-[#d8d5cc] bg-[#ffffff]">
                <h3 className="font-mono-code text-xs font-bold uppercase text-[#111111] tracking-wider mb-2 flex items-center gap-1.5">
                  <Award size={14} />
                  {project.isRealProject ? 'PRODUCTION IMPACT & OUTCOME' : 'DESIGN & ENGINEERING GOAL'}
                </h3>
                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                  {project.isRealProject ? project.impact : project.designGoal}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Implemented */}
          <div className="pt-6 border-t border-[#d8d5cc]">
            <h4 className="font-mono-code text-xs font-bold uppercase text-[#111111] mb-4 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#111111]" />
              KEY FEATURES &amp; CAPABILITIES
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-editorial text-sm text-[#333333]">
              {project.keyFeatures.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 p-3 bg-[#ffffff] border border-[#d8d5cc]"
                >
                  <span className="font-mono-code text-xs text-[#6f6f6a] mt-0.5 font-bold">
                    0{i + 1}.
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="pt-6 border-t border-[#d8d5cc]">
            <span className="font-mono-code text-xs font-bold uppercase text-[#6f6f6a] block mb-3">
              TECHNOLOGIES &amp; METHODOLOGIES
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-[#ffffff] border border-[#d8d5cc] font-mono-code text-xs text-[#111111]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-[#d8d5cc]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111111] text-[#F2F0EA] hover:bg-[#c7ff3d] hover:text-[#111111] transition-colors duration-150 px-6 py-3.5 font-mono-code text-xs font-bold tracking-wider uppercase flex items-center gap-2"
              >
                <Github size={14} />
                <span>VIEW REPOSITORY</span>
                <ExternalLink size={12} />
              </a>
            )}
            <button
              onClick={onClose}
              className="border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#F2F0EA] transition-colors duration-150 px-6 py-3.5 font-mono-code text-xs font-bold tracking-wider uppercase"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
