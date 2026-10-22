import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { FileText, Download } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';
import { triggerConfetti } from './utils/confetti';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#05030A] text-slate-100 overflow-x-hidden selection:bg-purple-600/40 selection:text-purple-100">
      {/* Subtle Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Resume Preview Modal (Accessible dialog) */}
      <ResumeViewerModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Quick Floating Resume CTA Button (Desktop bottom-right) */}
      <aside aria-label="Resume Quick Access" className="fixed bottom-6 right-6 z-30 hidden sm:flex items-center gap-1 p-1 rounded-2xl bg-[#120a2a]/90 border border-purple-500/30 backdrop-blur-xl shadow-[0_4px_25px_rgba(168,85,247,0.3)] hover:border-purple-400/60 transition-all duration-300">
        <button
          onClick={() => setIsResumeModalOpen(true)}
          className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-purple-200 hover:text-white transition-colors"
          title="Preview Official Resume"
        >
          <FileText className="w-3.5 h-3.5 text-purple-400" />
          <span>Resume</span>
        </button>
        <div className="w-[1px] h-4 bg-purple-500/30" />
        <a
          href={PERSONAL_INFO.resumeUrl}
          download={PERSONAL_INFO.resumeDownloadName}
          onClick={() => triggerConfetti()}
          className="p-2 text-purple-300 hover:text-white hover:bg-purple-600/30 rounded-xl transition-all"
          title="Download PDF directly"
          aria-label="Download Resume PDF"
        >
          <Download className="w-3.5 h-3.5" />
        </a>
      </aside>
    </div>
  );
}

export default App;
