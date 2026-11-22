import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { STYLE_EXPERTS } from '../data/salonData';
import { StylistExpert } from '../types/salon.types';

interface ExpertsSectionProps {
  onSelectExpert: (expert: StylistExpert) => void;
  onBookWithExpert: (expert: StylistExpert) => void;
}

export const ExpertsSection: React.FC<ExpertsSectionProps> = ({
  onSelectExpert,
  onBookWithExpert,
}) => {
  return (
    <section id="experts" className="py-16 sm:py-24 bg-[#FAF7F2] relative border-t border-[#EDE0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and "View All Experts" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#8E3E50] uppercase font-sans">
              MEET OUR EXPERTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2426] font-normal tracking-tight mt-1.5">
              Our Style Experts
            </h2>
            <p className="text-sm sm:text-base text-[#6E5A60] leading-relaxed font-light mt-2 max-w-xl">
              Skilled, certified and passionate stylists dedicated to your beauty.
            </p>
          </div>

          <button
            onClick={() => onSelectExpert(STYLE_EXPERTS[0])}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2C2426] text-white text-xs sm:text-sm font-medium hover:bg-[#6B2D3B] transition-colors cursor-pointer self-start sm:self-auto group"
          >
            <span>View All Experts</span>
            <ArrowRight className="w-4 h-4 text-[#E5A4B0] transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Experts Grid (3 primary cards matching screenshot, responsive to 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STYLE_EXPERTS.slice(0, 3).map((expert) => (
            <div
              key={expert.id}
              onClick={() => onSelectExpert(expert)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#EBDAD3] shadow-[0_4px_20px_rgba(44,36,38,0.04)] hover:shadow-[0_16px_36px_rgba(107,45,59,0.12)] transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Stylist Portrait */}
              <div className="relative aspect-[4/4.5] overflow-hidden bg-[#F2EBE6]">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-semibold text-[#2C2426] flex items-center gap-1 shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
                  <span>{expert.rating}</span>
                </div>

                {/* Experience pill */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                  {expert.experience}
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-5 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#2C2426] group-hover:text-[#6B2D3B] transition-colors">
                    {expert.name}
                  </h3>
                  <p className="text-xs text-[#8E3E50] font-medium tracking-wide mt-1">
                    {expert.role}
                  </p>
                  <p className="text-[11px] text-[#7A6F72] font-light mt-1.5 line-clamp-1">
                    {expert.specialization}
                  </p>
                </div>

                {/* Action button */}
                <div className="mt-4 pt-3 border-t border-[#F2E9E4] flex items-center justify-center">
                  <span className="text-xs font-semibold text-[#6B2D3B] group-hover:underline flex items-center gap-1">
                    View Profile & Portfolio <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
