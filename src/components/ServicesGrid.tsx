import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Database, 
  GitBranch, 
  Brain, 
  Sparkles, 
  Shield, 
  GraduationCap,
  MessageSquare 
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "AI Strategy & Advisory",
      description: "Create a robust data strategy and platform to meet your business goals.",
      link: "/services/advisory"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Platform Deploy & Operate", 
      description: "Simplify your transition from legacy systems to Dataiku or Databricks and unlock more advanced data capabilities.",
      link: "/services/migration"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "MLOps & AI Governance",
      description: "Manage the entire machine learning lifecycle with end-to-end MLOps services for model reliability.",
      link: "/services/machine-learning-mlops"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Data Science & Machine Learning",
      description: "Ensure your data is secure, compliant, and high-quality with tailored governance solutions.",
      link: "/services/machine-learning-mlops"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Generative AI",
      description: "Explore innovative generative AI solutions to transform how your business operates.",
      link: "/services/generative-ai"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data & AI Governance",
      description: "Ensure seamless Data and AI Governance, driving compliance, scalability, and trust in your insights.",
      link: "/services/data-governance"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Training & Enablement",
      description: "Empower your teams with datai2i's expert training in Dataiku and Databricks—accelerating AI adoption, unlocking data-driven insights, and driving operational excellence.",
      link: "/services/advisory"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Do You Have Any Questions?",
      description: "Book a Demo",
      link: "/contact-us",
      isSpecial: true
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-background relative">
      {/* Background with Dataiku branding effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-medium/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-black dark:text-foreground">
            Navigating Your Path to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI and Data Success
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer transition-all duration-300 hover:shadow-purple hover:-translate-y-2 ${
                service.isSpecial 
                  ? 'bg-gradient-primary text-white border-none' 
                  : 'bg-gradient-card border-border hover:border-primary/50'
              }`}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className={`mb-4 ${
                  service.isSpecial ? 'text-white' : 'text-primary'
                }`}>
                  {service.icon}
                </div>
                
                <h3 className={`text-lg font-semibold mb-3 ${
                  service.isSpecial ? 'text-white' : 'text-card-foreground'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm leading-relaxed flex-1 ${
                  service.isSpecial ? 'text-white/90' : 'text-muted-foreground'
                }`}>
                  {service.description}
                </p>

                {service.isSpecial && (
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                    >
                      Book a Demo
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;