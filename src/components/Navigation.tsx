import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import v4cLogo from "@/assets/v4c-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    {
      label: "Services",
      items: [
        "AI Strategy & Advisory",
        "Platform Deploy & Operate", 
        "MLOps & AI Governance",
        "Data Science & Machine Learning",
        "Generative AI",
        "Data & AI Governance",
        "Training & Enablement"
      ]
    },
    {
      label: "Solutions",
      items: [
        "Migration Services",
        "Dataiku Solutions",
        "Databricks Solutions",
        "Custom AI Solutions"
      ]
    },
    {
      label: "Industries", 
      items: [
        "Financial Services",
        "Retail & Consumer Goods",
        "Manufacturing",
        "Healthcare",
        "Technology"
      ]
    },
    {
      label: "Insights",
      items: [
        "Thought Leadership",
        "Case Studies", 
        "Whitepapers",
        "Blog"
      ]
    },
    {
      label: "Company",
      items: [
        "About Us",
        "Our Team",
        "Careers",
        "Contact"
      ]
    }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={v4cLogo} alt="V4C.ai" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="nav" className="flex items-center gap-1">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card border-border">
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem} className="text-card-foreground hover:bg-muted">
                      {subItem}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="primary" size="default">
              Book a Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
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
                    <div key={subItem} className="text-muted-foreground px-6 py-1 text-sm hover:text-card-foreground cursor-pointer">
                      {subItem}
                    </div>
                  ))}
                </div>
              ))}
              <div className="pt-4">
                <Button variant="primary" className="w-full">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;