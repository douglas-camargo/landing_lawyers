import React from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  Shield,
  CheckCircle,
  Target
} from 'lucide-react';
import FeatureCard from '../atoms/FeatureCard';
import Button from '../atoms/Button';
import { abrirWhatsApp } from '../../utils/deviceUtils';

const About = () => {
  const features = [
    {
      icon: Award,
      title: '25+ Años de Experiencia',
      description: 'Más de dos décadas defendiendo los derechos de nuestros clientes con excelencia y dedicación.'
    },
    {
      icon: Users,
      title: 'Equipo Especializado',
      description: 'Abogados expertos en diferentes áreas del derecho, trabajando en equipo para su caso.'
    },
    {
      icon: Clock,
      title: 'Atención 24/7',
      description: 'Disponibilidad total para atender sus consultas y emergencias legales en cualquier momento.'
    },
    {
      icon: Shield,
      title: 'Confidencialidad Total',
      description: 'Su privacidad es nuestra prioridad. Toda la información se maneja con absoluta confidencialidad.'
    }
  ];

  const values = [
    'Integridad y ética profesional',
    'Compromiso con el cliente',
    'Excelencia en el servicio',
    'Innovación legal',
    'Resultados probados',
    'Atención personalizada'
  ];

  const openWhatsApp = () => {
    const phoneNumber = '34900123456';
    const message = 'Hola, me gustaría conocer más sobre su bufete y servicios.';
    abrirWhatsApp(phoneNumber, message);
  };

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Sobre <span className="text-blue-800">LexFirm</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos un bufete de abogados comprometido con la excelencia legal y la defensa 
                integral de los derechos de nuestros clientes.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Con más de 25 años de experiencia en el sector legal, hemos construido una 
              reputación sólida basada en resultados exitosos, atención personalizada y 
              un compromiso inquebrantable con la justicia.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Nuestro equipo de abogados especializados trabaja con dedicación para 
              ofrecer soluciones legales efectivas y estratégicas, adaptadas a las 
              necesidades específicas de cada caso.
            </p>

            {/* Values */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">Nuestros Valores</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={openWhatsApp}
              variant="primary"
              size="lg"
              className="mt-6"
            >
              Consultar Ahora
            </Button>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipo de abogados"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-800 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-sm">Casos Exitosos</div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  feature={feature}
                  className="bg-gray-50 rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
