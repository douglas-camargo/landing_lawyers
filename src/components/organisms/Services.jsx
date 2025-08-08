import React from 'react';
import { 
  Gavel, 
  Building2, 
  Users, 
  Heart, 
  Car, 
  Shield
} from 'lucide-react';
import ServiceCard from '../atoms/ServiceCard';
import { abrirWhatsApp } from '../../utils/deviceUtils';

const Services = () => {
  const services = [
    {
      icon: Gavel,
      title: 'Derecho Penal',
      description: 'Defensa especializada en casos penales con un enfoque estratégico y personalizado.',
      features: ['Delitos graves', 'Apelaciones', 'Defensa corporativa'],
      slug: 'derecho-penal'
    },
    {
      icon: Building2,
      title: 'Derecho Corporativo',
      description: 'Asesoría integral para empresas en todos los aspectos legales y regulatorios.',
      features: ['Contratos', 'Fusiones', 'Compliance'],
      slug: 'derecho-corporativo'
    },
    {
      icon: Users,
      title: 'Derecho Familiar',
      description: 'Acompañamiento sensible y profesional en asuntos familiares complejos.',
      features: ['Divorcios', 'Custodia', 'Adopciones'],
      slug: 'derecho-familiar'
    },
    {
      icon: Heart,
      title: 'Derecho Laboral',
      description: 'Protección de los derechos de trabajadores y empleadores.',
      features: ['Despidos', 'Acoso laboral', 'Negociación'],
      slug: 'derecho-laboral'
    },
    {
      icon: Car,
      title: 'Accidentes de Tráfico',
      description: 'Representación experta en casos de lesiones por accidentes vehiculares.',
      features: ['Indemnizaciones', 'Seguros', 'Peritajes'],
      slug: 'accidentes-trafico'
    },
    {
      icon: Shield,
      title: 'Derecho Civil',
      description: 'Soluciones legales para disputas civiles y protección patrimonial.',
      features: ['Contratos', 'Propiedades', 'Herencias'],
      slug: 'derecho-civil'
    }
  ];

  const openWhatsApp = () => {
    const phoneNumber = '34900123456';
    const message = 'Hola, me interesa obtener más información sobre sus servicios legales.';
    abrirWhatsApp(phoneNumber, message);
  };

  return (
    <section 
      id="servicios" 
      className="py-20 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Structured Data for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Servicios Legales de LexFirm",
          "description": "Servicios especializados en derecho penal, corporativo, familiar, laboral, accidentes de tráfico y civil",
          "itemListElement": services.map((service, index) => ({
            "@type": "Service",
            "position": index + 1,
            "name": service.title,
            "description": service.description,
            "url": `https://landing-lawyers.vercel.app/servicios/${service.slug}`,
            "provider": {
              "@type": "LegalService",
              "name": "LexFirm"
            },
            "serviceType": service.title,
            "areaServed": "Madrid, España"
          }))
        })}
      </script>
    </section>
  );
};

export default Services;
