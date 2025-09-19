import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { motion, useScroll, useTransform } from 'motion/react';
import { useScrollAnimation, fadeInUp, fadeInLeft, staggerContainer } from '@/hooks/useScrollAnimation';
import heroImage from '@assets/IMG_0033_1758250313114.jpeg';
import ContactModal from '@/components/ContactModal';

export default function HeroSection() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const { ref: contentRef, isInView } = useScrollAnimation();

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <img 
            src={heroImage} 
            alt="Commercial Property" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60" />
        </motion.div>
        
        {/* Content */}
        <motion.div 
          ref={contentRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                variants={fadeInUp}
              >
                Complete Solutions
                <br />
                for <span className="text-primary">Your Properties</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
                variants={fadeInUp}
              >
                Property Masters Group of Companies provides complete solutions in commercial property management, 
                grounds maintenance, and building maintenance. We protect, enhance, and grow property value with 
                seamless, reliable service.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8" 
                  onClick={() => setContactModalOpen(true)}
                  data-testid="button-contact-us"
                >
                  Contact Us
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-background/10 backdrop-blur-sm border-white/20" data-testid="button-view-properties">
                  <Link href="/properties">View Properties</Link>
                </Button>
              </motion.div>
              
              <motion.div 
                className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <div className="text-2xl md:text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <div className="text-2xl md:text-3xl font-bold text-primary">94.2%</div>
                  <div className="text-sm text-muted-foreground mt-1">Occupancy Rate</div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <div className="text-2xl md:text-3xl font-bold text-primary">489K+</div>
                  <div className="text-sm text-muted-foreground mt-1">Sq Ft Managed</div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Right Column - Additional Content/Space for Image */}
            <div className="lg:block hidden">
              {/* This space allows the background image to show through more on larger screens */}
            </div>
          </div>
        </motion.div>
      </div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
    </>
  );
}