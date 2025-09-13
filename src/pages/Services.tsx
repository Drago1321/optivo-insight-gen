import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  BarChart3, 
  Target, 
  Users, 
  TrendingUp, 
  Map, 
  FileText, 
  CheckCircle 
} from "lucide-react";

const Services = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shortDescription: "",
    detailedDescription: "",
    agreedToContact: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      icon: BarChart3,
      title: "Market Snapshot",
      description: "Quick overview of market size, key players, and trends",
      price: "Starting from $200",
      features: ["Market size & growth", "Key competitors", "Industry trends"]
    },
    {
      icon: Target,
      title: "Custom Market Analysis",
      description: "Deep-dive research tailored to your specific requirements",
      price: "Starting from $500",
      features: ["Custom research scope", "Primary & secondary data", "Strategic recommendations"]
    },
    {
      icon: Users,
      title: "Competitor Benchmarking",
      description: "Comprehensive analysis of your competitive landscape",
      price: "Starting from $300",
      features: ["Competitor profiles", "SWOT analysis", "Positioning insights"]
    },
    {
      icon: TrendingUp,
      title: "Consumer Surveys",
      description: "Direct insights from your target customer base",
      price: "Starting from $400",
      features: ["Survey design", "Data collection", "Analysis & insights"]
    },
    {
      icon: Map,
      title: "Go-to-Market Strategy",
      description: "Strategic roadmap for entering new markets",
      price: "Starting from $800",
      features: ["Market entry strategy", "Channel analysis", "Risk assessment"]
    },
    {
      icon: FileText,
      title: "Subscription Insights",
      description: "Regular market updates and trend monitoring",
      price: "Starting from $150/month",
      features: ["Monthly reports", "Trend alerts", "Priority support"]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreedToContact) {
      toast({
        title: "Agreement Required",
        description: "Please agree to be contacted about this inquiry.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Request Submitted",
      description: "We'll respond within 48 hours.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Services - Optivo Research - Tailored Market Research</title>
        <meta
          name="description"
          content="Our tailored market research helps you make informed decisions. Get market snapshots, custom analysis, competitor benchmarking and more."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background to-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h1 className="heading-primary text-primary">Services we provide</h1>
                <p className="text-large text-muted-foreground">
                  Our tailored market research helps you make informed decisions.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => (
                  <Card key={index} className="card-professional">
                    <CardHeader className="space-y-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                        <CardDescription className="mt-2">{service.description}</CardDescription>
                        <div className="text-lg font-semibold text-accent mt-2">{service.price}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Inquiry Form */}
              <div id="services-form" className="max-w-2xl mx-auto">
                <Card className="card-professional">
                  <CardHeader className="text-center">
                    <CardTitle className="heading-secondary text-primary">
                      Request for Market Research Report
                    </CardTitle>
                    <CardDescription>
                      Tell us about your research needs and we'll provide a customized solution.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center space-y-4 py-8">
                        <CheckCircle className="h-16 w-16 text-success mx-auto" />
                        <h3 className="text-xl font-semibold text-primary">Thank you!</h3>
                        <p className="text-muted-foreground">
                          We received your request — we'll contact you within 48 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full name *</Label>
                            <Input
                              id="name"
                              placeholder="Full name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email ID *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="name@company.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone number</Label>
                          <Input
                            id="phone"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="shortDescription">Short description</Label>
                          <Input
                            id="shortDescription"
                            placeholder="One-line summary of your request"
                            maxLength={150}
                            value={formData.shortDescription}
                            onChange={(e) => handleInputChange("shortDescription", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="detailedDescription">Detailed description *</Label>
                          <Textarea
                            id="detailedDescription"
                            placeholder="Please provide details about scope, timeline, and budget requirements..."
                            rows={4}
                            value={formData.detailedDescription}
                            onChange={(e) => handleInputChange("detailedDescription", e.target.value)}
                            required
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="agreement"
                            checked={formData.agreedToContact}
                            onCheckedChange={(checked) => handleInputChange("agreedToContact", checked as boolean)}
                          />
                          <Label htmlFor="agreement" className="text-sm">
                            I agree to be contacted about this inquiry.
                          </Label>
                        </div>

                        <Button type="submit" className="btn-accent w-full">
                          Submit Request - We'll respond within 48 hours
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          We will not share your data. Your information is secure with us.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;