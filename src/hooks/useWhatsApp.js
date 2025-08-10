import { abrirWhatsApp } from '../utils/deviceUtils';
import { whatsappConfig } from '../data/whatsapp';

export const useWhatsApp = () => {
  const defaultPhoneNumber = whatsappConfig.defaultPhoneNumber;

  const openWhatsApp = (phoneNumber = defaultPhoneNumber, message = '') => {
    abrirWhatsApp(phoneNumber, message);
  };

  const openConsultation = () => {
    const message = whatsappConfig.messages.consultation;
    openWhatsApp(defaultPhoneNumber, message);
  };

  const openServiceConsultation = (serviceName) => {
    const message = whatsappConfig.messages.service(serviceName);
    openWhatsApp(defaultPhoneNumber, message);
  };

  const openAboutConsultation = () => {
    const message = whatsappConfig.messages.about;
    openWhatsApp(defaultPhoneNumber, message);
  };

  const openContactConsultation = () => {
    const message = whatsappConfig.messages.contact;
    openWhatsApp(defaultPhoneNumber, message);
  };

  return {
    openWhatsApp,
    openConsultation,
    openServiceConsultation,
    openAboutConsultation,
    openContactConsultation,
    defaultPhoneNumber
  };
};
