import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-purple-500/15 bg-[#05030d] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-700 to-indigo-600 text-white font-mono font-bold text-xs shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              P
            </div>
            <div>
              <p className="font-display font-bold text-sm text-white">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                SRM IST • Published IEEE Researcher • Software Engineer
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
            <span>•</span>
            <a href="#skills" className="hover:text-purple-300 transition-colors">Skills</a>
            <span>•</span>
            <a href="#projects" className="hover:text-purple-300 transition-colors">Projects</a>
            <span>•</span>
            <a href="#experience" className="hover:text-purple-300 transition-colors">Experience</a>
            <span>•</span>
            <a href="#achievements" className="hover:text-purple-300 transition-colors">Achievements</a>
            <span>•</span>
            <a href="#certifications" className="hover:text-purple-300 transition-colors">Certifications</a>
            <span>•</span>
            <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
            <span>•</span>
            <button
              onClick={onOpenResumeModal}
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              Resume PDF
            </button>
          </div>

          {/* Socials & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white border border-purple-500/30 transition-all active:scale-90"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-slate-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
