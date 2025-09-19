import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Linkedin, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import ContactModal from '@/components/ContactModal';
import FounderImage from '@/components/FounderImage';
import { FOUNDER_DATA } from '@/data/founder';

export default function Founders() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { founder, companyName } = FOUNDER_DATA;

  // SEO metadata
  useEffect(() => {
    document.title = `Founders | ${companyName}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', founder.shortPitch);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = founder.shortPitch;
      document.head.appendChild(meta);
    }

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${window.location.origin}/founders`);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = `${window.location.origin}/founders`;
      document.head.appendChild(link);
    }

    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `Founders | ${companyName}`);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = `Founders | ${companyName}`;
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', founder.shortPitch);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = founder.shortPitch;
      document.head.appendChild(meta);
    }

    // JSON-LD structured data
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": founder.fullName,
      "jobTitle": founder.title,
      "email": founder.contact.email,
      "telephone": founder.contact.phone,
      "url": founder.contact.linkedin,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": founder.location.split(',')[0],
        "addressRegion": founder.location.split(',')[1]?.trim()
      },
      "worksFor": {
        "@type": "Organization",
        "name": companyName,
        "url": window.location.origin
      }
    };

    if (!existingSchema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemaData, null, 2);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup meta tags on unmount
      document.title = companyName;
    };
  }, [founder, companyName]);

  const scrollToBio = () => {
    document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Breadcrumbs */}
        <div className="bg-muted/30 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors" data-testid="link-breadcrumb-home">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Founders</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    {founder.fullName}
                  </h1>
                  <p className="text-xl text-primary font-semibold mb-4">
                    {founder.title}
                  </p>
                  <p className="text-lg text-muted-foreground mb-2">
                    {founder.location}
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    {founder.shortPitch}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => setContactModalOpen(true)}
                    data-testid="button-contact-founder"
                  >
                    Contact
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={scrollToBio}
                    data-testid="button-our-story"
                  >
                    Our Story
                  </Button>
                </div>
              </div>

              {/* Founder Photo */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <FounderImage 
                    alt={founder.headshot.alt}
                    className="w-80 h-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Key Highlights</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience and expertise that sets {companyName} apart
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {founder.highlights.map((highlight, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-4 text-sm px-3 py-1">
                      Highlight {index + 1}
                    </Badge>
                    <p className="text-foreground font-medium leading-relaxed">
                      {highlight}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section id="our-story" className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                The journey behind {companyName}
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-foreground">
              {founder.bioParagraphs.map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary mr-2" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    data-testid="button-email-founder"
                  >
                    <a href={`mailto:${founder.contact.email}`}>
                      {founder.contact.email}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary mr-2" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    data-testid="button-phone-founder"
                  >
                    <a href={`tel:${founder.contact.phone}`}>
                      {founder.contact.phone}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary mr-2" />
                    LinkedIn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    data-testid="button-linkedin-founder"
                  >
                    <a 
                      href={founder.contact.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Connect
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call-to-Action Banner */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Work with Property Masters</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Ready to experience exceptional commercial property management and real estate services? 
              Let's discuss how we can help with your property needs.
            </p>
            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white"
              data-testid="button-work-with-us"
            >
              Start the Conversation
            </Button>
          </div>
        </section>
      </div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
    </>
  );
}