import React from 'react';
import { Scale } from 'lucide-react';

const Logo = ({ size = 'md', className = '', onClick }) => {
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

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Scroll al inicio de la página por defecto
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <div 
      className={`flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity duration-200 ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label="Ir al inicio"
    >
      <Scale className={`${sizes[size]} text-blue-800`} />
      <span className={`font-bold text-blue-800 ${textSizes[size]}`}>LexFirm</span>
    </div>
  );
};

export default Logo;
