import React from 'react';
import { Sparkles, Crown, Scissors, Check, ArrowRight } from 'lucide-react';
import { POPULAR_PACKAGES } from '../data/salonData';
import { PackageItem } from '../types/salon.types';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
  onBookPackage: (pkg: PackageItem) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
  onBookPackage,
}) => {
  const getPackageIcon = (type: string) => {
    switch (type) {
      case 'facial':
        return <Sparkles className="w-5 h-5 text-[#8E3E50]" />;
      case 'hair':
        return <Scissors className="w-5 h-5 text-[#8E3E50]" />;
      case 'bridal':
      default:
        return <Crown className="w-5 h-5 text-[#8E3E50]" />;
    }
  };

  return (
    <section id="packages" className="py-14 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enclosing Soft Blush / Dusty Rose Container matching reference */}
        <div className="bg-[#F8EBE8] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-[#EBD6CE] shadow-[0_8px_30px_rgba(107,45,59,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading & Subtitle (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#8E3E50] uppercase font-sans mb-1">
                POPULAR PACKAGES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2426] font-normal tracking-tight mb-3 leading-tight">
                Curated Beauty Packages
              </h2>
              <p className="text-sm sm:text-base text-[#6E5A60] leading-relaxed font-light mb-6">
                Value-packed services for your complete beauty care. Handcrafted combinations designed for optimal rejuvenation and luminous results.
              </p>
              
              <div className="hidden lg:flex flex-col gap-2.5 pt-4 border-t border-[#E8D1C9]">
                <div className="flex items-center gap-2 text-xs text-[#5D4E52]">
                  <Check className="w-4 h-4 text-[#8E3E50]" />
                  <span>Complimentary organic welcome drink</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5D4E52]">
                  <Check className="w-4 h-4 text-[#8E3E50]" />
                  <span>Personalized stylist consultation included</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Package Cards (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {POPULAR_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => onSelectPackage(pkg)}
                  className="group bg-white rounded-2xl p-5 sm:p-6 border border-[#EBDAD3] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1 relative"
                >
                  {/* Discount Badge on top right */}
                  <span className="absolute top-4 right-4 bg-[#6B2D3B] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {pkg.discountBadge}
                  </span>

                  <div>
                    {/* Icon container */}
                    <div className="w-10 h-10 rounded-full bg-[#FAF0ED] flex items-center justify-center mb-4 border border-[#EED7CE]">
                      {getPackageIcon(pkg.iconType)}
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#2C2426] group-hover:text-[#6B2D3B] transition-colors mb-1">
                      {pkg.name}
                    </h3>

                    <p className="text-xs text-[#736367] leading-relaxed font-light mb-4">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-[#F3E7E2]">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-xl sm:text-2xl font-bold font-serif text-[#2C2426]">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-[#A8989C] line-through">
                        ₹{pkg.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-medium text-[#6B2D3B]">
                      <span className="group-hover:underline">View Inclusions</span>
                      <div className="w-6 h-6 rounded-full bg-[#FBF3F0] group-hover:bg-[#6B2D3B] group-hover:text-white flex items-center justify-center transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
