import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, MapPin, Users, TrendingUp, ShoppingBag, Briefcase, Home, Phone, FileText } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { Property } from '@shared/schema';
import { motion } from 'motion/react';
import { useScrollAnimation, fadeInUp, staggerContainer, scaleIn, fadeInLeft } from '@/hooks/useScrollAnimation';

// Calculate portfolio stats from real property data
const calculatePortfolioStats = (properties: Property[]) => {
  const totalSF = properties.reduce((sum, prop) => sum + prop.totalSF, 0);
  const occupiedSF = properties.reduce((sum, prop) => sum + prop.occupiedSF, 0);
  const vacantSF = properties.reduce((sum, prop) => sum + prop.vacantSF, 0);
  const occupancyRate = totalSF > 0 ? parseFloat(((occupiedSF / totalSF) * 100).toFixed(1)) : 0;
  
  return { totalSF, occupiedSF, vacantSF, occupancyRate };
};

// Categorize properties by type
const categorizeProperties = (properties: Property[]) => {
  const retail = properties.filter(p => p.propertyType === 'retail');
  const office = properties.filter(p => p.propertyType === 'office');
  const mixedUse = properties.filter(p => p.propertyType === 'mixed-use');
  
  return { retail, office, mixedUse };
};

// Property Category Component
const PropertyCategory = ({ title, properties, icon: Icon, count }: { 
  title: string; 
  properties: Property[]; 
  icon: any; 
  count: number;
}) => {
  const { ref, isInView } = useScrollAnimation();
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const getOccupancyRate = (occupied: number, total: number) => {
    return ((occupied / total) * 100).toFixed(1);
  };

  if (properties.length === 0) return null;

  return (
    <motion.div 
      ref={ref}
      className="mb-16"
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="flex items-center gap-3 mb-6" variants={fadeInLeft}>
        <div className="bg-primary/10 p-2 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{count} {count === 1 ? 'property' : 'properties'}</p>
        </div>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => {
          const occupancyRate = parseFloat(getOccupancyRate(property.occupiedSF, property.totalSF));
          return (
            <motion.div key={property.id} variants={scaleIn}>
              <Card className="hover-elevate transition-all duration-300" data-testid={`card-property-${property.id}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-foreground mb-2">
                      {property.name}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.address}
                    </div>
                  </div>
                  <Badge 
                    variant={occupancyRate === 100 ? 'default' : occupancyRate >= 90 ? 'secondary' : 'destructive'}
                    className="ml-2"
                    data-testid={`badge-occupancy-${property.id}`}
                  >
                    {occupancyRate}% Occupied
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total:</span>
                    <span className="font-semibold text-foreground" data-testid={`text-total-sf-${property.id}`}>
                      {formatNumber(property.totalSF)} sf
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Occupied:</span>
                    <span className="font-medium text-green-600" data-testid={`text-occupied-sf-${property.id}`}>
                      {formatNumber(property.occupiedSF)} sf
                    </span>
                  </div>
                  {property.vacantSF > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Available:</span>
                      <span className="font-medium text-yellow-600" data-testid={`text-vacant-sf-${property.id}`}>
                        {formatNumber(property.vacantSF)} sf
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Property Action Buttons */}
                <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group"
                    onClick={() => {
                      // Handle connect to realtor action
                      window.open(`mailto:reception@propertymasters.ca?subject=Inquiry about ${property.name}&body=Hi, I'm interested in learning more about the property at ${property.address}.`, '_blank');
                    }}
                    data-testid={`button-connect-realtor-${property.id}`}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Connect to Realtor
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group"
                    onClick={() => {
                      // Handle view site map action - for now, show a placeholder
                      alert(`Site map for ${property.name} - Feature coming soon!`);
                    }}
                    data-testid={`button-view-sitemap-${property.id}`}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Site Map
                  </Button>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default function PropertyPortfolio() {
  // Fetch properties from API
  const { data: properties = [], isLoading, isError } = useQuery<Property[]>({
    queryKey: ['/api/properties']
  });

  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation();

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const categorizedProperties = categorizeProperties(properties);

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            variants={fadeInUp}
          >
            Property <span className="text-primary">Portfolio</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
            variants={fadeInUp}
          >
            Our portfolio spans nearly half a million square feet of space across Alberta, 
            from professional offices to retail centres and mixed-use developments. 
            With an occupancy rate of over 94%, we offer proven stability and quality across every property we manage.
          </motion.p>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading portfolio data...</p>
          </div>
        )}
        
        {/* Error State */}
        {isError && (
          <div className="text-center py-12">
            <p className="text-red-500">Failed to load portfolio data. Please try again later.</p>
          </div>
        )}
        
        {/* Portfolio Stats */}
        {!isLoading && !isError && (
        <>
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          <motion.div variants={scaleIn}>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">
                  {formatNumber(calculatePortfolioStats(properties).totalSF)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Total Square Feet</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={scaleIn}>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">
                  {formatNumber(calculatePortfolioStats(properties).occupiedSF)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Occupied Sq Ft</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={scaleIn}>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">
                  {formatNumber(calculatePortfolioStats(properties).vacantSF)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Available Sq Ft</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={scaleIn}>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-500">
                  {calculatePortfolioStats(properties).occupancyRate}%
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Occupancy Rate</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Categorized Properties */}
        <PropertyCategory 
          title="Shopping Centers & Retail" 
          properties={categorizedProperties.retail}
          icon={ShoppingBag}
          count={categorizedProperties.retail.length}
        />
        
        <PropertyCategory 
          title="Professional & Office Buildings" 
          properties={categorizedProperties.office}
          icon={Briefcase}
          count={categorizedProperties.office.length}
        />
        
        <PropertyCategory 
          title="Mixed Use & Special Properties" 
          properties={categorizedProperties.mixedUse}
          icon={Home}
          count={categorizedProperties.mixedUse.length}
        />
        
        {/* Empty state for no properties */}
        {properties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No properties available at this time.</p>
          </div>
        )}
        </>
        )}
      </div>
    </section>
  );
}