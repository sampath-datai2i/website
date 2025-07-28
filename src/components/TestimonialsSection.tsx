import React from "react";

const testimonials = [
  {
    name: "Priya S.",
    company: "Acme Corp",
    quote: "Datai2i transformed our AI strategy. Their expertise is unmatched!",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "John D.",
    company: "Tech Innovators",
    quote: "The team delivered results beyond our expectations. Highly recommended.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Amit P.",
    company: "RetailX",
    quote: "Our data science workflow is now seamless and scalable.",
    img: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Sara L.",
    company: "FinEdge",
    quote: "Professional, responsive, and truly AI experts.",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  },
];

const CARD_WIDTH = 340;

const TestimonialsSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#3D377A' }}>What Our Clients Say</h2>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex items-center gap-10"
            style={{
              animation: 'partner-marquee 30s linear infinite',
              minWidth: '200%',
            }}
          >
            {testimonials.concat(testimonials).map((t, idx) => (
              <div key={t.name + idx} className="px-4" style={{ minWidth: CARD_WIDTH, maxWidth: CARD_WIDTH }}>
                <div className="bg-[#A17CDD] rounded-xl shadow-lg p-6 w-full flex flex-col items-center justify-center overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover border-4 border-white mb-3 shadow" />
                  <p className="text-white text-base md:text-lg italic mb-3 text-center">"{t.quote}"</p>
                  <div className="text-white font-semibold text-sm md:text-base text-center">{t.name}</div>
                  <div className="text-white text-xs md:text-sm opacity-80 text-center">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 