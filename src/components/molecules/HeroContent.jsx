import React from 'react';
import { MessageCircle, Shield, Award, Users } from 'lucide-react';
import Button from '../atoms/Button';
import StatCard from '../atoms/StatCard';
import ComponenteSvg from '../atoms/ComponenteSvg';

const HeroContent = ({ onWhatsAppClick, onServicesClick }) => {
  const stats = [
    { icon: Shield, value: '1000+', label: 'Casos Ganados' },
    { icon: Award, value: '25+', label: 'Años Experiencia' },
    { icon: Users, value: '98%', label: 'Satisfacción' }
  ];

  return (
    <div className="text-white space-y-8 animate-fade-in-up">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Justicia y 
          <span className="text-yellow-400"> Excelencia</span>
          <br />Legal
        </h1>
        <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
          Con más de 25 años de experiencia, ofrecemos representación legal excepcional 
          y soluciones estratégicas para proteger sus intereses.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={onWhatsAppClick}
          variant="primary"
          size="lg"
          className="bg-green-500 hover:bg-green-400 flex items-center justify-center space-x-2"
        >
          <ComponenteSvg tipo="whatsapp" cssSvg={"w-[25px] h-[25px]"} />
          <span>Consulta por WhatsApp</span>
        </Button>
        <Button
          onClick={onServicesClick}
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold"
        >
          Ver Servicios
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-600">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
