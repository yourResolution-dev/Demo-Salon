import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#6B2D3B] border border-[#E8DAD4] shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer backdrop-blur-xs"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};
