import React, { useState } from 'react';
import { X, Sparkles, MessageSquare, CheckCircle2, Send } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface AgencyInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AgencyInquiryModal: React.FC<AgencyInquiryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [salonName, setSalonName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello ReSolution Agency! I am interested in building a luxury Salon & Spa website like the Aurelle Studio demo.\n` +
      `Business Name: ${salonName || 'My Salon & Spa'}\n` +
      `Contact Person: ${contactPerson || 'Salon Owner/Manager'}\n` +
      `Phone: ${phone || 'N/A'}\n` +
      `Requirements: ${notes || 'Appointment booking, package showcase, expert profiles, and mobile-first luxury aesthetic.'}`
    );
    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const agencyHighlights = [
    'Editorial Luxury Aesthetics & Custom Color Palette',
    'Interactive Online Appointment & Time Slot Selector',
    'Curated Packages & INR Pricing Showcase',
    'Before & After Transformation Gallery with Lightbox',
    'Stylist & Artist Profile Portfolios with Booking',
    'Instant WhatsApp Inquiry & Lead Generation',
    '100% Mobile Responsive & Ultra-Fast Loading',
    'Zero Monthly Commissions on Appointments',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#EDE2DC] max-h-[92vh] flex flex-col animate-modal-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Agency Inquiry"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF3F0] hover:bg-[#F2E5E1] text-[#2C2426] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          
          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0ED] text-[#8E3E50] text-xs font-bold mb-2 border border-[#EED7CE]">
              <Sparkles className="w-3.5 h-3.5 text-[#6B2D3B]" />
              <span>RESOLUTION DIGITAL AGENCY</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#2C2426]">
              Want a Website Like This?
            </h3>
            <p className="text-xs sm:text-sm text-[#66575B] mt-1.5 leading-relaxed font-light">
              We design and develop high-converting, luxury digital flagship websites for salons, spas, aesthetic clinics, and beauty wellness brands.
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-[#FAF7F4] rounded-2xl p-4.5 border border-[#EBDAD3] mb-6">
            <h4 className="text-xs font-bold text-[#2C2426] uppercase tracking-wider mb-2.5">
              Included in Your Salon Digital Flagship:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#524447]">
              {agencyHighlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6B2D3B] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {submitted ? (
            <div className="bg-[#FAF0ED] border border-[#EED7CE] rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#6B2D3B] text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2C2426]">
                Inquiry Received!
              </h4>
              <p className="text-xs text-[#635155]">
                Our luxury web design lead will get back to you shortly. You can also chat directly on WhatsApp right now for an instant proposal and timeline estimate.
              </p>
              <button
                onClick={handleWhatsAppDirect}
                className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs shadow-md cursor-pointer hover:bg-[#1EBE5D]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Now</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <input
                  type="text"
                  placeholder="Salon / Spa / Clinic Name"
                  value={salonName}
                  onChange={(e) => setSalonName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E2D2CB] text-xs text-[#2C2426] placeholder-[#9E8E92] focus:outline-none focus:border-[#6B2D3B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name (Owner / Stylist)"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E2D2CB] text-xs text-[#2C2426] placeholder-[#9E8E92] focus:outline-none focus:border-[#6B2D3B]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number / WhatsApp"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E2D2CB] text-xs text-[#2C2426] placeholder-[#9E8E92] focus:outline-none focus:border-[#6B2D3B]"
                />
              </div>

              <textarea
                rows={2}
                placeholder="Tell us about your brand vision, city, and desired launch date..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E2D2CB] text-xs text-[#2C2426] placeholder-[#9E8E92] focus:outline-none focus:border-[#6B2D3B]"
              />

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-1/2 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-1/2 py-3 px-4 rounded-full bg-[#6B2D3B] hover:bg-[#58232F] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}

          {/* Agency contact footer */}
          <div className="pt-5 mt-5 border-t border-[#EBDAD3] flex items-center justify-between text-[11px] text-[#8C7A7F]">
            <span>ReSolution Digital Agency</span>
            <span className="font-semibold text-[#6B2D3B]">wa.me/{SALON_INFO.whatsappNumber}</span>
          </div>

        </div>

      </div>
    </div>
  );
};
