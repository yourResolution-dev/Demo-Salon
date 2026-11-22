import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, MessageCircle, ArrowRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAgencyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenAgencyModal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hi Aurelle Studio! I would like to inquire about appointments and packages.');
    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#1C0A10] text-[#E0CFD3] pt-16 pb-8 border-t border-[#3D1A24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-[#361720]">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#381620] flex items-center justify-center text-[#F5C2CD] border border-[#522330]">
                <svg
                  className="w-6 h-6 stroke-[#F5C2CD] fill-none"
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

              <div>
                <span className="font-serif text-xl font-bold tracking-[0.14em] text-white uppercase block">
                  AURELLE
                </span>
                <span className="text-[10px] font-sans font-medium tracking-[0.32em] text-[#E5A4B0] uppercase -mt-1 block">
                  STUDIO
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#BDB0B4] leading-relaxed max-w-sm mb-6 font-light">
              A premium salon & spa for modern beauty and wellness. Experience bespoke hair transformations, dermatological skin therapies, and deep relaxation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2C131B] text-[#D8B4BC] hover:text-white hover:bg-[#6B2D3B] transition-colors flex items-center justify-center border border-[#481E29]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2C131B] text-[#D8B4BC] hover:text-white hover:bg-[#6B2D3B] transition-colors flex items-center justify-center border border-[#481E29]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2C131B] text-[#D8B4BC] hover:text-white hover:bg-[#6B2D3B] transition-colors flex items-center justify-center border border-[#481E29]"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <button
                onClick={handleWhatsApp}
                className="w-9 h-9 rounded-full bg-[#2C131B] text-[#D8B4BC] hover:text-white hover:bg-[#25D366] transition-colors flex items-center justify-center border border-[#481E29] cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B5A5A9]">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-white transition-colors cursor-pointer">
                  Packages
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('gallery')} className="hover:text-white transition-colors cursor-pointer">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B5A5A9]">
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Hair Care
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Skin Care
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Makeup
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Spa & Wellness
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-white transition-colors cursor-pointer">
                  Bridal Packages
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-white transition-colors cursor-pointer">
                  VIP Membership
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs text-[#B5A5A9]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E5A4B0] flex-shrink-0 mt-0.5" />
                <span>{SALON_INFO.shortAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E5A4B0] flex-shrink-0" />
                <a href={`tel:${SALON_INFO.phone}`} className="hover:text-white transition-colors">
                  {SALON_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E5A4B0] flex-shrink-0" />
                <a href={`mailto:${SALON_INFO.email}`} className="hover:text-white transition-colors">
                  {SALON_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: Opening Hours & CTA (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs text-[#B5A5A9] mb-5">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#E5A4B0] flex-shrink-0 mt-0.5" />
                <div>
                  <p>{SALON_INFO.workingHours.weekdays}</p>
                  <p>{SALON_INFO.workingHours.sunday}</p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-[#2C131B] text-xs font-semibold hover:bg-[#FCE8ED] transition-colors cursor-pointer shadow-md group"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#6B2D3B] transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & ReSolution Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#8A797E]">
          <p>© 2026 Aurelle Studio. All Rights Reserved. | A Demo by ReSolution</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAgencyModal}
              className="hover:text-[#E5A4B0] transition-colors cursor-pointer underline"
            >
              Want a Website Like This?
            </button>
            <span>•</span>
            <span className="text-[#6D5D62]">Crafted for High-Converting Salons & Spas</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
