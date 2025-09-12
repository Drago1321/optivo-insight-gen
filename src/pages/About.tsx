import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom text-center">
            <h1 className="heading-primary text-foreground mb-6">About Us</h1>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              We are dedicated to empowering small and medium enterprises with actionable market insights 
              that drive growth and informed decision-making across global markets.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Mission */}
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="heading-secondary">Our Mission</h2>
                <p className="text-muted-foreground">
                  To provide accessible, reliable, and comprehensive market research that enables SMEs 
                  to compete effectively in global markets and make data-driven business decisions.
                </p>
              </div>

              {/* Vision */}
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h2 className="heading-secondary">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be the leading partner for SMEs seeking market intelligence, fostering business 
                  growth and innovation through precise, actionable insights across Europe, US, and beyond.
                </p>
              </div>

              {/* Values */}
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-success" />
                </div>
                <h2 className="heading-secondary">Our Values</h2>
                <p className="text-muted-foreground">
                  Integrity, reliability, and client focus drive everything we do. We believe in 
                  transparent communication and delivering exceptional value to our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center justify-center mb-6">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h2 className="heading-secondary">Serving Happy Clients Globally</h2>
              <p className="text-large text-muted-foreground">
                We have successfully enabled hundreds of SMEs across Europe, the United States, 
                Australia, and Singapore to make informed business decisions through our customized 
                market research reports. Our commitment to quality and reliability has made us a 
                trusted partner for businesses seeking growth and market expansion.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Reports Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;