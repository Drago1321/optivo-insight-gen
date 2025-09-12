import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Download, Eye } from "lucide-react";

const Portfolio = () => {
  const insights = [
    {
      title: "European EdTech Market Growth Opportunities",
      category: "Market Analysis",
      date: "March 2024",
      description: "Comprehensive analysis of the educational technology sector across major European markets, identifying key growth drivers and investment opportunities.",
      type: "Sample Report",
      readTime: "8 min read"
    },
    {
      title: "SME Digital Transformation Trends in 2024",
      category: "Industry Insights",
      date: "February 2024",
      description: "How small and medium enterprises are adapting to digital transformation challenges and leveraging technology for competitive advantage.",
      type: "Blog Article",
      readTime: "5 min read"
    },
    {
      title: "Consumer Behavior Changes Post-Pandemic",
      category: "Consumer Research",
      date: "January 2024",
      description: "Deep dive into evolving consumer preferences and purchasing patterns in the post-pandemic era across US and European markets.",
      type: "Case Study",
      readTime: "12 min read"
    },
    {
      title: "FinTech Regulatory Landscape: US vs EU",
      category: "Regulatory Analysis",
      date: "December 2023",
      description: "Comparative analysis of financial technology regulations between United States and European Union markets for fintech startups.",
      type: "Sample Report",
      readTime: "15 min read"
    },
    {
      title: "Sustainable Food & Beverage Market Trends",
      category: "Sustainability",
      date: "November 2023",
      description: "Market analysis of sustainable food and beverage products, consumer demand patterns, and growth projections for eco-friendly brands.",
      type: "Market Report",
      readTime: "10 min read"
    },
    {
      title: "Luxury Market Recovery in Asia-Pacific",
      category: "Luxury Goods",
      date: "October 2023",
      description: "Analysis of luxury goods market recovery patterns in key Asia-Pacific regions, focusing on consumer sentiment and spending behaviors.",
      type: "Regional Study",
      readTime: "7 min read"
    }
  ];

  const testimonials = [
    {
      client: "TechStart Solutions",
      industry: "EdTech",
      feedback: "The market analysis provided by Optivo Research was instrumental in our successful expansion into the European market. Their insights helped us identify the right opportunities and avoid potential pitfalls.",
      project: "European EdTech Market Entry Strategy"
    },
    {
      client: "GreenEats Co.",
      industry: "Food & Beverage",
      feedback: "Exceptional research quality and attention to detail. The consumer behavior analysis helped us pivot our product strategy and increase market share by 40% within six months.",
      project: "Sustainable Food Consumer Research"
    },
    {
      client: "FinanceForward",
      industry: "FinTech",
      feedback: "Professional, timely, and thorough. The regulatory landscape analysis was exactly what we needed to navigate compliance requirements across multiple markets.",
      project: "FinTech Regulatory Compliance Study"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom text-center">
            <h1 className="heading-primary text-foreground mb-6">Portfolio & Insights</h1>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Explore our latest research findings, market analyses, and thought leadership content 
              that showcase our expertise in delivering actionable business insights.
            </p>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="heading-secondary text-center mb-4">Latest Insights</h2>
              <p className="text-center text-muted-foreground">
                Stay informed with our latest research findings and market analyses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <Card key={index} className="card-professional h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{insight.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {insight.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">{insight.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-primary">
                          <FileText className="w-4 h-4 mr-1" />
                          {insight.type}
                        </div>
                        <span className="text-muted-foreground">{insight.readTime}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="w-4 h-4 mr-2" />
                          Read More
                        </Button>
                        {insight.type.includes('Report') && (
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Client Success Stories</h2>
              <p className="text-muted-foreground">
                See how our research has helped businesses make informed decisions and achieve growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-professional">
                  <CardHeader>
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{testimonial.client}</CardTitle>
                      <Badge variant="outline">{testimonial.industry}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground italic">"{testimonial.feedback}"</p>
                    <div className="text-sm text-primary font-medium">
                      Project: {testimonial.project}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="btn-accent">
                View More Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;