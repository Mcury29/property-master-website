import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, Heart, Building } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '@/hooks/useScrollAnimation';
import ContactModal from '@/components/ContactModal';
import founderImage from '@assets/Gemini_Generated_Image_p5egtzp5egtzp5eg_1758291318582.png';

export default function Founder() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation();
  const { ref: storyRef, isInView: storyInView } = useScrollAnimation();
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation();

  // Set page metadata for SEO
  useEffect(() => {
    document.title = 'Our Founder – Denis LePage | Property Masters Group';
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Learn about Denis LePage, founder of Property Masters Group. A legacy of vision and integrity in commercial property management across Edmonton and surrounding area.');

    // Create or update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Our Founder – Denis LePage | Property Masters Group');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Learn about Denis LePage, founder of Property Masters Group. A legacy of vision and integrity in commercial property management.');

    return () => {
      // Reset title when component unmounts
      document.title = 'Property Masters Group';
    };
  }, []);

  const scrollToStory = () => {
    const storySection = document.getElementById('our-story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-slate-900 text-white py-16 lg:py-24">
          <motion.div 
            ref={heroRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <motion.div className="mb-6" variants={fadeInLeft}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Our Founder – Denis LePage
                  </h1>
                  <p className="text-lg text-slate-300 max-w-xl">
                    A Legacy of Vision and Integrity
                  </p>
                </motion.div>
                <motion.p 
                  className="text-lg text-slate-300 mb-8 max-w-xl"
                  variants={fadeInLeft}
                >
                  The foundation of our company was built by Denis LePage — a man who believed that 
                  true success in property management came not just from maintaining buildings, 
                  but from building trust. His vision, discipline, and unwavering commitment to quality 
                  created more than a business; he created a standard that still guides us today.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  variants={fadeInLeft}
                >
                  <Button 
                    size="lg"
                    onClick={() => setContactModalOpen(true)}
                    data-testid="button-contact-founder"
                  >
                    Contact Us
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={scrollToStory}
                    data-testid="button-his-story"
                  >
                    His Story
                  </Button>
                </motion.div>
              </div>

              {/* Founder Image */}
              <motion.div 
                className="order-1 lg:order-2 flex justify-center"
                variants={scaleIn}
              >
                <div className="relative">
                  <div className="w-80 lg:w-96 rounded-lg overflow-hidden border-4 border-primary/20" style={{ height: '480px' }}>
                    <img 
                      src={founderImage}
                      alt="Portrait of Denis LePage, Founder of Property Masters"
                      className="w-full h-full object-contain"
                      loading="eager"
                      data-testid="img-founder-portrait"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Legacy Highlights */}
          <section className="mb-16">
            <motion.h2 
              className="text-3xl font-bold text-foreground mb-8 text-center"
              variants={fadeInUp}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
            >
              His Vision, Our Foundation
            </motion.h2>
            <motion.div 
              ref={cardsRef}
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
            >
              <motion.div variants={scaleIn}>
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Excellence Never Compromised
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Denis believed that quality wasn't negotiable. Every project, every detail, 
                      every interaction reflected his unwavering commitment to doing things the right way, 
                      no matter how big or small the task.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Trust Through Transparency
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Denis built lasting relationships through honest communication and reliable follow-through. 
                      His approach was simple: say what you'll do, do what you say, and always keep the client's 
                      best interests at heart.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Personal Care, Professional Results
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Denis treated every property as if it were his own family's investment. This personal 
                      approach to property care created not just satisfied clients, but partnerships that 
                      lasted decades.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>

          {/* His Story Section */}
          <motion.section 
            id="our-story" 
            className="mb-16"
            ref={storyRef}
            variants={staggerContainer}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl font-bold text-foreground mb-8"
              variants={fadeInUp}
            >
              His Story
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div className="space-y-6" variants={fadeInLeft}>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Building From the Ground Up
                </h3>
                <p className="text-muted-foreground">
                  Denis began with a simple idea: do the work right, do it with integrity, and the results will follow. 
                  What started with small projects grew into a respected company trusted by commercial investors, tenants, and 
                  contractors alike. His hands-on approach and attention to detail set a precedent that continues 
                  to define how we operate.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  Shaping the Company's Core
                </h3>
                <p className="text-muted-foreground">
                  Under Denis' leadership, the company expanded beyond its early beginnings, earning a reputation 
                  for reliability and care. He instilled values that became the backbone of our business: 
                  accountability, respect, responsiveness, and a commitment to long-term relationships.
                </p>
                <p className="text-muted-foreground">
                  These weren't just business strategies — they were Denis' personal principles, woven into the DNA of the company.
                </p>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeInRight}>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  His Enduring Philosophy
                </h3>
                <p className="text-muted-foreground">
                  For Denis, property management was about responsibility — to clients, to tenants, to the community, 
                  and to the people working alongside him. His belief that "you treat every property as if it were your own" 
                  remains the gold standard we uphold.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  A Lasting Impact
                </h3>
                <p className="text-muted-foreground">
                  Denis was more than a founder; he was a mentor, a leader, and an inspiration. His vision lives on 
                  in the systems, values, and culture that continue to drive the company forward.
                </p>
                <p className="text-muted-foreground">
                  Every success we achieve today stands on the foundation he built. Denis' legacy is not only the properties managed, 
                  or the projects completed, but the trust and reputation he established — a legacy that endures and grows with each passing year.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Family Legacy Continues
                </h3>
                <p className="text-muted-foreground">
                  Our company is proud to be family owned and operated, carrying forward the vision and values built by our founder, Denis LePage. 
                  Today, the business is in the trusted hands of his wife, Carolyn LePage, along with their two daughters, Renée LePage and Nicole Beaudoin. 
                  Together, they are dedicated to honoring Denis's legacy while continuing to provide the same level of trust, care, and commitment that 
                  has always defined our work.
                </p>
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
            <motion.h2 
              className="text-2xl font-bold text-foreground mb-4"
              variants={fadeInUp}
            >
              Continue the Legacy with Property Masters
            </motion.h2>
            <motion.p 
              className="text-muted-foreground mb-6 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Built on Denis LePage's foundation of integrity, quality, and trust, we continue to serve 
              the Edmonton and surrounding area communities with the same dedication that started it all.
            </motion.p>
            <motion.div variants={scaleIn}>
              <Button 
                size="lg"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-work-with-us"
              >
                Work With Us Today
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