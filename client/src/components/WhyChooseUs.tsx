import { useState } from 'react';
import { Shield, Users, Award, MapPin, Building, Calendar, CheckCircle, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { useScrollAnimation, fadeInUp, staggerContainer, scaleIn } from '@/hooks/useScrollAnimation';

interface FeatureDetails {
  subtitle: string;
  content: string;
  highlights: string[];
}

interface Feature {
  icon: any;
  title: string;
  description: string;
  details: FeatureDetails;
}

export default function WhyChooseUs() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation();
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  
  const features = [
    {
      icon: Shield,
      title: 'Locally Owned & Operated',
      description: 'Deep understanding of Alberta\'s commercial property landscape and local market conditions.',
      details: {
        subtitle: 'Rooted in Alberta for Over 25 Years',
        content: 'As a family-owned business established in Alberta, we bring unmatched local knowledge and community commitment to every project.',
        highlights: [
          'Intimate knowledge of Edmonton and surrounding area markets',
          'Understanding of local regulations, zoning, and permit processes',
          'Established relationships with local contractors and suppliers',
          'Weather-specific maintenance and grounds keeping expertise',
          'Community-focused approach with local decision making'
        ]
      }
    },
    {
      icon: Users,
      title: 'Integrated Group of Companies',
      description: 'One-stop solutions across property management, grounds maintenance, and building care.',
      details: {
        subtitle: 'Complete Property Solutions Under One Roof',
        content: 'Our integrated approach eliminates the complexity of managing multiple vendors, providing seamless coordination across all property needs.',
        highlights: [
          'Single point of contact for all property services',
          'Coordinated scheduling reduces disruption to tenants',
          'Streamlined communication and reporting',
          'Cost efficiencies through integrated service delivery',
          'Consistent quality standards across all service divisions'
        ]
      }
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Established expertise in both commercial and residential property management with satisfied clients.',
      details: {
        subtitle: 'Excellence Demonstrated Through Results',
        content: 'Our decades of experience and consistently high client retention rates speak to our commitment to quality and reliability.',
        highlights: [
          'Over 450,000 square feet of commercial space managed',
          'High client retention and satisfaction rates',
          'Proven emergency response and crisis management',
          'Track record of maintaining property values and occupancy',
          'Long-term partnerships with major commercial property owners'
        ]
      }
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={fadeInUp}
          >
            Why Choose Property Masters
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-300 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            Our integrated approach and local expertise deliver exceptional results for property owners across Alberta.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={scaleIn}>
                <Card 
                  className="bg-slate-800/50 border-slate-700 text-center p-8 hover-elevate h-full cursor-pointer transition-all duration-300 hover:bg-slate-800/70"
                  onClick={() => setSelectedFeature(feature)}
                  data-testid={`card-feature-${index}`}
                >
                  <CardContent className="space-y-6">
                    <div className="mx-auto w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-4 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
                      data-testid={`button-learn-more-${index}`}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Feature Detail Modal */}
        {selectedFeature && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              className="bg-slate-900 border border-slate-700 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <selectedFeature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedFeature.title}</h3>
                    <p className="text-sm text-slate-300">{selectedFeature.details.subtitle}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedFeature(null)}
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                  data-testid="button-close-modal"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="p-6">
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {selectedFeature.details.content}
                </p>
                
                <h4 className="text-lg font-semibold text-white mb-4">Key Advantages</h4>
                <div className="space-y-3">
                  {selectedFeature.details.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-end">
                  <Button 
                    onClick={() => setSelectedFeature(null)}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white"
                    data-testid="button-close-modal-bottom"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}