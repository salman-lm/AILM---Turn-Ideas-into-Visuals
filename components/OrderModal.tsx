import React, { useState, useEffect } from 'react';
import { X, Zap, Mail, Copy, Check } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GridBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none" style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
    backgroundSize: '2rem 2rem'
  }}></div>
);

const PulseIcon = () => (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-4 ml-1.5">
        {/* FIX: Use camelCase `strokeLinejoin` for SVG properties in JSX. */}
        <path d="M2 8H5L8 2L14 14L17 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText('support@ailm.in');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  const handleInitializeProject = () => {
     window.location.href = `mailto:support@ailm.in?subject=Project Initialization Request`;
     onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans text-white">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-[#111] border border-slate-800 w-full max-w-md rounded-2xl shadow-2xl shadow-cyan-500/10 flex flex-col overflow-hidden animate-modal-enter">
        <GridBackground />
        
        <div className="relative p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    Priority Channel :: Open
                </p>
            </div>
            <button 
                onClick={onClose}
                className="p-1 text-slate-500 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            >
                <X className="w-5 h-5" />
            </button>
        </div>
        
        <div className="relative p-8 pt-4 text-center flex-grow flex flex-col items-center">
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
                <Zap className="w-8 h-8 text-cyan-400" />
            </div>

            <h2 className="text-4xl font-extrabold text-white mb-3 font-tech">
                Skip the Forms.
            </h2>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                Instead of submitting a form and waiting hours, engage our direct uplink. 
                We reply within <strong className="text-slate-200">2 hours</strong>.
            </p>

            <div className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-3.5 flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                 <Mail className="w-5 h-5 text-slate-500" />
                 <span className="text-slate-300 font-mono text-base">support@ailm.in</span>
              </div>
              <button onClick={handleCopy} className="p-2 text-slate-500 hover:text-white hover:bg-slate-700 rounded-md transition-colors" aria-label="Copy email address">
                {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            
            <button
              onClick={handleInitializeProject}
              className="w-full bg-gradient-to-b from-[#00AEEF] to-[#0089C7] hover:from-[#00BFFF] hover:to-[#0099D7] text-white font-bold py-4 rounded-lg flex items-center justify-center transition-all transform hover:scale-[1.02] active:scale-100 shadow-[0_4px_20px_rgba(0,174,239,0.25)]"
            >
              Initialize Project
              <PulseIcon />
            </button>

            <p className="mt-6 text-xs font-mono uppercase tracking-wider text-slate-600">
                Avg. Response Time: 1H 45M
            </p>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;