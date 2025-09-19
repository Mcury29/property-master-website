export default function About() {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Property Masters Group of Companies - Your trusted partner in commercial real estate.
          </p>
        </div>
        
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed mb-6">
            With over 25 years of experience in the commercial real estate industry, Property Masters Group of Companies 
            has established itself as a leader in property management, maintenance, and development services across Alberta.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            We manage nearly half a million square feet of commercial space, maintaining an impressive occupancy rate 
            of over 94%. Our portfolio includes office buildings, retail centers, mixed-use developments, and specialized 
            commercial properties throughout Edmonton, Sherwood Park, and surrounding areas.
          </p>
          <p className="text-lg leading-relaxed">
            Our commitment to excellence, attention to detail, and personalized service has earned us the trust of 
            property owners and tenants alike. We protect, enhance, and grow property value with seamless, reliable service.
          </p>
        </div>
      </div>
    </div>
  );
}