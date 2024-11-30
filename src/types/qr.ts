export type QRInputType = 
  | 'text'
  | 'url'
  | 'email'
  | 'phone'
  | 'sms'
  | 'wifi'
  | 'contact'
  | 'event'
  | 'payment'
  | 'social';

export interface QRCodeStyle {
  fgColor: string;
  bgColor: string;
  opacity: number;
  size: number;
  level: 'L' | 'M' | 'Q' | 'H';
  includeImage?: boolean;
  imageUrl?: string;
  imageSize?: number;
}

export interface QRCodeData {
  type: QRInputType;
  value: string;
  style: QRCodeStyle;
}