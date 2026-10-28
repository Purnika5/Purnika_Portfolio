import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 overflow-hidden border-t border-purple-500/10">
      {/* Background ambient lighting */}
      <div className="glow-spot w-[600px] h-[600px] top-1/3 -left-40 bg-purple-600/10" />
      <div className="glow-spot w-[500px] h-[500px] bottom-10 -right-40 bg-indigo-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ================= WORK EXPERIENCE ================= */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col items-center text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
              <Briefcase className="w-3.5 h-3.5 text-purple-400" />
              <span>Professional Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
              Work <span className="text-gradient-purple">Experience</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Engineering leadership, distributed systems, and generative AI compliance services.
            </p>
          </div>

          {/* Work Experience Cards */}
          <div className="max-w-4xl mx-auto space-y-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="p-6 sm:p-8 rounded-2xl glass-panel-interactive border border-purple-500/25 space-y-6 shadow-xl"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-purple-500/15">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border border-purple-500/40 text-purple-300 bg-purple-500/10">
                        {exp.badge}
                      </span>
                      {exp.location && (
                        <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                          <MapPin className="w-3 h-3 text-purple-400" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-purple-300">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-purple-300 bg-purple-950/40 px-3 py-1.5 rounded-lg border border-purple-500/20 self-start sm:self-center shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Overview */}
                <p className="text-sm text-slate-300/95 leading-relaxed font-medium">
                  {exp.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-2.5 pt-2">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400">
                    Key Contributions & Architecture
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= EDUCATION ================= */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col items-center text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Academic Foundations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
              Academic <span className="text-gradient-purple">Education</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Rigorous grounding in computer science, software engineering, and mathematics.
            </p>
          </div>

          {/* Education Cards Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-2xl glass-panel-interactive border border-purple-500/20 flex flex-col justify-between space-y-4 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${edu.badgeColor || 'border-purple-500/30 text-purple-300 bg-purple-500/10'}`}>
                      {edu.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {edu.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white font-display leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-purple-300/90 font-medium mt-1">
                      {edu.institution}
                    </p>
                    {edu.location && (
                      <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-purple-400 shrink-0" />
                        <span>{edu.location}</span>
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-slate-300/85 leading-relaxed pt-1">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-500/15">
                  <span className="text-[11px] font-mono text-purple-400/90 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    <span>Verified Academic Record</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
