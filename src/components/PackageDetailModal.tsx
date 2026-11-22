import React from 'react';
import { X, Check, ArrowRight, Sparkles, Clock, Crown } from 'lucide-react';
import { PackageItem } from '../types/salon.types';

interface PackageDetailModalProps {
  pkg: PackageItem | null;
  onClose: () => void;
  onBookPackage: (pkg: PackageItem) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  onClose,
  onBookPackage,
}) => {
  if (!pkg) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#E8DAD4] z-10 animate-modal-in max-h-[90vh] flex flex-col">
        {/* Top Header Banner */}
        <div className="bg-[#6B2D3B] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 backdrop-blur-xs text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
              {pkg.discountBadge}
            </span>
            <span className="text-xs text-[#F2CAD2] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {pkg.duration}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold">{pkg.name}</h3>
          <p className="text-xs sm:text-sm text-[#F0DFE3] mt-1 font-light">{pkg.subtitle}</p>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-serif text-3xl font-bold text-white">
              ₹{pkg.price.toLocaleString('en-IN')}
            </span>
            <span className="text-sm text-[#E0C0C7] line-through">
              ₹{pkg.originalPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-[#F8D2DA] ml-2">Inclusive of all taxes</span>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-semibold text-[#8E3E50] uppercase tracking-wider mb-1.5 font-sans">
              Package Description
            </h4>
            <p className="text-sm text-[#504245] leading-relaxed font-light">{pkg.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#8E3E50] uppercase tracking-wider mb-2.5 font-sans">
              Included Rituals & Treatments
            </h4>
            <div className="space-y-2">
              {pkg.itemsIncluded.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E3336]">
                  <div className="w-5 h-5 rounded-full bg-[#F4DFD8] text-[#6B2D3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#6B2D3B]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8EBE8] border border-[#EBD6CE]">
            <h5 className="text-xs font-semibold text-[#8E3E50] uppercase mb-1">Ideal For:</h5>
            <p className="text-xs text-[#635155] font-light leading-relaxed">{pkg.idealFor}</p>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#E8DAD4] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-left w-full sm:w-auto">
              <span className="text-xs text-[#7A6F72]">Save ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')} today</span>
            </div>

            <button
              onClick={() => {
                onBookPackage(pkg);
                onClose();
              }}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#6B2D3B] text-white text-sm font-medium hover:bg-[#58232F] transition-all shadow-[0_4px_16px_rgba(107,45,59,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Package Now</span>
              <ArrowRight className="w-4 h-4 text-[#F5C2CD]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
