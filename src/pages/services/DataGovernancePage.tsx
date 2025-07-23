import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Lock, CheckCircle, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DataGovernancePage = () => {
  const governanceServices = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Security & Privacy",
      description: "Implement robust security measures and privacy controls to protect sensitive data."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Compliance Management",
      description: "Ensure compliance with regulations like GDPR, CCPA, and industry-specific requirements."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Data Quality Assurance",
      description: "Establish data quality standards and monitoring to ensure accuracy and reliability."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Access Control",
      description: "Implement role-based access controls and data stewardship programs."
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
              Data & AI{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Governance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ensure seamless Data and AI Governance, driving compliance, 
              scalability, and trust in your insights with comprehensive governance frameworks.
            </p>
            <Button variant="primary" size="lg" className="group">
              Implement Governance
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Governance Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Governance Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive governance frameworks to ensure data integrity, security, and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {governanceServices.map((service, index) => (
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

      {/* Governance Framework */}
      <section className="py-20 bg-navy-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Governance Framework</h2>
            <p className="text-lg text-muted-foreground">
              A structured approach to data and AI governance that scales with your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Policies", description: "Establish clear data policies and procedures" },
              { title: "Standards", description: "Define data quality and security standards" },
              { title: "Processes", description: "Implement governance workflows and controls" },
              { title: "Monitoring", description: "Continuous monitoring and compliance reporting" }
            ].map((step, index) => (
              <Card key={index} className="bg-gradient-card border-border text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
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
            Secure Your Data Assets
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Implement comprehensive governance to protect and optimize your data investments.
          </p>
          <Button variant="primary" size="lg">
            Start Governance Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataGovernancePage;