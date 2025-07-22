const PartnerSection = () => {
  // Mock certification data since we can't use original images
  const certifications = [
    "Data Engineer Professional",
    "Generative AI Engineer",
    "Machine Learning Engineer", 
    "Data Analyst Associate",
    "Spark Developer",
    "AI Specialist",
    "AI Consultant Associate",
    "AI Consultant Advanced",
    "AI Consultant",
    "AI Specialist Seller"
  ];

  return (
    <section className="py-20 bg-navy-medium relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Partner badges */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-4 p-6 bg-gradient-card rounded-2xl border border-border">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <div className="w-16 h-16 bg-blue-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-accent font-bold text-xl">DB</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Your AI and Data 
              <span className="bg-gradient-primary bg-clip-text text-transparent block">
                Transformation Experts
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We partner with organizations to reimagine what's possible with data—combining 
              deep expertise in Dataiku and Databricks with a strategic, solutions-driven 
              approach to solve complex challenges, uncover new opportunities, and turn data 
              into a powerful competitive advantage.
            </p>
          </div>

          {/* Right side - Strategic Partner content */}
          <div className="bg-gradient-card p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Your Strategic Platform Partner
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              v4c.ai is a trusted Dataiku Select Partner and Databricks Delivery Partner, 
              committed to helping businesses harness the full power of AI and machine learning. 
              With deep expertise in AI strategy, data engineering, data centralization, and 
              governance, we guide organizations through every stage of their data journey - 
              from implementation to optimization.
            </p>
            
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-4">
                Our Certifications
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-3 bg-background/50 rounded-lg border border-border text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {cert.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;