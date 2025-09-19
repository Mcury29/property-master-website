import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import type { InsertContactInquiry } from '@shared/schema';

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'general',
    consent: false
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      try {
        const response = await apiRequest('POST', '/api/contact-inquiries', data);
        const result = await response.json();
        return result;
      } catch (error) {
        console.error('Contact form submission failed');
        throw error;
      }
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours."
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        inquiryType: 'general',
        consent: false
      });
      onOpenChange(false);
    },
    onError: (error: any) => {
      console.error('Contact form submission error');
      toast({
        title: "Error",
        description: error?.message || "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent required",
        description: "Please agree to be contacted before submitting your inquiry.",
        variant: "destructive"
      });
      return;
    }

    submitContactMutation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      message: formData.message,
      inquiryType: formData.inquiryType,
      consent: formData.consent
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contact Us</DialogTitle>
          <DialogDescription>
            We're ready to help — whether you're searching for space, need maintenance, 
            or want grounds care you can trust.
          </DialogDescription>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-primary mr-2" />
                  <h4 className="font-semibold">Our Location</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  152 Sioux Road<br />
                  Sherwood Park, AB
                </p>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-center mb-2">
                  <Phone className="w-4 h-4 text-primary mr-2" />
                  <h4 className="font-semibold">Phone</h4>
                </div>
                <p className="text-sm text-muted-foreground">780-464-1518</p>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-center mb-2">
                  <Mail className="w-4 h-4 text-primary mr-2" />
                  <h4 className="font-semibold">Email</h4>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>information@propertymasters.ca</p>
                  <p>nbeaudoin@propertymasters.ca</p>
                  <p>rlepage@propertymasters.ca</p>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 text-primary mr-2" />
                  <h4 className="font-semibold">Business Hours</h4>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="modal-name">Full Name *</Label>
                  <Input
                    id="modal-name"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    data-testid="input-modal-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modal-email">Email Address *</Label>
                  <Input
                    id="modal-email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    data-testid="input-modal-email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="modal-phone">Phone Number</Label>
                <Input
                  id="modal-phone"
                  type="tel"
                  placeholder="(780) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  data-testid="input-modal-phone"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="modal-message">Message *</Label>
                <Textarea
                  id="modal-message"
                  placeholder="Tell us about your property needs, maintenance requirements, or any questions you have..."
                  className="min-h-[100px]"
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  data-testid="textarea-modal-message"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="modal-consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                  data-testid="checkbox-modal-consent"
                />
                <Label htmlFor="modal-consent" className="text-sm text-muted-foreground leading-relaxed">
                  I agree to be contacted by Property Masters Group regarding my inquiry.
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={!formData.consent || submitContactMutation.isPending}
                data-testid="button-modal-submit-contact"
              >
                {submitContactMutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}