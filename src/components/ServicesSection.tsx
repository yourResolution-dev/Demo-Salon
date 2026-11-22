import React, { useState } from 'react';
import { ArrowRight, Scissors, Sparkles, Wand2, Flower2 } from 'lucide-react';
import { PRIMARY_SERVICES, SERVICE_CATEGORIES } from '../data/salonData';
import { ServiceCategoryId, ServiceItem } from '../types/salon.types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategoryId>('all');

  const filteredServices =
    activeCategory === 'all'
      ? PRIMARY_SERVICES
      : PRIMARY_SERVICES.filter((s) => s.categoryId === activeCategory);

  // Helper for category icons
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'hair':
        return <Scissors className="w-5 h-5 text-[#6B2D3B]" />;
      case 'skin':
        return <Sparkles className="w-5 h-5 text-[#6B2D3B]" />;
      case 'makeup':
        return <Wand2 className="w-5 h-5 text-[#6B2D3B]" />;
      case 'spa':
      default:
        return <Flower2 className="w-5 h-5 text-[#6B2D3B]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Category Filters on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#8E3E50] uppercase font-sans">
              OUR SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2426] font-normal tracking-tight mt-1.5">
              Beauty & Wellness Services
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {SERVICE_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-[#6B2D3B] text-white shadow-sm'
                      : 'bg-[#F2E5E1] text-[#4A3C3F] hover:bg-[#EBD8D2] hover:text-[#6B2D3B]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Primary Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#EDE0D8] shadow-[0_4px_20px_rgba(44,36,38,0.04)] hover:shadow-[0_16px_36px_rgba(107,45,59,0.12)] transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EBE6]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                  loading="lazy"
                />
                {service.badge && (
                  <span className="absolute top-3 left-3 bg-[#6B2D3B]/90 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-xs">
                    {service.badge}
                  </span>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#2C2426] text-xs font-semibold px-2.5 py-1 rounded-full border border-white/60">
                  ₹{service.price.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#F4DFD8] flex items-center justify-center flex-shrink-0">
                      {getCategoryIcon(service.categoryId)}
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#2C2426] group-hover:text-[#6B2D3B] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#68595D] line-clamp-2 leading-relaxed font-light">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Footer with Arrow Action */}
                <div className="pt-4 mt-3 border-t border-[#F2E9E4] flex items-center justify-between text-xs font-medium">
                  <span className="text-[#8E3E50]">{service.duration}</span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF5F2] text-[#6B2D3B] group-hover:bg-[#6B2D3B] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-[#7A6F72]">
            Custom treatment programs available. Consult with our senior aesthetic therapists for tailored skin & hair plans.{' '}
            <button
              onClick={() => {
                const el = document.getElementById('book-appointment');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#6B2D3B] font-semibold underline hover:text-[#4A1B26] cursor-pointer"
            >
              Book a free in-studio consultation
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
