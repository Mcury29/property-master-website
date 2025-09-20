import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Users, TrendingUp, Shield, CheckCircle, Clock, Award, DollarSign, MapPin, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '@/hooks/useScrollAnimation';
import ContactModal from '@/components/ContactModal';
import commercialRealEstateImage1 from '@assets/stock_images/modern_commercial_re_ed738e09.jpg';
import commercialRealEstateImage2 from '@assets/stock_images/modern_commercial_re_763fba34.jpg';

export default function PropertyManagement() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation();
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation();
  const { ref: whyChooseRef, isInView: whyChooseInView } = useScrollAnimation();
  const { ref: processRef, isInView: processInView } = useScrollAnimation();
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation();
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation();

  return (
    <>
      <div className="min-h-screen bg-slate-900">
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
                <Building className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Property Management</h1>
            </motion.div>
            <motion.p className="text-xl text-slate-300 max-w-3xl mb-8" variants={fadeInLeft}>
              Comprehensive property management services that maximize your investment returns while 
              minimizing your day-to-day responsibilities. From commercial real estate to residential properties, 
              we handle everything with over 25 years of operational expertise across Edmonton and surrounding area.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInLeft}>
              <Button 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-get-started-pm"
              >
                Maximize Your Returns
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-learn-more-pm"
              >
                Schedule Assessment
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <motion.section 
          ref={imageRef}
          className="py-16 bg-slate-800"
          variants={fadeInUp}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={commercialRealEstateImage1}
                  alt="Modern Commercial Property Management"
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={commercialRealEstateImage2}
                  alt="Professional Property Management Services"
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
            <motion.h2 className="text-3xl font-bold text-white mb-4" variants={fadeInUp}>
              Comprehensive Property Management Solutions
            </motion.h2>
            <motion.p className="text-lg text-slate-300 mb-8 max-w-3xl" variants={fadeInUp}>
              From commercial real estate to residential properties, we provide end-to-end property management 
              solutions that maximize asset performance and deliver superior returns on your investments.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={scaleIn}>
                <Card className="h-full bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <Users className="w-5 h-5 text-primary mr-3" />
                      Tenant Relations & Leasing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Professional tenant management that maintains high occupancy rates while 
                      ensuring quality tenants who protect and respect your property investment.
                    </p>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Comprehensive tenant screening and credit verification</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Professional lease administration and renewals</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Automated rent collection and payment processing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>24/7 tenant communications and issue resolution</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="h-full bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <DollarSign className="w-5 h-5 text-primary mr-3" />
                      Financial Management & Reporting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Transparent financial management with detailed reporting that keeps you informed 
                      about your property's performance and profitability.
                    </p>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Monthly financial statements and cash flow analysis</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Strategic budget planning and expense optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Market analysis and competitive rent positioning</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Tax preparation support and year-end documentation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* Why Choose Us */}
          <motion.section 
            ref={whyChooseRef}
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
          >
            <motion.h2 className="text-3xl font-bold text-white mb-4" variants={fadeInUp}>
              Why Choose Our Property Management Team
            </motion.h2>
            <motion.p className="text-lg text-slate-300 mb-8 max-w-3xl" variants={fadeInUp}>
              With over two decades of experience in Alberta's property management market, we deliver 
              professional oversight that maximizes asset value and minimizes owner involvement.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Local Market Authority</h3>
                <p className="text-slate-300">
                  Unmatched knowledge of Edmonton and surrounding area markets, including 
                  traffic patterns, zoning regulations, and emerging growth corridors.
                </p>
              </motion.div>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proactive Asset Protection</h3>
                <p className="text-slate-300">
                  We anticipate issues before they become costly problems, protecting 
                  your investment through preventive measures, regular inspections, and swift action.
                </p>
              </motion.div>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Revenue Optimization</h3>
                <p className="text-slate-300">
                  Strategic management focused on maximizing occupancy rates, optimizing rental income, 
                  and driving long-term property value appreciation through smart improvements.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Our Process */}
          <motion.section 
            ref={processRef}
            className="mb-16 bg-slate-800 p-8 rounded-lg border border-slate-700"
            variants={staggerContainer}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
          >
            <motion.h2 className="text-3xl font-bold text-white mb-4" variants={fadeInUp}>
              Our Proven Management Process
            </motion.h2>
            <motion.p className="text-lg text-slate-300 mb-8" variants={fadeInUp}>
              We've streamlined our approach to make property management as efficient and 
              profitable as possible for owners.
            </motion.p>
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Assessment</h4>
                <p className="text-sm text-slate-300">Comprehensive property evaluation and market analysis</p>
              </motion.div>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Strategy</h4>
                <p className="text-sm text-slate-300">Custom management plan tailored to your goals</p>
              </motion.div>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Implementation</h4>
                <p className="text-sm text-slate-300">Execute management plan with ongoing optimization</p>
              </motion.div>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">4</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Results</h4>
                <p className="text-sm text-slate-300">Regular reporting and continuous performance improvement</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Management Programs */}
          <motion.section 
            ref={programsRef}
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <motion.h2 className="text-3xl font-bold text-white mb-8" variants={fadeInUp}>
              Management Programs
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={scaleIn}>
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Full-Service Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Complete property management solution covering all aspects from 
                      tenant management to maintenance coordination and financial reporting.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Complete tenant lifecycle management</li>
                      <li>• 24/7 emergency response coordination</li>
                      <li>• Monthly owner reporting and communication</li>
                      <li>• Annual property inspections and assessments</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Consulting Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Strategic consulting for property owners who prefer hands-on involvement 
                      but need expert guidance on specific aspects of property management.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Market analysis and pricing strategies</li>
                      <li>• Lease review and tenant screening support</li>
                      <li>• Property improvement recommendations</li>
                      <li>• Financial planning and investment analysis</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section 
            ref={ctaRef}
            className="bg-slate-800 p-8 rounded-lg text-center border border-slate-700"
            variants={staggerContainer}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 className="text-2xl font-bold text-white mb-4" variants={fadeInUp}>
              Ready to Maximize Your Property Investment Returns?
            </motion.h2>
            <motion.p className="text-slate-300 mb-6 max-w-2xl mx-auto" variants={fadeInUp}>
              Let our experienced property management team handle the day-to-day operations 
              while you enjoy the benefits of property ownership without the stress. Start earning 
              more from your investment properties today.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={scaleIn}>
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
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-consultation-property-management"
              >
                Schedule Consultation
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