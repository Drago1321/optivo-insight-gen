import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Users, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Optivo Research - Market Research for SMEs</title>
        <meta
          name="description"
          content="Learn about Optivo Research's mission to democratize market insights for small and medium businesses across India and beyond."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background to-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h1 className="heading-primary text-primary">About Us</h1>
                <p className="text-large text-muted-foreground">
                  We are a boutique market research firm dedicated to providing actionable insights 
                  that help small and medium enterprises make informed business decisions.
                </p>
              </div>
            </div>
          </section>

          {/* Mission, Vision, Values */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Mission */}
                <div className="card-professional text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="heading-secondary text-primary">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To democratize market insights for small and medium businesses.
                  </p>
                </div>

                {/* Vision */}
                <div className="card-professional text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Eye className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="heading-secondary text-primary">Our Vision</h3>
                  <p className="text-muted-foreground">
                    Enable data-driven decisions across India and beyond.
                  </p>
                </div>

                {/* Values */}
                <div className="card-professional text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="heading-secondary text-primary">Our Values</h3>
                  <p className="text-muted-foreground">
                    Integrity, accuracy, and client-centric approach in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
                <h2 className="heading-secondary text-primary">Why Choose Us</h2>
                <p className="text-large text-muted-foreground">
                  We understand the unique challenges faced by SMEs and deliver insights that matter.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">SME-Focused Experience</h4>
                  <p className="text-muted-foreground">
                    Deep understanding of small and medium enterprise needs and constraints.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">Global Insights</h4>
                  <p className="text-muted-foreground">
                    Access to international markets and trends across Europe, US, and beyond.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">Quality Assurance</h4>
                  <p className="text-muted-foreground">
                    Rigorous quality checks and verified data sources for reliable insights.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Reports Delivered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">98%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">150+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">25+</div>
                  <div className="text-muted-foreground">Countries Served</div>
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

export default About;