import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { 
  cardInteractive, 
  spacingCard, 
  iconContainer, 
  iconLarge, 
  textHeadingCenter, 
  textBodyCenter, 
  spacingText, 
  spacingList, 
  iconSmall 
} from '../../utils/tailwindClasses';

const ServiceCard = ({ service, onConsultClick, className = '' }) => {
  const { icon: Icon, title, description, features } = service;

  return (
    <div className={`${cardInteractive} ${className}`}>
      <div className={spacingCard}>
        <div className={`${iconContainer} mb-6 mx-auto`}>
          <Icon className={iconLarge} />
        </div>
        
        <h3 className={`${textHeadingCenter} ${spacingText}`}>
          {title}
        </h3>
        
        <p className={`${textBodyCenter} mb-6`}>
          {description}
        </p>

        <ul className={`${spacingList} mb-6`}>
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <ArrowRight className={`${iconSmall} mr-2 flex-shrink-0`} />
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
