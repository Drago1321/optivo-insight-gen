import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  ShoppingBag, 
  Diamond, 
  Monitor, 
  CreditCard, 
  Coffee,
  MessageSquare,
  ArrowRight
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      name: "Education",
      icon: GraduationCap,
      description: "Educational institutions, online learning platforms, and EdTech market analysis.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Consumer Goods",
      icon: ShoppingBag,
      description: "FMCG, retail, and consumer behavior insights across global markets.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      name: "Luxury",
      icon: Diamond,
      description: "High-end brands, luxury market trends, and premium consumer segments.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      name: "EdTech",
      icon: Monitor,
      description: "Educational technology, e-learning platforms, and digital learning solutions.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      name: "FinTech",
      icon: CreditCard,
      description: "Financial technology, digital payments, and banking innovation research.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      name: "Food & Beverages",
      icon: Coffee,
      description: "Food industry trends, beverage markets, and consumer taste preferences.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      name: "Content & Social Media",
      icon: MessageSquare,
      description: "Digital content, social media platforms, and influencer marketing insights.",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section id="industries" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-secondary text-primary">
            Industries We Serve
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Specialized market research across key industries, delivering insights 
            that drive strategic decisions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <Card key={industry.name} className="card-professional group hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-lg ${industry.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-6 w-6 ${industry.color}`} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-primary">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-accent hover:text-accent-foreground hover:bg-accent group/btn"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-outline">
            View All Industries
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;