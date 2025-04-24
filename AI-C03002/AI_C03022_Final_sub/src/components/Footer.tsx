import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-teal-50 border-t border-blue-100 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} HealthAssist. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span className="text-sm text-gray-600">for better health</span>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-500 text-center max-w-2xl mx-auto bg-white p-4 rounded-xl shadow-sm border border-blue-100">
          <strong className="text-blue-600">Disclaimer:</strong> This is an AI assistant and not a substitute for professional medical advice. 
          Always consult with healthcare professionals for medical concerns.
        </div>
      </div>
    </footer>
  );
};

export default Footer;