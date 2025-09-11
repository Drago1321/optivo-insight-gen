import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare
} from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-secondary text-primary">
            Ready to Get Started?
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Contact us today to discuss your research needs. 
            We'll provide a customized proposal within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-primary">
                <MessageSquare className="h-5 w-5" />
                <span>Request a Quote</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john.doe@company.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization *</Label>
                  <Input id="company" placeholder="Your Company Name" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="consumer-goods">Consumer Goods</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                        <SelectItem value="edtech">EdTech</SelectItem>
                        <SelectItem value="fintech">FinTech</SelectItem>
                        <SelectItem value="food-beverages">Food & Beverages</SelectItem>
                        <SelectItem value="content-social">Content & Social Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reportType">Report Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Report Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Report</SelectItem>
                        <SelectItem value="mini">Mini Report</SelectItem>
                        <SelectItem value="request-based">Request-Based</SelectItem>
                        <SelectItem value="product-specific">Product-Specific</SelectItem>
                        <SelectItem value="competitor">Competitor Analysis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Research Requirements *</Label>
                  <Textarea 
                    id="requirements" 
                    placeholder="Please describe your research needs, target markets, specific questions you'd like answered, and any timeline requirements..."
                    className="min-h-[120px]"
                    required 
                  />
                </div>

                <Button type="submit" className="btn-accent w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-professional">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-medium text-primary">Email</div>
                      <div className="text-muted-foreground">info@optivoresearch.com</div>
                      <div className="text-muted-foreground">research@optivoresearch.com</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-medium text-primary">Phone</div>
                      <div className="text-muted-foreground">+1 (555) 123-4567</div>
                      <div className="text-muted-foreground">+44 20 7123 4567</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-medium text-primary">Global Presence</div>
                      <div className="text-muted-foreground">USA • UK • Europe</div>
                      <div className="text-muted-foreground">Australia • Singapore</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-medium text-primary">Response Time</div>
                      <div className="text-muted-foreground">Within 24 hours</div>
                      <div className="text-muted-foreground">Business days: Mon-Fri</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="card-professional bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Why Choose Our Consultation?</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Free Initial Consultation</span>
                    <span className="font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>24-Hour Response Guarantee</span>
                    <span className="font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Custom Pricing Options</span>
                    <span className="font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>No Obligation Quote</span>
                    <span className="font-semibold">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="card-professional border-accent/50">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-primary mb-2">Urgent Research Need?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  For time-sensitive projects, contact our priority line
                </p>
                <Button className="btn-accent">
                  Priority Contact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;