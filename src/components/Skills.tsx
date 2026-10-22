import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  BrainCircuit, 
  Database, 
  Wrench, 
  Search, 
  Sparkles, 
  FileCode2, 
  Coffee, 
  FileJson, 
  FileCode, 
  Cpu, 
  Zap, 
  Network, 
  Layers, 
  ShieldCheck, 
  EyeOff, 
  RefreshCw, 
  Boxes, 
  Bot, 
  Binary, 
  ScanFace, 
  Flame, 
  GitBranch, 
  Send, 
  Compass, 
  Terminal 
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

// Map icon strings to Lucide components
const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Server,
  BrainCircuit,
  Database,
  Wrench,
  FileCode2,
  Coffee,
  FileJson,
  FileCode,
  Cpu,
  Zap,
  Network,
  Layers,
  ShieldCheck,
  EyeOff,
  RefreshCw,
  Sparkles,
  Boxes,
  Bot,
  Binary,
  ScanFace,
  Flame,
  GitBranch,
  Send,
  Compass,
  Terminal
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredGroups = SKILL_GROUPS.map((group) => {
    if (activeCategory !== 'all' && group.id !== activeCategory) {
      return null;
    }

    const filteredSkills = group.skills.filter((skill) => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        skill.name.toLowerCase().includes(q) ||
        skill.tag.toLowerCase().includes(q) ||
        skill.context.toLowerCase().includes(q)
      );
    });

    if (filteredSkills.length === 0) return null;

    return {
      ...group,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="relative py-24 overflow-hidden border-t border-purple-500/10">
      {/* Background ambient lighting */}
      <div className="glow-spot w-[600px] h-[600px] top-1/3 -left-40 bg-purple-600/10" />
      <div className="glow-spot w-[500px] h-[500px] -bottom-20 right-0 bg-indigo-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            Skills & <span className="text-gradient-purple">Expertise</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Hands-on technologies applied across AI research, high-reliability backend services, and distributed architectures.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Skills
            </button>
            {SKILL_GROUPS.map((group) => {
              const Icon = ICON_MAP[group.icon] || Code2;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveCategory(group.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeCategory === group.id
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{group.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, e.g. FastAPI, RAG..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white/[0.04] border border-purple-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-10">
          {filteredGroups.map((group) => {
            if (!group) return null;
            const GroupIcon = ICON_MAP[group.icon] || Code2;

            return (
              <div
                key={group.id}
                className="p-6 sm:p-8 rounded-2xl glass-panel border border-purple-500/20 space-y-6"
              >
                {/* Group Header */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-purple-500/15">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600/15 text-purple-400 border border-purple-500/30">
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-display">
                        {group.title}
                      </h3>
                      <p className="text-xs text-purple-300/70">{group.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {group.skills.length} verified {group.skills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill, sIdx) => {
                    const SkillIcon = ICON_MAP[skill.iconName] || Code2;

                    return (
                      <div
                        key={sIdx}
                        className="group relative p-4 rounded-xl bg-[#0e0922]/70 hover:bg-[#160f33]/90 border border-purple-500/15 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-[0_8px_25px_rgba(168,85,247,0.18)]"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-lg bg-purple-600/15 text-purple-400 group-hover:bg-purple-600/30 group-hover:text-purple-300 transition-colors">
                              <SkillIcon className="w-4 h-4" />
                            </div>
                            <h4 className="text-sm font-bold text-white group-hover:text-purple-200 transition-colors">
                              {skill.name}
                            </h4>
                          </div>

                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-purple-950/60 border border-purple-500/30 text-purple-300">
                            {skill.tag}
                          </span>
                        </div>

                        <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                          {skill.context}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {filteredGroups.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              <p className="text-base font-semibold">No skills matched "{searchQuery}"</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 px-4 py-2 text-xs rounded-lg bg-purple-600 text-white"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
