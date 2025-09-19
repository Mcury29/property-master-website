import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, Heart, Building } from 'lucide-react';
import ContactModal from '@/components/ContactModal';
import founderImage from '@assets/Gemini_Generated_Image_p5egtzp5egtzp5eg_1758259774286.png';

export default function Founder() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Set page metadata for SEO
  useEffect(() => {
    document.title = 'Our Founder – Denis LePage | Property Masters Group';
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Learn about Denis LePage, founder of Property Masters Group. A legacy of vision and integrity in commercial property management across Edmonton and Sherwood Park.');

    // Create or update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Our Founder – Denis LePage | Property Masters Group');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Learn about Denis LePage, founder of Property Masters Group. A legacy of vision and integrity in commercial property management.');

    return () => {
      // Reset title when component unmounts
      document.title = 'Property Masters Group';
    };
  }, []);

  const scrollToStory = () => {
    const storySection = document.getElementById('our-story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-slate-900 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Our Founder – Denis LePage
                  </h1>
                  <p className="text-lg text-slate-300 max-w-xl">
                    A Legacy of Vision and Integrity
                  </p>
                </div>
                <p className="text-lg text-slate-300 mb-8 max-w-xl">
                  The foundation of our company was built by Denis LePage — a man who believed that 
                  true success in property management came not just from maintaining buildings, 
                  but from building trust. His vision, discipline, and unwavering commitment to quality 
                  created more than a business; he created a standard that still guides us today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={() => setContactModalOpen(true)}
                    data-testid="button-contact-founder"
                  >
                    Contact Us
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={scrollToStory}
                    data-testid="button-his-story"
                  >
                    His Story
                  </Button>
                </div>
              </div>

              {/* Founder Image */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden border-4 border-primary/20">
                    <img 
                      src={founderImage}
                      alt="Portrait of Denis LePage, Founder of Property Masters"
                      className="w-full h-full object-cover"
                      loading="eager"
                      data-testid="img-founder-portrait"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Legacy Highlights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              His Vision, Our Foundation
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Building From the Ground Up
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Denis began with a simple idea: do the work right, do it with integrity, 
                    and the results will follow. What started with small projects grew into 
                    a respected company trusted by landlords, tenants, and contractors alike.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Shaping the Company's Core
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Under Denis' leadership, the company expanded beyond its early beginnings, 
                    earning a reputation for reliability and care. He instilled values that became 
                    the backbone of our business: accountability, respect, responsiveness, and a 
                    commitment to long-term relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    His Enduring Philosophy
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    For Denis, property management was about responsibility — to clients, to tenants, 
                    to the community, and to the people working alongside him. His belief that 
                    "you treat every property as if it were your own" remains the gold standard we uphold.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* His Story Section */}
          <section id="our-story" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">His Story</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Building From the Ground Up
                </h3>
                <p className="text-muted-foreground">
                  Denis began with a simple idea: do the work right, do it with integrity, and the results will follow. 
                  What started with small projects grew into a respected company trusted by landlords, tenants, and 
                  contractors alike. His hands-on approach and attention to detail set a precedent that continues 
                  to define how we operate.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  Shaping the Company's Core
                </h3>
                <p className="text-muted-foreground">
                  Under Denis' leadership, the company expanded beyond its early beginnings, earning a reputation 
                  for reliability and care. He instilled values that became the backbone of our business: 
                  accountability, respect, responsiveness, and a commitment to long-term relationships.
                </p>
                <p className="text-muted-foreground">
                  These weren't just business strategies — they were Denis' personal principles, woven into the DNA of the company.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  His Enduring Philosophy
                </h3>
                <p className="text-muted-foreground">
                  For Denis, property management was about responsibility — to clients, to tenants, to the community, 
                  and to the people working alongside him. His belief that "you treat every property as if it were your own" 
                  remains the gold standard we uphold.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  A Lasting Impact
                </h3>
                <p className="text-muted-foreground">
                  Denis was more than a founder; he was a mentor, a leader, and an inspiration. His vision lives on 
                  in the systems, values, and culture that continue to drive the company forward.
                </p>
                <p className="text-muted-foreground">
                  Every success we achieve today stands on the foundation he built. Denis' legacy is not only the properties managed, 
                  or the projects completed, but the trust and reputation he established — a legacy that endures and grows with each passing year.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Continue the Legacy with Property Masters
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Built on Denis LePage's foundation of integrity, quality, and trust, we continue to serve 
              the Edmonton and Sherwood Park communities with the same dedication that started it all.
            </p>
            <Button 
              size="lg"
              onClick={() => setContactModalOpen(true)}
              data-testid="button-work-with-us"
            >
              Work With Us Today
            </Button>
          </section>
        </div>
      </div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
    </>
  );
}