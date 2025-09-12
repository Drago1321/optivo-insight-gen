import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Mail } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Market Research Analyst",
      location: "Remote (EU/US)",
      type: "Full-time",
      description: "Lead comprehensive market research projects for SME clients. Analyze industry trends, competitive landscapes, and consumer behavior to deliver actionable insights.",
      requirements: ["3+ years market research experience", "Advanced analytics skills", "Client-facing experience", "EU/US market knowledge"],
      email: "careers@optivorresearch.com"
    },
    {
      title: "Business Development Manager",
      location: "London, UK",
      type: "Full-time",
      description: "Drive new business acquisition across European markets. Build relationships with SMEs and develop strategic partnerships to expand our client base.",
      requirements: ["5+ years B2B sales experience", "SME market understanding", "Strong communication skills", "European market knowledge"],
      email: "careers@optivorresearch.com"
    },
    {
      title: "Data Research Specialist",
      location: "Remote",
      type: "Part-time",
      description: "Support research projects through data collection, analysis, and report preparation. Work with various databases and research methodologies.",
      requirements: ["2+ years research experience", "Data analysis proficiency", "Attention to detail", "Academic background preferred"],
      email: "careers@optivorresearch.com"
    },
    {
      title: "Client Success Manager",
      location: "New York, US",
      type: "Full-time",
      description: "Ensure client satisfaction and manage ongoing relationships with SME clients. Coordinate project delivery and identify growth opportunities.",
      requirements: ["3+ years client management", "Project coordination skills", "SME sector experience", "US market familiarity"],
      email: "careers@optivorresearch.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom text-center">
            <h1 className="heading-primary text-foreground mb-6">Join Our Team</h1>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Be part of a dynamic team that's empowering SMEs worldwide with actionable market insights. 
              We're looking for passionate professionals who share our commitment to excellence.
            </p>
          </div>
        </section>

        {/* Company Culture */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-6">Why Work With Us?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-semibold">Global Impact</h3>
                  <p className="text-muted-foreground">
                    Make a real difference in SME growth across international markets
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-semibold">Professional Growth</h3>
                  <p className="text-muted-foreground">
                    Continuous learning opportunities and career advancement
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h3 className="text-xl font-semibold">Work-Life Balance</h3>
                  <p className="text-muted-foreground">
                    Flexible working arrangements and supportive team environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Open Positions</h2>
              <p className="text-muted-foreground">
                Explore exciting career opportunities and join our growing team
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="card-professional">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                      <div>
                        <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="self-start sm:self-center">
                        Open
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{position.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button 
                        className="btn-accent"
                        onClick={() => window.location.href = `mailto:${position.email}?subject=Application for ${position.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the ${position.title} position. Please find my application details below.%0D%0A%0D%0ABest regards`}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {openPositions.length === 0 && (
              <Card className="card-professional text-center p-12">
                <h3 className="text-xl font-semibold mb-4">No Open Positions</h3>
                <p className="text-muted-foreground mb-6">
                  We don't have any open positions at the moment, but we're always looking for talented individuals.
                </p>
                <Button 
                  className="btn-outline"
                  onClick={() => window.location.href = 'mailto:careers@optivorresearch.com?subject=General Inquiry&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in potential opportunities at Optivo Research. Please let me know if any suitable positions become available.%0D%0A%0D%0ABest regards'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send General Inquiry
                </Button>
              </Card>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;