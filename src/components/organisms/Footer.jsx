import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import Logo from '../atoms/Logo';
import FooterLink from '../atoms/FooterLink';
import Button from '../atoms/Button';
import { abrirWhatsApp } from '../../utils/deviceUtils';

const Footer = () => {
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

  const services = [
    { name: 'Derecho Penal', href: '#servicios' },
    { name: 'Derecho Corporativo', href: '#servicios' },
    { name: 'Derecho Familiar', href: '#servicios' },
    { name: 'Derecho Laboral', href: '#servicios' },
    { name: 'Accidentes de Tráfico', href: '#servicios' },
    { name: 'Derecho Civil', href: '#servicios' }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Testimonios', href: '#testimonios' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin }
  ];

  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo size="lg" className="text-white" />
            <p className="text-gray-400 leading-relaxed">
              Más de 25 años de experiencia en el sector legal, 
              ofreciendo servicios de alta calidad y resultados probados.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <FooterLink href={service.href}>
                    {service.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Teléfono</p>
                  <p className="text-white">+34 900 123 456</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">info@lexfirm.es</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Dirección</p>
                  <p className="text-white">Calle Mayor, 123<br />28001 Madrid, España</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Horario</p>
                  <p className="text-white">Lun - Vie: 9:00 - 18:00<br />Sáb: 9:00 - 14:00</p>
                </div>
              </div>
            </div>

            <Button
              onClick={openWhatsApp}
              variant="primary"
              size="sm"
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Consulta Gratuita
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 LexFirm. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <FooterLink href="#">Política de Privacidad</FooterLink>
              <FooterLink href="#">Términos de Servicio</FooterLink>
              <FooterLink href="#">Cookies</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
