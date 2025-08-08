import React from 'react';
import TestimonialCard from '../atoms/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Cliente - Derecho Familiar',
      content: 'El equipo de LexFirm me ayudó durante un proceso de divorcio muy complicado. Su profesionalismo y empatía hicieron toda la diferencia. Recomiendo totalmente sus servicios.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-15'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'CEO - Empresa Tecnológica',
      content: 'Como empresa, necesitábamos asesoría legal especializada. LexFirm nos proporcionó soluciones estratégicas que protegieron nuestros intereses y facilitaron nuestro crecimiento.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-10'
    },
    {
      name: 'Ana Martínez',
      role: 'Cliente - Accidente de Tráfico',
      content: 'Después de mi accidente, no sabía qué hacer. Los abogados de LexFirm me guiaron en todo el proceso y lograron una indemnización justa. Excelente trabajo.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-05'
    },
    {
      name: 'Luis Fernández',
      role: 'Cliente - Derecho Laboral',
      content: 'Fui despedido injustamente y LexFirm luchó por mis derechos. Su experiencia en derecho laboral fue fundamental para resolver mi caso favorablemente.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2023-12-20'
    },
    {
      name: 'Sofía Jiménez',
      role: 'Cliente - Derecho Penal',
      content: 'En un momento muy difícil de mi vida, LexFirm me brindó la defensa legal que necesitaba. Su dedicación y conocimiento del derecho penal fueron excepcionales.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2023-12-15'
    },
    {
      name: 'Roberto Silva',
      role: 'Cliente - Derecho Civil',
      content: 'Tenía un conflicto complejo de propiedades. Los abogados de LexFirm analizaron mi caso con detalle y encontraron la solución perfecta. Muy satisfecho.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2023-12-10'
    }
  ];

  return (
    <section 
      id="testimonios" 
      className="py-20 bg-gray-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <section className="mt-20 bg-white rounded-2xl shadow-lg p-8" aria-labelledby="stats-heading">
          <h3 id="stats-heading" className="sr-only">Estadísticas del bufete</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" role="list" aria-label="Estadísticas de LexFirm">
            <div role="listitem">
              <div className="text-3xl font-bold text-blue-800 mb-2">98%</div>
              <div className="text-gray-600">Satisfacción del Cliente</div>
            </div>
            <div role="listitem">
              <div className="text-3xl font-bold text-blue-800 mb-2">1000+</div>
              <div className="text-gray-600">Casos Exitosos</div>
            </div>
            <div role="listitem">
              <div className="text-3xl font-bold text-blue-800 mb-2">25+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div role="listitem">
              <div className="text-3xl font-bold text-blue-800 mb-2">24/7</div>
              <div className="text-gray-600">Atención Disponible</div>
            </div>
          </div>
        </section>
      </div>

      {/* Structured Data for Reviews */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "LexFirm",
          "description": "Bufete de abogados especializado en derecho penal, corporativo y familiar en Madrid",
          "url": "https://landing-lawyers.vercel.app/",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": testimonials.map(testimonial => ({
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": testimonial.rating,
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": testimonial.name
            },
            "reviewBody": testimonial.content,
            "datePublished": testimonial.date,
            "itemReviewed": {
              "@type": "LegalService",
              "name": "LexFirm"
            }
          }))
        })}
      </script>
    </section>
  );
};

export default Testimonials;
