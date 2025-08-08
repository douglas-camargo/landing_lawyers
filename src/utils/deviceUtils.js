// ========================================
// UTILIDADES DE DETECCIÓN DE DISPOSITIVOS
// ========================================

export const Dispositivo = {
  Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  evaluarDispositivo() {
    return (Dispositivo.Android() || Dispositivo.BlackBerry() || Dispositivo.iOS() || Dispositivo.Opera() || Dispositivo.Windows());
  }
};

// Función para generar URL de WhatsApp según el dispositivo
export const generarUrlWhatsApp = (numero, mensaje) => {
  const versionPc = 'https://web.whatsapp.com/send?';
  const versionMobile = 'https://api.whatsapp.com/send?';
  
  const url = Dispositivo.evaluarDispositivo() === null 
    ? `${versionPc}phone=${numero}&text=${mensaje}` 
    : `${versionMobile}phone=${numero}&text=${mensaje}`;
    
  return url;
};

// Función para abrir WhatsApp con detección automática de dispositivo
export const abrirWhatsApp = (numero, mensaje) => {
  const url = generarUrlWhatsApp(numero, mensaje);
  window.open(url, '_blank', 'noopener,noreferrer');
};
