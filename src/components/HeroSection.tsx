import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#f8fafc', // slate-50, a neutral light color
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Floating geometric elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-accent/20 rounded-lg transform rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-purple/30 rounded transform -rotate-12 animate-pulse delay-100"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-pink/20 rounded-lg transform rotate-45 animate-pulse delay-200"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-blue-accent/25 rounded transform -rotate-45 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-purple-light/40 rounded-full animate-pulse delay-400"></div>
        <div className="absolute top-1/3 right-5 w-10 h-10 bg-pink/30 rounded-full animate-pulse delay-500"></div>
      </div>
      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Empowering{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Driven
            </span>
            <br />
            Transformation
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Datai2i empowers organizations to turn data into a strategic asset. 
            Leveraging deep expertise in Dataiku, Databricks, and AI, we deliver 
            advanced solutions that transform data into a powerful driver of 
            innovation and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30"></div>
    </section>
  );
};

export default HeroSection;