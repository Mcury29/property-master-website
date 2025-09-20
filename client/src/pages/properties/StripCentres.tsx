import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, MapPin, Square, Car } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

export default function StripCentres() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const stripCentres = [
    {
      name: "Sherwood Commons",
      address: "Sherwood Park Main Strip",
      size: "1,500 - 4,200 sq ft",
      type: "Retail strip centre",
      features: ["High traffic location", "Ample parking", "Ground-level access", "Flexible retail spaces"]
    },
    {
      name: "Edmonton Gateway Plaza",
      address: "South Edmonton",
      size: "1,200 - 3,800 sq ft",
      type: "Community shopping centre",
      features: ["Anchor tenant secured", "Visible signage", "Easy vehicle access", "Mixed-use opportunities"]
    },
    {
      name: "Northside Commercial Centre",
      address: "North Edmonton",
      size: "800 - 2,500 sq ft",
      type: "Neighborhood retail",
      features: ["Established foot traffic", "Corner location visibility", "Dedicated parking", "Professional management"]
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary p-3 rounded-lg">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Strip Centres</h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl">
              Explore our retail strip centres offering excellent visibility, convenient parking, 
              and strategic locations for your retail business. These properties provide the perfect 
              combination of accessibility and affordability for growing businesses.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Featured Strip Centres */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Strip Centres</h2>
            <div className="grid gap-8">
              {stripCentres.map((centre, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">{centre.name}</span>
                      <span className="text-primary text-lg font-semibold">{centre.size}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{centre.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Store className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{centre.type}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {centre.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Strip Centre Advantages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Strip Centre Advantages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Convenient Parking</h3>
                <p className="text-muted-foreground">
                  Ample front-door parking makes it easy for customers to visit 
                  your business, increasing foot traffic and sales potential.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">High Visibility</h3>
                <p className="text-muted-foreground">
                  Street-facing locations with excellent signage opportunities 
                  ensure your business gets noticed by passing traffic.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Square className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Flexible Layouts</h3>
                <p className="text-muted-foreground">
                  Adaptable retail spaces that can be configured to meet your 
                  specific business requirements and operational needs.
                </p>
              </div>
            </div>
          </section>

          {/* Ideal For Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Ideal For</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Retail Businesses</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Clothing and fashion stores</li>
                    <li>• Specialty food and restaurants</li>
                    <li>• Electronics and technology shops</li>
                    <li>• Health and beauty services</li>
                    <li>• Home and garden retailers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Businesses</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Professional services offices</li>
                    <li>• Financial and insurance services</li>
                    <li>• Medical and dental practices</li>
                    <li>• Personal care and wellness</li>
                    <li>• Educational and training centers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Start Your Retail Success Story
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our strip centres offer the perfect combination of visibility, accessibility, 
              and affordability for your retail business. Contact us to explore available spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-contact-strip-centres"
              >
                View Available Spaces
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-inquire-strip-centres"
              >
                Leasing Information
              </Button>
            </div>
          </section>
        </div>
        
        {/* Company Legacy Section */}
        <div className="bg-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
              For over 25 years, Property Masters Group has been the trusted partner for property owners 
              across Edmonton and surrounding area, providing integrated solutions for commercial real estate, 
              maintenance, and grounds care.
            </p>
          </div>
        </div>
      </div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
    </>
  );
}