import React from 'react';
import { BENEFITS } from '../constants';
import { Check } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Content Side */}
          <div className="lg:col-span-6 mb-12 lg:mb-0">
            <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">The Advantage</h2>
            <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              Why Work With Aon?
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We're proud to help WFG advisors and associates protect and grow their wealth while empowering their clients to do the same. In working with Aon, you can leverage our referral programs to:
            </p>
            
            <div className="space-y-6">
              {BENEFITS.map((benefit, index) => (
                <div key={index} className="flex group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-50 text-red-600 border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Check size={14} strokeWidth={3} />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h4 className="text-base font-bold text-slate-900">{benefit.title}</h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                alt="Business meeting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-bold text-xl leading-tight">"Help your clients save money that can then be re-deployed into core WFG products."</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-slate-100 rounded-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;