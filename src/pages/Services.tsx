import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Search, BarChart, Users, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    description: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Request Submitted",
      description: "Thank you, our team will contact you shortly.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      icon: FileText,
      title: "Standard Reports",
      description: "Comprehensive 20-30 page market analysis reports covering industry trends, competitive landscape, and market opportunities.",
      price: "$600 - $1000"
    },
    {
      icon: Search,
      title: "Custom Research",
      description: "Tailored research solutions designed to address your specific business questions and market challenges.",
      price: "On Request"
    },
    {
      icon: BarChart,
      title: "Competitor Analysis",
      description: "In-depth analysis of your competitors' strategies, market positioning, and performance metrics.",
      price: "$400 - $800"
    },
    {
      icon: Users,
      title: "Consumer Insights",
      description: "Understanding your target audience through surveys, interviews, and behavioral analysis.",
      price: "$500 - $900"
    },
    {
      icon: TrendingUp,
      title: "Market Entry Strategy",
      description: "Strategic guidance for entering new markets with risk assessment and opportunity analysis.",
      price: "$800 - $1500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom text-center">
            <h1 className="heading-primary text-foreground mb-6">Our Services</h1>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Our tailored market research helps you make informed decisions with comprehensive 
              insights and strategic guidance for your business growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="card-professional h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="text-lg font-semibold text-primary">{service.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Request Form */}
        <section className="section-padding bg-muted/50" id="request-form">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-secondary mb-4">Request for Market Research Report</h2>
                <p className="text-muted-foreground">
                  Tell us about your research needs and we'll provide a customized solution for your business.
                </p>
              </div>

              {isSubmitted ? (
                <Card className="text-center p-12">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Our team will contact you shortly to discuss your market research requirements.
                  </p>
                </Card>
              ) : (
                <Card className="card-professional">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mobile">Mobile Number *</Label>
                          <Input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            required
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="Enter your mobile number"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description of Request *</Label>
                        <Textarea
                          id="description"
                          name="description"
                          required
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Please describe your market research requirements, target market, specific questions you need answered, and any other relevant details..."
                          rows={6}
                        />
                      </div>

                      <Button type="submit" className="btn-accent w-full">
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;