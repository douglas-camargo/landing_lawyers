import { abrirWhatsApp } from '../utils/deviceUtils';
import { 
  services, 
  quickLinks, 
  socialLinks, 
  contactInfo, 
  legalLinks 
} from '../data/footer';

export const useFooter = () => {
  const openWhatsApp = () => {
    const phoneNumber = '34900123456';
    const message = 'Hola, me gustaría obtener más información sobre sus servicios legales.';
    abrirWhatsApp(phoneNumber, message);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    services,
    quickLinks,
    socialLinks,
    contactInfo,
    legalLinks,
    openWhatsApp,
    scrollToSection
  };
};
