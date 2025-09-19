import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, ChevronDown, Building2, Wrench, Trees } from 'lucide-react';
import logoImage from '@assets/E282EEC4-B02B-4D23-B1FB-FF01F386B9D2_1758250152212.png';
import ContactModal from '@/components/ContactModal';

const navigationItems = [
  { title: 'Home', url: '/' },
  { title: 'Founders', url: '/founders' },
  { 
    title: 'Our Divisions', 
    url: '/services',
    hasDropdown: true,
    divisions: [
      { title: 'Realty/Property Management', key: 'realty', icon: Building2, url: '/services/commercial-real-estate' },
      { title: 'Maintenance', key: 'maintenance', icon: Wrench, url: '/services/maintenance' },
      { title: 'Grounds', key: 'grounds', icon: Trees, url: '/services/grounds' }
    ]
  },
  { title: 'Properties', url: '/properties' }
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 hover-elevate rounded-md px-2 py-1" data-testid="link-home">
              <img src={logoImage} alt="Property Masters Logo" className="h-10 w-10 object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground">Property Masters</span>
                <span className="text-xs text-muted-foreground">Group of Companies</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => {
                  const isActive = location === item.url;
                  
                  if (item.hasDropdown) {
                    return (
                      <DropdownMenu key={item.title}>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover-elevate ${
                              isActive 
                                ? 'text-primary bg-primary/10' 
                                : 'text-foreground hover:text-primary'
                            }`}
                            data-testid={`button-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {item.title}
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-56">
                          {item.divisions?.map((division) => {
                            const IconComponent = division.icon;
                            return (
                              <DropdownMenuItem key={division.key} asChild>
                                <Link
                                  href={division.url}
                                  className="flex items-center cursor-pointer"
                                  data-testid={`menu-item-${division.key}`}
                                >
                                  <IconComponent className="w-4 h-4 mr-2 text-primary" />
                                  {division.title}
                                </Link>
                              </DropdownMenuItem>
                            );
                          })}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    );
                  }

                  return (
                    <Link
                      key={item.title}
                      href={item.url}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover-elevate ${
                        isActive 
                          ? 'text-primary bg-primary/10' 
                          : 'text-foreground hover:text-primary'
                      }`}
                      data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="hidden md:block">
              <Button 
                onClick={() => setContactModalOpen(true)}
                data-testid="button-contact-us"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const isActive = location === item.url;
                
                if (item.hasDropdown) {
                  return (
                    <div key={item.title}>
                      <Link
                        href={item.url}
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover-elevate ${
                          isActive 
                            ? 'text-primary bg-primary/10' 
                            : 'text-foreground hover:text-primary'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`link-mobile-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.title}
                      </Link>
                      <div className="ml-4 space-y-1">
                        {item.divisions?.map((division) => {
                          const IconComponent = division.icon;
                          return (
                            <Link
                              key={division.key}
                              href={division.url}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center w-full px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-primary hover-elevate transition-colors"
                              data-testid={`link-mobile-${division.key}`}
                            >
                              <IconComponent className="w-4 h-4 mr-2" />
                              {division.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover-elevate ${
                      isActive 
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.title}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Button 
                  className="w-full" 
                  onClick={() => {
                    setContactModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  data-testid="button-mobile-contact-us"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
    </>
  );
}