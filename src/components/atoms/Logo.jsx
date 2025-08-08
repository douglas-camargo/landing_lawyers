import React from 'react';
import { Scale } from 'lucide-react';

const Logo = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };
  
  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Scale className={`${sizes[size]} text-blue-800`} />
      <span className={`font-bold text-blue-800 ${textSizes[size]}`}>LexFirm</span>
    </div>
  );
};

export default Logo;
