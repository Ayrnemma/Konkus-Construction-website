import { Hero } from '@/components/home/Hero';
import { AboutSection } from '@/components/home/AboutSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { ServiceArea } from '@/components/home/ServiceArea';
import { ContactCTA } from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <ServiceArea />
      <ContactCTA />
    </>
  );
}
