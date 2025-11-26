import { LucideIcon } from 'lucide-react';

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ContactItem {
  department: string;
  email: string;
  phone?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}