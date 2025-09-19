import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PropertyPortfolio from '@/components/PropertyPortfolio';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PropertyPortfolio />
      <ContactForm />
    </div>
  );
}