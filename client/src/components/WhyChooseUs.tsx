import { Shield, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Locally Owned & Operated',
      description: 'Deep understanding of Alberta\'s commercial property landscape and local market conditions.'
    },
    {
      icon: Users,
      title: 'Integrated Group of Companies',
      description: 'One-stop solutions across property management, grounds maintenance, and building care.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Established expertise in both commercial and residential property management with satisfied clients.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Property Masters
          </h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto">
            Our integrated approach and local expertise deliver exceptional results for property owners across Alberta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center p-8 hover-elevate">
                <CardContent className="space-y-6">
                  <div className="mx-auto w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}