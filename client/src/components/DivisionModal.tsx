import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Building2, Wrench, Trees } from 'lucide-react';

interface DivisionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  division: 'realty' | 'maintenance' | 'grounds' | null;
}

const divisionData = {
  realty: {
    title: 'Realty/Property Management',
    icon: Building2,
    description: 'Complete commercial real estate services including leasing, property management, and tenant relations.',
    features: [
      'Commercial Property Leasing',
      'Property Portfolio Management',
      'Tenant Relations & Support',
      'Market Analysis & Valuations',
      'Investment Property Services',
      'Property Development Consultation'
    ]
  },
  maintenance: {
    title: 'Maintenance',
    icon: Wrench,
    description: 'Professional building maintenance and repair services to keep your properties in excellent condition.',
    features: [
      'HVAC System Maintenance',
      'Electrical & Plumbing Services',
      'Building Repairs & Renovations',
      'Emergency Maintenance Response',
      'Preventive Maintenance Programs',
      'Safety & Code Compliance'
    ]
  },
  grounds: {
    title: 'Grounds',
    icon: Trees,
    description: 'Comprehensive grounds keeping and landscaping services for commercial properties.',
    features: [
      'Landscape Design & Installation',
      'Regular Grounds Maintenance',
      'Seasonal Cleanup Services',
      'Snow Removal & De-icing',
      'Irrigation System Management',
      'Environmental Sustainability Solutions'
    ]
  }
};

export default function DivisionModal({ open, onOpenChange, division }: DivisionModalProps) {
  if (!division) return null;
  
  const data = divisionData[division];
  const IconComponent = data.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <IconComponent className="w-6 h-6 text-primary mr-3" />
            {data.title}
          </DialogTitle>
          <DialogDescription className="text-lg">
            {data.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Division Services Include:</h4>
            <div className="grid gap-3">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-center p-3 border border-border rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Need {data.title.toLowerCase()} services?</strong> Contact us to discuss your specific requirements 
              and learn how we can help maintain and enhance your property value.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}