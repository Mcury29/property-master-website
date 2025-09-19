import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Wrench, Trees, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const services = [
  {
    icon: Building,
    title: 'Commercial Real Estate Management',
    description: 'Our commercial real estate team connects businesses with professional, well-maintained spaces across Edmonton and Sherwood Park.',
    features: [
      'Office, retail, and mixed-use leasing opportunities',
      'Local market expertise for smarter decisions',
      'Professional property marketing and showcasing',
      'Guidance through the full leasing process'
    ],
    url: '/services/commercial-real-estate'
  },
  {
    icon: Wrench,
    title: 'Maintenance Services',
    description: 'We keep buildings performing at their best through proactive and reliable care.',
    features: [
      'Painting, signage, and tenant improvements',
      'Interior and exterior repair solutions',
      'Plumbing & quarterly HVAC preventative maintenance',
      'Window washing and ongoing building upkeep'
    ],
    url: '/services/maintenance'
  },
  {
    icon: Trees,
    title: 'Grounds Keeping',
    description: 'Our grounds division ensures properties are safe, sharp, and welcoming throughout the year.',
    features: [
      'Turf care and seasonal landscaping',
      'Snow removal and ice control',
      'Parking lot clearing and upkeep',
      'Site detailing and litter management'
    ],
    url: '/services/grounds'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With more than 25 years in commercial real estate, maintenance, and grounds keeping, 
            we've developed a reputation for reliability, quality, and community connection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full group" data-testid={`button-learn-more-${index}`}>
                    <Link href={service.url}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" data-testid="button-view-all-services">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}