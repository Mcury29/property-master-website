import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Building2 } from 'lucide-react';

const navigationItems = [
  { title: 'Home', url: '/' },
  { title: 'Our Services', url: '/services' },
  { title: 'Properties', url: '/properties' },
  { title: 'About Us', url: '/about' },
  { title: 'Contact Us', url: '/contact' }
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover-elevate rounded-md px-2 py-1" data-testid="link-home">
            <Building2 className="h-8 w-8 text-primary" />
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
            <Button data-testid="button-request-quote">Request a Quote</Button>
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
              <Button className="w-full" data-testid="button-mobile-request-quote">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}