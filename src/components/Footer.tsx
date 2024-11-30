import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const creators = [
  {
    name: 'Amitava Datta',
    github: 'https://github.com/amitava-datta',
    linkedin: 'https://linkedin.com/in/amitava-datta',
    instagram: 'https://instagram.com/amitava.datta'
  },
  {
    name: 'Pranay De',
    github: 'https://github.com/pranay-de',
    linkedin: 'https://linkedin.com/in/pranay-de',
    instagram: 'https://instagram.com/pranay.de'
  }
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-10 md:order-2">
          {creators.map((creator) => (
            <div key={creator.name} className="text-center">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {creator.name}
              </p>
              <div className="flex space-x-4">
                <a
                  href={creator.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={creator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={creator.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
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