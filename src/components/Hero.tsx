import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 dark:from-purple-900 dark:via-pink-900 dark:to-red-900">
      <div className="absolute inset-0 bg-grid-slate-200/[0.1] bg-[size:60px_60px] dark:bg-grid-slate-700/[0.1]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
              Create Stunning QR Codes
              <span className="text-purple-600 dark:text-purple-400"> in Seconds!</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-300"
            >
              Unleash your creativity with our powerful QR code generator. Add vibrant colors, 
              eye-catching logos, and make your QR codes pop in both light and dark modes!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-4"
            >
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white">
                <Link to="/generator" className="rounded-full px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-200 flex items-center transform hover:scale-105">
                  Start Creating
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="absolute -top-20 left-1/2 -translate-x-1/2"
            >
              <div className="relative">
                <QrCode className="h-64 w-64 text-purple-600 dark:text-purple-400" />
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300 via-pink-500 to-purple-500 dark:from-yellow-500 dark:via-pink-600 dark:to-purple-700 blur-3xl opacity-30 dark:opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

