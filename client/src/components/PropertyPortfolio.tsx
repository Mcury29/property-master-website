import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Building, MapPin, Users, TrendingUp, ShoppingBag, Briefcase, Home, Phone, FileText, X } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { Property } from '@shared/schema';
import { motion } from 'motion/react';
import { useScrollAnimation, fadeInUp, staggerContainer, scaleIn, fadeInLeft } from '@/hooks/useScrollAnimation';

// Site map images will be imported here as they are provided
import argyllShoppingSiteMap from '@assets/IMG_9605_1758413681982.jpeg';
import brentwoodBuildingSiteMap from '@assets/IMG_9606_1758413808793.jpeg';
import broadmoorBaselineSiteMap from '@assets/IMG_9607_1758413949907.jpeg';
import castledownsShoppingSiteMap from '@assets/IMG_9608_1758414081820.jpeg';
import centre34SiteMap from '@assets/IMG_9609_1758414163649.jpeg';
import hansProfessionalSiteMap from '@assets/IMG_9610_1758414236364.jpeg';
import hintonLandSiteMap from '@assets/IMG_9611_1758414360649.jpeg';
import millwoodsMainstreetSiteMap from '@assets/IMG_9612_1758414508315.jpeg';
import natashaManorSiteMap from '@assets/IMG_9613_1758414622895.jpeg';
import plaza127WarehouseSiteMap from '@assets/IMG_9614_1758414726907.jpeg';
import sherwoodParkPlazaSiteMap from '@assets/IMG_9615_1758414872723.jpeg';
import soperBuildingSiteMap from '@assets/IMG_9616_1758414977824.jpeg';
import wainwrightCrossingSiteMap from '@assets/IMG_9617_1758415057119.jpeg';
import winningtonBuildingSiteMap from '@assets/IMG_9618_1758415150170.jpeg';
import winningtonBuildingSiteMap2 from '@assets/IMG_9619_1758415297133.jpeg';
import woodbridgeGardensSiteMap from '@assets/IMG_9620_1758415461898.jpeg';

// Site map mapping based on property names - supports single image or array of images
const siteMapImages: Record<string, string | string[]> = {
  'Argyll Shopping Centre': argyllShoppingSiteMap,
  'Brentwood Building': brentwoodBuildingSiteMap,
  'Broadmoor Baseline Crossing': broadmoorBaselineSiteMap,
  'Castledowns Shopping Centre': castledownsShoppingSiteMap,
  'Centre 34': centre34SiteMap,
  'Hans Professional Centre': hansProfessionalSiteMap,
  'Hinton Land': hintonLandSiteMap,
  'Millwoods Mainstreet': millwoodsMainstreetSiteMap,
  'Natasha Manor': natashaManorSiteMap,
  'Plaza 127 & Warehouse 127': plaza127WarehouseSiteMap,
  'Sherwood Park Plaza': sherwoodParkPlazaSiteMap,
  'Soper Building': soperBuildingSiteMap,
  'Wainwright Crossing': wainwrightCrossingSiteMap,
  'Winnington Building': [winningtonBuildingSiteMap, winningtonBuildingSiteMap2],
  'Woodbridge Gardens': woodbridgeGardensSiteMap,
};

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

// Site Map Modal Component
const SiteMapModal = ({ isOpen, onClose, propertyName, siteMapUrl }: {
  isOpen: boolean;
  onClose: () => void;
  propertyName: string;
  siteMapUrl?: string | string[];
}) => {
  if (!siteMapUrl) return null;
  
  // Convert to array for consistent handling
  const imageUrls = Array.isArray(siteMapUrl) ? siteMapUrl : [siteMapUrl];
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-xl font-semibold text-foreground">
            {propertyName} - Site Map{imageUrls.length > 1 ? 's' : ''}
          </DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6">
          <div className="space-y-4">
            {imageUrls.map((url, index) => (
              <div key={index} className="relative bg-muted rounded-lg overflow-hidden">
                <img 
                  src={url} 
                  alt={`Site map ${imageUrls.length > 1 ? `${index + 1} ` : ''}for ${propertyName}`}
                  className="w-full h-auto max-h-[60vh] object-contain"
                  data-testid={`img-sitemap-${propertyName.toLowerCase().replace(/\s+/g, '-')}${imageUrls.length > 1 ? `-${index + 1}` : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Property Category Component
const PropertyCategory = ({ title, properties, icon: Icon, count, onSiteMapClick }: { 
  title: string; 
  properties: Property[]; 
  icon: any; 
  count: number;
  onSiteMapClick: (property: Property) => void;
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
                <div className="mt-4 pt-3 border-t border-border/50 flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`text-xs h-8 ${siteMapImages[property.name] ? 'flex-1' : 'w-full'}`}
                    onClick={() => {
                      // Handle connect to realtor action
                      window.open(`mailto:reception@propertymasters.ca?subject=Inquiry about ${property.name}&body=Hi, I'm interested in learning more about the property at ${property.address}.`, '_blank');
                    }}
                    data-testid={`button-connect-realtor-${property.id}`}
                  >
                    <Phone className="w-3 h-3 mr-1" />
                    Contact
                  </Button>
                  {siteMapImages[property.name] && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-xs h-8"
                      onClick={() => onSiteMapClick(property)}
                      data-testid={`button-view-sitemap-${property.id}`}
                    >
                      <FileText className="w-3 h-3 mr-1" />
                      Site Map
                    </Button>
                  )}
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
  // Site map modal state
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [siteMapModalOpen, setSiteMapModalOpen] = useState(false);

  // Fetch properties from API
  const { data: properties = [], isLoading, isError } = useQuery<Property[]>({
    queryKey: ['/api/properties']
  });

  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation();
  const { ref: propertiesRef, isInView: propertiesInView } = useScrollAnimation();

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const categorizedProperties = categorizeProperties(properties);

  const handleSiteMapClick = (property: Property) => {
    setSelectedProperty(property);
    setSiteMapModalOpen(true);
  };

  const handleCloseSiteMap = () => {
    setSiteMapModalOpen(false);
    setSelectedProperty(null);
  };

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
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
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

        {/* All Properties in Single Grid */}
        <div ref={propertiesRef} className="mb-16">
          <motion.div 
            className="flex items-center gap-3 mb-6" 
            variants={fadeInLeft}
            initial="hidden"
            animate={propertiesInView ? "visible" : "hidden"}
          >
            <div className="bg-primary/10 p-2 rounded-lg">
              <Building className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">All Properties</h3>
              <p className="text-muted-foreground">{properties.length} {properties.length === 1 ? 'property' : 'properties'}</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={propertiesInView ? "visible" : "hidden"}
          >
            {properties.map((property) => {
              const occupancyRate = parseFloat(((property.occupiedSF / property.totalSF) * 100).toFixed(1));
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
                        <div className="grid grid-cols-1 gap-4 text-sm">
                          <div className="flex flex-col">
                            <span className="text-muted-foreground">Property Type</span>
                            <span className="font-medium capitalize" data-testid={`text-type-${property.id}`}>
                              {property.propertyType}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 pt-2 border-t border-border/50">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Total Size:</span>
                            <span className="font-medium" data-testid={`text-total-sf-${property.id}`}>
                              {new Intl.NumberFormat().format(property.totalSF)} sf
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Occupied:</span>
                            <span className="font-medium text-green-600" data-testid={`text-occupied-sf-${property.id}`}>
                              {new Intl.NumberFormat().format(property.occupiedSF)} sf
                            </span>
                          </div>
                          {property.vacantSF > 0 && (
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Available:</span>
                              <span className="font-medium text-yellow-600" data-testid={`text-vacant-sf-${property.id}`}>
                                {new Intl.NumberFormat().format(property.vacantSF)} sf
                              </span>
                            </div>
                          )}
                        </div>
                        
                        {/* Property Action Buttons */}
                        <div className="mt-4 pt-3 border-t border-border/50 flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className={`text-xs h-8 ${siteMapImages[property.name] ? 'flex-1' : 'w-full'}`}
                            onClick={() => {
                              // Handle connect to realtor action
                              window.open(`mailto:reception@propertymasters.ca?subject=Inquiry about ${property.name}&body=Hi, I'm interested in learning more about the property at ${property.address}.`, '_blank');
                            }}
                            data-testid={`button-connect-realtor-${property.id}`}
                          >
                            <Phone className="w-3 h-3 mr-1" />
                            Contact
                          </Button>
                          {siteMapImages[property.name] && (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="flex-1 text-xs h-8"
                              onClick={() => handleSiteMapClick(property)}
                              data-testid={`button-view-sitemap-${property.id}`}
                            >
                              <FileText className="w-3 h-3 mr-1" />
                              Site Map
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
              })}
          </motion.div>
        </div>
        
        {/* Empty state for no properties */}
        {properties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No properties available at this time.</p>
          </div>
        )}
        </>
        )}
      </div>
      
      {/* Site Map Modal */}
      <SiteMapModal 
        isOpen={siteMapModalOpen}
        onClose={handleCloseSiteMap}
        propertyName={selectedProperty?.name || ''}
        siteMapUrl={selectedProperty ? siteMapImages[selectedProperty.name] : undefined}
      />
    </section>
  );
}