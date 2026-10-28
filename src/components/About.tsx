import { Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden border-t border-purple-500/10">
      {/* Background ambient lighting */}
      <div className="glow-spot w-[500px] h-[500px] top-1/4 -right-20 bg-purple-600/10" />
      <div className="glow-spot w-[400px] h-[400px] bottom-10 -left-20 bg-indigo-600/10" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            About <span className="text-gradient-purple">Purnika</span>
          </h2>
        </div>

        {/* Simplified Narrative Card */}
        <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-purple-500/20 space-y-6 shadow-xl">
          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I am a Computer Science undergraduate at <strong className="text-white font-semibold">SRM Institute of Science and Technology</strong> (8.28 CGPA) with strong foundations across software engineering, distributed systems, and applied artificial intelligence.
            </p>
            <p>
              As an <strong className="text-purple-300 font-semibold">AI Engineer Intern & Project Lead at Springer Capital</strong>, I spearheaded the Generative AI track for an automated compliance review platform, engineering a multi-provider fallback architecture across Gemini, Groq, and OpenRouter with deterministic PII sanitization and vector-backed RAG inspection.
            </p>
            <p>
              I am also a published AI researcher (<strong className="text-white font-semibold">IEEE ICSIST 2026</strong>), a <strong className="text-cyan-300 font-semibold">Kaggle Expert</strong>, and a <strong className="text-amber-300 font-semibold">Top 10 Finalist at the AI Agent Hackathon</strong> among 60+ engineering teams.
            </p>
          </div>

          {/* Clean Stat Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-purple-500/15">
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-center">
              <div className="text-xl sm:text-2xl font-bold text-white font-display">8.28</div>
              <div className="text-xs text-purple-300 font-mono mt-0.5">CGPA • SRM IST</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-center">
              <div className="text-xl sm:text-2xl font-bold text-white font-display">IEEE '26</div>
              <div className="text-xs text-purple-300 font-mono mt-0.5">Published Author</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-center">
              <div className="text-xl sm:text-2xl font-bold text-white font-display">Top 10</div>
              <div className="text-xs text-purple-300 font-mono mt-0.5">60+ Hackathon Teams</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-center">
              <div className="text-xl sm:text-2xl font-bold text-white font-display">Expert</div>
              <div className="text-xs text-purple-300 font-mono mt-0.5">Kaggle Tier</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
