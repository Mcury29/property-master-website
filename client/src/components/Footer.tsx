import { Link } from 'wouter';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/E282EEC4-B02B-4D23-B1FB-FF01F386B9D2_1758250152212.png';

const footerSections = {
  services: [
    { title: 'Commercial Real Estate', url: '/services/commercial-real-estate' },
    { title: 'Maintenance Services', url: '/services/maintenance' },
    { title: 'Grounds Keeping', url: '/services/grounds' },
    { title: 'Property Management', url: '/services/property-management' }
  ],
  properties: [
    { title: 'Office & Professional', url: '/properties/office' },
    { title: 'Strip Centres', url: '/properties/strip-centres' },
    { title: 'Residential & Mixed-Use', url: '/properties/residential' },
    { title: 'Portfolio Overview', url: '/properties' }
  ],
  company: [
    { title: 'About Us', url: '/about' },
    { title: 'Our Divisions', url: '/divisions' },
    { title: 'Contact Us', url: '/contact' },
    { title: 'Privacy Policy', url: '/privacy' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 hover-elevate rounded-md px-2 py-1 w-fit" data-testid="link-footer-home">
              <img src={logoImage} alt="Property Masters Logo" className="h-10 w-10 object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground">Property Masters</span>
                <span className="text-xs text-muted-foreground">Group of Companies</span>
              </div>
            </Link>
            
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              For over 25 years, Property Masters Group has been the trusted partner for property owners 
              across Edmonton and Sherwood Park, providing integrated solutions for commercial real estate, 
              maintenance, and grounds care.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">152 Sioux Road, Sherwood Park, AB</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">780-464-1518</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">information@propertymasters.ca</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-3">
              {footerSections.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover-elevate rounded px-1 py-0.5"
                    data-testid={`link-footer-service-${index}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Properties */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Properties</h3>
            <ul className="space-y-3">
              {footerSections.properties.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover-elevate rounded px-1 py-0.5"
                    data-testid={`link-footer-property-${index}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3 mb-6">
              {footerSections.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover-elevate rounded px-1 py-0.5"
                    data-testid={`link-footer-company-${index}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3">
              <Button className="w-full" size="sm" data-testid="button-footer-quote">
                Get a Quote
              </Button>
              <Button variant="outline" className="w-full" size="sm" data-testid="button-footer-schedule">
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Property Masters Group of Companies. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            "We treat your properties like our homes."
          </div>
        </div>
      </div>
    </footer>
  );
}