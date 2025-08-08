import React from 'react';

const FooterLink = ({ href, children, className = '' }) => {
  return (
    <a
      href={href}
      className={`text-gray-400 hover:text-white transition-colors duration-200 ${className}`}
    >
      {children}
    </a>
  );
};

export default FooterLink;
