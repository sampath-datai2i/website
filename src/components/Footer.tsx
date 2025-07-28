import { Button } from "@/components/ui/button";
import datai2iLogo from "/datai2i.png";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "AI Strategy & Advisory",
        "Platform Deploy & Operate",
        "MLOps & AI Governance", 
        "Data Science & ML",
        "Generative AI",
        "Data & AI Governance",
        "Training & Enablement"
      ]
    },
    {
      title: "Solutions",
      links: [
        "Migration Services",
        "Dataiku Solutions", 
        "Databricks Solutions",
        "Custom AI Solutions"
      ]
    },
    {
      title: "Industries",
      links: [
        "Financial Services",
        "Retail & Consumer Goods",
        "Manufacturing",
        "Healthcare",
        "Technology"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "Contact",
        "Privacy Policy",
        "Terms of Service"
      ]
    }
  ];

  return (
    <footer className="w-full py-8" style={{ background: 'var(--footer-background)', color: 'var(--footer-foreground)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and CTA */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <img src={datai2iLogo} alt="Datai2i" className="h-28 w-auto object-contain mb-2" />
            <blockquote className="italic text-lg text-center mt-2 max-w-md" style={{color: '#A17CDD'}}>
              "Artificial Intelligence is not just a tool, but a partner in unlocking human potential."
            </blockquote>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-foreground font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm" style={{color: '#3D377A'}}>
              © 2025 Datai2i. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;