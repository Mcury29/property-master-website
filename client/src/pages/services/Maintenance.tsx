import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Shield, Clock, Settings, CheckCircle } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

export default function Maintenance() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary p-3 rounded-lg">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Maintenance Services</h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl">
              We keep buildings performing at their best through proactive and reliable care. 
              Our skilled maintenance team handles everything from routine upkeep to emergency repairs, 
              ensuring your property operates smoothly and maintains its value.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Key Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Maintenance Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="w-5 h-5 text-primary mr-3" />
                    Building Systems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>HVAC quarterly preventative maintenance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Plumbing repairs and installations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Electrical maintenance and troubleshooting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fire safety and security system maintenance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="w-5 h-5 text-primary mr-3" />
                    Building Improvements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Interior and exterior painting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Signage installation and maintenance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Tenant improvements and buildouts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Window washing and exterior cleaning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Service Approach */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Maintenance Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Preventative Care</h3>
                <p className="text-muted-foreground">
                  Regular maintenance schedules and inspections to prevent problems 
                  before they become costly repairs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">24/7 Emergency Response</h3>
                <p className="text-muted-foreground">
                  Quick response to urgent maintenance issues to minimize 
                  downtime and protect your property investment.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Skilled Technicians</h3>
                <p className="text-muted-foreground">
                  Licensed and experienced professionals who understand 
                  commercial building systems and requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Maintenance Programs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Maintenance Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive maintenance programs tailored to your property's needs, 
                    including regular inspections, system checks, and preventative care.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Quarterly HVAC system maintenance</li>
                    <li>• Monthly building inspections</li>
                    <li>• Seasonal preparation and winterization</li>
                    <li>• Annual system performance reviews</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Round-the-clock emergency response for urgent repairs and system failures 
                    that could impact tenant comfort or property safety.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 24/7 emergency hotline</li>
                    <li>• Priority response for critical issues</li>
                    <li>• Temporary solutions and permanent repairs</li>
                    <li>• Coordination with emergency services when needed</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Keep Your Property in Peak Condition
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't wait for problems to develop. Our proactive maintenance approach saves you money 
              and keeps your tenants happy. Contact us to discuss a maintenance plan for your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-contact-maintenance"
              >
                Get Maintenance Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-emergency-maintenance"
              >
                24/7 Emergency Line
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