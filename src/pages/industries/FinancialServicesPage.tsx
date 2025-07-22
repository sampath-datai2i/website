import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Shield, BarChart3, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FinancialServicesPage = () => {
  const solutions = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Risk Analytics",
      description: "Advanced risk modeling and real-time risk assessment using AI and machine learning."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Fraud Detection",
      description: "AI-powered fraud detection systems that adapt to emerging threats and patterns."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Customer Analytics",
      description: "Deep customer insights for personalized products and improved customer experience."
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring and reporting for financial regulations."
    }
  ];

  const useCases = [
    {
      title: "Credit Risk Assessment",
      description: "Implement AI models to assess credit risk more accurately and efficiently.",
      impact: "40% reduction in default rates"
    },
    {
      title: "Algorithmic Trading",
      description: "Deploy machine learning algorithms for automated trading strategies.",
      impact: "25% improvement in trading performance"
    },
    {
      title: "Customer Segmentation",
      description: "Use advanced analytics to segment customers for targeted products.",
      impact: "30% increase in conversion rates"
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
              Financial{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Services AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Reduce risk and improve decision-making with AI-powered insights 
              specifically designed for financial institutions and regulatory environments.
            </p>
            <Button variant="primary" size="lg" className="group">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">AI Solutions for Finance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized AI solutions that address the unique challenges of financial services.
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

      {/* Use Cases */}
      <section className="py-20 bg-navy-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Real results from financial institutions using our AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {useCase.description}
                  </p>
                  <div className="text-primary font-semibold">
                    {useCase.impact}
                  </div>
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
            Transform Your Financial Services
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Implement AI solutions that reduce risk and drive profitability.
          </p>
          <Button variant="primary" size="lg">
            Schedule Financial AI Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialServicesPage;