import { 
  buttonBase, 
  buttonPrimary, 
  buttonSecondary, 
  buttonOutline, 
  buttonDanger, 
  buttonSizes, 
  disabledState 
} from '../utils/tailwindClasses';

export const useButton = () => {
  const variants = {
    primary: buttonPrimary,
    secondary: buttonSecondary,
    outline: buttonOutline,
    danger: buttonDanger
  };

  const getButtonClasses = (variant = 'primary', size = 'md', className = '', disabled = false) => {
    return `${buttonBase} ${variants[variant]} ${buttonSizes[size]} ${className} ${disabled ? disabledState : ''}`;
  };

  return {
    variants,
    getButtonClasses
  };
};
