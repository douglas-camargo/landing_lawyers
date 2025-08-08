import React from 'react';

const FeatureCard = ({ feature, className = '' }) => {
  const { icon: Icon, title, description } = feature;

  return (
    <div className={`text-center p-6 ${className}`}>
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4 mx-auto">
        <Icon className="h-8 w-8 text-blue-800" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
