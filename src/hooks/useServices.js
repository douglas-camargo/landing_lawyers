import { abrirWhatsApp } from '../utils/deviceUtils';
import { services } from '../data/services';

export const useServices = () => {
  const openWhatsApp = () => {
    const phoneNumber = '34900123456';
    const message = 'Hola, me interesa obtener más información sobre sus servicios legales.';
    abrirWhatsApp(phoneNumber, message);
  };



  return {
    services,
    openWhatsApp
  };
};
