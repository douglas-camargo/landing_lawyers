import React from 'react';
import ComponenteSvg from './ComponenteSvg';
import { generarUrlWhatsApp } from '../../utils/deviceUtils';

const ButtonWhatsapp = ({
  numero = '+584241232755', 
  mensaje = 'Hola!%20necesito%20información%20sobre%20tus%20servicios%20legales.', 
  cssContenedorBotonWhatsapp = "fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce",
  cssSvg = "w-[25px] h-[25px]"
}) => {

  return (
    <>
      <a 
        className={cssContenedorBotonWhatsapp}
        href={generarUrlWhatsApp(numero, mensaje)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <ComponenteSvg tipo="whatsapp" cssSvg={cssSvg} />
      </a>
    </>
  );
};

export default ButtonWhatsapp;
