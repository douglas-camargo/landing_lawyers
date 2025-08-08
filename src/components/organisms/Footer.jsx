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
    { name: 'Facebook', href: 'https://www.facebook.com', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'Instagram', href: 'https://www.instagram.com', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin }
  ];

  return (
    <footer 
      id="contacto" 
      className="bg-gray-900 text-white"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <section className="space-y-6">
            <Logo size="lg" className="text-white" />
            <p className="text-gray-400 leading-relaxed">
              Más de 25 años de experiencia en el sector legal, 
              ofreciendo servicios de alta calidad y resultados probados.
            </p>
            <nav className="flex space-x-4" aria-label="Redes sociales">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded p-2 hover:bg-gray-800"
                  aria-label={`Síguenos en ${social.name} (se abre en nueva pestaña)`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Síguenos en ${social.name}`}
                >
                  <social.icon size={20} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </section>

          {/* Services */}
          <nav className="space-y-6" aria-labelledby="services-heading">
            <h3 id="services-heading" className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-3" role="list">
              {services.map((service, index) => (
                <li key={index} role="listitem">
                  <FooterLink href={service.href}>
                    {service.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav className="space-y-6" aria-labelledby="quick-links-heading">
            <h3 id="quick-links-heading" className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link, index) => (
                <li key={index} role="listitem">
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                    type="button"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <section className="space-y-6" aria-labelledby="contact-heading">
            <h3 id="contact-heading" className="text-lg font-semibold">Contacto</h3>
            <address className="space-y-4 not-italic">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-gray-400">Teléfono</p>
                  <a href="tel:+34900123456" className="text-white hover:text-blue-400 transition-colors">
                    +34 900 123 456
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:info@lexfirm.es" className="text-white hover:text-blue-400 transition-colors">
                    info@lexfirm.es
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-gray-400">Dirección</p>
                  <p className="text-white">
                    Calle Gran Vía, 123<br />
                    28013 Madrid, España
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-gray-400">Horario</p>
                  <p className="text-white">
                    Lun - Vie: 9:00 - 18:00<br />
                    Sáb: 9:00 - 14:00
                  </p>
                </div>
              </div>
            </address>

            <Button
              onClick={openWhatsApp}
              variant="primary"
              size="sm"
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Consulta Gratuita
            </Button>
          </section>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 LexFirm. Todos los derechos reservados.
            </p>
            <nav className="flex space-x-6 text-sm" aria-label="Enlaces legales">
              <FooterLink href="/privacidad">Política de Privacidad</FooterLink>
              <FooterLink href="/terminos">Términos de Servicio</FooterLink>
              <FooterLink href="/cookies">Cookies</FooterLink>
            </nav>
          </div>
        </div>
      </div>

      {/* Structured Data for Contact Information */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "LexFirm",
          "description": "Bufete de abogados especializado en derecho penal, corporativo y familiar en Madrid",
          "url": "https://landing-lawyers.vercel.app/",
          "telephone": "+34-900-123-456",
          "email": "info@lexfirm.es",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Calle Gran Vía 123",
            "addressLocality": "Madrid",
            "postalCode": "28013",
            "addressCountry": "ES"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.4168,
            "longitude": -3.7038
          },
          "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
          "priceRange": "€€",
          "areaServed": "Madrid, España",
          "sameAs": [
            "https://www.facebook.com/lexfirm.abogados",
            "https://twitter.com/lexfirm_legal",
            "https://www.instagram.com/lexfirm.abogados",
            "https://www.linkedin.com/company/lexfirm-abogados"
          ]
        })}
      </script>
    </footer>
  );
};

export default Footer;
