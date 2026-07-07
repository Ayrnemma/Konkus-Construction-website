import { Hero }           from '@/components/home/Hero';
import { ServicesSection } from '@/components/home/ServicesSection';
import { GalleryPreview }  from '@/components/home/GalleryPreview';
import { WhyChooseUs }     from '@/components/home/WhyChooseUs';
import { Testimonials }    from '@/components/home/Testimonials';
import { ServiceArea }     from '@/components/home/ServiceArea';
import { ContactCTA }      from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <GalleryPreview />
      <WhyChooseUs />
      <Testimonials />
      <ServiceArea />
      <ContactCTA />
    </>
  );
}
