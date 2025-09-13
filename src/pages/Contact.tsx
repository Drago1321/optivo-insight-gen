import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Optivo Research - Get in Touch</title>
        <meta
          name="description"
          content="Contact Optivo Research for your market research needs. Email, phone, and office details. We're here to help your business grow."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background to-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h1 className="heading-primary text-primary">Contact Us</h1>
                <p className="text-large text-muted-foreground">
                  Ready to unlock market insights for your business? Get in touch with our research experts.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information & Form */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="heading-secondary text-primary mb-6">Get in Touch</h2>
                    <p className="text-large text-muted-foreground">
                      We're here to help you make informed business decisions. Reach out to us for any questions about our services.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Email</h4>
                        <p className="text-muted-foreground">optivoresearch@gmail.com</p>
                        <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Phone</h4>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                        <p className="text-sm text-muted-foreground">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>

                    {/* Office Hours */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Business Hours</h4>
                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                        <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM IST</p>
                        <p className="text-sm text-muted-foreground">Closed on Sundays and public holidays</p>
                      </div>
                    </div>

                    {/* Office Location */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Office</h4>
                        <p className="text-muted-foreground">Mumbai, India</p>
                        <p className="text-sm text-muted-foreground">Serving clients globally</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <Card className="card-professional">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Send us a Message</CardTitle>
                      <CardDescription>
                        Have a question about our services? We'd love to hear from you.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {isSubmitted ? (
                        <div className="text-center space-y-4 py-8">
                          <CheckCircle className="h-16 w-16 text-success mx-auto" />
                          <h3 className="text-xl font-semibold text-primary">Message Sent!</h3>
                          <p className="text-muted-foreground">
                            Thank you for reaching out. We'll get back to you within 24 hours.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="contact-name">Name *</Label>
                            <Input
                              id="contact-name"
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="contact-email">Email *</Label>
                            <Input
                              id="contact-email"
                              type="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="contact-message">Message *</Label>
                            <Textarea
                              id="contact-message"
                              placeholder="Tell us about your research needs or ask any questions..."
                              rows={5}
                              value={formData.message}
                              onChange={(e) => handleInputChange("message", e.target.value)}
                              required
                            />
                          </div>

                          <Button type="submit" className="btn-accent w-full">
                            Send Message
                          </Button>

                          <p className="text-xs text-muted-foreground text-center">
                            We respect your privacy and will never share your information.
                          </p>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section (Optional) */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card rounded-xl p-8 text-center space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Global Reach, Local Expertise</h3>
                  <p className="text-muted-foreground">
                    Based in Mumbai, India, we serve clients across Europe, the US, and other global markets. 
                    Our research covers local insights with a global perspective.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;