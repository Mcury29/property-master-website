import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Users, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

export default function PropertyManagement() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

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
              <h1 className="text-4xl md:text-5xl font-bold">Property Management</h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl">
              Comprehensive property management services that maximize your investment returns while 
              minimizing your day-to-day responsibilities. We handle everything from tenant relations 
              to maintenance coordination, ensuring your properties perform at their best.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Key Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Management Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 text-primary mr-3" />
                    Tenant Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Tenant screening and lease administration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Rent collection and payment processing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Tenant relations and issue resolution</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Move-in and move-out coordination</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-primary mr-3" />
                    Financial Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Monthly financial reporting and analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Budget planning and expense management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Market analysis and rent optimization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Tax preparation support and documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Management Approach */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Management Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Proactive Protection</h3>
                <p className="text-muted-foreground">
                  We anticipate issues before they become problems, protecting 
                  your investment through preventive measures and swift action.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Performance Optimization</h3>
                <p className="text-muted-foreground">
                  Strategic management focused on maximizing occupancy rates, 
                  rental income, and long-term property value appreciation.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Tenant Satisfaction</h3>
                <p className="text-muted-foreground">
                  Happy tenants mean stable income. We maintain positive 
                  relationships that reduce turnover and vacancy periods.
                </p>
              </div>
            </div>
          </section>

          {/* Management Programs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Management Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Full-Service Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete property management solution covering all aspects from 
                    tenant management to maintenance coordination and financial reporting.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Complete tenant lifecycle management</li>
                    <li>• 24/7 emergency response coordination</li>
                    <li>• Monthly owner reporting and communication</li>
                    <li>• Annual property inspections and assessments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Consulting Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Strategic consulting for property owners who prefer hands-on involvement 
                    but need expert guidance on specific aspects of property management.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Market analysis and pricing strategies</li>
                    <li>• Lease review and tenant screening support</li>
                    <li>• Property improvement recommendations</li>
                    <li>• Financial planning and investment analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Maximize Your Property Investment
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let our experienced property management team handle the day-to-day operations 
              while you enjoy the benefits of property ownership without the stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-contact-property-management"
              >
                Get Management Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-consultation-property-management"
              >
                Schedule Consultation
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