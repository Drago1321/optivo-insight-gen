import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "E-commerce Market Trends in 2024: What SMEs Need to Know",
      excerpt: "Discover the latest e-commerce trends shaping the market and how small businesses can capitalize on emerging opportunities in digital retail.",
      date: "March 15, 2024",
      category: "Ecommerce",
      tags: ["Digital Retail", "SME Growth", "Market Trends"]
    },
    {
      title: "Consumer Behavior Shifts Post-Pandemic: A Comprehensive Analysis",
      excerpt: "An in-depth look at how consumer preferences have evolved and what businesses should do to adapt their strategies accordingly.",
      date: "March 10, 2024",
      category: "Consumer Trends",
      tags: ["Consumer Behavior", "Market Research", "Business Strategy"]
    },
    {
      title: "Case Study: How a Startup Increased Market Share by 30% Using Data",
      excerpt: "Real-world example of how actionable market insights helped a tech startup identify new opportunities and outpace competitors.",
      date: "March 5, 2024",
      category: "Case Studies",
      tags: ["Startup Success", "Data Analytics", "Market Growth"]
    },
    {
      title: "Market Research on a Budget: Tools and Techniques for SMEs",
      excerpt: "Practical guide to conducting effective market research without breaking the bank. Essential tools and methodologies for small businesses.",
      date: "February 28, 2024",
      category: "Business Strategy",
      tags: ["Budget Research", "SME Resources", "Market Analysis"]
    },
    {
      title: "Global Supply Chain Disruptions: Impact on Small Businesses",
      excerpt: "Analysis of ongoing supply chain challenges and strategic recommendations for SMEs to build resilience and maintain operations.",
      date: "February 22, 2024",
      category: "Market Analysis",
      tags: ["Supply Chain", "Risk Management", "Global Trade"]
    },
    {
      title: "Emerging Markets in Southeast Asia: Opportunities for European SMEs",
      excerpt: "Comprehensive market overview of Southeast Asian countries and entry strategies for European small and medium enterprises.",
      date: "February 15, 2024",
      category: "Global Markets",
      tags: ["Southeast Asia", "Market Entry", "International Business"]
    }
  ];

  const categories = ["All", "Ecommerce", "Consumer Trends", "Case Studies", "Business Strategy", "Market Analysis", "Global Markets"];

  return (
    <>
      <Helmet>
        <title>Articles - Optivo Research - Market Insights & Analysis</title>
        <meta
          name="description"
          content="Stay updated with the latest market research insights, industry trends, and business strategies. Expert analysis for SMEs and startups."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background to-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h1 className="heading-primary text-primary">Market Insights & Analysis</h1>
                <p className="text-large text-muted-foreground">
                  Stay ahead with our latest research findings, industry trends, and actionable business insights.
                </p>
              </div>
            </div>
          </section>

          {/* Categories Filter */}
          <section className="py-8 border-b border-border">
            <div className="container-custom">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <Card key={index} className="card-professional group cursor-pointer">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{article.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between group-hover:bg-accent/10 transition-colors"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" className="btn-outline">
                  Load More Articles
                </Button>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="heading-secondary text-primary">Stay Updated</h2>
                <p className="text-large text-muted-foreground">
                  Get the latest market insights and research findings delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <Button className="btn-accent">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Articles;