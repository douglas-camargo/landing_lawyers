import React, { useState } from 'react';
import { Star, Quote, User } from 'lucide-react';
import { cardBase, cardHover, spacingCard, textHeading, textBody, iconSmall } from '../../utils/tailwindClasses';

const TestimonialCard = ({ testimonial, className = '' }) => {
  const { name, role, content, rating, image } = testimonial;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={`${cardBase} ${cardHover} ${spacingCard} ${className}`}>
      <div className="flex items-center mb-6">
        <div className="flex-shrink-0 mr-4">
          {!imageError ? (
            <img 
              src={image} 
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div className="w-16 h-16 rounded-full border-4 border-blue-100 bg-blue-100 flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h4 className={textHeading}>{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
        <Quote className="text-blue-200 w-8 h-8 flex-shrink-0" />
      </div>
      
      <p className={`${textBody} italic`}>
        "{content}"
      </p>
    </div>
  );
};

export default TestimonialCard;
