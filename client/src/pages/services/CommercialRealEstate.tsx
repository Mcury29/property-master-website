import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Users, FileText, CheckCircle, Clock, Award, Target, DollarSign, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '@/hooks/useScrollAnimation';
import { useLocation } from 'wouter';
import ContactModal from '@/components/ContactModal';
import commercialRealEstateImage1 from '@assets/stock_images/modern_commercial_re_ed738e09.jpg';
import commercialRealEstateImage2 from '@assets/stock_images/modern_commercial_re_763fba34.jpg';

export default function CommercialRealEstate() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation();
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation();
  const { ref: whyChooseRef, isInView: whyChooseInView } = useScrollAnimation();
  const { ref: processRef, isInView: processInView } = useScrollAnimation();
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
                <Building className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Commercial Property Management</h1>
            </motion.div>
            <motion.p className="text-xl text-slate-300 max-w-3xl mb-8" variants={fadeInLeft}>
              Our commercial property management division provides comprehensive asset management services for 
              commercial property owners across Edmonton and surrounding area. With over 25 years of operational 
              expertise, we maximize your investment returns while minimizing management burdens.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInLeft}>
              <Button 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-get-started-cre"
              >
                Optimize Your Property
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-view-properties-cre"
              >
                Schedule Assessment
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
                  src={commercialRealEstateImage1}
                  alt="Modern Commercial Office Building"
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={commercialRealEstateImage2}
                  alt="Professional Commercial Real Estate Space"
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
              Professional Property Management Solutions
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground mb-8 max-w-3xl" variants={fadeInUp}>
              From tenant relations to financial oversight, we provide comprehensive property management solutions 
              that maximize asset performance and deliver superior returns on your commercial real estate investments.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={scaleIn}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 text-primary mr-3" />
                      Tenant Relations & Leasing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Expert management of tenant relationships, lease administration, and occupancy optimization 
                      to ensure maximum rental income and tenant satisfaction.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Comprehensive tenant screening and placement</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Lease administration and renewal management</span>
                      </li>
                      <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Professional tenant communication and issue resolution</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Vacancy marketing and strategic positioning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="w-5 h-5 text-primary mr-3" />
                    Financial Management & Reporting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Transparent financial oversight with detailed reporting and strategic recommendations 
                    to maximize your property's investment performance.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Monthly financial statements and cash flow analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Operating expense management and optimization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Rent collection and accounts receivable management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Budget preparation and capital expenditure planning</span>
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
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeInUp}>
              Why Choose Our Property Management Team
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground mb-8 max-w-3xl" variants={fadeInUp}>
              With over two decades of experience in Alberta's commercial property management, we deliver 
              professional oversight that maximizes asset value and minimizes owner involvement.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Local Market Authority</h3>
                <p className="text-muted-foreground">
                  Unmatched knowledge of Edmonton and surrounding area commercial markets, including 
                  traffic patterns, zoning regulations, and emerging growth corridors.
                </p>
              </motion.div>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">End-to-End Support</h3>
                <p className="text-muted-foreground">
                  From initial site selection to lease negotiation and occupancy, our dedicated team 
                  provides comprehensive support throughout your entire journey.
                </p>
              </motion.div>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Premium Properties</h3>
                <p className="text-muted-foreground">
                  Exclusively professional, well-maintained spaces that enhance your business image 
                  and provide the perfect environment for growth and success.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Process Section */}
          <motion.section 
            ref={processRef}
            className="mb-16 bg-slate-100 p-8 rounded-lg border border-slate-200"
            variants={staggerContainer}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
          >
            <motion.h2 className="text-3xl font-bold text-slate-900 mb-4" variants={fadeInUp}>
              Our Proven Process
            </motion.h2>
            <motion.p className="text-lg text-slate-600 mb-8" variants={fadeInUp}>
              We've streamlined our approach to make finding your perfect commercial space 
              as efficient and stress-free as possible.
            </motion.p>
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Consultation</h4>
                <p className="text-sm text-slate-600">Understanding your specific needs, budget, and timeline</p>
              </motion.div>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Site Selection</h4>
                <p className="text-sm text-slate-600">Curated property options that match your criteria</p>
              </motion.div>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Negotiation</h4>
                <p className="text-sm text-slate-600">Securing favorable lease terms and conditions</p>
              </motion.div>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">4</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Move-In</h4>
                <p className="text-sm text-slate-600">Smooth transition into your new commercial space</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section 
            ref={ctaRef}
            className="bg-muted p-8 rounded-lg text-center"
            variants={staggerContainer}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 className="text-2xl font-bold text-foreground mb-4" variants={fadeInUp}>
              Ready to Find Your Perfect Commercial Space?
            </motion.h2>
            <motion.p className="text-muted-foreground mb-6 max-w-2xl mx-auto" variants={fadeInUp}>
              Let our experienced team help you find the ideal location for your business. 
              With over 25 years of local market expertise, we'll work with you to understand your needs 
              and find spaces that fit your budget and strategic goals.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={scaleIn}>
              <Button 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-contact-real-estate"
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-schedule-real-estate"
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