const TrustedBySection = () => {
  // Since we can't use the exact logos from the original site, we'll create placeholder company names
  const companies = [
    "Baltimore", "ACME Corp", "System1", "Murata", "Swyftt",
    "Migo", "Pennant", "TechFlow", "DataCore", "InnovateLab"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-muted-foreground">Trusted by</h2>
        </div>
        
        {/* Infinite scrolling logo carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-16">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                <div className="h-12 px-8 flex items-center justify-center">
                  <span className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {company}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {companies.map((company, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 flex items-center justify-center">
                <div className="h-12 px-8 flex items-center justify-center">
                  <span className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;