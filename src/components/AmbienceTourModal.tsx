import React, { useState } from 'react';
import { X, Sparkles, MapPin, Check } from 'lucide-react';
import { SALON_IMAGES } from '../data/salonData';

interface AmbienceTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const AmbienceTourModal: React.FC<AmbienceTourModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'styling' | 'spa' | 'lounge'>('styling');

  if (!isOpen) return null;

  const tabs = [
    { id: 'styling', label: 'Styling Arena', image: SALON_IMAGES.salonInterior, desc: 'Bespoke Italian leather stations, curved backlit mirrors, and warm indirect lighting designed for true color perception.' },
    { id: 'spa', label: 'Spa Sanctuary', image: SALON_IMAGES.salonAmbience2, desc: 'Quiet acoustic suites with ambient heated therapy beds, organic essential oil diffusers, and private rainfall showers.' },
    { id: 'lounge', label: 'Consultation Bar', image: SALON_IMAGES.salonAmbience3, desc: 'Relax in plush velvet booths while sipping organic botanical infusions and reviewing customized shade palettes.' },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl overflow-hidden border border-[#E8DAD4] animate-modal-in max-h-[92vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Preview Area */}
        <div className="relative aspect-[16/10] bg-black">
          <img
            src={currentTab.image}
            alt={currentTab.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Location Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#2C2426] flex items-center gap-1.5 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#6B2D3B]" />
            <span>Aurelle Studio, Kolkata</span>
          </div>

          {/* Caption */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#F7D1DA]">
              Virtual Studio Experience
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">{currentTab.label}</h3>
            <p className="text-xs sm:text-sm text-[#E5D2D6] font-light mt-1 max-w-xl">
              {currentTab.desc}
            </p>
          </div>
        </div>

        {/* Tab Controls and Actions */}
        <div className="p-6 bg-[#FAF7F2] border-t border-[#E8DAD4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#6B2D3B] text-white shadow-xs'
                    : 'bg-[#F2E5E1] text-[#4A3C3F] hover:bg-[#EBD8D2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#6B2D3B] text-white text-xs sm:text-sm font-medium hover:bg-[#58232F] transition-all shadow-md cursor-pointer"
          >
            Book In-Studio Visit
          </button>
        </div>
      </div>
    </div>
  );
};
