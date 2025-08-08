import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const ServiceCard = ({ service, onConsultClick, className = '' }) => {
  const { icon: Icon, title, description, features } = service;

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${className}`}>
      <div className="p-8">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 mx-auto">
          <Icon className="h-8 w-8 text-blue-800" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 text-center">
          {description}
        </p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <ArrowRight className="h-4 w-4 text-blue-800 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          onClick={onConsultClick}
          variant="primary"
          className="w-full"
        >
          Consultar por WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
