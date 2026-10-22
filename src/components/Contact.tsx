import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  Clock, 
  Download, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, HackerRankIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { triggerConfetti } from '../utils/confetti';

interface ContactProps {
  onOpenResumeModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Live Local Time in IST (Chennai, India)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    triggerConfetti();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      triggerConfetti();

      // Formulate mailto fallback link for seamless real delivery
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject || 'Opportunity Inquiry'}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;

      // Open email client safely
      window.location.href = mailtoUrl;

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormStatus('idle');
      }, 4000);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden border-t border-purple-500/10">
      {/* Background ambient lighting */}
      <div className="glow-spot w-[600px] h-[600px] top-1/2 -right-40 bg-purple-600/15" />
      <div className="glow-spot w-[500px] h-[500px] -bottom-20 -left-40 bg-indigo-600/15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's Build Together</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            Get in <span className="text-gradient-purple">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Interested in discussing AI research, full-time engineering roles, summer 2026/2027 internships, or collaborative projects?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-purple-500/20 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Contact Information
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Direct channels for recruiters, hiring managers, and collaborators.
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="p-4 rounded-xl bg-[#120c28] border border-purple-500/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400">Direct Email</span>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-purple-300 hover:text-white border border-white/10 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct Phone Card */}
              <div className="p-4 rounded-xl bg-[#120c28] border border-purple-500/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400">Phone Number</span>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-purple-300 hover:text-white border border-white/10 transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location & Time Card */}
              <div className="p-4 rounded-xl bg-[#120c28] border border-purple-500/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400">Location</span>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>{currentTime || 'IST'}</span>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="pt-2 border-t border-purple-500/15 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Verified Profiles
                </span>
                
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 hover:text-purple-300 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 hover:text-purple-300 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-purple-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <a
                  href={PERSONAL_INFO.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 hover:text-purple-300 transition-colors mt-2"
                >
                  <span className="flex items-center gap-2 font-mono">
                    <HackerRankIcon className="w-4 h-4 text-purple-400" />
                    <span>HackerRank (purnika568)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

            </div>

            {/* Resume Quick Access Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/40 via-[#130b2c] to-[#0c081e] border border-purple-500/30 flex items-center justify-between flex-wrap gap-4 shadow-xl">
              <div>
                <h4 className="text-sm font-bold text-white font-display">
                  Official Resume PDF
                </h4>
                <p className="text-xs text-purple-300/80">
                  Purnika_Naga_Durga_Jyothi_Resume.pdf
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenResumeModal}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-medium transition-colors"
                >
                  View
                </button>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download={PERSONAL_INFO.resumeDownloadName}
                  onClick={() => triggerConfetti()}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md transition-all active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-purple-500/20 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold font-display text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the details below to dispatch an email inquiry directly to Purnika.
                </p>
              </div>

              {formStatus === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Ready to Send!</h4>
                  <p className="text-xs text-emerald-200/90 leading-relaxed max-w-md mx-auto">
                    Opening your default email client with your message pre-filled for <span className="font-mono font-semibold">{PERSONAL_INFO.email}</span>. Thank you for connecting!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-slate-300">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Connor"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-purple-500/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-slate-300">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-purple-500/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-mono text-slate-300">
                      Subject / Role *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineering Opportunity / AI Research"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-purple-500/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-slate-300">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Purnika, I came across your portfolio and project work in deepfake detection and compliance review..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-purple-500/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] transition-all duration-300 active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{formStatus === 'submitting' ? 'Preparing Email...' : 'Send Message to Purnika'}</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500 font-mono">
                    Directly addresses <span className="text-purple-300">purnika568@gmail.com</span> with zero third-party data tracking.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
