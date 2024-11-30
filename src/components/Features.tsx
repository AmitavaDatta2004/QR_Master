import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Image, 
  QrCode, 
  Download, 
  Share2, 
  Shield 
} from 'lucide-react';

const features = [
  {
    name: 'Custom Colors',
    description: 'Choose from unlimited color combinations for your QR code.',
    icon: Palette,
  },
  {
    name: 'Logo Integration',
    description: 'Add your brand logo to make your QR codes more recognizable.',
    icon: Image,
  },
  {
    name: 'Multiple Formats',
    description: 'Generate QR codes for URLs, text, contact info, and more.',
    icon: QrCode,
  },
  {
    name: 'High Resolution',
    description: 'Download your QR codes in high quality for any use case.',
    icon: Download,
  },
  {
    name: 'Easy Sharing',
    description: 'Share your QR codes directly or download for later use.',
    icon: Share2,
  },
  {
    name: 'Secure & Reliable',
    description: 'Generate safe QR codes with error correction.',
    icon: Shield,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Everything you need to create perfect QR codes
          </motion.h2>
        </div>

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
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
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