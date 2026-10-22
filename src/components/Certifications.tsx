import { 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 overflow-hidden border-t border-purple-500/10">
      {/* Background ambient lighting */}
      <div className="glow-spot w-[600px] h-[600px] top-1/3 -left-40 bg-purple-600/10" />
      <div className="glow-spot w-[500px] h-[500px] -bottom-20 -right-40 bg-indigo-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            Certifications & <span className="text-gradient-purple">Memberships</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Rigorous assessments from premier institutions including NPTEL (IITs), Infosys, TCS, and the Institution of Engineers India.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="group relative p-6 rounded-2xl glass-panel-interactive border border-purple-500/20 hover:border-purple-400/40 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${cert.badgeColor}`}>
                    {cert.badgeText}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-base font-bold font-display text-white group-hover:text-purple-200 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-purple-300/80 font-medium mt-0.5">
                    {cert.issuer} • <span className="text-slate-400 font-normal">{cert.category}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300/90 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills Gained Tags */}
              <div className="space-y-2 pt-3 border-t border-purple-500/15">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                  Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-purple-950/60 border border-purple-500/25 text-purple-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
