import React from 'react';
import TestimonialCard from '../atoms/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Cliente - Derecho Familiar',
      content: 'El equipo de LexFirm me ayudó durante un proceso de divorcio muy complicado. Su profesionalismo y empatía hicieron toda la diferencia. Recomiendo totalmente sus servicios.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'CEO - Empresa Tecnológica',
      content: 'Como empresa, necesitábamos asesoría legal especializada. LexFirm nos proporcionó soluciones estratégicas que protegieron nuestros intereses y facilitaron nuestro crecimiento.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ana Martínez',
      role: 'Cliente - Accidente de Tráfico',
      content: 'Después de mi accidente, no sabía qué hacer. Los abogados de LexFirm me guiaron en todo el proceso y lograron una indemnización justa. Excelente trabajo.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Luis Fernández',
      role: 'Cliente - Derecho Laboral',
      content: 'Fui despedido injustamente y LexFirm luchó por mis derechos. Su experiencia en derecho laboral fue fundamental para resolver mi caso favorablemente.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sofía Jiménez',
      role: 'Cliente - Derecho Penal',
      content: 'En un momento muy difícil de mi vida, LexFirm me brindó la defensa legal que necesitaba. Su dedicación y conocimiento del derecho penal fueron excepcionales.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Roberto Silva',
      role: 'Cliente - Derecho Civil',
      content: 'Tenía un conflicto complejo de propiedades. Los abogados de LexFirm analizaron mi caso con detalle y encontraron la solución perfecta. Muy satisfecho.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros <span className="text-blue-800">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro. 
            Conozca las experiencias de quienes han confiado en LexFirm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">98%</div>
              <div className="text-gray-600">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">1000+</div>
              <div className="text-gray-600">Casos Exitosos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">25+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">24/7</div>
              <div className="text-gray-600">Atención Disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
