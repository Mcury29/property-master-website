import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Shield, Clock, Settings, CheckCircle, Zap, Award, Gauge } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '@/hooks/useScrollAnimation';
import ContactModal from '@/components/ContactModal';
import maintenanceImage1 from '@assets/stock_images/aerial_platform_lift_4393ff4b.jpg';
import maintenanceImage2 from '@assets/stock_images/electrician_electric_e3402298.jpg';

export default function Maintenance() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation();
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation();
  const { ref: whyChooseRef, isInView: whyChooseInView } = useScrollAnimation();
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation();

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-slate-900 text-white py-16">
          <motion.div 
            ref={heroRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div className="flex items-center gap-4 mb-6" variants={fadeInLeft}>
              <div className="bg-primary p-3 rounded-lg">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Professional Maintenance Services</h1>
            </motion.div>
            <motion.p className="text-xl text-slate-300 max-w-3xl mb-8" variants={fadeInLeft}>
              We keep buildings performing at their best through proactive and reliable care. 
              Our skilled maintenance team handles everything from routine upkeep to emergency repairs, 
              ensuring your property operates smoothly and maintains its value year-round.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInLeft}>
              <Button 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-get-started-maintenance"
              >
                Schedule Service
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                data-testid="button-emergency-maintenance"
              >
                24/7 Emergency Service
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <motion.section 
          ref={imageRef}
          className="py-16 bg-slate-50"
          variants={fadeInUp}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={maintenanceImage1}
                  alt="Aerial Platform Lift Maintenance Services"
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={maintenanceImage2}
                  alt="Professional Electrician and Electrical Maintenance"
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Key Services */}
          <motion.section 
            ref={servicesRef}
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeInUp}>
              Comprehensive Building Maintenance Services
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground mb-8 max-w-3xl" variants={fadeInUp}>
              From critical building systems to aesthetic improvements, our certified technicians 
              ensure your commercial property operates efficiently and maintains its professional appearance.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={scaleIn}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 text-primary mr-3" />
                      Critical Building Systems
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Expert maintenance of essential building systems that keep your property 
                      operational, comfortable, and safe for tenants and visitors.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>HVAC preventative maintenance and emergency repairs</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Plumbing systems, fixtures, and emergency leak repairs</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Electrical maintenance, lighting, and safety systems</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Fire safety, security systems, and code compliance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wrench className="w-5 h-5 text-primary mr-3" />
                      Property Improvements & Aesthetics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Professional improvement services that maintain and enhance your property's 
                      appearance, helping attract quality tenants and preserve asset value.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Interior and exterior painting and finishing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Professional signage installation and maintenance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Tenant improvements and custom buildouts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Window washing and comprehensive exterior cleaning</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* Service Approach */}
          <motion.section 
            ref={whyChooseRef}
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
          >
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeInUp}>
              Our Proven Maintenance Approach
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground mb-8 max-w-3xl" variants={fadeInUp}>
              We combine proactive maintenance with rapid emergency response to keep your property 
              operating at peak performance while minimizing unexpected costs and disruptions.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Preventative Excellence</h3>
                <p className="text-muted-foreground">
                  Systematic maintenance schedules and detailed inspections prevent problems 
                  before they become costly emergency repairs, saving you thousands annually.
                </p>
              </motion.div>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">24/7 Emergency Response</h3>
                <p className="text-muted-foreground">
                  Rapid response to urgent maintenance issues minimizes downtime and tenant 
                  disruption while protecting your property investment and reputation.
                </p>
              </motion.div>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Certified Professionals</h3>
                <p className="text-muted-foreground">
                  Licensed, insured, and experienced technicians who understand commercial 
                  building systems, safety regulations, and industry best practices.
                </p>
              </motion.div>
            </div>
          </motion.section>

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
          <motion.section 
            ref={ctaRef}
            className="bg-muted p-8 rounded-lg text-center"
            variants={staggerContainer}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 className="text-2xl font-bold text-foreground mb-4" variants={fadeInUp}>
              Keep Your Property in Peak Condition
            </motion.h2>
            <motion.p className="text-muted-foreground mb-6 max-w-2xl mx-auto" variants={fadeInUp}>
              Don't wait for problems to develop. Our proactive maintenance approach saves you money, 
              keeps your tenants satisfied, and protects your investment. Get a customized maintenance 
              plan tailored to your property's specific needs.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={scaleIn}>
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
            </motion.div>
          </motion.section>
        </div>
      </div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
    </>
  );
}