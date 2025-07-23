const TrustedBySection = () => {
  const partnerLogos = [
    { src: '/barraiser.png', alt: 'Barraiser' },
    { src: '/candarine.png', alt: 'Candarine' },
    { src: '/csir.png', alt: 'CSIR' },
    { src: '/dreambot.png', alt: 'Dreambot' },
    { src: '/groov.png', alt: 'Groov' },
    { src: '/liberin.png', alt: 'Liberin' },
    { src: '/tera.png', alt: 'Terasoft' },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>Our Trusted Partners</h2>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex items-center gap-10 whitespace-nowrap"
            style={{
              animation: 'partner-marquee 30s linear infinite',
              minWidth: '200%',
            }}
          >
            {partnerLogos.concat(partnerLogos).map((logo, idx) => (
              <div key={logo.alt + idx} className="flex items-center justify-center h-36 px-8">
                <img src={logo.src} alt={logo.alt} className={logo.alt === 'Dreambot' ? 'max-h-48 max-w-80 w-auto h-auto object-contain' : 'max-h-32 max-w-60 w-auto h-auto object-contain'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;