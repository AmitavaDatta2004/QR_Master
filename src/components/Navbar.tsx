import React from 'react';
import { Sun, Moon, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <QrCode className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">QR Master</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/generator"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium"
            >
              Generator
            </Link>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 hover:from-indigo-200 hover:to-purple-200 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-colors duration-300 transform hover:scale-110"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

