import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Database, ArrowUpRight, Shield, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MigrationPage = () => {
  const migrationSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current data infrastructure and migration requirements."
    },
    {
      step: "02", 
      title: "Data Mapping & Architecture",
      description: "Design optimal data architecture and create detailed migration roadmaps."
    },
    {
      step: "03",
      title: "Migration Execution",
      description: "Seamless data migration with minimal downtime and maximum data integrity."
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Rigorous testing to ensure data accuracy and system performance."
    },
    {
      step: "05",
      title: "Go-Live & Support",
      description: "Smooth transition to new platform with ongoing support and optimization."
    }
  ];

  const benefits = [
    "Reduced infrastructure costs",
    "Improved data processing speed",
    "Enhanced scalability", 
    "Better data governance",
    "Increased ROI on data investments"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Platform Deploy &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Operate
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Simplify your transition from legacy systems to Dataiku or Databricks 
              and unlock more advanced data capabilities with our proven migration methodology.
            </p>
            <Button variant="primary" size="lg" className="group">
              Start Migration
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Migration Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven 5-step approach to ensure successful platform migration with minimal risk.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {migrationSteps.map((step, index) => (
              <Card key={index} className="bg-gradient-card border-border relative">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                  {index < migrationSteps.length - 1 && (
                    <ArrowUpRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-primary h-6 w-6" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-navy-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Migrate with v4c.ai?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our migration experts have successfully transitioned hundreds of organizations 
                to modern data platforms, ensuring minimal disruption and maximum value.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border p-6 text-center">
                <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-card-foreground mb-2">500+</h3>
                <p className="text-muted-foreground">Successful Migrations</p>
              </Card>
              <Card className="bg-gradient-card border-border p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-card-foreground mb-2">99.9%</h3>
                <p className="text-muted-foreground">Data Integrity</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Modernize Your Data Platform?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you migrate to a modern, scalable data platform.
          </p>
          <Button variant="primary" size="lg">
            Get Migration Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MigrationPage;