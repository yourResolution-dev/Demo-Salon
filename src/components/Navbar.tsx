import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Phone, Clock, ChevronRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Experts', href: '#experts' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DAD5]'
            : 'bg-[#FAF7F2] border-b border-[#EFE5E0]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            >
              {/* Elegant Lotus Flower SVG Brand Mark */}
              <div className="w-10 h-10 rounded-full bg-[#F4DFD8] flex items-center justify-center text-[#6B2D3B] transition-transform duration-300 group-hover:scale-105 border border-[#E5CEC5]">
                <svg
                  className="w-6 h-6 stroke-[#6B2D3B] fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3c-1.5 3-4.5 5-4.5 9 0 3 2 5 4.5 5s4.5-2 4.5-5c0-4-3-6-4.5-9z" />
                  <path d="M7.5 12c-2.5.5-4.5 2.5-4.5 5 0 2 2 3.5 4.5 3.5 2 0 3.5-1 4.5-2.5" />
                  <path d="M16.5 12c2.5.5 4.5 2.5 4.5 5 0 2-2 3.5-4.5 3.5-2 0-3.5-1-4.5-2.5" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.14em] text-[#2C2426] uppercase">
                  AURELLE
                </span>
                <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.32em] text-[#8E3E50] uppercase -mt-1">
                  STUDIO
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isCurrent =
                  activeSection === link.href.replace('#', '') ||
                  (activeSection === '' && link.href === '#home');
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative text-[14px] font-medium transition-colors cursor-pointer py-1 ${
                      isCurrent
                        ? 'text-[#6B2D3B] font-semibold'
                        : 'text-[#4A3F42] hover:text-[#6B2D3B]'
                    }`}
                  >
                    {link.label}
                    {isCurrent && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6B2D3B] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6B2D3B] text-white text-xs sm:text-sm font-medium hover:bg-[#58232F] transition-all shadow-[0_4px_16px_rgba(107,45,59,0.25)] hover:shadow-[0_6px_20px_rgba(107,45,59,0.35)] cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-[#F5C2CD] transition-transform group-hover:scale-110" />
                <span>Book Appointment</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#6B2D3B] hover:bg-[#F3E5E1] transition-colors cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-0 right-0 w-[82%] max-w-sm h-full bg-[#FAF7F2] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-modal-in border-l border-[#E5DAD3]">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E8DAD4]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#F4DFD8] flex items-center justify-center text-[#6B2D3B]">
                    <svg className="w-5 h-5 stroke-[#6B2D3B] fill-none" viewBox="0 0 24 24" strokeWidth="1.6">
                      <path d="M12 3c-1.5 3-4.5 5-4.5 9 0 3 2 5 4.5 5s4.5-2 4.5-5c0-4-3-6-4.5-9z" />
                      <path d="M7.5 12c-2.5.5-4.5 2.5-4.5 5 0 2 2 3.5 4.5 3.5 2 0 3.5-1 4.5-2.5" />
                      <path d="M16.5 12c2.5.5 4.5 2.5 4.5 5 0 2-2 3.5-4.5 3.5-2 0-3.5-1-4.5-2.5" />
                    </svg>
                  </div>
                  <span className="font-serif font-bold text-lg text-[#2C2426]">AURELLE STUDIO</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-[#EFE2DD] text-[#6B2D3B] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-left text-base font-medium text-[#3A2F32] hover:bg-[#F3E5E1] hover:text-[#6B2D3B] transition-colors cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#A0888F]" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="pt-4 border-t border-[#E8DAD4] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-full bg-[#6B2D3B] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md hover:bg-[#58232F] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#F5C2CD]" />
                <span>Book Appointment</span>
              </button>

              <div className="text-xs text-[#7A6F72] space-y-1.5 pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#8E3E50]" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#8E3E50]" />
                  <span>Mon-Sat 10 AM - 8 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
