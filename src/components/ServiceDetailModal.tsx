import React from 'react';
import { X, Clock, Check, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types/salon.types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#E8DAD4] z-10 animate-modal-in max-h-[90vh] flex flex-col">
        {/* Header Image */}
        <div className="relative h-56 sm:h-64 bg-[#EADFD8] overflow-hidden flex-shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#F7D1DA] bg-[#6B2D3B]/80 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
              {service.categoryName}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              {service.title}
            </h3>
            <div className="flex items-center gap-4 text-xs sm:text-sm text-[#F0DFE3] mt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#F5C2CD]" /> {service.duration}
              </span>
              <span>•</span>
              <span className="font-semibold text-white">
                ₹{service.price.toLocaleString('en-IN')}
                {service.originalPrice && (
                  <span className="line-through text-[#D1BDC2] ml-1.5 text-xs">
                    ₹{service.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold text-[#8E3E50] uppercase tracking-wider mb-1.5 font-sans">
              Ritual Overview
            </h4>
            <p className="text-sm text-[#4E4144] leading-relaxed font-light">
              {service.fullDesc}
            </p>
          </div>

          {/* What is Included */}
          <div>
            <h4 className="text-xs font-semibold text-[#8E3E50] uppercase tracking-wider mb-2.5 font-sans">
              What Is Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.includes.map((inc, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#3E3336]">
                  <Check className="w-4 h-4 text-[#6B2D3B] flex-shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-xs font-semibold text-[#8E3E50] uppercase tracking-wider mb-2.5 font-sans">
              Key Benefits
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.benefits.map((ben, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5ECE8] text-[#554549] text-xs border border-[#EADBD4]"
                >
                  <Sparkles className="w-3 h-3 text-[#8E3E50]" />
                  <span>{ben}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-[#E8DAD4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left w-full sm:w-auto">
              <span className="text-[11px] text-[#7A6F72] block">Special In-Studio Price</span>
              <span className="font-serif text-2xl font-bold text-[#2C2426]">
                ₹{service.price.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={() => {
                onBookService(service);
                onClose();
              }}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#6B2D3B] text-white text-sm font-medium hover:bg-[#58232F] transition-all shadow-[0_4px_16px_rgba(107,45,59,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book This Service</span>
              <ArrowRight className="w-4 h-4 text-[#F5C2CD]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
