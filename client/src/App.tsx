import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Properties from "@/pages/Properties";
import Contact from "@/pages/Contact";
import Founder from "@/pages/Founder";
import Privacy from "@/pages/Privacy";
import CommercialRealEstate from "@/pages/services/CommercialRealEstate";
import Maintenance from "@/pages/services/Maintenance";
import Grounds from "@/pages/services/Grounds";
import PropertyManagement from "@/pages/services/PropertyManagement";
import Office from "@/pages/properties/Office";
import StripCentres from "@/pages/properties/StripCentres";
import Residential from "@/pages/properties/Residential";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/founder" component={Founder} />
      <Route path="/services" component={Services} />
      <Route path="/services/commercial-real-estate" component={CommercialRealEstate} />
      <Route path="/services/maintenance" component={Maintenance} />
      <Route path="/services/grounds" component={Grounds} />
      <Route path="/services/property-management" component={PropertyManagement} />
      <Route path="/properties" component={Properties} />
      <Route path="/properties/office" component={Office} />
      <Route path="/properties/strip-centres" component={StripCentres} />
      <Route path="/properties/residential" component={Residential} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
