import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { triggerConfetti } from '../utils/confetti';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    triggerConfetti();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300"
      style={{ overscrollBehavior: 'contain' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex flex-col w-full max-w-4xl h-[92vh] bg-[#0c0919] border border-purple-500/25 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.2)] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-purple-500/15 bg-[#120e24]/90">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-base sm:text-lg font-bold text-white font-display">
                {PERSONAL_INFO.name} — Resume
              </h2>
              <p className="text-xs text-purple-300/70 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Verified ATS-optimized document • Updated 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download={PERSONAL_INFO.resumeDownloadName}
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 active:scale-95 rounded-lg shadow-sm transition-all duration-200"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="relative flex-1 w-full bg-[#07050e] overflow-hidden">
          <iframe
            src={`${PERSONAL_INFO.resumeUrl}#toolbar=0&navpanes=0`}
            title="Resume Preview"
            className="w-full h-full border-0"
          />
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between px-5 py-3 border-t border-purple-500/15 bg-[#120e24]/90 text-xs text-slate-400">
          <span>File: <code className="text-purple-300">{PERSONAL_INFO.resumeDownloadName}</code></span>
          <div className="flex items-center gap-3">
            <span>SRM IST • 8.28 CGPA</span>
            <span>•</span>
            <span>IEEE ICSIST 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};
