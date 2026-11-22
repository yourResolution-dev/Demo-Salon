import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ZoomIn } from 'lucide-react';
import { BEAUTY_TRANSFORMATIONS } from '../data/salonData';
import { TransformationItem } from '../types/salon.types';

interface TransformationsSectionProps {
  onOpenLightbox: (imageUrl: string, title: string) => void;
  onBookTreatment: (serviceName: string) => void;
}

export const TransformationsSection: React.FC<TransformationsSectionProps> = ({
  onOpenLightbox,
  onBookTreatment,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % BEAUTY_TRANSFORMATIONS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + BEAUTY_TRANSFORMATIONS.length) % BEAUTY_TRANSFORMATIONS.length);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#8E3E50] uppercase font-sans">
              REAL RESULTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2426] font-normal tracking-tight mt-1.5">
              Beauty Transformations
            </h2>
            <p className="text-sm sm:text-base text-[#6E5A60] leading-relaxed font-light mt-2 max-w-xl">
              See the difference with our expert care and personalized treatments.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous transformation"
              className="w-10 h-10 rounded-full border border-[#D5C2BB] bg-white text-[#4A3C3F] hover:bg-[#6B2D3B] hover:text-white hover:border-[#6B2D3B] transition-colors flex items-center justify-center cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next transformation"
              className="w-10 h-10 rounded-full border border-[#D5C2BB] bg-white text-[#4A3C3F] hover:bg-[#6B2D3B] hover:text-white hover:border-[#6B2D3B] transition-colors flex items-center justify-center cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Transformations Grid matching screenshot: 3 Cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {BEAUTY_TRANSFORMATIONS.map((tf, index) => (
            <div
              key={tf.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EBDAD3] shadow-[0_4px_20px_rgba(44,36,38,0.05)] hover:shadow-[0_16px_36px_rgba(107,45,59,0.1)] transition-all duration-300 flex flex-col group"
            >
              {/* Split Before / After Images */}
              <div className="relative grid grid-cols-2 aspect-[4/3] overflow-hidden bg-[#F2EBE6]">
                {/* Before Image */}
                <div
                  className="relative h-full overflow-hidden border-r border-white/60 cursor-pointer"
                  onClick={() => onOpenLightbox(tf.beforeImage, `${tf.title} (Before)`)}
                >
                  <img
                    src={tf.beforeImage}
                    alt={`${tf.title} Before`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Before
                  </span>
                </div>

                {/* After Image */}
                <div
                  className="relative h-full overflow-hidden cursor-pointer"
                  onClick={() => onOpenLightbox(tf.afterImage, `${tf.title} (After)`)}
                >
                  <img
                    src={tf.afterImage}
                    alt={`${tf.title} After`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2.5 right-2.5 bg-[#6B2D3B]/90 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    After
                  </span>
                </div>

                {/* Lightbox hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-white/90 text-[#2C2426] text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <ZoomIn className="w-3.5 h-3.5" /> Tap to zoom
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#8E3E50] font-medium uppercase tracking-wider mb-1">
                    <span>{tf.category}</span>
                    <span>{tf.duration}</span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-[#2C2426] group-hover:text-[#6B2D3B] transition-colors mb-2">
                    {tf.title}
                  </h3>

                  <p className="text-xs text-[#6B5C60] font-light leading-relaxed line-clamp-2">
                    {tf.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#F2E9E4] flex items-center justify-between text-xs">
                  <span className="text-[#7A6F72]">Stylist: <strong className="text-[#3A2E31] font-semibold">{tf.expert}</strong></span>
                  <button
                    onClick={() => onBookTreatment(tf.serviceUsed)}
                    className="text-[#6B2D3B] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Book Ritual</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicator dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {BEAUTY_TRANSFORMATIONS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to transformation slide ${dotIdx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                dotIdx === currentIndex ? 'w-6 bg-[#6B2D3B]' : 'bg-[#DCCAC2]'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
