import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, MapPin, Square, Users } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

export default function Residential() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const residentialProperties = [
    {
      name: "Sherwood Park Residential Complex",
      address: "Sherwood Park Residential Area",
      size: "850 - 1,200 sq ft",
      type: "Multi-family residential",
      features: ["Ground-floor commercial", "Upper-level residential", "On-site parking", "Professional management"]
    },
    {
      name: "Edmonton Mixed-Use Development",
      address: "Central Edmonton",
      size: "900 - 1,500 sq ft",
      type: "Mixed-use building",
      features: ["Retail main floor", "Residential upper floors", "Transit accessible", "Modern amenities"]
    },
    {
      name: "Strathcona Mixed Development",
      address: "Strathcona County",
      size: "750 - 1,100 sq ft",
      type: "Residential with commercial",
      features: ["Flexible zoning", "Live-work opportunities", "Community setting", "Investment potential"]
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
                <Home className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Residential & Mixed-Use</h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl">
              Discover versatile residential and mixed-use properties that offer unique 
              opportunities for both living and business. Our portfolio includes properties 
              that combine residential comfort with commercial potential.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Featured Properties */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Residential & Mixed-Use Properties</h2>
            <div className="grid gap-8">
              {residentialProperties.map((property, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">{property.name}</span>
                      <span className="text-primary text-lg font-semibold">{property.size}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{property.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Home className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{property.type}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Property Features</h4>
                        <ul className="space-y-1">
                          {property.features.map((feature, featureIndex) => (
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

          {/* Property Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Property Types</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Residential Units</h3>
                <p className="text-muted-foreground">
                  Quality residential spaces with modern amenities, professional 
                  management, and convenient locations for comfortable living.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Square className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Mixed-Use Buildings</h3>
                <p className="text-muted-foreground">
                  Versatile properties combining residential and commercial spaces, 
                  offering flexibility and multiple income streams for investors.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Live-Work Spaces</h3>
                <p className="text-muted-foreground">
                  Innovative properties designed for entrepreneurs and professionals 
                  who want to combine their living and working spaces.
                </p>
              </div>
            </div>
          </section>

          {/* Investment Opportunities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Investment Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Residential Investment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Steady rental income potential</li>
                    <li>• Professional property management available</li>
                    <li>• Strong rental demand in the area</li>
                    <li>• Long-term appreciation potential</li>
                    <li>• Tax advantages for investors</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mixed-Use Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Diversified income streams</li>
                    <li>• Reduced vacancy risk</li>
                    <li>• Higher overall returns</li>
                    <li>• Flexible development options</li>
                    <li>• Growing market demand</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Explore Residential Investment Opportunities
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're looking for a place to live, work, or invest, our residential 
              and mixed-use properties offer excellent opportunities in prime locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-contact-residential"
              >
                Investment Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-inquire-residential"
              >
                Property Information
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