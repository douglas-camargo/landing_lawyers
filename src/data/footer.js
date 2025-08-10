// Datos del footer (enlaces, contacto, redes sociales)

import { icons } from './icons';

export const services = [
  { name: 'Derecho Penal', href: '#services' },
  { name: 'Derecho Corporativo', href: '#services' },
  { name: 'Derecho Familiar', href: '#services' },
  { name: 'Derecho Laboral', href: '#services' },
  { name: 'Accidentes de Tráfico', href: '#services' },
  { name: 'Derecho Civil', href: '#services' }
];

export const quickLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Testimonios', href: '#testimonials' },
  { name: 'Contacto', href: '#contact' }
];

export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/lexfirm',
    icon: icons.Facebook
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/lexfirm',
    icon: icons.Twitter
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/lexfirm',
    icon: icons.Instagram
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/lexfirm',
    icon: icons.Linkedin
  }
];

export const contactInfo = {
  phone: '+34 900 123 456',
  email: 'info@lexfirm.es',
  address: {
    street: 'Calle Gran Vía, 123',
    city: '28013 Madrid, España'
  },
  schedule: {
    weekdays: 'Lun - Vie: 9:00 - 18:00',
    saturday: 'Sáb: 9:00 - 14:00'
  }
};

export const legalLinks = [
  { name: 'Política de Privacidad', href: '/privacidad' },
  { name: 'Términos de Servicio', href: '/terminos' },
  { name: 'Cookies', href: '/cookies' }
];
