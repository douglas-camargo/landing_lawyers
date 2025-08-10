import React from 'react';
import { CheckCircle } from 'lucide-react';
import FeatureCard from '../atoms/FeatureCard';
import Button from '../atoms/Button';
import { 
  containerMax, 
  gridResponsive, 
  textHeading, 
  textBody, 
  spacingList, 
  iconSmall 
} from '../../utils/tailwindClasses';
import { useAbout } from '../../hooks/useAbout';

const About = () => {
  const { features, values, openWhatsApp } = useAbout();

  return (
    <section 
      id="about" 
      className="py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className={containerMax}>
        <div className={`${gridResponsive} items-center`}>
          {/* Left Content */}
          <article className="space-y-8">
            <header className="space-y-4">
              <h2 
                id="about-heading"
                className="text-4xl font-bold text-gray-900"
              >
                Sobre <span className="text-blue-800">LexFirm</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos un bufete de abogados comprometido con la excelencia legal y la defensa 
                integral de los derechos de nuestros clientes.
              </p>
            </header>

            <div className="space-y-4">
              <p className={textBody}>
                Con más de 25 años de experiencia en el sector legal, hemos construido una 
                reputación sólida basada en resultados exitosos, atención personalizada y 
                un compromiso inquebrantable con la justicia.
              </p>

              <p className={textBody}>
                Nuestro equipo de abogados especializados trabaja con dedicación para 
                ofrecer soluciones legales efectivas y estratégicas, adaptadas a las 
                necesidades específicas de cada caso.
              </p>
            </div>

            {/* Values */}
            <section className="space-y-3">
              <h3 className={textHeading}>Nuestros Valores</h3>
              <ul className={`grid grid-cols-1 sm:grid-cols-2 ${spacingList}`} role="list">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className={`${iconSmall} text-green-500 flex-shrink-0`} aria-hidden="true" />
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </section>

            <Button
              onClick={openWhatsApp}
              variant="primary"
              size="lg"
              className="mt-6"
            >
              Consultar Ahora
            </Button>
          </article>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Image */}
            <figure className="relative">
              <img 
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipo de abogados profesionales de LexFirm trabajando en casos legales"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="sr-only">Equipo de abogados de LexFirm</figcaption>
              <div className="absolute -bottom-6 -right-6 bg-blue-800 text-white p-6 rounded-xl shadow-lg" role="status" aria-label="Estadísticas de casos exitosos">
                <div className="text-center">
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-sm">Casos Exitosos</div>
                </div>
              </div>
            </figure>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6" role="list" aria-label="Características del bufete">
              {features.map((feature, index) => (
                <div key={index} role="listitem">
                  <FeatureCard
                    feature={feature}
                    className="bg-gray-50 rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

            </section>
    );
};

export default About;
