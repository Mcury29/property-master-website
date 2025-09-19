import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trees, Snowflake, Sun, Droplets, CheckCircle } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

export default function Grounds() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary p-3 rounded-lg">
                <Trees className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Grounds Keeping</h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl">
              Our grounds division ensures properties are safe, sharp, and welcoming throughout the year. 
              From seasonal landscaping to snow removal, we maintain outdoor spaces that enhance 
              your property's curb appeal and create positive first impressions.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Seasonal Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Year-Round Grounds Care</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sun className="w-5 h-5 text-primary mr-3" />
                    Spring & Summer Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Turf care and lawn maintenance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Seasonal landscaping and plant care</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Irrigation system management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Parking lot cleaning and maintenance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Snowflake className="w-5 h-5 text-primary mr-3" />
                    Winter Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Snow removal and ice control</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Parking lot clearing and salting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Sidewalk and entrance de-icing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Emergency snow response</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Specialized Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Specialized Grounds Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Site Detailing</h3>
                <p className="text-muted-foreground">
                  Comprehensive cleaning including litter management, window washing, 
                  and maintaining clean, professional appearances.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trees className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Landscape Design</h3>
                <p className="text-muted-foreground">
                  Custom landscape planning and installation to enhance curb appeal 
                  and create welcoming outdoor spaces.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Seasonal Prep</h3>
                <p className="text-muted-foreground">
                  Complete seasonal transitions including fall cleanup, 
                  winter preparation, and spring restoration services.
                </p>
              </div>
            </div>
          </section>

          {/* Service Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Professional Grounds Care Matters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Enhanced Property Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Well-maintained grounds create positive first impressions and can increase 
                    property values while attracting quality tenants.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Improved curb appeal and aesthetic value</li>
                    <li>• Higher tenant satisfaction and retention</li>
                    <li>• Competitive advantage in the market</li>
                    <li>• Long-term asset protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Safety & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Professional grounds maintenance ensures safe walking surfaces and 
                    compliance with municipal bylaws and insurance requirements.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Safe, clear pedestrian pathways</li>
                    <li>• Prompt snow and ice removal</li>
                    <li>• Municipal compliance and bylaw adherence</li>
                    <li>• Reduced liability risk</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Create Outstanding Outdoor Spaces
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let us help you maintain beautiful, safe, and welcoming grounds year-round. 
              Our experienced team provides reliable service in all seasons and weather conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-contact-grounds"
              >
                Get Grounds Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-seasonal-grounds"
              >
                Seasonal Services
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