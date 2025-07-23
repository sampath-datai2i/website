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
    <section className="py-20 bg-white dark:bg-background relative border-2 border-[#1e293b]">
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
            {/* Removed: Heading and description for 'Your AI and Data Transformation Experts' */}
          </div>
          {/* Removed: Right side - Strategic Partner content and certifications */}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;