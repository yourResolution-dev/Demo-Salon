import React from 'react';
import { CheckCircle2, Calendar, Clock, User, Phone, Sparkles, MessageCircle, X } from 'lucide-react';
import { AppointmentFormData } from '../types/salon.types';
import { SALON_INFO, STYLE_EXPERTS } from '../data/salonData';

interface BookingSuccessModalProps {
  bookingData: AppointmentFormData | null;
  onClose: () => void;
  onBookAnother: () => void;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({
  bookingData,
  onClose,
  onBookAnother,
}) => {
  if (!bookingData) return null;

  const stylist = STYLE_EXPERTS.find((e) => e.id === bookingData.stylistId);
  const bookingCode = `AUR-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Aurelle Studio! I booked an appointment on the demo website.\n` +
      `Booking Ref: ${bookingCode}\n` +
      `Guest Name: ${bookingData.fullName}\n` +
      `Service: ${bookingData.serviceName}\n` +
      `Date & Time: ${bookingData.date} at ${bookingData.time}\n` +
      `Stylist: ${stylist?.name || 'Any Senior Specialist'}`
    );
    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl shadow-2xl overflow-hidden border border-[#E8DAD4] animate-modal-in max-h-[92vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#2C2426] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Header Card */}
        <div className="bg-[#6B2D3B] text-white p-6 sm:p-7 text-center">
          <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center mx-auto mb-3 border border-white/20">
            <CheckCircle2 className="w-8 h-8 text-[#F5C2CD]" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#F5C2CD]">
            Appointment Confirmed (Demo)
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
            We Look Forward to Seeing You
          </h3>
          <p className="text-xs text-[#E8D4D8] mt-1.5 font-light">
            Reference Pass: <strong className="font-mono text-white tracking-widest">{bookingCode}</strong>
          </p>
        </div>

        {/* Details Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-[#EBDAD3] shadow-xs space-y-2.5 text-xs sm:text-sm text-[#3E3235]">
            <div className="flex items-center justify-between pb-2 border-b border-[#F2EAE5]">
              <span className="text-[#7A6F72] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#8E3E50]" /> Guest Name:
              </span>
              <span className="font-semibold text-[#2C2426]">{bookingData.fullName}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-[#F2EAE5]">
              <span className="text-[#7A6F72] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#8E3E50]" /> Phone Number:
              </span>
              <span className="font-medium text-[#2C2426]">{bookingData.phone}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-[#F2EAE5]">
              <span className="text-[#7A6F72] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#8E3E50]" /> Service / Package:
              </span>
              <span className="font-semibold text-[#6B2D3B] text-right">{bookingData.serviceName}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-[#F2EAE5]">
              <span className="text-[#7A6F72] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#8E3E50]" /> Date:
              </span>
              <span className="font-medium text-[#2C2426]">{bookingData.date}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-[#F2EAE5]">
              <span className="text-[#7A6F72] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#8E3E50]" /> Time Slot:
              </span>
              <span className="font-semibold text-[#2C2426]">{bookingData.time}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#7A6F72]">Preferred Expert:</span>
              <span className="font-medium text-[#2C2426]">
                {stylist ? stylist.name : 'Any Senior Specialist'}
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F6ECE7] border border-[#EBD6CE] text-[11px] text-[#6E5A60]">
            📍 <strong>Studio Location:</strong> {SALON_INFO.shortAddress} (Near Technopolis)
            <br />
            ☕ Complimentary botanical herbal tea & styling consultation await your arrival.
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleShareWhatsApp}
              className="w-full py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Confirmation on WhatsApp</span>
            </button>

            <button
              onClick={onBookAnother}
              className="w-full py-2.5 px-4 rounded-full bg-white hover:bg-[#F2E8E4] text-[#6B2D3B] text-xs font-semibold border border-[#E0CEC7] transition-colors cursor-pointer"
            >
              Book Another Service / Return to Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
