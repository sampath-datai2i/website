import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Factory, Cog, BarChart3, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ManufacturingPage = () => {
  const solutions = [
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Smart Manufacturing",
      description: "IoT-enabled manufacturing processes with real-time monitoring and optimization."
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Predictive Maintenance",
      description: "AI-powered maintenance scheduling to prevent equipment failures and reduce downtime."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Quality Control",
      description: "Automated quality inspection using computer vision and machine learning."
    },
    {
      icon: <AlertCircle className="h-8 w-8" />,
      title: "Production Planning",
      description: "Optimized production schedules based on demand forecasting and resource availability."
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
              Smart{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Manufacturing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Improve production efficiency and quality with AI solutions 
              specifically designed for modern manufacturing environments.
            </p>
            <Button variant="primary" size="lg" className="group">
              Explore Manufacturing AI
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Manufacturing Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced AI solutions to optimize every aspect of your manufacturing operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-purple transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-primary mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Benefits */}
      <section className="py-20 bg-navy-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Manufacturing Excellence</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: "30%", title: "Efficiency Gain", description: "Increased production efficiency" },
              { metric: "50%", title: "Downtime Reduction", description: "Less unplanned maintenance" },
              { metric: "25%", title: "Quality Improvement", description: "Fewer defective products" },
              { metric: "20%", title: "Cost Savings", description: "Reduced operational costs" }
            ].map((benefit, index) => (
              <Card key={index} className="bg-gradient-card border-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {benefit.metric}
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
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
            Modernize Your Manufacturing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Implement AI-driven solutions for smarter, more efficient manufacturing.
          </p>
          <Button variant="primary" size="lg">
            Start Manufacturing Transformation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManufacturingPage;