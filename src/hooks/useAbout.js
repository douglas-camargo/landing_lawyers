import { abrirWhatsApp } from '../utils/deviceUtils';
import { features, values } from '../data/about';

export const useAbout = () => {
  const openWhatsApp = () => {
    const phoneNumber = '34900123456';
    const message = 'Hola, me gustaría conocer más sobre su bufete y servicios.';
    abrirWhatsApp(phoneNumber, message);
  };

  return {
    features,
    values,
    openWhatsApp
  };
};
