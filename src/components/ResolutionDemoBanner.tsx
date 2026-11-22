import React from 'react';
import { ArrowLeft, MessageSquare, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface ResolutionDemoBannerProps {
  onOpenAgencyModal: () => void;
}

export const ResolutionDemoBanner: React.FC<ResolutionDemoBannerProps> = ({ onOpenAgencyModal }) => {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hi ReSolution Team! I explored the Aurelle Studio Luxury Salon & Spa demo website and I am interested in building a high-converting, premium website for my salon / spa / beauty brand.'
    );
    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <aside
      aria-label="Demo website notice and agency options"
      className="bg-[#1C0D12] text-xs sm:text-sm text-[#EAD5D8] border-b border-[#6B2D3B]/40 py-2 sm:py-2.5 px-3 sm:px-6 w-full relative z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Left: Back Link & Showcase Tag */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 text-[#E5A4B0] hover:text-white font-medium transition-colors group cursor-pointer text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to ReSolution</span>
          </button>
          <span className="hidden sm:inline-block text-[#5B333E]">|</span>
          <span className="inline-flex items-center gap-1.5 text-[#D1BDC2] font-light text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5A4B0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D46B80]"></span>
            </span>
            <span className="font-semibold text-[#F2C2CB]">ReSolution Showcase:</span>
            <span className="hidden md:inline">Aurelle Studio Luxury Salon & Spa Editorial Demo</span>
          </span>
        </div>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#2F151D] border border-[#7A3648] text-[#F0C9D1] hover:bg-[#461D2B] hover:text-white transition-all cursor-pointer font-medium text-[11px] sm:text-xs"
          >
            <MessageSquare className="w-3 h-3 text-[#E5A4B0]" />
            <span>WhatsApp Us</span>
          </button>

          <button
            onClick={onOpenAgencyModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#8E3E50] to-[#6B2D3B] text-white font-medium hover:from-[#A0455B] hover:to-[#7E3444] shadow-[0_2px_12px_rgba(107,45,59,0.4)] transition-all cursor-pointer text-[11px] sm:text-xs"
          >
            <Sparkles className="w-3 h-3 text-[#F8D2DA]" />
            <span>Want a Website Like This?</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
