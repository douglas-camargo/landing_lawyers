import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock
} from 'lucide-react';
import Logo from '../atoms/Logo';
import FooterLink from '../atoms/FooterLink';
import Button from '../atoms/Button';
import { containerMax, iconSmall, spacingList } from '../../utils/tailwindClasses';
import { useFooter } from '../../hooks/useFooter';

const Footer = () => {
  const {
    services,
    quickLinks,
    socialLinks,
    contactInfo,
    legalLinks,
    openWhatsApp,
    scrollToSection
  } = useFooter();

  return (
    <footer 
      id="contact" 
      className="bg-gray-900 text-white"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className={`${containerMax} py-16`}>
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
            <ul className={`${spacingList}`} role="list">
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
            <ul className={`${spacingList}`} role="list">
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
                <Phone className={`${iconSmall} text-blue-400 flex-shrink-0 mt-1`} aria-hidden="true" />
                <div>
                  <p className="text-gray-400">Teléfono</p>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-white hover:text-blue-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className={`${iconSmall} text-blue-400 flex-shrink-0 mt-1`} aria-hidden="true" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-blue-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className={`${iconSmall} text-blue-400 flex-shrink-0 mt-1`} aria-hidden="true" />
                <div>
                  <p className="text-gray-400">Dirección</p>
                  <p className="text-white">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.city}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className={`${iconSmall} text-blue-400 flex-shrink-0 mt-1`} aria-hidden="true" />
                <div>
                  <p className="text-gray-400">Horario</p>
                  <p className="text-white">
                    {contactInfo.schedule.weekdays}<br />
                    {contactInfo.schedule.saturday}
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
              {legalLinks.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </nav>
          </div>
        </div>
      </div>

            </footer>
    );
};

export default Footer;
