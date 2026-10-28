import { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  Copy, 
  Cpu, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300"
      style={{ overscrollBehavior: 'contain' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex flex-col w-full max-w-4xl max-h-[92vh] bg-[#0c081e] border border-purple-500/30 rounded-2xl shadow-[0_0_60px_rgba(168,85,247,0.25)] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-[#120d2b]/90">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider bg-purple-600/30 text-purple-200 border border-purple-500/40">
              {project.category === 'ai-ml' ? 'AI / ML System' : 'Backend & Systems'}
            </span>
            <h2 id="project-modal-title" className="text-lg sm:text-xl font-bold text-white font-display">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-sm transition-all"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Project Overview Card (Clean, image-free engineering presentation) */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-purple-950/40 via-[#150f33] to-[#0d0922] border border-purple-500/30 space-y-3 shadow-md">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>{project.subtitle}</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-purple-950/80 border border-purple-500/40 text-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="p-3 rounded-xl bg-[#140e2f]/70 border border-purple-500/20 text-center"
              >
                <div className="text-lg sm:text-xl font-black font-display text-gradient-purple">
                  {metric.value}
                </div>
                <div className="text-[11px] text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Deep Narrative Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-300 font-mono">
              System Overview & Architecture
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-300 font-mono">
              Key Engineering Milestones
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight, hIdx) => (
                <div
                  key={hIdx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-slate-300"
                >
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-300 font-mono">
              Pipeline Stages
            </h3>
            <div className="space-y-2">
              {project.architecture.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#110c28]/60 border border-purple-500/15 text-xs text-slate-300"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-600/30 text-purple-300 font-mono font-bold text-[10px] shrink-0">
                    {sIdx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet Preview */}
          {project.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  {project.codeSnippet.filename}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] font-mono text-purple-300 hover:text-white px-2 py-1 rounded bg-white/5 border border-purple-500/20 transition-colors"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#090616] border border-purple-500/20 font-mono text-xs text-slate-300 overflow-x-auto">
                <pre>
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-purple-500/20 bg-[#120d2b]/90 text-xs">
          <span className="text-slate-400 font-mono">
            Author: Purnika Naga Durga Jyothi
          </span>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-purple-300 hover:text-white transition-colors"
              >
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
