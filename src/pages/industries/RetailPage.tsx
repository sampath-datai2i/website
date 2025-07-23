import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, ShoppingCart, Package, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RetailPage = () => {
  const solutions = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Personalization",
      description: "AI-driven personalization engines that deliver unique experiences for every customer."
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Inventory Optimization",
      description: "Smart inventory management using predictive analytics and demand forecasting."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Pricing Intelligence",
      description: "Dynamic pricing strategies based on market conditions and customer behavior."
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Supply Chain Analytics",
      description: "End-to-end supply chain visibility and optimization with AI insights."
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
              Retail &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Consumer Goods
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Enhance customer experiences and optimize operations with data-driven 
              analytics tailored for retail and consumer goods companies.
            </p>
            <Button variant="primary" size="lg" className="group">
              Discover Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Retail AI Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your retail operations with AI-powered insights and automation.
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

      {/* Benefits Section */}
      <section className="py-20 bg-navy-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Measurable Results</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "35%", description: "Increase in customer satisfaction" },
              { metric: "25%", description: "Reduction in inventory costs" },
              { metric: "40%", description: "Improvement in conversion rates" }
            ].map((result, index) => (
              <Card key={index} className="bg-gradient-card border-border text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {result.metric}
                  </div>
                  <p className="text-muted-foreground">
                    {result.description}
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
            Revolutionize Your Retail Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Implement AI solutions that drive customer satisfaction and operational efficiency.
          </p>
          <Button variant="primary" size="lg">
            Start Retail Transformation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RetailPage;