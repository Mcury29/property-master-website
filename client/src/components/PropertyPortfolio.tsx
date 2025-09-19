import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Users, TrendingUp } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { Property } from '@shared/schema';

// Calculate portfolio stats from real property data
const calculatePortfolioStats = (properties: Property[]) => {
  const totalSF = properties.reduce((sum, prop) => sum + prop.totalSF, 0);
  const occupiedSF = properties.reduce((sum, prop) => sum + prop.occupiedSF, 0);
  const vacantSF = properties.reduce((sum, prop) => sum + prop.vacantSF, 0);
  const occupancyRate = totalSF > 0 ? parseFloat(((occupiedSF / totalSF) * 100).toFixed(1)) : 0;
  
  return { totalSF, occupiedSF, vacantSF, occupancyRate };
};

export default function PropertyPortfolio() {
  // Fetch properties from API
  const { data: properties = [], isLoading, isError } = useQuery<Property[]>({
    queryKey: ['/api/properties']
  });

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const getOccupancyRate = (occupied: number, total: number) => {
    return ((occupied / total) * 100).toFixed(1);
  };

  const getOccupancyColor = (rate: number) => {
    if (rate === 100) return 'text-green-500';
    if (rate >= 90) return 'text-primary';
    if (rate >= 75) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Property <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Our portfolio spans nearly half a million square feet of space across Alberta, 
            from professional offices to retail centres and mixed-use developments. 
            With an occupancy rate of over 94%, we offer proven stability and quality across every property we manage.
          </p>
        </div>

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
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
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => {
            const occupancyRate = parseFloat(getOccupancyRate(property.occupiedSF, property.totalSF));
            return (
              <Card key={property.id} className="hover-elevate transition-all duration-300" data-testid={`card-property-${property.id}`}>
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
                </CardContent>
              </Card>
            );
          })}
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
    </section>
  );
}