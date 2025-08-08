import React from 'react';
import { MessageCircle } from 'lucide-react';
import { abrirWhatsApp } from '../../utils/deviceUtils';

const ButtonWhatsapp = () => {
  const handleClick = () => {
    const phoneNumber = '34900123456';
    const message = 'Hola, me gustaría solicitar una consulta legal gratuita.';
    abrirWhatsApp(phoneNumber, message);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="Abrir WhatsApp para consulta gratuita"
      title="Consulta gratuita por WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="sr-only">WhatsApp</span>
    </button>
  );
};

export default ButtonWhatsapp;
