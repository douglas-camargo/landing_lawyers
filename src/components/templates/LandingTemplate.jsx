import React from 'react';
import Header from '../organisms/Header';
import Hero from '../organisms/Hero';
import Services from '../organisms/Services';
import About from '../organisms/About';
import Testimonials from '../organisms/Testimonials';
import Footer from '../organisms/Footer';
import ButtonWhatsapp from '../atoms/ButtonWhatsapp';

const LandingTemplate = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Footer />
      <ButtonWhatsapp />
    </div>
  );
};

export default LandingTemplate;
