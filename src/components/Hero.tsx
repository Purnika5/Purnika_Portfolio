import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Eye, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Trophy, 
  GraduationCap 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { triggerConfetti } from '../utils/confetti';

interface HeroProps {
  onOpenResumeModal: () => void;
}

const CODE_TABS = [
  {
    id: 'detector',
    label: 'model_fft.py',
    icon: Cpu,
    code: `# Tri-stream multimodal deepfake feature fusion
import cv2, numpy as np, tensorflow as tf

def analyze_synthetic_artifacts(image_rgb):
    # 1. 2D Fast Fourier Transform frequency harmonics
    gray = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2GRAY)
    fft_spectrum = np.fft.fftshift(np.fft.fft2(gray))
    magnitude = 20 * np.log(np.abs(fft_spectrum) + 1e-9)
    
    # 2. ResNet-50 deep spatial feature extraction
    spatial_tensor = resnet_backbone.extract(image_rgb)
    
    # 3. Concatenate spatial + frequency residuals
    prediction = fusion_classifier([spatial_tensor, magnitude])
    return {"is_deepfake": bool(prediction > 0.5), "confidence": 0.902}`
  },
  {
    id: 'compliance',
    label: 'llm_fallback.py',
    icon: ShieldCheck,
    code: `# Multi-LLM fault-tolerant compliance routing
from fastapi import FastAPI, Depends

async def evaluate_compliance(sanitized_text: str):
    # PII sanitization across 4 sensitive categories
    masked_doc, audit_map = pii_gateway.mask(sanitized_text)
    
    # Automatic fallback across Gemini, Groq, & OpenRouter
    for provider in [GeminiClient(), GroqLPU(), OpenRouter()]:
        try:
            audit_log.record(provider.name, masked_doc.hash)
            return await provider.check_regulations(masked_doc)
        except ProviderTimeout:
            continue
    raise ServiceUnavailable("All LLM providers unreachable")`
  },
  {
    id: 'agent',
    label: 'langgraph_flow.py',
    icon: Layers,
    code: `# Stateful LangGraph cyclical reasoning agent
from langgraph.graph import StateGraph, END

graph = StateGraph(BusinessAgentState)
graph.add_node("intent_planner", parse_business_intent)
graph.add_node("sql_sandbox", execute_readonly_sql)
graph.add_node("auto_corrector", dialect_self_correction)

# Cycle if PostgreSQL syntax error is detected
graph.add_conditional_edges(
    "sql_sandbox",
    should_retry_query,
    {"retry": "auto_corrector", "synthesize": "generate_summary"}
)`
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simOutput, setSimOutput] = useState<string | null>(null);

  // Animated rotating text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeywordIndex((prev: number) => (prev + 1) % PERSONAL_INFO.typingKeywords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    triggerConfetti();
  };

  const runSimulation = () => {
    setIsRunningSim(true);
    setSimOutput(null);

    setTimeout(() => {
      if (activeTab === 0) {
        setSimOutput('✨ [STATUS: 200 OK] ResNet-50 + FFT extraction complete in 4.2ms. Saliency maps computed. Detection Confidence: 90.2% [Artifact Flagged: Frequency Anomaly]');
      } else if (activeTab === 1) {
        setSimOutput('🛡️ [PII Sanitized] 4 categories masked. Primary LLM: Gemini Pro -> Auto-fallover test successful. Compliance audit logged: 95.8% precision.');
      } else {
        setSimOutput('⚡ [LangGraph State Machine] 12 nodes dispatched. Dialect verified against PostgreSQL schema. Executive insight generated in 2.1s.');
      }
      setIsRunningSim(false);
    }, 900);
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background radial gradient glow spots */}
      <div className="glow-spot w-[650px] h-[650px] -top-40 -left-40 bg-purple-600/15" />
      <div className="glow-spot w-[500px] h-[500px] top-1/2 -right-32 bg-indigo-600/10" />
      <div className="glow-spot w-[400px] h-[400px] -bottom-20 left-1/3 bg-purple-900/15" />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Availability Pill (Versatile, suitable for all technology roles) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-200 text-xs font-medium backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.badge}</span>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono uppercase tracking-widest text-purple-400 font-semibold">
                  {PERSONAL_INFO.title}
                </span>
                <div className="h-[1px] w-12 bg-purple-500/40" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="text-gradient-purple">{PERSONAL_INFO.shortName}.</span>
              </h1>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-200 leading-snug">
                Building Intelligent Software.{' '}
                <span className="text-gradient-vibrant">Creating Real Impact.</span>
              </p>
            </div>

            {/* Animated Rotating Skill Tag */}
            <div className="flex items-center gap-2 text-base sm:text-lg text-slate-300 font-medium">
              <span className="text-slate-400">Expertise in:</span>
              <span className="inline-block px-3 py-1 rounded-md bg-purple-600/15 border border-purple-500/30 text-purple-200 font-mono font-semibold transition-all duration-300">
                {PERSONAL_INFO.typingKeywords[currentKeywordIndex]}
              </span>
            </div>

            {/* Concise Bio */}
            <p className="text-base text-slate-300/90 leading-relaxed max-w-2xl">
              Computer Science undergraduate at <strong className="text-white font-semibold">SRM Institute of Science and Technology</strong> (8.28 CGPA). Published AI Researcher (<strong className="text-purple-300 font-semibold">IEEE ICSIST 2026</strong>), <strong className="text-cyan-300 font-semibold">Kaggle Expert</strong>, and <strong className="text-amber-300 font-semibold">Hackathon Top 10 Finalist</strong> experienced in building scalable software systems, backend APIs, data pipelines, and intelligent automated solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Resume download button */}
              <div className="inline-flex items-center rounded-xl bg-white/[0.05] border border-purple-500/30 p-1 backdrop-blur-md">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download={PERSONAL_INFO.resumeDownloadName}
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 text-purple-200 hover:text-white font-semibold text-sm transition-all"
                  title="Download Resume PDF directly"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
                <button
                  onClick={onOpenResumeModal}
                  className="px-3 py-2.5 text-xs text-purple-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1"
                  title="Preview Resume on screen"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Preview</span>
                </button>
              </div>
            </div>

            {/* Social Links & Verified Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="font-mono text-purple-400/80">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-purple-300 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/Purnika5</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-purple-300 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Visual: Interactive Code Terminal & Integrated Milestone Badges */}
          <div className="lg:col-span-5 relative flex flex-col space-y-4">
            
            {/* Top Stat Pills (Neatly arranged above terminal without overlap) */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0f0b24]/90 border border-purple-500/30 text-xs font-mono backdrop-blur-md shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span className="font-semibold text-white">90% Test Accuracy</span>
                <span className="text-slate-400 text-[10px]">• IEEE ICSIST '26</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0f0b24]/90 border border-amber-500/30 text-xs font-mono backdrop-blur-md shadow-md">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold text-white">Top 10 Finalist</span>
                <span className="text-slate-400 text-[10px]">• 60+ Teams</span>
              </div>
            </div>

            {/* Interactive Code Terminal */}
            <div className="relative glass-panel rounded-2xl border border-purple-500/25 overflow-hidden shadow-2xl">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d0920] border-b border-purple-500/15">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    purnika-systems ~ /prod
                  </span>
                </div>

                <button
                  onClick={runSimulation}
                  disabled={isRunningSim}
                  className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40 transition-all active:scale-95 disabled:opacity-50"
                  title="Execute live code simulation"
                >
                  <Play className={`w-3 h-3 ${isRunningSim ? 'animate-spin text-purple-300' : 'text-emerald-400'}`} />
                  <span>{isRunningSim ? 'Running...' : 'Run Test'}</span>
                </button>
              </div>

              {/* Code File Tabs */}
              <div className="flex items-center bg-[#090616] border-b border-purple-500/10 px-2 pt-1 gap-1 overflow-x-auto">
                {CODE_TABS.map((tab, idx) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(idx);
                        setSimOutput(null);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-md transition-all ${
                        isActive
                          ? 'bg-[#120e24] text-purple-300 border-t-2 border-purple-500 font-semibold'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-purple-400" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Display Area */}
              <div className="p-4 bg-[#0a0718] font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto min-h-[220px]">
                <pre className="text-xs">
                  <code>{CODE_TABS[activeTab].code}</code>
                </pre>
              </div>

              {/* Interactive Simulation Output Console */}
              {simOutput && (
                <div className="px-4 py-2.5 bg-purple-950/40 border-t border-purple-500/30 text-xs font-mono text-emerald-300 animate-fadeIn">
                  {simOutput}
                </div>
              )}

              {/* Terminal Footer with Verified Metric Tags */}
              <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#0e0a22] border-t border-purple-500/15 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-purple-300">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  IEEE Published Core
                </span>
                {/* Replaced 'FastAPI • ResNet-50 • RAG' with professional cloud & systems engineering metrics */}
                <span className="text-slate-400 font-semibold">
                  Distributed Systems • Scalable APIs • Cloud Native
                </span>
              </div>
            </div>

            {/* Bottom Stat Pill (SRM IST & Kaggle Expert) */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0f0b24]/90 border border-purple-500/30 text-xs font-mono backdrop-blur-md shadow-md">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                <span className="font-semibold text-white">SRM IST</span>
                <span className="text-purple-300 text-[10px]">• 8.28 CGPA (B.Tech CSE)</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0f0b24]/90 border border-cyan-500/30 text-xs font-mono backdrop-blur-md shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-semibold text-white">Kaggle Expert Tier</span>
                <span className="text-slate-400 text-[10px]">• 3 ML Notebooks</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
