import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Flower2, HeartHandshake } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF7F2] pt-6 pb-14 sm:py-16 lg:py-20">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#F5DFD7]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#EFE0D8]/50 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Category tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#8E3E50] uppercase font-sans">
                SALON & SPA
              </span>
              <div className="w-8 h-[1px] bg-[#CBB1AA]" />
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] text-[#2C2426] font-normal tracking-tight leading-[1.12] mb-5">
              Beauty, Refined.
              <br />
              <span className="italic font-light text-[#6B2D3B]">Confidence,</span> Redefined.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#615457] leading-relaxed max-w-xl mb-8 font-light">
              {SALON_INFO.subheadline}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#6B2D3B] text-white text-sm sm:text-base font-medium hover:bg-[#58232F] transition-all shadow-[0_6px_20px_rgba(107,45,59,0.3)] hover:shadow-[0_8px_25px_rgba(107,45,59,0.4)] cursor-pointer group"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#F5C2CD] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#C5B0A8] text-[#3E3134] text-sm sm:text-base font-medium hover:border-[#6B2D3B] hover:text-[#6B2D3B] hover:bg-white/60 transition-all cursor-pointer shadow-xs"
              >
                Explore Services
              </button>
            </div>

            {/* 4 Benefit Indicators */}
            <div className="pt-6 border-t border-[#E8DAD4]/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F4DFD8] flex items-center justify-center text-[#6B2D3B] flex-shrink-0">
                  <HeartHandshake className="w-4 h-4 text-[#6B2D3B]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#3A2E31]">Premium Care</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F4DFD8] flex items-center justify-center text-[#6B2D3B] flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#6B2D3B]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#3A2E31]">Hygienic & Safe</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F4DFD8] flex items-center justify-center text-[#6B2D3B] flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-[#6B2D3B]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#3A2E31]">Expert Stylists</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F4DFD8] flex items-center justify-center text-[#6B2D3B] flex-shrink-0">
                  <Flower2 className="w-4 h-4 text-[#6B2D3B]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#3A2E31]">Relaxing Ambience</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Beauty Portrait (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Background Arch Shape / Soft Tint Frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#EEDFD8] to-[#F9EFE9] rounded-[2.5rem] transform rotate-1 -z-10 shadow-sm border border-[#E8DAD4]" />

              {/* Main Model Photo with Arch / Rounded Corner */}
              <div className="relative overflow-hidden rounded-[2.2rem] shadow-[0_16px_40px_rgba(107,45,59,0.12)] border border-[#EADBD4] aspect-[4/5] sm:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                  alt="Aurelle Studio Luxury Beauty & Hair Styling"
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Floating Rating Pill Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-white/60 flex items-center gap-2">
                  <div className="flex text-[#D97706] text-xs">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-xs font-semibold text-[#2C2426]">4.9 (2,400+ Reviews)</span>
                </div>
              </div>

              {/* Decorative Lily Blossom / Floral Accent corner */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white shadow-xl hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=300&q=80"
                  alt="Pink Lily Blossom"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
