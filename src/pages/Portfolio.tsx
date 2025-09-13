import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, TrendingUp, Users, Target, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const sampleReports = [
    {
      title: "European E-commerce Market Analysis 2024",
      description: "Comprehensive 45-page report covering market size, key players, consumer trends, and growth opportunities across major European markets.",
      pages: 45,
      type: "Market Analysis"
    },
    {
      title: "SaaS Startup Market Entry Strategy",
      description: "Strategic roadmap for entering the North American SaaS market, including competitive landscape, pricing strategies, and go-to-market recommendations.",
      pages: 32,
      type: "Strategy Report"
    },
    {
      title: "Consumer Behavior in Post-Pandemic Retail",
      description: "In-depth analysis of changing consumer preferences and shopping behaviors, with actionable insights for retail businesses.",
      pages: 28,
      type: "Consumer Research"
    }
  ];

  const caseStudies = [
    {
      client: "TechStart Inc.",
      industry: "SaaS",
      challenge: "Needed market validation for their new project management tool before launching in Europe",
      approach: "Conducted comprehensive competitor analysis, target market sizing, and customer survey across 5 European countries",
      outcome: "Client successfully launched with 30% higher user acquisition than projected, securing $2M in Series A funding",
      metrics: ["30% higher user acquisition", "$2M Series A funding", "5 countries analyzed"]
    },
    {
      client: "EcoFashion Brand",
      industry: "Retail",
      challenge: "Struggling to differentiate in the crowded sustainable fashion market",
      approach: "Deep-dive consumer research, brand positioning analysis, and market gap identification study",
      outcome: "Repositioned brand successfully, leading to 45% increase in online sales and expanded retail partnerships",
      metrics: ["45% sales increase", "3 new retail partnerships", "Brand repositioning"]
    },
    {
      client: "HealthTech Startup",
      industry: "Healthcare",
      challenge: "Required regulatory and market insights for medical device launch in US market",
      approach: "Regulatory landscape analysis, stakeholder mapping, and go-to-market strategy development",
      outcome: "Accelerated FDA approval process by 6 months, achieved break-even within first year of launch",
      metrics: ["6 months faster approval", "Break-even in Year 1", "Regulatory compliance"]
    },
    {
      client: "Food & Beverage SME",
      industry: "FMCG",
      challenge: "Wanted to expand organic product line but unsure about market demand and pricing",
      approach: "Consumer preference study, price sensitivity analysis, and competitive benchmarking across target demographics",
      outcome: "Launched optimized product line with 25% higher margins and 60% faster market penetration",
      metrics: ["25% higher margins", "60% faster penetration", "Product optimization"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - Optivo Research - Our Work & Case Studies</title>
        <meta
          name="description"
          content="Explore our portfolio of market research reports and success stories. See how we've helped SMEs and startups make data-driven decisions."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background to-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h1 className="heading-primary text-primary">Our Portfolio</h1>
                <p className="text-large text-muted-foreground">
                  Discover how we've helped businesses make informed decisions with actionable market insights.
                </p>
              </div>
            </div>
          </section>

          {/* Sample Reports */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
                <h2 className="heading-secondary text-primary">Sample Reports</h2>
                <p className="text-large text-muted-foreground">
                  Download sample reports to see the quality and depth of our research.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {sampleReports.map((report, index) => (
                  <Card key={index} className="card-professional">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{report.type}</Badge>
                        <span className="text-sm text-muted-foreground">{report.pages} pages</span>
                      </div>
                      <CardTitle className="text-xl text-primary">{report.title}</CardTitle>
                      <CardDescription>{report.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full btn-outline group">
                        <Download className="h-4 w-4 mr-2" />
                        Download Sample
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
                <h2 className="heading-secondary text-primary">Success Stories</h2>
                <p className="text-large text-muted-foreground">
                  Real results from real clients who trusted us with their market research needs.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="card-professional">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{study.industry}</Badge>
                        <span className="text-sm font-medium text-primary">{study.client}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Challenge */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Target className="h-5 w-5 text-accent" />
                          <h4 className="font-semibold text-primary">Challenge</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">{study.challenge}</p>
                      </div>

                      {/* Approach */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-accent" />
                          <h4 className="font-semibold text-primary">Our Approach</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">{study.approach}</p>
                      </div>

                      {/* Outcome */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-accent" />
                          <h4 className="font-semibold text-primary">Results</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">{study.outcome}</p>
                      </div>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {study.metrics.map((metric, metricIndex) => (
                          <Badge key={metricIndex} variant="secondary" className="text-xs">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="heading-secondary text-primary">Ready to Get Started?</h2>
                <p className="text-large text-muted-foreground">
                  Let us help you make informed business decisions with actionable market insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/services#services-form'}
                    className="btn-accent"
                  >
                    Request Your Research Report
                  </Button>
                  <Button variant="outline" className="btn-outline">
                    Schedule a Consultation
                  </Button>
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

export default Portfolio;