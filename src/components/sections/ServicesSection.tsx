import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Zap, 
  Settings, 
  Package, 
  TrendingUp,
  Check,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      name: "Standard Reports",
      icon: FileText,
      description: "Comprehensive market analysis with detailed insights and recommendations.",
      features: [
        "20-30 pages detailed analysis",
        "Market size & growth projections",
        "Competitive landscape",
        "Consumer behavior insights",
        "Strategic recommendations"
      ],
      price: "$600 - $1,000",
      popular: false,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Mini Reports",
      icon: Zap,
      description: "Quick market insights for time-sensitive business decisions.",
      features: [
        "8-12 pages focused analysis",
        "Key market trends",
        "Basic competitive overview",
        "Quick turnaround (3-5 days)",
        "Essential insights only"
      ],
      price: "$200 - $350",
      popular: true,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      name: "Request-Based Reports",
      icon: Settings,
      description: "Custom research tailored to your specific business requirements.",
      features: [
        "Fully customized scope",
        "Specific market segments",
        "Tailored methodology",
        "Custom data collection",
        "Dedicated research team"
      ],
      price: "Pricing on demand",
      popular: false,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      name: "Product-Specific Reports",
      icon: Package,
      description: "Deep-dive analysis focused on specific products or services.",
      features: [
        "Product market analysis",
        "Pricing strategies",
        "Distribution channels",
        "Target audience insights",
        "Launch recommendations"
      ],
      price: "$400 - $800",
      popular: false,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      name: "Competitor Analysis",
      icon: TrendingUp,
      description: "In-depth competitive intelligence and benchmarking studies.",
      features: [
        "Competitor profiling",
        "SWOT analysis",
        "Market positioning",
        "Pricing comparison",
        "Strategic insights"
      ],
      price: "$300 - $600",
      popular: false,
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-secondary text-primary">
            Our Research Services
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Choose from our range of research solutions designed to meet 
            the diverse needs of SMEs and startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.name} 
                className={`card-professional relative ${service.popular ? 'border-accent shadow-medium scale-105' : ''} hover:border-accent/50 transition-all duration-300`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center`}>
                      <IconComponent className={`h-6 w-6 ${service.color}`} />
                    </div>
                    
                    <div className="space-y-2">
                      <CardTitle className="text-xl text-primary">
                        {service.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="text-2xl font-bold text-primary">
                      {service.price}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={service.popular ? "btn-accent w-full" : "btn-outline w-full"} 
                    size="lg"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We're here to help.
          </p>
          <Button className="btn-primary">
            Contact Our Research Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;