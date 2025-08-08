import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, className = '' }) => {
  const { name, role, content, rating, image } = testimonial;

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 ${className}`}>
      <div className="flex items-center mb-6">
        <div className="flex-shrink-0 mr-4">
          <img 
            src={image} 
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
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
      
      <p className="text-gray-700 leading-relaxed italic">
        "{content}"
      </p>
    </div>
  );
};

export default TestimonialCard;
