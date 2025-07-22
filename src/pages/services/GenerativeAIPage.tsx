import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, MessageSquare, Image, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GenerativeAIPage = () => {
  const aiCapabilities = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Conversational AI",
      description: "Build intelligent chatbots and virtual assistants that understand and respond naturally."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Content Generation",
      description: "Automate content creation for marketing, documentation, and communication."
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Multimodal AI",
      description: "Integrate text, image, and voice processing for comprehensive AI solutions."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Custom AI Models",
      description: "Develop domain-specific AI models tailored to your unique business requirements."
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
              Generative{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore innovative generative AI solutions to transform how your 
              business operates, creates content, and engages with customers.
            </p>
            <Button variant="primary" size="lg" className="group">
              Explore AI Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">AI Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Harness the power of generative AI to automate processes and create new possibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-purple transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-primary mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {capability.description}
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Real-World Applications</h2>
            <p className="text-lg text-muted-foreground">
              See how organizations are leveraging generative AI for business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Service",
                description: "AI-powered support that understands context and provides personalized responses."
              },
              {
                title: "Content Marketing",
                description: "Generate compelling marketing content that resonates with your target audience."
              },
              {
                title: "Process Automation",
                description: "Automate complex workflows with intelligent AI agents."
              }
            ].map((useCase, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {useCase.description}
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
            Ready to Innovate with Generative AI?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Transform your business with cutting-edge AI solutions.
          </p>
          <Button variant="primary" size="lg">
            Start AI Innovation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenerativeAIPage;