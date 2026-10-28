import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Eye
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { triggerConfetti } from '../utils/confetti';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

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

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
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
            
            {/* Availability Pill */}
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

            {/* Social Links */}
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

          {/* Right Visual: Clean, Simple Circular Photo */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Soft ambient glow */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-purple-600/25 via-indigo-500/20 to-purple-400/15 blur-3xl pointer-events-none" />

            {/* Circular Photo */}
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-84 lg:h-84 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-purple-500/35 shadow-[0_0_50px_rgba(168,85,247,0.3)] hover:border-purple-400/70 transition-all duration-500">
              <img
                src="/purnika.jpg"
                alt="Purnika Naga Durga Jyothi"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
