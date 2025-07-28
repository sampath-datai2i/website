import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import aiIllustration from "@/assets/ai-illustration.jpg";

const AIFeaturesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Custom Solutions for Lasting Impact",
      description: "From implementation to optimization, our AI and data solutions are designed specifically to fit your business, delivering measurable results and competitive advantage.",
      cta: "Get Started",
      link: "/services/generative-ai",
      image: aiIllustration
    },
    {
      title: "Accelerated Data Preparation", 
      description: "Optimize data preparation and cleaning to minimize manual work and maximize insight generation across Dataiku and Databricks environments.",
      cta: "Show Me How",
      link: "/services/data-governance",
      image: aiIllustration
    },
    {
      title: "Scalable Model Deployment",
      description: "Deploy and scale machine learning models with ease—ensuring consistent performance and reliability across your organization, powered by Dataiku and Databricks.",
      cta: "Learn More", 
      image: aiIllustration
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const currentFeature = features[currentSlide];

  return (
    <section className="py-20 bg-white dark:bg-background relative overflow-hidden border-2 border-[#1e293b]">
      {/* Background decoration removed for solid theme background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#685874'}}>
            AI and Machine Learning,{' '}
            <span style={{color: '#A08AB1'}}>Simplified</span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto" style={{color: '#685874'}}>
            Datai2i enables organizations to elevate their AI initiatives with strategic 
            Dataiku, Databricks, and generative AI solutions, driving measurable results 
            and competitive advantage.
          </p>
        </div>
        {/* Feature Slider */}
        <div className="relative">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6" style={{color: '#3D377A'}}>
                    {currentFeature.title}
                  </h3>
                  <p className="text-lg mb-8 leading-relaxed" style={{color: '#A17CDD'}}>
                    {currentFeature.description}
                  </p>
                  <div>
                    <Button variant="primary" size="lg" className="group">
                      {currentFeature.cta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
                {/* Image Side */}
                <div className="relative lg:order-last">
                  <img
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    className="w-full h-64 lg:h-full object-cover rounded-r-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-transparent rounded-r-lg"></div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-primary' : 'bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="text-muted-foreground hover:text-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;