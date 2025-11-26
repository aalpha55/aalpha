import React from 'react';
import { CONTACTS } from '../constants';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">WFG Playbook</h3>
            <p className="text-sm leading-relaxed mb-4">
              Providing Canadian WFG advisors with trusted insurance options and exclusive coverage through our partnership with Aon.
            </p>
            <div className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} WFG Advisor Playbook. <br />All rights reserved.
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-bold mb-6">Contact Support</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CONTACTS.map((contact, idx) => (
                <div key={idx} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-red-400 font-semibold mb-2">{contact.department}</h4>
                  <div className="flex items-center text-sm mb-1">
                    <Mail size={14} className="mr-2 opacity-70" />
                    <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                      {contact.email}
                    </a>
                  </div>
                  {contact.phone && (
                    <div className="flex items-center text-sm">
                      <Phone size={14} className="mr-2 opacity-70" />
                      <span>{contact.phone}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1" id="referrals">
            <h3 className="text-white text-lg font-bold mb-4">Referral Fees</h3>
            <p className="text-sm leading-relaxed mb-4">
              Earn referral fees when your clients choose and stay with Aon. Note that referral fee structures and eligibility vary by jurisdiction and product type.
            </p>
            <button className="text-sm text-red-400 font-medium hover:text-red-300 underline">
              View Fee Schedule &rarr;
            </button>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
          <p>
            This website is for informational purposes for WFG Advisors and Associates only. Insurance products are administered by Aon. 
            Coverage is subject to policy terms and conditions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;