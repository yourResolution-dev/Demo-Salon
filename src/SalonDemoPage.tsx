import React, { useState, useEffect } from 'react';
import { ResolutionDemoBanner } from './components/ResolutionDemoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { ExpertsSection } from './components/ExpertsSection';
import { TransformationsSection } from './components/TransformationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

// Modals
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PackageDetailModal } from './components/PackageDetailModal';
import { ExpertProfileModal } from './components/ExpertProfileModal';
import { BookingSuccessModal } from './components/BookingSuccessModal';
import { AmbienceTourModal } from './components/AmbienceTourModal';
import { LightboxModal } from './components/LightboxModal';
import { AgencyInquiryModal } from './components/AgencyInquiryModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';

import { ServiceItem, PackageItem, StylistExpert, AppointmentFormData } from './types/salon.types';
import { SALON_INFO } from './data/salonData';

export const SalonDemoPage: React.FC = () => {
  // Page Title
  useEffect(() => {
    document.title = `${SALON_INFO.name} | Luxury Salon & Spa (ReSolution Demo)`;
  }, []);

  // Modals & States
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [selectedExpert, setSelectedExpert] = useState<StylistExpert | null>(null);
  const [isAmbienceTourOpen, setIsAmbienceTourOpen] = useState(false);
  const [isAgencyModalOpen, setIsAgencyModalOpen] = useState(false);
  const [bookingSuccessData, setBookingSuccessData] = useState<AppointmentFormData | null>(null);
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: '',
    title: '',
  });

  // Preselections for booking form
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('');
  const [preselectedStylistId, setPreselectedStylistId] = useState<string>('');

  const scrollToBooking = () => {
    const el = document.getElementById('book-appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handlers
  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleBookService = (service: ServiceItem) => {
    setPreselectedServiceId(service.id);
    scrollToBooking();
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg);
  };

  const handleBookPackage = (pkg: PackageItem) => {
    setPreselectedServiceId(pkg.id);
    scrollToBooking();
  };

  const handleSelectExpert = (expert: StylistExpert) => {
    setSelectedExpert(expert);
  };

  const handleBookWithExpert = (expert: StylistExpert) => {
    setPreselectedStylistId(expert.id);
    scrollToBooking();
  };

  const handleOpenLightbox = (url: string, title: string) => {
    setLightbox({ isOpen: true, url, title });
  };

  const handleBookingSuccess = (data: AppointmentFormData) => {
    setBookingSuccessData(data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2426] antialiased selection:bg-[#6B2D3B] selection:text-white">
      
      {/* 1. ReSolution Showcase Top Header Banner */}
      <ResolutionDemoBanner onOpenAgencyModal={() => setIsAgencyModalOpen(true)} />

      {/* 2. Responsive Luxury Navigation Bar */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onOpenBooking={scrollToBooking}
          onExploreServices={scrollToServices}
        />

        {/* 4. About Aurelle Studio Section */}
        <AboutSection
          onOpenTour={() => setIsAmbienceTourOpen(true)}
          onOpenBooking={scrollToBooking}
        />

        {/* 5. Beauty & Wellness Services Section */}
        <ServicesSection
          onSelectService={handleSelectService}
          onBookService={handleBookService}
        />

        {/* 6. Curated Beauty Packages Section */}
        <PackagesSection
          onSelectPackage={handleSelectPackage}
          onBookPackage={handleBookPackage}
        />

        {/* 7. Our Style Experts Section */}
        <ExpertsSection
          onSelectExpert={handleSelectExpert}
          onBookWithExpert={handleBookWithExpert}
        />

        {/* 8. Beauty Transformations Section */}
        <TransformationsSection
          onOpenLightbox={handleOpenLightbox}
          onBookTreatment={(serviceName) => {
            scrollToBooking();
          }}
        />

        {/* 9. Client Testimonials Section */}
        <TestimonialsSection />

        {/* 10. Schedule an Appointment Form Section */}
        <BookingSection
          preselectedServiceId={preselectedServiceId}
          preselectedStylistId={preselectedStylistId}
          onBookingSuccess={handleBookingSuccess}
        />
      </main>

      {/* 11. Luxury Footer */}
      <Footer
        onOpenBooking={scrollToBooking}
        onOpenAgencyModal={() => setIsAgencyModalOpen(true)}
      />

      {/* Modals & Dialogs */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleBookService}
      />

      <PackageDetailModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onBookPackage={handleBookPackage}
      />

      <ExpertProfileModal
        expert={selectedExpert}
        onClose={() => setSelectedExpert(null)}
        onBookWithExpert={handleBookWithExpert}
      />

      <BookingSuccessModal
        bookingData={bookingSuccessData}
        onClose={() => setBookingSuccessData(null)}
        onBookAnother={() => {
          setBookingSuccessData(null);
          scrollToBooking();
        }}
      />

      <AmbienceTourModal
        isOpen={isAmbienceTourOpen}
        onClose={() => setIsAmbienceTourOpen(false)}
        onOpenBooking={scrollToBooking}
      />

      <LightboxModal
        isOpen={lightbox.isOpen}
        imageUrl={lightbox.url}
        title={lightbox.title}
        onClose={() => setLightbox({ isOpen: false, url: '', title: '' })}
      />

      <AgencyInquiryModal
        isOpen={isAgencyModalOpen}
        onClose={() => setIsAgencyModalOpen(false)}
      />

      {/* Floating Utilities */}
      <FloatingWhatsApp />
      <BackToTop />

    </div>
  );
};
