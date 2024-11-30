import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const creators = [
  {
    name: 'Amitava Datta',
    github: '',
    linkedin: '',
    instagram: ''
  },
  {
    name: 'Pranay De',
    github: '',
    linkedin: '',
    instagram: ''
  }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-10 md:order-2">
          {creators.map((creator) => (
            <div key={creator.name} className="text-center">
              <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                {creator.name}
              </p>
              <div className="flex space-x-4">
                <a
                  href={creator.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={creator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={creator.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} QR Master. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

