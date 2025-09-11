import { Card, CardContent } from "@/components/ui/card";
import { 
  DollarSign, 
  Shield, 
  Clock, 
  Users, 
  Globe, 
  Award,
  Headphones,
  TrendingUp
} from "lucide-react";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Cost-effective research solutions starting from just $200, designed specifically for SME budgets.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "Reliable Sources",
      description: "Verified data from trusted industry sources and comprehensive primary research methodologies.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Guaranteed delivery within agreed timelines with 98% on-time completion rate.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Users,
      title: "SME-Focused",
      description: "Specifically designed for small and medium enterprises with tailored insights and recommendations.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Research across key markets including Europe, USA, Australia, and Singapore.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Multi-layer quality checks and peer review process to ensure accuracy and reliability.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Personal research consultant assigned to every project for seamless communication.",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: TrendingUp,
      title: "Actionable Insights",
      description: "Strategic recommendations that drive real business decisions and growth opportunities.",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-muted/20 via-background to-accent/5">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-secondary text-primary">
            Why Choose Optivo Research?
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            We understand the unique challenges of SMEs and startups. 
            Our research solutions are built to deliver maximum value within your budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="card-professional group hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-full ${benefit.bgColor} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-7 w-7 ${benefit.color}`} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-primary">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Reports Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Industries Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;