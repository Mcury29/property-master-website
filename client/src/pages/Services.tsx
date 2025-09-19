import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ClipboardList, Wrench, TreePine } from 'lucide-react';
import propertyManagementImage from '@assets/stock_images/modern_office_worksp_4476ec80.jpg';
import groundsImage from '@assets/stock_images/lightbulb_with_plant_eeb90318.jpg';
import maintenanceImage from '@assets/stock_images/construction_workers_26b7bd5b.jpg';

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Property Management */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-cyan-500 p-3 rounded-lg flex-shrink-0">
                <ClipboardList className="w-6 h-6 text-white" data-testid="icon-property-management" />
              </div>
              <h2 className="text-3xl font-bold">Property Management</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Handling commercial properties with precision. Services include rent collection, financial reporting, property upgrades, and tenant coordination — everything needed for smooth operations and asset performance.
            </p>
            <div className="flex gap-4">
              <Button 
                asChild 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
                data-testid="button-property-learn-more"
              >
                <Link href="/contact">Learn More →</Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-slate-400 text-white hover:bg-slate-800 px-6 py-2"
                data-testid="button-property-book-meeting"
              >
                <Link href="/contact">Book a Meeting</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src={propertyManagementImage} 
              alt="Property Management Office" 
              className="w-full h-64 lg:h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Grounds Division */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-cyan-500 p-3 rounded-lg flex-shrink-0">
                <TreePine className="w-6 h-6 text-white" data-testid="icon-grounds-division" />
              </div>
              <h2 className="text-3xl font-bold">Grounds Division</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Keeping properties sharp year-round with turf maintenance, snow removal, ice control, site detailing, litter management, seasonal landscaping, window washing, parking lot cleaning, and more.
            </p>
            <div className="flex gap-4">
              <Button 
                asChild
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
                data-testid="button-grounds-learn-more"
              >
                <Link href="/contact">Learn More →</Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-slate-400 text-white hover:bg-slate-800 px-6 py-2"
                data-testid="button-grounds-book-meeting"
              >
                <Link href="/contact">Book a Meeting</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src={groundsImage} 
              alt="Sustainable Grounds Maintenance" 
              className="w-full h-64 lg:h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Maintenance Division */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-cyan-500 p-3 rounded-lg flex-shrink-0">
                <Wrench className="w-6 h-6 text-white" data-testid="icon-maintenance-division" />
              </div>
              <h2 className="text-3xl font-bold">Maintenance Division</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Providing reliable building care — painting, signage, tenant improvements, repairs, ongoing building upkeep, exterior + interior care including plumbing, HVAC quarterly preventative maintenance.
            </p>
            <div className="flex gap-4">
              <Button 
                asChild
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
                data-testid="button-maintenance-learn-more"
              >
                <Link href="/contact">Learn More →</Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-slate-400 text-white hover:bg-slate-800 px-6 py-2"
                data-testid="button-maintenance-book-meeting"
              >
                <Link href="/contact">Book a Meeting</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src={maintenanceImage} 
              alt="Building Maintenance and Construction" 
              className="w-full h-64 lg:h-80 object-cover rounded-lg"
            />
          </div>
        </div>

      </div>
    </div>
  );
}