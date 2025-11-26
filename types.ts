import { LucideIcon } from 'lucide-react';

export interface ReferralOption {
  id: string;
  title: string;
  description?: string;
  steps: string[];
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  coverage: string[];
  referralOptions: ReferralOption[];
  requirements?: string[];
  discounts?: string[];
  extraSections?: { title: string; content: string[] }[];
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ContactItem {
  department: string;
  email?: string;
  phone?: string;
  details?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}