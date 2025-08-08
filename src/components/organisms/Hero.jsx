import React from 'react';
import HeroContent from '../molecules/HeroContent';
import { abrirWhatsApp } from '../../utils/deviceUtils';

const Hero = () => {
  const openWhatsApp = () => {
    const phoneNumber = '34900123456';
    const message = 'Hola, me gustaría solicitar una consulta legal gratuita.';
    abrirWhatsApp(phoneNumber, message);
  };

  const scrollToServices = () => {
    document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20c0-11.046-8.954-20-20-20z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <HeroContent 
            onWhatsAppClick={openWhatsApp}
            onServicesClick={scrollToServices}
          />

          {/* Right Content - Image/Visual */}
          <div className="relative animate-fade-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Abogado profesional"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-blue-900 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm font-medium">Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
