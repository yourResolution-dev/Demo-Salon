import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hi Aurelle Studio! I would like to check appointment availability and special packages.'
    );
    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {showTooltip && (
        <div className="relative bg-white text-[#2C2426] py-2 px-3.5 rounded-2xl shadow-xl border border-[#EDE2DC] text-xs max-w-[210px] animate-fadeIn hidden sm:flex items-center justify-between gap-2">
          <div>
            <p className="font-semibold text-[#6B2D3B]">Quick Salon Enquiry</p>
            <p className="text-[11px] text-[#7A6F72] leading-tight">Chat with our concierge</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#99888C] hover:text-[#2C2426] p-0.5 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-[#EDE2DC] transform rotate-45" />
        </div>
      )}

      <button
        onClick={handleWhatsApp}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-108 transition-all duration-300 cursor-pointer group"
      >
        <MessageCircle className="w-7 h-7 transition-transform group-hover:scale-110" />
      </button>
    </div>
  );
};
