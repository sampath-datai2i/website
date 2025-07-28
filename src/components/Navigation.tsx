import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import datai2iLogo from "/datai2i.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    {
      label: "Services",
      items: [
        { name: "AI Strategy & Advisory", path: "/services/advisory" },
        { name: "Platform Deploy & Operate", path: "/services/migration" }, 
        { name: "MLOps & AI Governance", path: "/services/machine-learning-mlops" },
        { name: "Data Science & Machine Learning", path: "/services/machine-learning-mlops" },
        { name: "Generative AI", path: "/services/generative-ai" },
        { name: "Data & AI Governance", path: "/services/data-governance" },
        { name: "Training & Enablement", path: "/services/training" }
      ]
    },
    {
      label: "Solutions",
      items: [
        { name: "Migration Services", path: "/services/migration" },
        { name: "Dataiku Solutions", path: "/solutions/dataiku" },
        { name: "Databricks Solutions", path: "/solutions/databricks" },
        { name: "Custom AI Solutions", path: "/solutions/custom-ai" }
      ]
    },
    {
      label: "Industries", 
      items: [
        { name: "Financial Services", path: "/industries/financial-services" },
        { name: "Retail & Consumer Goods", path: "/industries/retail-consumer-goods" },
        { name: "Manufacturing", path: "/industries/manufacturing" },
        { name: "Healthcare", path: "/industries/healthcare" },
        { name: "Technology", path: "/industries/technology" }
      ]
    },
    {
      label: "Insights",
      items: [
        { name: "Thought Leadership", path: "/thought-leadership" },
        { name: "Case Studies", path: "/case-studies" }, 
        { name: "Whitepapers", path: "/resources/whitepapers" },
        { name: "Blog", path: "/blog" }
      ]
    },
    {
      label: "Company",
      items: [
        { name: "About Us", path: "/about" },
        { name: "Our Team", path: "/team" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact-us" }
      ]
    }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={datai2iLogo} alt="Datai2i" className="h-20 w-auto object-contain -my-4" />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <HoverCard key={item.label}>
                <HoverCardTrigger asChild>
                  <Button variant="nav" className="flex items-center gap-1 text-foreground text-lg hover:text-white hover:bg-purple-950 transition-transform transition-colors px-4 py-2 rounded-full hover:scale-110">
                    {item.label}
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-white border border-purple-500 shadow-xl rounded-xl p-4 animate-[fadeIn_0.2s_ease,slideIn_0.2s_ease] relative overflow-hidden">
                  {/* Decorative background pattern/gradient */}
                  <div className="absolute inset-0 pointer-events-none opacity-10" style={{background: 'linear-gradient(135deg, var(--purple-100), var(--white-100) 60%)'}} />
                  <div className="relative z-10 grid gap-2">
                    <h4 className="font-semibold text-card-foreground mb-2">{item.label}</h4>
                    <div className="grid gap-1">
                      {item.items.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          to={subItem.path} 
                          className="block text-muted-foreground hover:text-card-foreground hover:bg-purple-50 px-3 py-2 rounded-md text-sm transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact-us">
              <Button variant="primary" size="default" className="text-white text-lg">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground text-lg"
            >
              {isMenuOpen ? <X className="text-foreground text-lg" /> : <Menu className="text-foreground text-lg" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 border border-border">
              {navigationItems.map((item) => (
                <div key={item.label} className="py-2">
                  <div className="text-card-foreground font-medium px-3 py-2">
                    {item.label}
                  </div>
                  {item.items.map((subItem) => (
                    <Link key={subItem.name} to={subItem.path} className="block text-muted-foreground px-6 py-1 text-sm hover:text-card-foreground cursor-pointer">
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4">
                <Link to="/contact-us">
                  <Button variant="primary" className="w-full">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;