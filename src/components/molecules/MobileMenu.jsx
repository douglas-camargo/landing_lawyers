import React from 'react';

const MobileMenu = ({ items, onItemClick, isOpen, className = '' }) => {
  return (
    <div className={`md:hidden transition-all duration-300 ${
      isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
    } overflow-hidden bg-white border-t ${className}`}>
      <nav className="px-4 py-4 space-y-3">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className="block w-full text-left text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200 capitalize py-2"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
