import { 
  Car, 
  Heart, 
  Briefcase, 
  Dog, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  UserPlus, 
  PiggyBank, 
  DollarSign
} from 'lucide-react';
import { ProductItem, BenefitItem, ContactItem } from './types';

export const INTRO_TEXT = `Since 2013, Aon and World Financial Group (WFG) have partnered to offer a range of exclusive client referral programs for Canadian WFG advisors and associates. These programs allow you to provide your clients with trusted insurance options while giving you access to special coverage and support.`;

export const PRODUCTS: ProductItem[] = [
  {
    id: 'home-auto',
    title: 'Home & Auto',
    description: 'Protect your clients’ most valuable assets with comprehensive home and auto coverage.',
    icon: Car,
    details: [
      'Competitive rates for home and vehicle insurance',
      'Bundling options available',
      '24/7 claims support'
    ]
  },
  {
    id: 'health-benefits',
    title: 'Health & Benefits',
    description: 'Individual health and dental plans for clients without employer coverage.',
    icon: Heart,
    details: [
      'Prescription drug coverage',
      'Dental care options',
      'Flexible plans for individuals and families'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Business',
    description: 'Tailored insurance solutions for businesses of all sizes.',
    icon: Briefcase,
    details: [
      'General Liability',
      'Professional Liability (E&O)',
      'Property coverage'
    ]
  },
  {
    id: 'pet',
    title: 'Pet Insurance',
    description: 'Healthcare coverage for the furry family members.',
    icon: Dog,
    details: [
      'Coverage for accidents and illness',
      'Wellness add-ons',
      'Flexible deductibles'
    ]
  },
  {
    id: 'small-business',
    title: 'Small Business Benefits',
    description: 'Referral program for small business health & benefits.',
    icon: Users,
    details: [
      'Group benefits for small teams',
      'Employee retention tools',
      'Cost-effective options'
    ]
  },
  {
    id: 'advisor-coverage',
    title: 'Advisor Coverage',
    description: 'Exclusive coverage specifically for WFG Advisors & Associates.',
    icon: ShieldCheck,
    details: [
      'E&O tailored for WFG business',
      'Personal asset protection',
      'Discounted rates'
    ]
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'Strengthen Relationships',
    description: 'Deepen trust by offering a wider range of high-quality protection products.'
  },
  {
    title: 'Optimize Coverage',
    description: 'Ensure your clients are not underinsured or overpaying for personal insurance.'
  },
  {
    title: 'Recruit & Expand',
    description: 'Use the breadth of Aon products as a tool to recruit new team members.'
  },
  {
    title: 'Save & Reinvest',
    description: 'Help clients save money, freeing up cash flow for core WFG products like life insurance and RESPs.'
  },
  {
    title: 'Earn Referral Fees',
    description: 'Generate additional revenue streams when clients choose and stay with Aon (fees vary by jurisdiction).'
  }
];

export const CONTACTS: ContactItem[] = [
  {
    department: 'General Inquiries',
    email: 'wfg.support@aon.ca',
    phone: '1-800-555-0199'
  },
  {
    department: 'Referral Claims',
    email: 'referrals@aon.ca'
  },
  {
    department: 'Advisor Licensing',
    email: 'licensing@wfg-aon.ca'
  }
];

export const SYSTEM_INSTRUCTION = `
You are the "Advisor Assistant" for the WFG Advisor Playbook website. 
Your goal is to help Canadian WFG advisors understand the partnership with Aon.
Use the following context to answer their questions accurately.

Context:
${INTRO_TEXT}

Products:
${PRODUCTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

Benefits of working with Aon:
${BENEFITS.map(b => `- ${b.title}: ${b.description}`).join('\n')}

If a user asks about something not in this text, politely say you can only answer questions about the WFG-Aon partnership program.
Keep answers concise and professional.
`;