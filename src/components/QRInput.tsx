import React from 'react';
import { QRInputType } from '../types/qr';

interface QRInputProps {
  type: QRInputType;
  value: string;
  onTypeChange: (type: QRInputType) => void;
  onValueChange: (value: string) => void;
}

export function QRInput({ type, value, onTypeChange, onValueChange }: QRInputProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Content Type
        </label>
        <select
          value={type}
          onChange={(e) => onTypeChange(e.target.value as QRInputType)}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="text">Plain Text</option>
          <option value="url">URL</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="sms">SMS</option>
          <option value="wifi">Wi-Fi</option>
          <option value="contact">Contact</option>
          <option value="event">Event</option>
          <option value="payment">Payment</option>
          <option value="social">Social Media</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Content
        </label>
        <textarea
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={4}
          placeholder="Enter your content here..."
        />
      </div>
    </div>
  );
}