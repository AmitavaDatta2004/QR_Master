import React, { useRef, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Copy } from 'lucide-react';
import { cn } from '../lib/utils';
import { QRCodeStyle } from '../types/qr';

interface QRPreviewProps {
  value: string;
  style: QRCodeStyle;
}

export function QRPreview({ value, style }: QRPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const qrContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderQRWithBackground = async () => {
      if (!canvasRef.current || !qrContainerRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size
      canvas.width = style.size;
      canvas.height = style.size;

      // Draw background image if exists
      if (style.imageUrl) {
        const img = new Image();
        img.src = style.imageUrl;
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        ctx.globalAlpha = style.opacity;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
      } else {
        // Fill with background color
        ctx.fillStyle = style.bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Get QR code SVG and convert to image
      const svg = qrContainerRef.current.querySelector('svg');
      if (svg) {
        const svgData = new XMLSerializer().serializeToString(svg);
        const img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    renderQRWithBackground();
  }, [value, style]);

  const downloadQRCode = () => {
    if (canvasRef.current) {
      const pngFile = canvasRef.current.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'qrcode.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    }
  };

  const copyQRCode = () => {
    if (canvasRef.current) {
      canvasRef.current.toBlob((blob) => {
        if (blob) {
          navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
        }
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
        <div ref={qrContainerRef} className="hidden">
          <QRCodeSVG
            value={value || ' '}
            size={style.size}
            fgColor={style.fgColor}
            bgColor="transparent"
            level={style.level}
            includeMargin={true}
          />
        </div>
        <canvas
          ref={canvasRef}
          className="rounded-lg shadow-inner"
          style={{ width: style.size, height: style.size }}
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={downloadQRCode}
          className={cn(
            "flex items-center space-x-2 px-6 py-3 rounded-full",
            "bg-gradient-to-r from-indigo-500 to-purple-500 text-white",
            "hover:from-indigo-600 hover:to-purple-600",
            "transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          )}
        >
          <Download className="w-5 h-5" />
          <span>Download</span>
        </button>

        <button
          onClick={copyQRCode}
          className={cn(
            "flex items-center space-x-2 px-6 py-3 rounded-full",
            "bg-gradient-to-r from-gray-500 to-gray-600 text-white",
            "hover:from-gray-600 hover:to-gray-700",
            "transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          )}
        >
          <Copy className="w-5 h-5" />
          <span>Copy</span>
        </button>
      </div>
    </div>
  );
}

