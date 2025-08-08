import React from 'react';

const Navigation = ({ items, onItemClick, className = '' }) => {
  return (
    <nav className={`hidden md:flex space-x-8 ${className}`}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemClick(item.id)}
          className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200 capitalize"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
