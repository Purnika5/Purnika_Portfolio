import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'all') return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="relative py-24 overflow-hidden border-t border-purple-500/10">
      {/* Background ambient spots */}
      <div className="glow-spot w-[600px] h-[600px] top-1/4 -right-40 bg-purple-600/10" />
      <div className="glow-spot w-[500px] h-[500px] -bottom-20 -left-40 bg-indigo-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            Featured <span className="text-gradient-purple">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Real-world systems, published deep learning research, and high-throughput backend services.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <div className="p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center gap-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('ai-ml')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'ai-ml'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              AI & Deep Learning
            </button>
            <button
              onClick={() => setSelectedCategory('backend-systems')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'backend-systems'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Backend & Systems
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl glass-panel-interactive border border-purple-500/20 hover:border-purple-500/40 p-6 sm:p-7 transition-all duration-300 overflow-hidden shadow-xl"
            >
              {/* Subtle Ambient Card Glow */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-purple-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/20 transition-all duration-500" />

              <div className="space-y-4">
                {/* Header: Category Badge & Primary Metric */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-purple-950/80 text-purple-200 border border-purple-500/40 backdrop-blur-md">
                    {project.category === 'ai-ml' ? 'AI / ML Research' : 'Backend Architecture'}
                  </span>

                  {project.metrics[0] && (
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#140e2e]/90 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                      {project.metrics[0].label}: {project.metrics[0].value}
                    </span>
                  )}
                </div>

                {/* Subtitle & Title */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.subtitle}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics Mini Grid */}
                {project.metrics.length > 1 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-purple-950/20 border border-purple-500/15">
                    {project.metrics.slice(1, 4).map((m, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="text-[10px] font-mono text-slate-400 truncate">{m.label}</span>
                        <span className="text-xs font-mono font-bold text-purple-200 truncate">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Highlights Snippet */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-purple-950/40 border border-purple-500/20 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-5 mt-4 border-t border-purple-500/15 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white transition-colors group/btn"
                >
                  <span>Architecture Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global GitHub CTA Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl glass-panel border border-purple-500/25 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white font-display">
              Looking for more repositories and open source contributions?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Browse all repositories, source code, and experiments directly on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Purnika5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-lg shadow-purple-500/25 transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit @Purnika5 on GitHub</span>
          </a>
        </div>

      </div>

      {/* Accessible Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
