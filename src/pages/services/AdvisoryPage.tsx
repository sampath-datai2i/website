import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Target, Users, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AdvisoryPage = () => {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "AI Strategy Development",
      description: "Develop comprehensive AI strategies aligned with your business objectives and market opportunities."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Technology Roadmapping",
      description: "Create detailed technology roadmaps for successful AI implementation and scaling."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Building & Training",
      description: "Build and train high-performing AI teams with the skills needed for success."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "ROI Assessment",
      description: "Measure and optimize the return on investment for your AI initiatives."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              AI Strategy &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Advisory
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Create a robust data strategy and platform to meet your business goals. 
              Our expert advisors help you navigate the AI landscape and build a 
              foundation for sustainable growth.
            </p>
            <Button variant="primary" size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Advisory Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive consulting services to accelerate your AI transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-purple transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our experts help you develop a winning AI strategy.
          </p>
          <Button variant="primary" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdvisoryPage;