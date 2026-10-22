import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { triggerConfetti } from '../utils/confetti';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    triggerConfetti();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080514]/85 backdrop-blur-xl border-b border-purple-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Purnika Naga Durga Jyothi - Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-500 text-white font-bold font-mono text-base shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all duration-300">
              <span>P</span>
              <div className="absolute inset-0 rounded-xl border border-white/30 group-hover:border-white/60 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-purple-300 transition-colors">
                {PERSONAL_INFO.shortName}
                <span className="text-purple-400">.dev</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-purple-300/70">
                Engineering & Tech
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-purple-600/30 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.25)] border border-purple-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Versatile Availability Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Opportunities</span>
            </div>

            {/* Quick Resume Button with View & Download */}
            <div className="flex items-center rounded-lg p-0.5 bg-white/5 border border-purple-500/25">
              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-200 hover:text-white hover:bg-purple-600/20 rounded-md transition-colors"
                title="Preview Resume"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
              <div className="w-[1px] h-4 bg-purple-500/30" />
              <a
                href={PERSONAL_INFO.resumeUrl}
                download={PERSONAL_INFO.resumeDownloadName}
                onClick={handleDownloadResume}
                className="flex items-center justify-center p-1.5 text-purple-200 hover:text-white hover:bg-purple-600/40 rounded-md transition-colors"
                title="Download Resume PDF directly"
                aria-label="Download Resume"
              >
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="p-2 text-purple-300 bg-purple-600/20 border border-purple-500/30 rounded-lg text-xs flex items-center gap-1"
              title="View Resume"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-purple-500/20 bg-[#0c081e]/98 backdrop-blur-2xl px-6 py-6 transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2 pb-3 mb-1 border-b border-white/10 text-xs text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Engineering & Tech Opportunities</span>
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-purple-600/30 border border-purple-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white/5 border border-purple-500/30 text-purple-200 text-xs font-medium"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download={PERSONAL_INFO.resumeDownloadName}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleDownloadResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold shadow-lg shadow-purple-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
