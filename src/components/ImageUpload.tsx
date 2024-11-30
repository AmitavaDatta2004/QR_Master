import React, { useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface ImageUploadProps {
  imageUrl: string | undefined;
  onImageChange: (url: string | undefined) => void;
}

export function ImageUpload({ imageUrl, onImageChange }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageChange(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onImageChange(undefined);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">
          Background Image
        </label>
        {imageUrl && (
          <button
            onClick={handleRemoveImage}
            className="text-red-500 hover:text-red-600 text-sm flex items-center space-x-1 transition-colors duration-300"
          >
            <X className="w-4 h-4" />
            <span>Remove</span>
          </button>
        )}
      </div>

      {imageUrl ? (
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt="Background"
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-white flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              <Upload className="w-4 h-4" />
              <span>Change Image</span>
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "border-2 border-dashed rounded-lg p-6",
            "flex flex-col items-center justify-center",
            "cursor-pointer hover:border-indigo-500 transition-colors",
            "bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100"
          )}
        >
          <Upload className="w-8 h-8 text-indigo-400 animate-bounce" />
          <p className="mt-2 text-sm text-gray-600">Click to upload image</p>
          <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
        </div>
      )}
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

