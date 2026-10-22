import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 overflow-hidden border-t border-purple-500/10">
      {/* Background ambient lighting */}
      <div className="glow-spot w-[600px] h-[600px] top-1/3 -left-40 bg-purple-600/10" />
      <div className="glow-spot w-[500px] h-[500px] bottom-10 -right-40 bg-indigo-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional & Academic Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            Experience & <span className="text-gradient-purple">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Project leadership in enterprise compliance systems and rigorous computer science foundations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500/50 via-purple-600/30 to-indigo-500/10 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500/50 via-purple-600/30 to-indigo-500/10 sm:hidden" />

          <div className="space-y-12">
            {EXPERIENCES.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#120c2b] border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10 shrink-0">
                    {idx === 0 ? (
                      <Briefcase className="w-3.5 h-3.5 text-purple-300" />
                    ) : (
                      <GraduationCap className="w-3.5 h-3.5 text-emerald-300" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] pl-14 sm:pl-0">
                    <div className="p-6 rounded-2xl glass-panel-interactive border border-purple-500/20 space-y-4 shadow-xl">
                      
                      {/* Top Badges */}
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${item.badgeColor || 'border-purple-500/30 text-purple-300 bg-purple-500/10'}`}>
                          {item.badge}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Org */}
                      <div>
                        <h3 className="text-lg font-bold text-white font-display">
                          {item.role}
                        </h3>
                        <p className="text-xs font-semibold text-purple-300/90 flex items-center gap-1 mt-0.5">
                          {item.organization}
                          {item.location && (
                            <>
                              <span className="text-slate-500">•</span>
                              <span className="text-slate-400 flex items-center gap-0.5 font-normal">
                                <MapPin className="w-3 h-3" />
                                {item.location}
                              </span>
                            </>
                          )}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Points */}
                      <ul className="space-y-1.5 pt-1 border-t border-purple-500/15">
                        {item.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
