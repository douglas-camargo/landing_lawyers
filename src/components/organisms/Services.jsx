import React from 'react';
import ServiceCard from '../atoms/ServiceCard';
import { containerMax, textHeading, textBody } from '../../utils/tailwindClasses';
import { useServices } from '../../hooks/useServices';

const Services = () => {
  const { services, openWhatsApp } = useServices();

  return (
    <section 
      id="services" 
      className="py-20 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className={containerMax}>
        <header className="text-center mb-16 animate-fade-in-up">
          <h2 
            id="services-heading"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Nuestros Servicios Legales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios legales especializados, 
            adaptados a las necesidades específicas de cada cliente.
          </p>
        </header>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Lista de servicios legales"
        >
          {services.map((service, index) => (
            <div 
              key={service.slug}
              role="listitem"
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                service={service}
                onConsultClick={openWhatsApp}
              />
            </div>
          ))}
        </div>
      </div>

            </section>
    );
};

export default Services;
