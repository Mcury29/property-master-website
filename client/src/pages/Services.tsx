export default function Services() {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive commercial property management, maintenance, and development services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Property Management</h3>
            <p className="text-muted-foreground">Full-service commercial property management solutions.</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Maintenance Services</h3>
            <p className="text-muted-foreground">Professional building and grounds maintenance.</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Development</h3>
            <p className="text-muted-foreground">Commercial property development and consulting.</p>
          </div>
        </div>
      </div>
    </div>
  );
}