import React from 'react';
import TestimonialCard from '../atoms/TestimonialCard';
import { containerMax, cardBase, spacingCard } from '../../utils/tailwindClasses';
import { useTestimonials } from '../../hooks/useTestimonials';

const Testimonials = () => {
  const { testimonials, stats } = useTestimonials();

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gray-50"
      aria-labelledby="testimonials-heading"
    >
      <div className={containerMax}>
        <header className="text-center mb-16">
          <h2 
            id="testimonials-heading"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Lo que dicen nuestros <span className="text-blue-800">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro. 
            Conozca las experiencias de quienes han confiado en LexFirm.
          </p>
        </header>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Testimonios de clientes"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              role="listitem"
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard
                testimonial={testimonial}
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <section className={`mt-20 ${cardBase} ${spacingCard}`} aria-labelledby="stats-heading">
          <h3 id="stats-heading" className="sr-only">Estadísticas del bufete</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" role="list" aria-label="Estadísticas de LexFirm">
            {stats.map((stat, index) => (
              <div key={index} role="listitem">
                <div className="text-3xl font-bold text-blue-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

            </section>
    );
};

export default Testimonials;
