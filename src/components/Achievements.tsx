import { 
  Trophy, 
  Award, 
  Users, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { triggerAchievementConfetti } from '../utils/confetti';

export const Achievements: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hackathon':
        return Trophy;
      case 'kaggle':
        return Award;
      case 'leadership':
        return Users;
      case 'research':
        return BookOpen;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="achievements" className="relative py-24 overflow-hidden border-t border-purple-500/10">
      {/* Background ambient glow */}
      <div className="glow-spot w-[600px] h-[600px] top-1/4 -right-40 bg-purple-600/10" />
      <div className="glow-spot w-[500px] h-[500px] bottom-10 -left-40 bg-indigo-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            Key <span className="text-gradient-purple">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Hackathon finalist standings, Kaggle Expert tier status, community technical leadership, and peer-reviewed research.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item) => {
            const Icon = getCategoryIcon(item.category);

            return (
              <div
                key={item.id}
                onClick={triggerAchievementConfetti}
                className="group relative p-6 sm:p-8 rounded-2xl glass-panel-interactive border border-purple-500/20 hover:border-purple-400/40 flex flex-col justify-between space-y-6 cursor-pointer"
              >
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-600/15 text-purple-400 border border-purple-500/30 group-hover:bg-purple-600/30 group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-purple-200 transition-colors mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-purple-300/80 font-medium">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  {item.stat && (
                    <div className="text-right shrink-0">
                      <div className="text-lg sm:text-xl font-black font-display text-gradient-purple">
                        {item.stat}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {item.statLabel}
                      </div>
                    </div>
                  )}
                </div>

                {/* Narrative Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Impact Bullet Points */}
                <div className="space-y-2 pt-2 border-t border-purple-500/15">
                  {item.impactPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Link / Verification Footer */}
                {item.link ? (
                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-purple-400/80 font-mono">
                      Click card to celebrate 🎉
                    </span>
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-purple-300 hover:text-white border border-white/10 transition-colors font-semibold"
                    >
                      <span>{item.link.text}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  <div className="pt-1 text-[11px] text-purple-400/80 font-mono">
                    Verified milestone • Click card to celebrate 🎉
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
