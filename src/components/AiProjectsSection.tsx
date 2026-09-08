import { useState } from 'react';
import {
  Bot,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  Terminal,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Sliders,
  Eye,
  GitBranch,
  FileText,
  Clock,
  Key,
  Database,
  Lock,
  Search,
  MessageSquare,
  ThumbsUp,
  RefreshCw,
} from 'lucide-react';
import { AI_PROJECTS, AI_COLLABORATION_STATEMENT } from '../data/portfolio';
import { AiProject } from '../types';

export default function AiProjectsSection() {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const [activeScreenIdx, setActiveScreenIdx] = useState<number>(0);
  const [simulatedGateApproved, setSimulatedGateApproved] = useState<boolean>(false);
  const [isStreamingReasoning, setIsStreamingReasoning] = useState<boolean>(true);

  const currentProject: AiProject = AI_PROJECTS[activeProjectIdx];
  const currentScreen = currentProject.screens[activeScreenIdx] || currentProject.screens[0];

  const handleSelectProject = (idx: number) => {
    setActiveProjectIdx(idx);
    setActiveScreenIdx(0);
    setSimulatedGateApproved(false);
  };

  return (
    <section
      id="ai-products"
      className="py-20 md:py-28 border-b border-[#d8d5cc] max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12 bg-[#F2F0EA] overflow-hidden"
    >
      {/* Category Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111] pb-6 mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2.5 font-mono-code text-xs text-[#6f6f6a] uppercase tracking-wider mb-2">
            <span className="w-2.5 h-2.5 bg-[#111111]" />
            <span>DISCIPLINE 04 // AI PRODUCTS &amp; INTELLIGENT SYSTEMS</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#111111]">
            AI PRODUCT CONCEPTS
          </h2>
        </div>
        <div className="font-mono-code text-xs text-[#6f6f6a] max-w-md text-left md:text-right">
          <span className="text-[#111111] font-semibold">2 COMMERCIAL CONCEPTS</span> — Interactive agent workflows, human-in-the-loop audit gates, deterministic guardrails, and streaming telemetry designed with rigorous product thinking.
        </div>
      </div>

      {/* ====================================================================
          PART 1: AI POSITIONING STATEMENT
          ==================================================================== */}
      <div className="mb-14 border-2 border-[#111111] bg-[#111111] text-[#F2F0EA] p-6 sm:p-10 shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 font-mono-code text-xs">
              <span className="bg-[#c7ff3d] text-[#111111] font-bold px-2.5 py-0.5 tracking-wider uppercase">
                POSITIONING &amp; METHODOLOGY
              </span>
              <span className="text-[#a5a5a0] tracking-widest uppercase">
                HUMAN CRAFT + ACCELERATED INTELLIGENCE
              </span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
              {AI_COLLABORATION_STATEMENT.headline}
            </h3>

            <p className="font-mono-code text-xs sm:text-sm text-[#d0d0ca] leading-relaxed">
              {AI_COLLABORATION_STATEMENT.statement}
            </p>

            <div className="p-3 bg-[#1e1f24] border-l-2 border-[#c7ff3d] font-mono-code text-xs text-[#c7ff3d]">
              <span className="font-bold text-white block mb-0.5">THE FORMULA:</span>
              <span>{AI_COLLABORATION_STATEMENT.formula}</span>
            </div>
          </div>

          {/* 6 Core AI-Augmented Competency Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:max-w-lg w-full font-mono-code text-xs">
            {AI_COLLABORATION_STATEMENT.pillars.map((pillar, idx) => (
              <div key={idx} className="p-3 bg-[#18191e] border border-[#2a2b34] space-y-1">
                <div className="flex items-center justify-between text-[10px] text-[#c7ff3d]">
                  <span className="font-bold uppercase">{pillar.capability}</span>
                  <span>0{idx + 1}</span>
                </div>
                <div className="font-editorial text-xs font-bold text-white uppercase">
                  {pillar.title}
                </div>
                <div className="text-[10px] text-[#8e8e95] leading-relaxed">
                  {pillar.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ====================================================================
          PART 2: AI PROJECTS INTERACTIVE STAGE
          ==================================================================== */}
      {/* Project Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 font-mono-code text-xs">
          {AI_PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => handleSelectProject(idx)}
              className={`px-4 py-2 transition-all uppercase tracking-wider flex items-center gap-2.5 cursor-pointer ${
                activeProjectIdx === idx
                  ? 'bg-[#111111] text-[#F2F0EA] font-bold shadow-xs'
                  : 'bg-[#ffffff] text-[#111111] border border-[#d8d5cc] hover:border-[#888888]'
              }`}
            >
              <span className="text-[10px] opacity-70">0{idx + 1}</span>
              <span className="font-bold">{proj.title}</span>
              <span className="text-[9px] bg-[#c7ff3d] text-[#111111] px-1.5 py-0.2 font-semibold">
                {proj.projectTypeBadge}
              </span>
            </button>
          ))}
        </div>

        <div className="font-mono-code text-xs text-[#6f6f6a] flex items-center gap-2">
          <Bot size={14} className="text-[#111111]" />
          <span>ZERO HALLUCINATIONS · DETERMINISTIC AUDIT GATES</span>
        </div>
      </div>

      {/* Main AI Project Presentation Frame */}
      <div className="border border-[#111111] bg-[#ffffff] shadow-sm">
        {/* Top Meta Ribbon */}
        <div className="border-b border-[#d8d5cc] px-6 py-4 bg-[#F2F0EA] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 font-mono-code text-xs">
            <span className="font-bold bg-[#111111] text-[#F2F0EA] px-2.5 py-0.5">
              CONCEPT 0{activeProjectIdx + 1}
            </span>
            <span className="bg-[#c7ff3d] text-[#111111] px-2 py-0.5 font-bold uppercase">
              {currentProject.projectTypeBadge}
            </span>
            <span className="text-[#6f6f6a] uppercase hidden sm:inline">
              {currentProject.category}
            </span>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono-code text-[10px]">
            {currentProject.techStack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 bg-white border border-[#d8d5cc] text-[#111111]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Narrative & Architecture Summary */}
        <div className="p-6 md:p-10 border-b border-[#d8d5cc]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div>
                <h3 className="font-editorial text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#111111]">
                  {currentProject.title}
                </h3>
                <p className="font-mono-code text-xs text-[#6f6f6a] mt-1 font-medium">
                  {currentProject.tagline}
                </p>
              </div>

              <p className="text-sm text-[#444748] leading-relaxed">
                {currentProject.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F2F0EA] border border-[#d8d5cc]">
                  <div className="font-mono-code text-[11px] font-bold text-[#111111] uppercase mb-1">
                    ENTERPRISE PROBLEM
                  </div>
                  <p className="text-xs text-[#555758] leading-relaxed">
                    {currentProject.problem}
                  </p>
                </div>
                <div className="p-4 bg-[#F2F0EA] border border-[#d8d5cc]">
                  <div className="font-mono-code text-[11px] font-bold text-[#111111] uppercase mb-1">
                    PRODUCT &amp; UX APPROACH
                  </div>
                  <p className="text-xs text-[#555758] leading-relaxed">
                    {currentProject.uxApproach}
                  </p>
                </div>
              </div>
            </div>

            {/* AI Engineering & Safety Architecture Blueprint */}
            <div className="lg:col-span-6 p-5 bg-[#111114] text-[#e0e0e6] border border-[#2a2b34] font-mono-code text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#2a2b34] pb-2 text-[#c7ff3d]">
                <span className="font-bold flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  <span>AI ARCHITECTURE &amp; SAFETY SPECIFICATIONS</span>
                </span>
                <span className="text-[10px] text-[#8e8e95]">SOC2 &amp; OWASP LLM READY</span>
              </div>

              <div className="space-y-3 text-[11px]">
                <div>
                  <span className="text-[#8e8e95] block mb-0.5">01 // MODEL ROUTING STRATEGY:</span>
                  <p className="text-white bg-[#1a1b22] p-2 border border-[#2a2b34]">
                    {currentProject.aiArchitecture.modelStrategy}
                  </p>
                </div>

                <div>
                  <span className="text-[#8e8e95] block mb-0.5">02 // HUMAN-IN-THE-LOOP AUDIT CHECKPOINT:</span>
                  <p className="text-[#c7ff3d] bg-[#1a1b22] p-2 border border-[#2a2b34]">
                    {currentProject.aiArchitecture.humanInTheLoop}
                  </p>
                </div>

                <div>
                  <span className="text-[#8e8e95] block mb-0.5">03 // DETERMINISTIC GUARDRAILS &amp; SAFETY:</span>
                  <p className="text-[#ffaa33] bg-[#1a1b22] p-2 border border-[#2a2b34]">
                    {currentProject.aiArchitecture.guardrails}
                  </p>
                </div>

                <div>
                  <span className="text-[#8e8e95] block mb-0.5">04 // TELEMETRY &amp; INFERENCE MONITORING:</span>
                  <p className="text-[#88aaff] bg-[#1a1b22] p-2 border border-[#2a2b34]">
                    {currentProject.aiArchitecture.telemetry}
                  </p>
                </div>

                {currentProject.pythonLayer && (
                  <div>
                    <span className="text-[#8e8e95] block mb-0.5">05 // PYTHON PROTOTYPING &amp; API WORKFLOW:</span>
                    <p className="text-[#c7ff3d] bg-[#1a1b22] p-2 border border-[#2a2b34]">
                      {currentProject.pythonLayer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================================
            PART 3: INTERACTIVE SCREEN & WORKFLOW INSPECTOR
            ==================================================================== */}
        <div className="p-6 md:p-10 bg-[#faf9f6]">
          {/* Screen Tabs Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d8d5cc] pb-4 mb-6">
            <div>
              <span className="font-mono-code text-[11px] text-[#6f6f6a] uppercase tracking-wider block">
                INTERACTIVE PRODUCT WORKFLOW
              </span>
              <h4 className="font-editorial text-xl font-bold uppercase text-[#111111]">
                CORE APPLICATION INTERFACES &amp; RUNTIME STATES
              </h4>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-mono-code text-xs">
              {currentProject.screens.map((screen, sIdx) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreenIdx(sIdx)}
                  className={`px-3 py-1.5 transition-all uppercase tracking-wider flex items-center gap-1.5 cursor-pointer ${
                    activeScreenIdx === sIdx
                      ? 'bg-[#111111] text-[#c7ff3d] font-bold'
                      : 'bg-white text-[#111111] border border-[#d8d5cc] hover:border-[#111111]'
                  }`}
                >
                  <span>{sIdx + 1}.</span>
                  <span>{screen.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Screen Active Stage */}
          <div className="border border-[#111111] bg-[#0d0e12] text-white overflow-hidden shadow-xl">
            {/* Terminal / HUD Status Bar */}
            <div className="border-b border-[#262836] bg-[#14161f] px-4 py-2.5 flex flex-wrap items-center justify-between font-mono-code text-xs gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                </div>
                <span className="text-[#888896]">STATE:</span>
                <span className="text-[#c7ff3d] font-bold uppercase">{currentScreen.badge}</span>
                <span className="text-[#555566]">|</span>
                <span className="text-white font-medium">{currentScreen.title}</span>
              </div>

              {/* Screen Telemetry Chips */}
              <div className="flex items-center gap-3 text-[11px]">
                {currentScreen.keyMetrics.map((met) => (
                  <div key={met.label} className="bg-[#1b1e2a] px-2 py-0.5 border border-[#2a2d3e]">
                    <span className="text-[#888896] mr-1.5">{met.label}:</span>
                    <span className="text-white font-bold">{met.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Screen Content Renderings */}
            <div className="p-6 md:p-8">
              {/* DESCRIPTION BANNER */}
              <div className="mb-6 p-3 bg-[#171924] border-l-2 border-[#c7ff3d] font-mono-code text-xs text-[#a0a2b2] flex items-center justify-between">
                <span>{currentScreen.description}</span>
                <span className="text-[10px] text-[#c7ff3d] shrink-0 ml-4 hidden sm:inline">
                  ● DETERMINISTIC AUDIT ACTIVE
                </span>
              </div>

              {/* DYNAMIC SCREEN LAYOUT BY VISUAL TYPE */}

              {/* TYPE 1: AGENT GRAPH WORKFLOW (Synapse S1) */}
              {currentScreen.visualType === 'agent-graph' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono-code text-xs">
                    {/* Node 1 */}
                    <div className="p-4 bg-[#181a24] border border-[#2d3145] rounded-xs space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-[#888896]">
                        <span>NODE 01</span>
                        <span className="text-[#10b981]">● VERIFIED</span>
                      </div>
                      <div className="font-bold text-white text-sm">Data Ingestion Agent</div>
                      <div className="text-[11px] text-[#a0a2b2]">
                        Extracts PDF invoice payloads, customer IDs, and tax amounts from webhook payload.
                      </div>
                      <div className="pt-2 border-t border-[#262836] text-[10px] text-[#88aaff]">
                        Tokens: 420 | Latency: 48ms
                      </div>
                    </div>

                    {/* Node 2 */}
                    <div className="p-4 bg-[#181a24] border border-[#2d3145] rounded-xs space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-[#888896]">
                        <span>NODE 02</span>
                        <span className="text-[#10b981]">● VERIFIED</span>
                      </div>
                      <div className="font-bold text-white text-sm">Policy Reasoning Engine</div>
                      <div className="text-[11px] text-[#a0a2b2]">
                        Cross-references corporate spending thresholds and VAT regulations via Claude 3.5.
                      </div>
                      <div className="pt-2 border-t border-[#262836] text-[10px] text-[#88aaff]">
                        Confidence: 98.4% | Reasoning Trace: Pass
                      </div>
                    </div>

                    {/* Node 3 */}
                    <div className="p-4 bg-[#1c1e2b] border-2 border-[#c7ff3d] rounded-xs space-y-2 relative">
                      <div className="absolute -top-2.5 right-2 bg-[#c7ff3d] text-[#111111] font-bold text-[9px] px-1.5 py-0.2">
                        HUMAN AUDIT GATE
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-[#888896]">
                        <span>NODE 03</span>
                        <span className="text-[#c7ff3d]">AWAITING OVERRIDE</span>
                      </div>
                      <div className="font-bold text-white text-sm">Payment Authorization Gate</div>
                      <div className="text-[11px] text-[#a0a2b2]">
                        Triggered threshold: Transaction amount €1,240.00 requires supervisor signature.
                      </div>
                      <div className="pt-2 border-t border-[#262836] text-[10px] text-[#c7ff3d]">
                        Deterministic Halt: Cryptographic Signature Required
                      </div>
                    </div>

                    {/* Node 4 */}
                    <div className="p-4 bg-[#181a24] border border-[#2d3145] rounded-xs space-y-2 opacity-60">
                      <div className="flex items-center justify-between text-[10px] text-[#888896]">
                        <span>NODE 04</span>
                        <span>STANDBY</span>
                      </div>
                      <div className="font-bold text-white text-sm">ERP Dispatch &amp; Ledger</div>
                      <div className="text-[11px] text-[#a0a2b2]">
                        Dispatches signed ledger entry into SAP and notifies vendor via encrypted webhook.
                      </div>
                      <div className="pt-2 border-t border-[#262836] text-[10px] text-[#888896]">
                        Queued for authorization
                      </div>
                    </div>
                  </div>

                  {/* Pipeline Stream Console */}
                  <div className="p-4 bg-[#0a0a0d] border border-[#222430] font-mono-code text-xs space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#888896] pb-1 border-b border-[#1b1c24]">
                      <span className="flex items-center gap-1.5 text-white">
                        <Terminal size={12} className="text-[#c7ff3d]" />
                        <span>AGENT REASONING LOG STREAM (PARALLEL WORKER THREAD 4)</span>
                      </span>
                      <button
                        onClick={() => setIsStreamingReasoning(!isStreamingReasoning)}
                        className="text-[#c7ff3d] hover:underline cursor-pointer"
                      >
                        {isStreamingReasoning ? 'PAUSE STREAM' : 'RESUME STREAM'}
                      </button>
                    </div>
                    <div className="space-y-1 text-[11px]">
                      <div className="text-[#10b981]">[14:22:04.182] INFO: Ingested invoice #INV-2026-8921 from webhook payload.</div>
                      <div className="text-[#88aaff]">[14:22:04.290] REASON: Verified vendor VAT EU948201 against European VIES registry: Valid.</div>
                      <div className="text-[#ffaa33]">[14:22:04.340] GATE_TRIGGER: Value €1,240.00 &gt; autonomous limit €500.00. Dispatching to intervention desk.</div>
                      <div className="text-[#a0a2b2]">[14:22:04.342] STATE: Worker thread paused. Awaiting operator authorization.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TYPE 2: APPROVAL DRAWER / HUMAN-IN-THE-LOOP (Synapse S2) */}
              {currentScreen.visualType === 'approval-drawer' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-mono-code text-xs">
                  {/* Diff Inspector */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="p-4 bg-[#141620] border border-[#2a2d3e]">
                      <div className="flex items-center justify-between text-xs pb-2 mb-3 border-b border-[#262836]">
                        <span className="font-bold text-white uppercase">AI PROPOSED ACTIONS VS VERIFIED RULESET</span>
                        <span className="text-[#c7ff3d]">CONFIDENCE: 98.4%</span>
                      </div>

                      <div className="space-y-3 text-[11px]">
                        <div className="p-3 bg-[#1b1e2a] border border-[#2c3042] flex items-center justify-between">
                          <div>
                            <span className="text-[#888896] block text-[10px]">PROPOSED INVOICE PAYMENT</span>
                            <span className="font-bold text-white text-sm">Atlas Cloud Systems Inc. — €1,240.00</span>
                            <span className="text-[#a0a2b2] block mt-0.5">PO Matching: Verified with PO #49281 (100% item match)</span>
                          </div>
                          <span className="px-2 py-1 bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40 font-bold">
                            MATCH PASS
                          </span>
                        </div>

                        <div className="p-3 bg-[#1b1e2a] border border-[#2c3042] flex items-center justify-between">
                          <div>
                            <span className="text-[#888896] block text-[10px]">BANK ROUTING VALIDATION</span>
                            <span className="font-bold text-white text-sm">IBAN: FR76 3000 6000 0112 3456 7890 189</span>
                            <span className="text-[#a0a2b2] block mt-0.5">Fraud Radar: Clean account history (14 previous payments)</span>
                          </div>
                          <span className="px-2 py-1 bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40 font-bold">
                            SAFE VENDOR
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Intervention Desk */}
                  <div className="lg:col-span-4 p-5 bg-[#171924] border border-[#2d3145] space-y-4">
                    <div className="text-xs font-bold text-white uppercase border-b border-[#2a2d3e] pb-2">
                      OPERATOR INTERVENTION CONTROLS
                    </div>

                    <p className="text-[11px] text-[#a0a2b2] leading-relaxed">
                      This gate enforces human responsibility. By approving, the agent signs the SAP payload and authorizes the bank wire transfer.
                    </p>

                    <div className="space-y-2 pt-2">
                      <button
                        onClick={() => setSimulatedGateApproved(true)}
                        className={`w-full py-3 font-mono-code text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                          simulatedGateApproved
                            ? 'bg-[#10b981] text-black font-bold'
                            : 'bg-[#c7ff3d] hover:bg-white text-black'
                        }`}
                      >
                        <CheckCircle2 size={14} />
                        <span>{simulatedGateApproved ? 'TRANSACTION SIGNED & DISPATCHED' : 'AUTHORIZE INVOICE & DISPATCH'}</span>
                      </button>

                      <button
                        onClick={() => setSimulatedGateApproved(false)}
                        className="w-full py-2 bg-transparent border border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444]/10 font-mono-code text-xs uppercase cursor-pointer"
                      >
                        REJECT &amp; ROUTE TO COMPLIANCE REVIEW
                      </button>
                    </div>

                    {simulatedGateApproved && (
                      <div className="p-2.5 bg-[#10b981]/15 border border-[#10b981]/40 text-[#10b981] text-[10px]">
                        ✔ Ledger updated with Cryptographic Operator Key ID: #OP-8492
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TYPE 3: TELEMETRY & COST DASHBOARD (Synapse S3 / Kinetic S3) */}
              {currentScreen.visualType === 'telemetry-dashboard' && (
                <div className="space-y-6 font-mono-code text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#141620] border border-[#2a2d3e] space-y-1">
                      <div className="text-[#888896] text-[10px] uppercase">Token Cache Efficiency</div>
                      <div className="text-2xl font-bold text-[#c7ff3d]">84.2%</div>
                      <div className="text-[11px] text-[#a0a2b2]">Context caching slashed monthly API cost by $4,120</div>
                    </div>

                    <div className="p-4 bg-[#141620] border border-[#2a2d3e] space-y-1">
                      <div className="text-[#888896] text-[10px] uppercase">P95 Inference Latency</div>
                      <div className="text-2xl font-bold text-[#88aaff]">340ms</div>
                      <div className="text-[11px] text-[#a0a2b2]">Dynamic model router directs simple queries to Flash models</div>
                    </div>

                    <div className="p-4 bg-[#141620] border border-[#2a2d3e] space-y-1">
                      <div className="text-[#888896] text-[10px] uppercase">Zero-Hallucination Rate</div>
                      <div className="text-2xl font-bold text-[#10b981]">99.94%</div>
                      <div className="text-[11px] text-[#a0a2b2]">RAG citations strictly enforced via dual-pass evaluation</div>
                    </div>
                  </div>

                  {/* Visual Bar Distribution Chart */}
                  <div className="p-4 bg-[#141620] border border-[#2a2d3e] space-y-3">
                    <div className="text-xs font-bold text-white uppercase">
                      INFERENCE COST DISTRIBUTION ACROSS WORKERS
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-[11px] text-[#a0a2b2] mb-1">
                          <span>Data Synthesis Worker (Gemini 1.5 Flash)</span>
                          <span className="text-white">$0.0008 / task (68% volume)</span>
                        </div>
                        <div className="w-full bg-[#202330] h-2 rounded-xs overflow-hidden">
                          <div className="bg-[#88aaff] h-full w-[68%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] text-[#a0a2b2] mb-1">
                          <span>Deep Policy Reasoning (Claude 3.5 Sonnet)</span>
                          <span className="text-white">$0.0034 / task (28% volume)</span>
                        </div>
                        <div className="w-full bg-[#202330] h-2 rounded-xs overflow-hidden">
                          <div className="bg-[#c7ff3d] h-full w-[28%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] text-[#a0a2b2] mb-1">
                          <span>Fallback Deterministic Validator</span>
                          <span className="text-white">$0.0001 / task (4% volume)</span>
                        </div>
                        <div className="w-full bg-[#202330] h-2 rounded-xs overflow-hidden">
                          <div className="bg-[#ffaa33] h-full w-[4%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TYPE 4: GUARDRAIL & POLICY MATRIX (Synapse S4) */}
              {currentScreen.visualType === 'guardrail-matrix' && (
                <div className="space-y-4 font-mono-code text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#141620] border border-[#2a2d3e] space-y-3">
                      <div className="font-bold text-white flex items-center justify-between">
                        <span>AUTOMATED PII &amp; DATA REDACTION</span>
                        <span className="text-[#10b981]">ACTIVE</span>
                      </div>
                      <p className="text-[11px] text-[#a0a2b2]">
                        Credit card numbers, Social Security tokens, and customer passwords are intercepted and masked prior to prompt transmission.
                      </p>
                      <div className="p-2 bg-[#0d0e12] border border-[#222432] text-[10px] text-[#c7ff3d]">
                        Regex &amp; NER Filter: 1,420 sensitive tokens masked in last 24h
                      </div>
                    </div>

                    <div className="p-4 bg-[#141620] border border-[#2a2d3e] space-y-3">
                      <div className="font-bold text-white flex items-center justify-between">
                        <span>SEMANTIC HALLUCINATION DRIFT LOCK</span>
                        <span className="text-[#10b981]">ACTIVE</span>
                      </div>
                      <p className="text-[11px] text-[#a0a2b2]">
                        Every factual assertion must achieve a minimum 85% cosine similarity match against enterprise verified ground truth vectors.
                      </p>
                      <div className="p-2 bg-[#0d0e12] border border-[#222432] text-[10px] text-[#c7ff3d]">
                        Strict Threshold: Output withheld if source doc citation is missing
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TYPE 5: COPILOT WORKBENCH (Kinetic S1) */}
              {currentScreen.visualType === 'copilot-workbench' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-mono-code text-xs">
                  {/* Left: Customer Communication Thread */}
                  <div className="lg:col-span-6 p-4 bg-[#141620] border border-[#2a2d3e] space-y-4">
                    <div className="flex items-center justify-between border-b border-[#262836] pb-2 text-[11px]">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <MessageSquare size={13} className="text-[#88aaff]" />
                        <span>LIVE CUSTOMER QUERY #TCK-8819</span>
                      </span>
                      <span className="text-[#ef4444] bg-[#ef4444]/10 px-2 py-0.5 border border-[#ef4444]/30">
                        HIGH CHURN RISK
                      </span>
                    </div>

                    <div className="p-3 bg-[#1b1e2b] border border-[#2a2d3e] space-y-2">
                      <div className="flex justify-between text-[10px] text-[#888896]">
                        <span>Marcus Sterling (CTO @ FinScale Europe)</span>
                        <span>2 minutes ago</span>
                      </div>
                      <p className="text-white text-[11px] leading-relaxed">
                        "Our API webhooks dropped 14 requests after the latest v4.2 upgrade this morning. Our billing reconciliation is now stuck. Can we roll back our cluster immediately or replay failed events?"
                      </p>
                    </div>

                    <div className="p-2.5 bg-[#171924] border border-[#2d3145] text-[10px] text-[#88aaff] space-y-1">
                      <span className="font-bold block text-white">AUTOMATED SEMANTIC CONTEXT ENRICHMENT:</span>
                      <div>• Account Tier: Enterprise Annual ($140k ARR)</div>
                      <div>• Cluster: AWS eu-west-1 (Frankfurt) · Active Pods: 18</div>
                      <div>• Sentiment Delta: -2.4 pts (Urgent frustration detected)</div>
                    </div>
                  </div>

                  {/* Right: AI Copilot Synthesis & Verified Citations */}
                  <div className="lg:col-span-6 p-4 bg-[#141620] border border-[#2a2d3e] space-y-4">
                    <div className="flex items-center justify-between border-b border-[#262836] pb-2 text-[11px]">
                      <span className="font-bold text-[#c7ff3d] flex items-center gap-1.5">
                        <Sparkles size={13} />
                        <span>AI COPILOT VERIFIED RECOMMENDATION</span>
                      </span>
                      <span className="text-white bg-[#10b981]/20 px-2 py-0.5 border border-[#10b981]/30">
                        CONFIDENCE: 97.2%
                      </span>
                    </div>

                    <div className="space-y-2 text-[11px]">
                      <div className="text-[#888896] text-[10px] uppercase">
                        CITED DOCUMENTATION (HYBRID RAG RETRIEVAL):
                      </div>
                      <div className="p-2 bg-[#1b1e2a] border border-[#2a2d3e] text-[10px] flex items-center justify-between">
                        <span className="text-[#88aaff]">Docs / API v4.2 / Idempotent Webhook Replay Guide</span>
                        <span className="text-[#10b981]">Score: 0.96</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#111218] border border-[#c7ff3d]/50 space-y-2">
                      <div className="text-[10px] text-[#c7ff3d] uppercase font-bold">
                        RECOMMENDED DRAFT RESPONSE (EDITABLE BEFORE DISPATCH):
                      </div>
                      <p className="text-[#e2e2e8] text-[11px] leading-relaxed font-sans">
                        "Hi Marcus — no need to roll back the entire cluster. In v4.2, all unacknowledged webhooks are held in the dead-letter queue with exponential backoff. You can replay the 14 events instantly by running the CLI command: <code className="bg-black/50 px-1 font-mono text-[#c7ff3d]">npx api-ops replay --batch-id=v42-hook-8819</code>. I've also verified your eu-west-1 ingress logs are running green."
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 py-2.5 bg-[#c7ff3d] text-black font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors cursor-pointer">
                        INSERT DRAFT &amp; DISPATCH TO CLIENT
                      </button>
                      <button className="px-3 py-2.5 bg-[#202330] text-white border border-[#2d3145] text-xs hover:bg-[#2a2e40] cursor-pointer">
                        CALIBRATE TONE
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TYPE 6: KNOWLEDGE RADAR (Kinetic S2) */}
              {currentScreen.visualType === 'knowledge-radar' && (
                <div className="space-y-4 font-mono-code text-xs">
                  <div className="p-4 bg-[#141620] border border-[#2a2d3e]">
                    <div className="flex items-center justify-between border-b border-[#262836] pb-2 mb-3">
                      <span className="font-bold text-white uppercase">VECTOR KNOWLEDGE REPOSITORY HEALTH</span>
                      <span className="text-[#10b981]">12,480 CHUNKS SYNCHRONIZED</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px]">
                      <div className="p-3 bg-[#1b1e2a] border border-[#2a2d3e] space-y-1">
                        <div className="text-[#888896]">Jira &amp; Linear Defects</div>
                        <div className="text-white font-bold">4,192 Tickets Indexed</div>
                        <div className="text-[#10b981] text-[10px]">Real-time bi-directional sync</div>
                      </div>

                      <div className="p-3 bg-[#1b1e2a] border border-[#2a2d3e] space-y-1">
                        <div className="text-[#888896]">Technical Documentation</div>
                        <div className="text-white font-bold">2,840 Markdown Files</div>
                        <div className="text-[#10b981] text-[10px]">Updated 2 minutes ago</div>
                      </div>

                      <div className="p-3 bg-[#1b1e2a] border border-[#2a2d3e] space-y-1">
                        <div className="text-[#888896]">Verified Customer Resolutions</div>
                        <div className="text-white font-bold">5,448 Solutions</div>
                        <div className="text-[#10b981] text-[10px]">98.2% acceptance rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
