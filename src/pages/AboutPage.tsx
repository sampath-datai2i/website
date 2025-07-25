import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Heart, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Partnership",
      description: "We build lasting partnerships with our clients, acting as trusted advisors on their AI journey."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex challenges."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "100+", label: "Certified Experts" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">datai2i</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We are a team of AI and data experts dedicated to helping organizations 
              transform their data into strategic assets that drive innovation and competitive advantage.
            </p>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At datai2i, we believe that every organization has the potential to harness the 
                power of artificial intelligence and data to transform their business. Our mission 
                is to make AI accessible, practical, and impactful for organizations of all sizes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine deep technical expertise with strategic business insight to deliver 
                solutions that not only work but create lasting value for our clients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gradient-card border-border text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <p className="text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 bg-navy-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border text-center">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help transform your organization with AI.
          </p>
          <Button variant="primary" size="lg" className="group">
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;