import React from 'react';
import { CONTACTS } from '../constants';
import { Mail, Phone, Info } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">WFG Playbook</h3>
            <p className="text-sm leading-relaxed mb-4 text-slate-400">
              A comprehensive guide to Aon insurance products for Canadian World Financial Group (WFG) advisors and associates.
            </p>
            <div className="text-xs text-slate-600 mt-6">
              &copy; {new Date().getFullYear()} WFG Advisor Playbook. <br />All rights reserved.
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-bold mb-6">Contact Directory</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACTS.map((contact, idx) => (
                <div key={idx} className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <h4 className="text-white font-semibold mb-2 text-sm">{contact.department}</h4>
                  
                  {contact.email && !contact.email.includes('Option') && (
                    <div className="flex items-center text-xs mb-1.5 text-slate-400">
                      <Mail size={12} className="mr-2" />
                      <a href={`mailto:${contact.email}`} className="hover:text-red-400 transition-colors">
                        {contact.email}
                      </a>
                    </div>
                  )}
                  
                  {contact.phone && (
                    <div className="flex items-center text-xs mb-1.5 text-slate-400">
                      <Phone size={12} className="mr-2" />
                      <span>{contact.phone}</span>
                    </div>
                  )}

                  {contact.details && (
                    <div className="flex items-center text-xs text-red-400 mt-2">
                      <Info size={12} className="mr-2" />
                      <span>{contact.details}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">Referral Fees</h3>
            <div className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50">
              <p className="text-sm leading-relaxed mb-4 text-slate-400">
                Earn referral fees when clients stay with Aon.
              </p>
              <p className="text-xs text-slate-500 italic border-t border-slate-700 pt-3">
                *Referral fees are available in certain jurisdictions only. Fees vary by province and product type.
              </p>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
          <p className="max-w-3xl mx-auto">
            This website is for informational purposes for WFG Advisors and Associates only. Insurance products are administered by Aon. 
            Coverage is subject to policy terms and conditions. Auto insurance requirements vary by province.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;