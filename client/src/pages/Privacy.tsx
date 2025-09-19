import { useEffect } from 'react';

export default function Privacy() {
  // Set page metadata for SEO
  useEffect(() => {
    document.title = 'Privacy Policy | Property Masters Group';
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Privacy Policy for Property Masters Group. Learn how we collect, use, and protect your personal information.');

    return () => {
      // Reset title when component unmounts
      document.title = 'Property Masters Group';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <p>
              Property Masters Group collects information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact us through our website forms or email</li>
              <li>Request information about our properties or services</li>
              <li>Schedule consultations or property viewings</li>
              <li>Enter into lease agreements or service contracts</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, business information, 
              and any other details you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide requested information</li>
              <li>Communicate with you about our properties and services</li>
              <li>Process lease applications and service requests</li>
              <li>Maintain records for business and legal purposes</li>
              <li>Improve our services and customer experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With your explicit consent</li>
              <li>To trusted service providers who assist us in operating our business</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>In connection with a business transaction, such as a merger or sale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Website Analytics</h2>
            <p>
              Our website may use cookies and similar technologies to enhance your browsing experience 
              and analyze website traffic. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p><strong>Property Masters Group of Companies</strong></p>
              <p>152 Sioux Road, Sherwood Park, AB</p>
              <p>Phone: 780-464-1518</p>
              <p>Email: information@propertymasters.ca</p>
            </div>
          </section>

          <section className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-CA', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}