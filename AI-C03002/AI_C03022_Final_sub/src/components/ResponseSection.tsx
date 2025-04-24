import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ResponseSectionProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
  borderColor: string;
  iconBg: string;
}

const ResponseSection: React.FC<ResponseSectionProps> = ({ 
  title, 
  icon, 
  items,
  color,
  borderColor,
  iconBg
}) => {
  return (
    <div className={`p-6 rounded-2xl border ${borderColor} ${color} overflow-hidden transition-all duration-300 hover:shadow-lg group`}>
      <div className="flex items-center mb-4">
        <div className={`${iconBg} p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start group/item">
            <CheckCircle2 className="h-5 w-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0 group-hover/item:text-blue-500 transition-colors duration-300" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponseSection;