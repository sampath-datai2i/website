import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, GitBranch, Monitor, Settings, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MLOpsPage = () => {
  const mlopsServices = [
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Model Lifecycle Management",
      description: "End-to-end management of machine learning models from development to deployment and monitoring."
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Automated Monitoring",
      description: "Real-time monitoring and alerting for model performance, data drift, and system health."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "CI/CD for ML",
      description: "Automated testing, validation, and deployment pipelines for machine learning models."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Model Optimization",
      description: "Performance tuning and optimization to ensure models run efficiently at scale."
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
              MLOps &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Governance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Manage the entire machine learning lifecycle with end-to-end MLOps 
              services for model reliability, scalability, and governance.
            </p>
            <Button variant="primary" size="lg" className="group">
              Explore MLOps
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Comprehensive MLOps Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From model development to production deployment and ongoing maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mlopsServices.map((service, index) => (
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

      {/* MLOps Pipeline Visualization */}
      <section className="py-20 bg-navy-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">The MLOps Pipeline</h2>
            <p className="text-lg text-muted-foreground">
              Streamlined workflows for efficient model development and deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {["Data Prep", "Model Training", "Validation", "Deployment"].map((stage, index) => (
              <Card key={index} className="bg-gradient-card border-border text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {stage}
                  </h3>
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
            Scale Your ML Operations
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Implement robust MLOps practices for reliable, scalable machine learning.
          </p>
          <Button variant="primary" size="lg">
            Start MLOps Implementation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MLOpsPage;