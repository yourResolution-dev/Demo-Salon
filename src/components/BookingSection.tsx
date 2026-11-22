import React, { useState, useEffect } from 'react';
import { Calendar, User, Phone, Sparkles, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { PRIMARY_SERVICES, POPULAR_PACKAGES, STYLE_EXPERTS, SALON_IMAGES } from '../data/salonData';
import { AppointmentFormData } from '../types/salon.types';

interface BookingSectionProps {
  preselectedServiceId?: string;
  preselectedStylistId?: string;
  onBookingSuccess: (data: AppointmentFormData) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedServiceId,
  preselectedStylistId,
  onBookingSuccess,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    serviceId: '',
    serviceName: '',
    date: '',
    time: '11:30 AM',
    stylistId: '',
    notes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Today's date in YYYY-MM-DD for min date
  const todayString = new Date().toISOString().split('T')[0];

  // Update when preselected values change
  useEffect(() => {
    if (preselectedServiceId) {
      const foundService = PRIMARY_SERVICES.find((s) => s.id === preselectedServiceId);
      const foundPkg = POPULAR_PACKAGES.find((p) => p.id === preselectedServiceId);
      const serviceName = foundService?.title || foundPkg?.name || preselectedServiceId;
      setFormData((prev) => ({
        ...prev,
        serviceId: preselectedServiceId,
        serviceName,
      }));
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (preselectedStylistId) {
      setFormData((prev) => ({
        ...prev,
        stylistId: preselectedStylistId,
      }));
    }
  }, [preselectedStylistId]);

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '06:45 PM',
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }

    // Phone validation (10 digits)
    const phoneClean = formData.phone.replace(/\D/g, '');
    if (!phoneClean || phoneClean.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.serviceId) {
      newErrors.serviceId = 'Please select a service or package';
    }

    if (!formData.date) {
      newErrors.date = 'Please select your preferred date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a preferred time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate instant smooth processing
    setTimeout(() => {
      setIsSubmitting(false);
      onBookingSuccess(formData);
    }, 450);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Luxury Booking Container matching screenshot */}
        <div id="book-appointment" className="bg-[#F8EBE8] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-[#EBD6CE] shadow-[0_12px_40px_rgba(107,45,59,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Aesthetic Spa Still Life Image (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src={SALON_IMAGES.stillLifeSpa}
                alt="Aurelle Studio Spa Towels and Essential Oils"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

              {/* Inset overlay note */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#F7D1DA] block mb-1">
                  Private Sanctuary Experience
                </span>
                <p className="font-serif text-xl sm:text-2xl font-light leading-snug">
                  "Your time of serenity, crafted with bespoke care."
                </p>
                <p className="text-xs text-[#E5CDD3] mt-2">
                  Complimentary consultations • Organic formulations
                </p>
              </div>
            </div>

            {/* Right Column: Appointment Form (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div>
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#8E3E50] uppercase font-sans">
                  BOOK YOUR VISIT
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2426] font-normal tracking-tight mt-1 mb-2">
                  Schedule an Appointment
                </h2>
                <p className="text-xs sm:text-sm text-[#736367] font-light mb-8">
                  Reserve your appointment in less than a minute. We look forward to hosting you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-[#483A3D] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A7A7E]">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. Radhika Sen"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-white border text-sm text-[#2C2426] placeholder-[#A49498] focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#E6D4CD] focus:border-[#6B2D3B]'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-medium text-[#483A3D] mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A7A7E]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-white border text-sm text-[#2C2426] placeholder-[#A49498] focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#E6D4CD] focus:border-[#6B2D3B]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Select Service */}
                <div>
                  <label className="block text-xs font-medium text-[#483A3D] mb-1.5">
                    Select Service or Package *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A7A7E]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.serviceId}
                      onChange={(e) => {
                        const sId = e.target.value;
                        const foundService = PRIMARY_SERVICES.find((s) => s.id === sId);
                        const foundPkg = POPULAR_PACKAGES.find((p) => p.id === sId);
                        const sName = foundService?.title || foundPkg?.name || sId;
                        setFormData({
                          ...formData,
                          serviceId: sId,
                          serviceName: sName,
                        });
                        if (errors.serviceId) setErrors({ ...errors, serviceId: '' });
                      }}
                      className={`w-full pl-10 pr-8 py-3 rounded-xl bg-white border text-sm text-[#2C2426] focus:outline-none transition-colors appearance-none cursor-pointer ${
                        errors.serviceId
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#E6D4CD] focus:border-[#6B2D3B]'
                      }`}
                    >
                      <option value="">Choose a treatment or curated package...</option>
                      
                      <optgroup label="Popular Packages (Special Rates)">
                        {POPULAR_PACKAGES.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.name} — ₹{pkg.price.toLocaleString('en-IN')} ({pkg.discountBadge})
                          </option>
                        ))}
                      </optgroup>

                      <optgroup label="Hair Care">
                        {PRIMARY_SERVICES.filter((s) => s.categoryId === 'hair').map((srv) => (
                          <option key={srv.id} value={srv.id}>
                            {srv.title} — ₹{srv.price.toLocaleString('en-IN')} ({srv.duration})
                          </option>
                        ))}
                      </optgroup>

                      <optgroup label="Skin Care">
                        {PRIMARY_SERVICES.filter((s) => s.categoryId === 'skin').map((srv) => (
                          <option key={srv.id} value={srv.id}>
                            {srv.title} — ₹{srv.price.toLocaleString('en-IN')} ({srv.duration})
                          </option>
                        ))}
                      </optgroup>

                      <optgroup label="Makeup Artistry">
                        {PRIMARY_SERVICES.filter((s) => s.categoryId === 'makeup').map((srv) => (
                          <option key={srv.id} value={srv.id}>
                            {srv.title} — ₹{srv.price.toLocaleString('en-IN')} ({srv.duration})
                          </option>
                        ))}
                      </optgroup>

                      <optgroup label="Spa & Wellness">
                        {PRIMARY_SERVICES.filter((s) => s.categoryId === 'spa').map((srv) => (
                          <option key={srv.id} value={srv.id}>
                            {srv.title} — ₹{srv.price.toLocaleString('en-IN')} ({srv.duration})
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                  {errors.serviceId && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.serviceId}
                    </p>
                  )}
                </div>

                {/* Row 3: Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-medium text-[#483A3D] mb-1.5">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A7A7E]">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        min={todayString}
                        value={formData.date}
                        onChange={(e) => {
                          setFormData({ ...formData, date: e.target.value });
                          if (errors.date) setErrors({ ...errors, date: '' });
                        }}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-white border text-sm text-[#2C2426] focus:outline-none transition-colors ${
                          errors.date
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#E6D4CD] focus:border-[#6B2D3B]'
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.date}
                      </p>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs font-medium text-[#483A3D] mb-1.5">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A7A7E]">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.time}
                        onChange={(e) => {
                          setFormData({ ...formData, time: e.target.value });
                          if (errors.time) setErrors({ ...errors, time: '' });
                        }}
                        className="w-full pl-10 pr-8 py-3 rounded-xl bg-white border border-[#E6D4CD] text-sm text-[#2C2426] focus:outline-none focus:border-[#6B2D3B] transition-colors appearance-none cursor-pointer"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Row 4: Optional Preferred Stylist */}
                <div>
                  <label className="block text-xs font-medium text-[#483A3D] mb-1.5">
                    Preferred Stylist (Optional)
                  </label>
                  <select
                    value={formData.stylistId || ''}
                    onChange={(e) => setFormData({ ...formData, stylistId: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E6D4CD] text-xs sm:text-sm text-[#2C2426] focus:outline-none focus:border-[#6B2D3B] transition-colors cursor-pointer"
                  >
                    <option value="">Any Available Senior Specialist</option>
                    {STYLE_EXPERTS.map((exp) => (
                      <option key={exp.id} value={exp.id}>
                        {exp.name} — {exp.role}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-[#6B2D3B] hover:bg-[#58232F] text-white text-sm sm:text-base font-medium transition-all shadow-[0_6px_20px_rgba(107,45,59,0.3)] hover:shadow-[0_8px_25px_rgba(107,45,59,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Securing Your Spot...
                      </span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 text-[#F5C2CD]" />
                        <span>Book Appointment</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#8C7A7E] text-center mt-2.5">
                    No immediate payment required • Free cancellation up to 4 hours prior
                  </p>
                </div>
              </form>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
