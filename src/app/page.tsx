import { HeroSidebar }    from '@/components/home/HeroSidebar';
import { ServicesSection } from '@/components/home/ServicesSection';
import { GalleryPreview }  from '@/components/home/GalleryPreview';
import { WhyChooseUs }     from '@/components/home/WhyChooseUs';
import { Testimonials }    from '@/components/home/Testimonials';
import { ServiceArea }     from '@/components/home/ServiceArea';
import { ContactCTA }      from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <>
      <HeroSidebar />
      <ServicesSection />
      <GalleryPreview />
      <WhyChooseUs />
      <Testimonials />
      <ServiceArea />
      <ContactCTA />
    </>
  );
}
