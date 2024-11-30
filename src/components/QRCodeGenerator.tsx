import React, { useState } from 'react';
import { QRCodeData, QRInputType, QRCodeStyle } from '../types/qr';
import { QRInput } from './QRInput';
import { QRStyleControls } from './QRStyleControls';
import { QRPreview } from './QRPreview';

const defaultStyle: QRCodeStyle = {
  fgColor: '#000000',
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">QR Code Generator</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
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
            </div>

            <QRPreview
              value={qrData.value}
              style={qrData.style}
            />
          </div>
        </div>
      </div>
    </div>
  );
}