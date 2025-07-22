import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, FileText, Newspaper } from "lucide-react";

const NewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const newsItems = [
    {
      type: "Press",
      icon: <Newspaper className="h-5 w-5" />,
      title: "v4c.ai Accelerates Databricks Expertise with 100 Certifications",
      description: "Reinforcing commitment to technical excellence and enterprise readiness"
    },
    {
      type: "eBook", 
      icon: <FileText className="h-5 w-5" />,
      title: "Dataiku And The Future of AI Governance",
      description: "Comprehensive guide to implementing effective AI governance frameworks"
    },
    {
      type: "eBook",
      icon: <FileText className="h-5 w-5" />,
      title: "From Alteryx to Dataiku: Migration Accelerator", 
      description: "Step-by-step guide for seamless platform migration"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <section className="py-16 bg-navy-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Latest News</h2>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {newsItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-gradient-card border-border">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center space-x-2 text-primary mb-4">
                            {item.icon}
                            <span className="text-sm font-medium">{item.type}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-card-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {item.description}
                          </p>
                          <Button variant="link" className="p-0 h-auto">
                            Read More →
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
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
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
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

export default NewsCarousel;