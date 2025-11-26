import React from 'react';
import { BENEFITS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Why Partner With Aon?</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              A Unique Advantage for Advisors
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Partnering with Aon gives WFG advisors a unique advantage. You can protect and grow your clients’ wealth while accessing exclusive insurance solutions and referral benefits.
            </p>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/600" 
                alt="Advisors collaborating" 
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10"></div>
            </div>
          </div>

          <div className="space-y-8">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-100 text-red-600">
                    <CheckCircle2 size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-bold text-slate-900">{benefit.title}</h4>
                  <p className="mt-2 text-base text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;