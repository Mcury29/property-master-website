import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import heroImage from '@assets/IMG_0033_1758250313114.jpeg';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Commercial Property" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Complete Solutions
              <br />
              for <span className="text-primary">Your Properties</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Property Masters Group of Companies provides complete solutions in commercial property management, 
              grounds maintenance, and building maintenance. We protect, enhance, and grow property value with 
              seamless, reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8" data-testid="button-contact-us">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-background/10 backdrop-blur-sm border-white/20" data-testid="button-view-properties">
                <Link href="/properties">View Properties</Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">94.2%</div>
                <div className="text-sm text-muted-foreground mt-1">Occupancy Rate</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">489K+</div>
                <div className="text-sm text-muted-foreground mt-1">Sq Ft Managed</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Additional Content/Space for Image */}
          <div className="lg:block hidden">
            {/* This space allows the background image to show through more on larger screens */}
          </div>
        </div>
      </div>
    </div>
  );
}