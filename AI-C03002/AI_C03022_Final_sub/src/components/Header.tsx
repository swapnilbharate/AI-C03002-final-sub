import React from 'react';
import { Activity, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="bg-gradient-to-r from-blue-50 to-teal-50 shadow-sm border-b border-blue-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-2.5 rounded-xl shadow-md">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              HealthAssist
            </h1>
          </div>
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-white hover:bg-gray-50 shadow-sm transition-all duration-300 hover:shadow"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-gray-700" />
            ) : (
              <Sun className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;