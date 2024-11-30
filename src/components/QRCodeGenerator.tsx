import React, { useState } from 'react';
import { QRCodeData, QRInputType, QRCodeStyle } from '../types/qr';
import { QRInput } from './QRInput';
import { QRStyleControls } from './QRStyleControls';
import { QRPreview } from './QRPreview';
import { motion } from 'framer-motion';

const defaultStyle: QRCodeStyle = {
  fgColor: '#6366F1', // Indigo-500
  bgColor: '#ffffff',
  opacity: 1,
  size: 256,
  level: 'H',
};

export function QRCodeGenerator() {
  const [qrData, setQrData] = useState<QRCodeData>({
    type: 'text',
    value: '',
    style: defaultStyle,
  });

  const handleTypeChange = (type: QRInputType) => {
    setQrData({ ...qrData, type });
  };

  const handleValueChange = (value: string) => {
    setQrData({ ...qrData, value });
  };

  const handleStyleChange = (style: Partial<QRCodeStyle>) => {
    setQrData({ ...qrData, style: { ...qrData.style, ...style } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 dark:from-gray-900 dark:via-purple-950 dark:to-indigo-950 p-8 transition-all duration-500">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 backdrop-blur-lg bg-opacity-80 dark:bg-opacity-60"
        >
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-300 dark:to-indigo-300 mb-8 text-center">
            QR Code Generator
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <QRInput
                type={qrData.type}
                value={qrData.value}
                onTypeChange={handleTypeChange}
                onValueChange={handleValueChange}
              />
              <QRStyleControls
                style={qrData.style}
                onStyleChange={handleStyleChange}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <QRPreview
                value={qrData.value}
                style={qrData.style}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

