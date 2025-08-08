import React from 'react';
import { ExternalLink } from 'lucide-react';

const FooterLink = ({ href, children, className = '' }) => {
  // Detectar si es un enlace externo (comienza con http o https)
  const isExternalLink = href && (href.startsWith('http://') || href.startsWith('https://'));
  
  return (
    <a
      href={href}
      className={`text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 ${className}`}
      {...(isExternalLink && {
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${children} (se abre en nueva pestaña)`
      })}
    >
      {children}
      {isExternalLink && <ExternalLink size={12} className="opacity-60" />}
    </a>
  );
};

export default FooterLink;
