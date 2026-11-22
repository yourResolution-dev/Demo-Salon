import React from 'react';
import { X, Star, Award, CheckCircle2, Calendar, Instagram } from 'lucide-react';
import { StylistExpert } from '../types/salon.types';

interface ExpertProfileModalProps {
  expert: StylistExpert | null;
  onClose: () => void;
  onBookWithExpert: (expert: StylistExpert) => void;
}

export const ExpertProfileModal: React.FC<ExpertProfileModalProps> = ({
  expert,
  onClose,
  onBookWithExpert,
}) => {
  if (!expert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#E8DAD4] z-10 animate-modal-in max-h-[90vh] flex flex-col">
        {/* Header Profile Frame */}
        <div className="relative p-6 sm:p-8 bg-[#F8EBE8] border-b border-[#EBD6CE] flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/70 hover:bg-white text-[#2C2426] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <img
            src={expert.image}
            alt={expert.name}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-3 border-white shadow-md flex-shrink-0"
          />

          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#FAF7F2] px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#8E3E50] mb-1.5 border border-[#EADBD4]">
              <Award className="w-3.5 h-3.5 text-[#6B2D3B]" />
              <span>{expert.experience}</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#2C2426]">{expert.name}</h3>
            <p className="text-xs sm:text-sm font-medium text-[#8E3E50]">{expert.role}</p>

            <div className="flex items-center justify-center sm:justify-start gap-3 mt-2 text-xs text-[#5D4E52]">
              <span className="flex items-center gap-1 font-semibold text-[#2C2426]">
                <Star className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" /> {expert.rating}
              </span>
              <span>•</span>
              <span>{expert.clientCount} Happy Clients</span>
              <span>•</span>
              <span className="text-[#8E3E50]">{expert.instagram}</span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-semibold text-[#8E3E50] uppercase tracking-wider mb-1.5 font-sans">
              About the Artist
            </h4>
            <p className="text-sm text-[#4E4144] leading-relaxed font-light">{expert.bio}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#8E3E50] uppercase tracking-wider mb-2 font-sans">
              Specialized Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {expert.specialties.map((spec, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white text-xs text-[#4A3C3F] border border-[#E8DAD4] shadow-xs"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#8E3E50] uppercase tracking-wider mb-2 font-sans">
              Credentials & Certifications
            </h4>
            <div className="space-y-1.5">
              {expert.certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#3E3336]">
                  <CheckCircle2 className="w-4 h-4 text-[#6B2D3B] flex-shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-[#E8DAD4] flex items-center justify-end">
            <button
              onClick={() => {
                onBookWithExpert(expert);
                onClose();
              }}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#6B2D3B] text-white text-sm font-medium hover:bg-[#58232F] transition-all shadow-[0_4px_16px_rgba(107,45,59,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#F5C2CD]" />
              <span>Book Appointment with {expert.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
