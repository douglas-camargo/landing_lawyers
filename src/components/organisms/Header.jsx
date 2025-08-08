import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';
import MobileMenu from '../molecules/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: 'inicio', label: 'inicio' },
    { id: 'servicios', label: 'servicios' },
    { id: 'nosotros', label: 'nosotros' },
    { id: 'testimonios', label: 'testimonios' },
    { id: 'contacto', label: 'contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          <Navigation 
            items={navigationItems}
            onItemClick={scrollToSection}
          />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-800 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <MobileMenu 
        items={navigationItems}
        onItemClick={scrollToSection}
        isOpen={isMenuOpen}
      />
    </header>
  );
};

export default Header;
