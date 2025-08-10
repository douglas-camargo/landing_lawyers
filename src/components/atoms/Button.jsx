import React from 'react';
import { useButton } from '../../hooks/useButton';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  type = 'button'
}) => {
  const { getButtonClasses } = useButton();
  
  const classes = getButtonClasses(variant, size, className, disabled);
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
