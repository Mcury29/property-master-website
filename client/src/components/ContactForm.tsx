import { useState } from 'react';
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

export default function ContactForm() {
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

    // Submit the form data
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
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're ready to help — whether you're searching for space, need maintenance, 
            or want grounds care you can trust. Connect with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    152 Sioux Road<br />
                    Sherwood Park, AB
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    780-464-1518
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-muted-foreground">
                    <p>information@propertymasters.ca</p>
                    <p>nbeaudoin@propertymasters.ca</p>
                    <p>rlepage@propertymasters.ca</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 3:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Get In Touch
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(780) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      data-testid="input-phone"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your property needs, maintenance requirements, or any questions you have..."
                      className="min-h-[120px]"
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      data-testid="textarea-message"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                      data-testid="checkbox-consent"
                    />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                      I agree to be contacted by Property Masters Group regarding my inquiry 
                      and understand that my information will be handled according to their privacy policy.
                    </Label>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="flex-1"
                      disabled={!formData.consent || submitContactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {submitContactMutation.isPending ? 'Sending...' : 'Send Message'}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg" 
                      className="flex-1"
                      onClick={() => console.log('Request quote clicked')}
                      data-testid="button-request-quote-form"
                    >
                      Request Quote
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}