import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, MapPin, Square, Users } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

export default function Office() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const officeProperties = [
    {
      name: "Sherwood Park Professional Centre",
      address: "152 Sioux Road, Sherwood Park",
      size: "5,000 - 15,000 sq ft",
      type: "Multi-tenant office building",
      amenities: ["On-site parking", "Professional reception", "Conference facilities", "High-speed internet"]
    },
    {
      name: "Edmonton Business Plaza",
      address: "Downtown Edmonton Core",
      size: "2,500 - 8,000 sq ft",
      type: "Class A office space",
      amenities: ["Downtown location", "Transit access", "Security systems", "Modern HVAC"]
    },
    {
      name: "Meridian Office Complex",
      address: "St. Albert Business District",
      size: "1,200 - 4,500 sq ft",
      type: "Professional office suites",
      amenities: ["Flexible layouts", "Shared amenities", "Ample parking", "Professional environment"]
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
                <Building className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Office & Professional Properties</h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl">
              Discover premium office spaces designed for professional success. Our portfolio includes 
              modern facilities with flexible layouts, prime locations, and comprehensive amenities 
              to support your business growth.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Featured Properties */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Office Properties</h2>
            <div className="grid gap-8">
              {officeProperties.map((property, index) => (
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
                          <Square className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{property.type}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Amenities</h4>
                        <ul className="space-y-1">
                          {property.amenities.map((amenity, amenityIndex) => (
                            <li key={amenityIndex} className="text-sm text-muted-foreground flex items-center">
                              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                              {amenity}
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

          {/* Property Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Our Office Properties</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Prime Locations</h3>
                <p className="text-muted-foreground">
                  Strategic locations in Edmonton and Sherwood Park with excellent 
                  accessibility and professional business environments.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Square className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Flexible Spaces</h3>
                <p className="text-muted-foreground">
                  Adaptable office layouts that can be customized to meet your 
                  specific business needs and growth requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Professional Environment</h3>
                <p className="text-muted-foreground">
                  Well-maintained buildings with professional amenities that 
                  enhance your company image and employee satisfaction.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Find Your Perfect Office Space
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore our portfolio of professional office properties and discover 
              the ideal space for your business. Contact us to schedule a viewing or learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-contact-office"
              >
                Schedule Viewing
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-inquire-office"
              >
                Property Inquiry
              </Button>
            </div>
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