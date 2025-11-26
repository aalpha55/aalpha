import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Professional meeting" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1 rounded-full bg-red-600/20 text-red-400 text-sm font-semibold mb-6 border border-red-600/30">
            Exclusive Partnership Since 2013
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            The WFG Advisor <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
              Playbook
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Your comprehensive guide to Aon insurance products. Provide clients with trusted options while unlocking exclusive coverage and referral benefits for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all shadow-lg shadow-red-600/30"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-200 hover:bg-slate-800 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;