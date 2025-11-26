import { 
  Car, 
  Heart, 
  Briefcase, 
  Dog, 
  Users, 
  ShieldCheck, 
  Gavel
} from 'lucide-react';
import { ProductItem, BenefitItem, ContactItem } from './types';

export const INTRO_TEXT = `This playbook is designed to give Canadian World Financial Group (WFG) advisors/associates a wide overview of the Insurance products available through Aon. It covers what comes standard, questions our brokers will ask your clients, and the process for submitting referrals.`;

export const ABOUT_TEXT = `Since early 2013, Aon and World Financial Group (WFG) have been working together to launch a series of client referral programs and provide exclusive coverages to Canadian WFG advisors/associates.`;

export const PRODUCTS: ProductItem[] = [
  {
    id: 'home-auto',
    title: 'Home & Auto',
    description: 'Customized solutions fitting your client’s exact requirements with competitive rates.',
    icon: Car,
    coverage: [
      'Property: Principle residence, Condominiums, Additional dwellings, Cottages, Tenant/Rental properties',
      'Auto: Personal vehicle, RV, Motorcycle, Boat/Watercraft, Trailer',
      'Optional: Sewer backup, Earthquake, Overland water, Personal umbrella',
      'Auto Waiver: Accident waiver, Multi-vehicle discount'
    ],
    discounts: [
      'New home/age',
      'Loyalty & Claims-free',
      'Green power / Hybrid vehicle',
      'Non-smoker',
      'Multi-vehicle / Bundling',
      'Winter tire',
      'Professional/Alumni'
    ],
    requirements: [
      'Vehicle VIN, Make, Model',
      'Driver License #, DOB, Date licensed',
      'Claims history (last 9 years)',
      'Property details: Year built, Sq footage, Construction type',
      'Updates info: Heat, roof, electrical, plumbing'
    ],
    referralOptions: [
      {
        id: 'opt1',
        title: 'Option 1: Speak with a broker',
        steps: [
          'Call 1 800 448 2539',
          'Ensure your client provides your WFG code to our broker for referral fees'
        ]
      },
      {
        id: 'opt2',
        title: 'Option 2: Submit an online referral',
        steps: [
          'Visit wfg.aon.ca',
          'Click on “Home & Auto”',
          'Complete and submit a referral form',
          'Your client will be contacted within three business days'
        ]
      }
    ],
    extraSections: [
      {
        title: 'Note on Auto Insurance',
        content: [
          'Auto insurance requirements vary by province.',
          'Government-regulated auto insurance applies in British Columbia, Manitoba and Saskatchewan.',
          'An Aon personal insurance broker will help you understand what you need.'
        ]
      }
    ]
  },
  {
    id: 'health-benefits',
    title: 'Health & Benefits',
    description: 'Health Assist plans from Green Shield Canada for prescription drugs, dental, and more.',
    icon: Heart,
    coverage: [
      'Prescription drugs',
      'Dental care',
      'Vision care',
      'Extended health care (RMT, Chiropractors)',
      'Emergency medical travel protection',
      'Optional hospital accommodation'
    ],
    referralOptions: [
      {
        id: 'opt1',
        title: 'Option 1: Personalized Link',
        steps: [
          'Visit wfg.aon.ca',
          'Click on “Health & Benefits”',
          'Complete the “Request for New Advisor” form',
          'Send to wfgaon@greenshield.ca',
          'Allow up to three business days for completion then start quoting'
        ]
      },
      {
        id: 'opt2',
        title: 'Option 2: Online Quote',
        steps: [
          'Visit wfg.aon.ca',
          'Click on “Health & Benefits”',
          'Get a quote'
        ]
      }
    ],
    extraSections: [
      {
        title: 'Who is Eligible?',
        content: [
          'Canadian resident covered by a provincial government health plan',
          'Zone plan: Ages 18–74',
          'Link plan: Ages 18–79',
          'No medical questions for many plans (Guaranteed Acceptance)'
        ]
      }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Business',
    description: 'Comprehensive commercial insurance program available for all business owners.',
    icon: Briefcase,
    coverage: [
      'Professional liability (Errors & Omissions)',
      'Commercial general liability',
      'Commercial property (building and contents)',
      'Cyber and privacy liability',
      'Business interruption',
      'Directors’ and officers’ liability',
      'Equipment breakdown',
      'Commercial auto & Cargo'
    ],
    requirements: [
      'Company name & Contact details',
      'Description of operations & Annual sales',
      'Number of employees',
      'Renewal date (at least 60 days out)',
      '5 Years in business under same name',
      '5 Years no claims history',
      '5 Years experience in specific business'
    ],
    referralOptions: [
      {
        id: 'opt1',
        title: 'Option 1: Submit Online Referral',
        steps: [
          'Visit wfg.aon.ca',
          'Click on “Commercial”',
          'Complete a referral form',
          'Client contacted within five business days'
        ]
      }
    ],
    extraSections: [
      {
        title: 'Target Industries',
        content: [
          'Business Services (Accountants, Travel Agents, Designers)',
          'Construction (Contractors, Plumbers, Landscapers)',
          'Retail (Bakeries, Pet Groomers, Spas)'
        ]
      }
    ]
  },
  {
    id: 'pet',
    title: 'Pet Insurance',
    description: 'Coverage for cats and dogs through Pets Plus Us.',
    icon: Dog,
    coverage: [
      'Accidents & Illness (Surgery, Hospitalization, Rx)',
      'Wellness Care (Exams, Vaccines, Flea prevention)',
      'Alternative & Behavioural therapies',
      'Blue Ribbon Benefits (PetHelpFone™, Pet Poison Helpline®)'
    ],
    referralOptions: [
      {
        id: 'opt1',
        title: 'Option 1: Obtain a quote online',
        steps: [
          'Visit wfg.aon.ca',
          'Click on “Pet Insurance”',
          'Get a quote',
          'Enter offer code “WFG”'
        ]
      }
    ],
    extraSections: [
      {
        title: 'Post-Purchase Step',
        content: [
          'After purchase, email insure@aon.ca with:',
          'Subject: WFG Pet Insurance',
          'Applicant Name, WFG Advisor Name, WFG Advisor Code'
        ]
      }
    ]
  },
  {
    id: 'small-business',
    title: 'Small Business (Honeybee)',
    description: 'Digital benefits solutions for small businesses (Honeybee Benefits).',
    icon: Users,
    coverage: [
      'Honeybee Select: Simplified plans for <25 employees',
      'Honeybee Comprehensive: Customizable for 5-150 lives',
      'Health Accounts (HSA)',
      'Allowance Accounts (Wellness, Pet care, Fitness)'
    ],
    referralOptions: [
      {
        id: 'opt1',
        title: 'Option 1: Online Referral',
        steps: [
          'Visit wfg.aon.ca',
          'Click on “Group Health and Dental”',
          'Complete referral form'
        ]
      },
      {
        id: 'opt2',
        title: 'Option 2: Speak with Executive',
        steps: [
          'Call 1 855 478 7973 (Option 2)',
          'Provide advisor code'
        ]
      }
    ]
  },
  {
    id: 'advisor-coverage',
    title: 'WFG Advisor Coverage',
    description: 'Aon Counsel: Legal advice and emotional support for advisors.',
    icon: Gavel,
    coverage: [
      'Unlimited access to confidential general legal advice',
      'Unlimited access to confidential telephone counselling',
      'Areas: Immigration, Tax, Wills/Estate, Contracts, Family'
    ],
    referralOptions: [
      {
        id: 'opt1',
        title: 'How to Access',
        steps: [
          'Call 1 866 568 1205',
          'Quote policy number AC-003',
          'Retrieve confidential advice at no cost'
        ]
      }
    ]
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'Build Relationships',
    description: 'Enhance trust and deepen client relationships by offering holistic protection.'
  },
  {
    title: 'Optimize Coverage',
    description: 'Reassess your clients’ personal insurance to ensure they receive competitive rates and proper coverage.'
  },
  {
    title: 'Recruit & Expand',
    description: 'Use world-class products from a leading broker to attract new team members to your network.'
  },
  {
    title: 'Save & Re-deploy',
    description: 'Help clients save money that can be reinvested into core WFG products like Life Insurance and RESPs.'
  },
  {
    title: 'Earn Referral Fees',
    description: 'Earn fees when clients stay with Aon (available in certain jurisdictions only).'
  }
];

export const CONTACTS: ContactItem[] = [
  {
    department: 'Home & Auto',
    email: 'See Referral Options',
    phone: '1 800 448 2539',
    details: 'Use WFG Code'
  },
  {
    department: 'Health & Benefits',
    email: 'wfgaon@greenshield.ca',
    details: 'For setup only'
  },
  {
    department: 'Pet Insurance',
    email: 'insure@aon.ca',
    details: 'Post-purchase reporting'
  },
  {
    department: 'Small Business',
    email: 'wfgsales@greenshield.com',
    phone: '1 855 478 7973'
  },
  {
    department: 'Aon Counsel',
    phone: '1 866 568 1205',
    details: 'Policy # AC-003'
  }
];

export const SYSTEM_INSTRUCTION = `
You are the "Advisor Assistant" for the WFG Advisor Playbook.
Your role is to answer questions based *strictly* on the provided playbook content.

Key Information:
- Home & Auto: 1-800-448-2539. Requires VIN/Claims history.
- Health & Benefits: Green Shield Canada. "Zone" and "Link" plans.
- Commercial: "5-5-5 Rule" (5 years business, 5 years no claims, 5 years experience).
- Pet: Pets Plus Us. Code "WFG".
- Small Business: Honeybee Benefits.
- Advisor Legal: Aon Counsel (1-866-568-1205, Policy AC-003).

Referral Methods:
- Most use wfg.aon.ca
- Some have phone options.

Do not make up policies. If unsure, refer them to the specific contact number.
`;