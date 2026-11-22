import React from 'react';
import { Play, Sparkles, Award } from 'lucide-react';
import { SALON_INFO, SALON_IMAGES } from '../data/salonData';

interface AboutSectionProps {
  onOpenTour: () => void;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenTour, onOpenBooking }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden border-t border-[#EDE3DD]">
      {/* Subtle decorative floral background line art */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-15 pointer-events-none -z-10">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-[#6B2D3B]">
          <path d="M100 20 C120 60, 160 80, 180 100 C140 120, 120 160, 100 180 C80 140, 40 120, 20 100 C60 80, 80 40, 100 20 Z" strokeWidth="1.5" />
          <path d="M100 40 C115 70, 145 85, 160 100 C130 115, 115 145, 100 160 C85 130, 55 115, 40 100 C70 85, 85 55, 100 40 Z" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Salon Interior Image with Play Button */}
          <div className="lg:col-span-6 relative">
            <div className="relative group rounded-3xl overflow-hidden shadow-[0_16px_36px_rgba(44,36,38,0.08)] border border-[#E8DAD4] aspect-[16/11] sm:aspect-[4/3]">
              <img
                src={SALON_IMAGES.salonInterior}
                alt="Aurelle Studio Salon Luxury Interior and Ambience"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />

              {/* Play Button Overlay */}
              <button
                onClick={onOpenTour}
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 text-[#6B2D3B] flex items-center justify-center shadow-xl hover:scale-110 hover:bg-white transition-all duration-300 cursor-pointer group-hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
                aria-label="Watch salon interior tour"
              >
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6B2D3B] opacity-20"></span>
                  <Play className="w-7 h-7 fill-[#6B2D3B] ml-1 text-[#6B2D3B]" />
                </div>
              </button>

              {/* Bottom Label Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F5C2CD]" />
                  <span className="font-medium">Sanctuary of Refinement & Care</span>
                </div>
                <span className="text-[11px] text-[#F3D3DA] underline cursor-pointer hover:text-white" onClick={onOpenTour}>
                  Take 360° Tour
                </span>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="absolute -bottom-5 -right-4 sm:right-6 bg-white py-2.5 px-4 rounded-2xl shadow-lg border border-[#EDE2DC] hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#F4DFD8] flex items-center justify-center text-[#6B2D3B]">
                <Award className="w-5 h-5 text-[#6B2D3B]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#2C2426]">Best Luxury Salon 2025</p>
                <p className="text-[10px] text-[#7A6F72]">Eastern India Beauty Awards</p>
              </div>
            </div>
          </div>

          {/* Right: Story & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Header */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2426] font-normal tracking-tight mb-5 leading-tight">
              About Aurelle Studio
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-[#615457] leading-relaxed mb-8 font-light">
              A luxury salon and spa that blends expert care, modern techniques, and a relaxing
              ambience to bring out your natural beauty. Born from a vision to redefine personal grooming
              into an uplifting sanctuary, every detail at Aurelle is curated for sublime tranquility.
            </p>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-6 border-y border-[#E8DAD4] mb-8">
              {SALON_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#6B2D3B] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#4A3F42] mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#6B2D3B] text-white text-sm font-medium hover:bg-[#58232F] transition-all shadow-[0_4px_16px_rgba(107,45,59,0.25)] cursor-pointer"
              >
                Experience Aurelle
              </button>

              <button
                onClick={onOpenTour}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-[#D1BDB7] text-[#423538] text-sm font-medium hover:border-[#6B2D3B] hover:text-[#6B2D3B] transition-all cursor-pointer"
              >
                View Salon Gallery
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
