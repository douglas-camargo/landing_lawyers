import React from 'react';
import { iconContainer, iconLarge, textHeading, textBody, spacingText } from '../../utils/tailwindClasses';

const FeatureCard = ({ feature, className = '' }) => {
  const { icon: Icon, title, description } = feature;

  return (
    <div className={`text-center p-6 ${className}`}>
      <div className={`${iconContainer} mb-4 mx-auto`}>
        <Icon className={iconLarge} />
      </div>
      <h3 className={`${textHeading} ${spacingText}`}>{title}</h3>
      <p className={textBody}>{description}</p>
    </div>
  );
};

export default FeatureCard;
