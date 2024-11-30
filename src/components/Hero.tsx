import React from 'react'
import { motion } from 'framer-motion'
import { QrCode, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <div className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-indigo-600/10 dark:shadow-indigo-400/10 ring-1 ring-indigo-50 dark:ring-indigo-900 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20 items-center">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-extrabold tracking-tight sm:text-6xl"
            >
              <span className="block text-gray-900 dark:text-white">Generate Stunning</span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400">
                QR Codes Instantly
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Unleash your creativity with our powerful QR code generator. Add vibrant colors, 
              eye-catching logos, and make your QR codes pop like never before!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-4"
            >
              <Link
                to="/generator"
                className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl dark:shadow-indigo-500/25 hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400 dark:hover:from-pink-300 dark:hover:via-purple-300 dark:hover:to-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400 transition-all duration-300 flex items-center transform hover:scale-105 hover:animate-pulse"
              >
                Create Your QR Code
                <Sparkles className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400 rounded-3xl blur-3xl opacity-30 dark:opacity-40 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden p-8">
                <QrCode className="h-64 w-64 text-indigo-600 dark:text-indigo-400 mx-auto" />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400 mix-blend-overlay opacity-30 dark:opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </div>
  )
}

