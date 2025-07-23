import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

// Services Pages
import AdvisoryPage from "./pages/services/AdvisoryPage";
import MigrationPage from "./pages/services/MigrationPage";
import MLOpsPage from "./pages/services/MLOpsPage";
import GenerativeAIPage from "./pages/services/GenerativeAIPage";
import DataGovernancePage from "./pages/services/DataGovernancePage";

// Industries Pages
import FinancialServicesPage from "./pages/industries/FinancialServicesPage";
import RetailPage from "./pages/industries/RetailPage";
import ManufacturingPage from "./pages/industries/ManufacturingPage";

// Company Pages
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => {
  // Theme state
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Theme Toggle Button */}
          <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{
                background: 'var(--card)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '8px 12px',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark"
                ? <Moon size={20} color="#fff" />
                : <Sun size={20} color="#000" />}
            </button>
          </div>
          <Routes>
            <Route path="/" element={<Index />} />
          
            {/* Services Routes */}
            <Route path="/services/advisory" element={<AdvisoryPage />} />
            <Route path="/services/migration" element={<MigrationPage />} />
            <Route path="/services/machine-learning-mlops" element={<MLOpsPage />} />
            <Route path="/services/generative-ai" element={<GenerativeAIPage />} />
            <Route path="/services/data-governance" element={<DataGovernancePage />} />
            
            {/* Industries Routes */}
            <Route path="/industries/financial-services" element={<FinancialServicesPage />} />
            <Route path="/industries/retail-consumer-goods" element={<RetailPage />} />
            <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
            
            {/* Company Routes */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
