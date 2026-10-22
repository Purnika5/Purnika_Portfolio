import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Code2, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  MapPin, 
  BookOpen 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden border-t border-purple-500/10">
      {/* Background ambient lighting */}
      <div className="glow-spot w-[500px] h-[500px] top-1/4 -right-20 bg-purple-600/10" />
      <div className="glow-spot w-[400px] h-[400px] bottom-10 -left-20 bg-indigo-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Narrative</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            About <span className="text-gradient-purple">Purnika</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Bridging fundamental computer science, academic machine learning research, and production backend engineering.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Visual: 3D Holographic Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl glass-panel p-4 border border-purple-500/25 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-square border border-purple-500/30">
                <img
                  src="/purnika_avatar.jpg"
                  alt="Purnika Naga Durga Jyothi - Neural Computing Visual"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0818] via-transparent to-transparent opacity-80" />
                
                {/* Floating caption on image */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#120e24]/90 backdrop-blur-md border border-purple-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white font-display">Purnika Naga Durga Jyothi</p>
                      <p className="text-xs text-purple-300 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-purple-400" />
                        Chennai, India • SRM IST
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-[10px] text-emerald-300 font-mono">
                      CGPA 8.28
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified credentials bar */}
              <div className="mt-4 pt-3 border-t border-purple-500/15 flex items-center justify-between text-xs text-slate-300 px-2">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-purple-400" />
                  IEEE ICSIST Author
                </span>
                <span className="text-slate-500">•</span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  B.Tech CSE '27
                </span>
              </div>
            </div>
          </div>

          {/* Right Narrative & Core Focus */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a Computer Science undergraduate at <strong className="text-white font-semibold">SRM Institute of Science and Technology</strong> with strong foundations across software engineering, distributed systems, data workflows, and applied artificial intelligence. I focus on writing clean, scalable code that creates tangible real-world impact.
              </p>
              <p>
                As an <strong className="text-purple-300 font-semibold">AI Engineer Intern & Project Lead at Springer Capital</strong>, I spearheaded the Generative AI track for an automated compliance review platform. I designed a 5-component distributed architecture integrating Gemini, Groq, and OpenRouter with automatic provider fallback, deterministic PII sanitization across four sensitive categories, and vector-backed RAG inspection.
              </p>
              <p>
                Beyond backend systems and software development, I am a published researcher (<strong className="text-white font-semibold">IEEE ICSIST 2026</strong>), a <strong className="text-cyan-300 font-semibold">Kaggle Expert</strong>, and a <strong className="text-amber-300 font-semibold">Top 10 Finalist at the AI Agent Hackathon</strong> among 60+ teams. I also led technical workshops at SRM IST, mentoring 60+ students on Python, REST APIs, and modern data engineering practices.
              </p>
            </div>

            {/* Core Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl glass-panel-interactive border border-purple-500/20 space-y-2">
                <div className="flex items-center gap-2.5 text-purple-300 font-semibold text-sm">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>Applied AI & LLMs</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  RAG pipelines, multi-provider LLM failover, prompt engineering, and stateful agentic graphs with LangGraph.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel-interactive border border-purple-500/20 space-y-2">
                <div className="flex items-center gap-2.5 text-purple-300 font-semibold text-sm">
                  <Code2 className="w-4 h-4 text-purple-400" />
                  <span>Backend Engineering</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  High-performance async APIs with FastAPI, RESTful contracts, relational modeling, and JWT authentication.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel-interactive border border-purple-500/20 space-y-2">
                <div className="flex items-center gap-2.5 text-purple-300 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>Privacy & Compliance</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Personally Identifiable Information (PII) masking, cryptographic placeholders, and audit logging.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel-interactive border border-purple-500/20 space-y-2">
                <div className="flex items-center gap-2.5 text-purple-300 font-semibold text-sm">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span>Computer Vision & Forensics</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  ResNet-50 CNNs, 2D FFT frequency spectrums, OpenCV pipelines, and Grad-CAM explainability heatmaps.
                </p>
              </div>

            </div>

            {/* Quick Education Callout */}
            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">SRM Institute of Science and Technology</h3>
                  <p className="text-xs text-slate-400">B.Tech in Computer Science and Engineering (2023 – 2027)</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-purple-600/30 text-purple-200 text-xs font-mono font-semibold border border-purple-500/40">
                  8.28 CGPA
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel border border-purple-500/20 text-center space-y-1 hover:border-purple-500/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gradient-purple">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-200">{stat.label}</div>
              <div className="text-[11px] font-mono text-purple-400/80">{stat.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
