import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={v4cLogo} alt="V4C.ai" className="h-8 w-auto" />
            </Link>
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
                    <DropdownMenuItem key={subItem.name} className="text-card-foreground hover:bg-muted">
                      <Link to={subItem.path} className="w-full">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact-us">
              <Button variant="primary" size="default">
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