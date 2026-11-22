import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#EDE0D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#8E3E50] uppercase font-sans">
              CLIENT LOVE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2426] font-normal tracking-tight mt-1.5">
              What Our Clients Say
            </h2>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevReview}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#D5C2BB] bg-white text-[#4A3C3F] hover:bg-[#6B2D3B] hover:text-white hover:border-[#6B2D3B] transition-colors flex items-center justify-center cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#D5C2BB] bg-white text-[#4A3C3F] hover:bg-[#6B2D3B] hover:text-white hover:border-[#6B2D3B] transition-colors flex items-center justify-center cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Testimonial Cards Grid (matching screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EBDAD3] shadow-[0_4px_20px_rgba(44,36,38,0.04)] hover:shadow-[0_12px_30px_rgba(107,45,59,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Avatar, Name & Star Rating */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#E8DAD4]"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-serif text-base font-semibold text-[#2C2426]">
                      {item.name}
                    </h3>
                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308]" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#5C4F52] leading-relaxed font-light italic">
                  "{item.review}"
                </p>
              </div>

              {/* Service Taken Tag */}
              <div className="pt-4 mt-5 border-t border-[#F2E8E4] flex items-center justify-between text-[11px] text-[#8E3E50]">
                <span className="font-medium bg-[#FBF2EF] px-2.5 py-1 rounded-full">
                  {item.service}
                </span>
                <span className="text-[#99888C]">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary banner */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-[#66575B]">
          <span className="font-semibold text-[#6B2D3B]">Rated 4.9/5 by 2,400+ clients</span>
          <span>•</span>
          <span>Verified Google Reviews & Studio Feedback</span>
        </div>

      </div>
    </section>
  );
};
