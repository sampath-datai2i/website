import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// Remove heroBackground import
// import heroBackground from "@/assets/hero-background.jpg";
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
          backgroundColor: '#F5F5F5',
          backgroundImage: 'none',
        }}
      />
      {/* Salt Overlay */}
      <img src="/bg.avif" alt="decorative salt" className="absolute inset-0 z-10 w-full h-full object-cover pointer-events-none opacity-40" />
      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Empowering{" "}
            <span className="text-primary">AI-Driven</span>
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
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;