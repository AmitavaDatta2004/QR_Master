import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Image, QrCode, Download, Share2, Shield } from 'lucide-react';

const features = [
  {
    name: 'Vibrant Colors',
    description: 'Choose from a rainbow of colors to make your QR codes pop!',
    icon: Palette,
    color: 'from-red-400 to-pink-600 dark:from-red-500 dark:to-pink-700',
  },
  {
    name: 'Logo Magic',
    description: 'Add your brand logo and watch your QR codes come to life!',
    icon: Image,
    color: 'from-green-400 to-cyan-600 dark:from-green-500 dark:to-cyan-700',
  },
  {
    name: 'Multi-Format Fun',
    description: 'Create QR codes for URLs, text, contacts, and more - sky\'s the limit!',
    icon: QrCode,
    color: 'from-purple-400 to-indigo-600 dark:from-purple-500 dark:to-indigo-700',
  },
  {
    name: 'Crystal Clear',
    description: 'Download your QR codes in ultra-high resolution for any use!',
    icon: Download,
    color: 'from-yellow-400 to-orange-600 dark:from-yellow-500 dark:to-orange-700',
  },
  {
    name: 'Share the Joy',
    description: 'Spread the QR code love - share directly or save for later!',
    icon: Share2,
    color: 'from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700',
  },
  {
    name: 'Rock-Solid Security',
    description: 'Generate safe, error-proof QR codes you can trust!',
    icon: Shield,
    color: 'from-teal-400 to-green-600 dark:from-teal-500 dark:to-green-700',
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            Unleash Your QR Code Superpowers!
          </h2>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-xl">{feature.name}</span>
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

