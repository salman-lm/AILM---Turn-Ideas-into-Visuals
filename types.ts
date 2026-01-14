import React from 'react';

export enum PageState {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SHIPPING = 'SHIPPING',
  REFUND = 'REFUND',
  TERMS = 'TERMS',
  CONTACT = 'CONTACT',
  PRIVACY = 'PRIVACY'
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  rating: number;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  features: string[];
  excluded: string[];
  recommended?: boolean;
}

export interface ServiceItem {
  id: string;
  type: 'video' | 'image' | 'comparison';
  src: string; // Embed ID for video, URL for image
  alt?: string;
  label?: string;
  comparisonSrc?: string; // For Image to Video
}

export interface CounterProps {
  end: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}