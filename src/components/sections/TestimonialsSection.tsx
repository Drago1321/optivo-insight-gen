import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "EduTech Innovations",
      industry: "EdTech",
      location: "London, UK",
      rating: 5,
      content: "Optivo Research delivered exactly what we needed for our market entry strategy. Their EdTech report was comprehensive, insightful, and perfectly timed for our board presentation. The pricing was incredibly reasonable for the quality we received.",
      avatar: "SJ"
    },
    {
      name: "Marcus Chen",
      company: "GreenBite Foods",
      industry: "Food & Beverages", 
      location: "Singapore",
      rating: 5,
      content: "The food industry analysis helped us identify key market gaps in Southeast Asia. The team was professional, responsive, and delivered actionable insights that directly influenced our product development strategy.",
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      company: "LuxStyle Boutique",
      industry: "Luxury Retail",
      location: "Melbourne, Australia",
      rating: 5,
      content: "Outstanding work on our luxury consumer behavior study. The mini report format was perfect for our needs and budget. We've since commissioned two more reports based on the quality of their first delivery.",
      avatar: "ER"
    },
    {
      name: "David Miller",
      company: "FinPay Solutions",
      industry: "FinTech",
      location: "New York, USA",
      rating: 5,
      content: "Optivo's competitor analysis was thorough and eye-opening. They identified market opportunities we hadn't considered and provided strategic recommendations that shaped our go-to-market approach.",
      avatar: "DM"
    },
    {
      name: "Lisa Andersson",
      company: "Nordic Learning",
      industry: "Education",
      location: "Stockholm, Sweden",
      rating: 5,
      content: "As a startup, budget was our main concern. Optivo provided enterprise-quality research at a fraction of the cost. Their European education market report was instrumental in securing our Series A funding.",
      avatar: "LA"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-secondary text-primary">
            What Our Clients Say
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Hear from SMEs and startups who've grown their businesses with our research insights.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-professional border-none shadow-medium relative overflow-hidden">
            <div className="absolute top-6 left-6 text-accent/20">
              <Quote className="h-12 w-12" />
            </div>
            
            <CardContent className="p-8 md:p-12 relative">
              <div className="text-center space-y-6">
                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed italic">
                  "{currentData.content}"
                </blockquote>

                {/* Client Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      {currentData.avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-primary text-lg">
                        {currentData.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {currentData.company} • {currentData.location}
                      </div>
                      <div className="text-xs text-accent font-medium">
                        {currentData.industry}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevTestimonial}
              className="rounded-full p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial 
                      ? 'bg-accent' 
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextTestimonial}
              className="rounded-full p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Repeat Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">On-Time Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;