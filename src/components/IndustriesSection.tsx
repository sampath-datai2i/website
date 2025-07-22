import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, ShoppingCart, Factory, ArrowRight } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Building className="h-12 w-12" />,
      title: "Financial Services",
      description: "Reduce risk and improve decision-making with AI-powered insights for financial institutions.",
      link: "/industries/financial-services",
      gradient: "from-blue-accent/20 to-purple/20"
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "Retail & Consumer Goods", 
      description: "Enhance customer experiences and optimize operations with data-driven analytics.",
      link: "/industries/retail-consumer-goods",
      gradient: "from-purple/20 to-pink/20"
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Manufacturing",
      description: "Improve production efficiency and quality with AI solutions designed for manufacturers.",
      link: "/industries/manufacturing", 
      gradient: "from-pink/20 to-blue-accent/20"
    }
  ];

  return (
    <section className="py-20 bg-navy-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Your Industry Experts
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:shadow-purple hover:-translate-y-2 bg-gradient-card border-border overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${industry.gradient}`}></div>
              <CardContent className="p-8">
                <div className="text-primary mb-6 flex justify-center">
                  {industry.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-4 text-center">
                  {industry.title}
                </h3>
                
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="text-center">
                  <Button variant="link" className="group text-primary p-0">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;