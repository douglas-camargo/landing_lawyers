import React from 'react';
import { flexCenter, iconSmall } from '../../utils/tailwindClasses';

const StatCard = ({ icon: Icon, value, label, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <div className={`${flexCenter} mb-2`}>
        <Icon className="h-6 w-6 text-yellow-400" />
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-blue-200 text-sm">{label}</div>
    </div>
  );
};

export default StatCard;
