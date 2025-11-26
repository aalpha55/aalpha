import React from 'react';
import { ArrowRight, ShieldCheck, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 pt-20 overflow-hidden min-h-[700px] flex items-center">
      {/* Abstract Background Effects */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-red-600/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pt-12 md:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold tracking-wide uppercase mb-6">
            <ShieldCheck size={14} className="text-red-500" />
            Official Partnership Guide
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            The WFG Advisor <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Playbook</span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
            Your comprehensive guide to Aon insurance products. Provide clients with trusted options while unlocking exclusive coverage and referral benefits for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-900/20 group"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-slate-800 text-slate-200 font-semibold hover:bg-slate-700 border border-slate-700 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Visual/Graphic */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-800/50 backdrop-blur-sm p-4">
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700/50">
                <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-xs text-slate-400 font-mono">wfg.aon.ca</div>
                </div>
                <div className="p-8">
                    <div className="space-y-4">
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 rounded bg-slate-700 animate-pulse"></div>
                            <div className="flex-1 space-y-2">
                                <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                                <div className="h-3 bg-slate-800 rounded w-1/2"></div>
                            </div>
                        </div>
                        <div className="h-px bg-slate-700/50"></div>
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 rounded bg-slate-700 animate-pulse"></div>
                            <div className="flex-1 space-y-2">
                                <div className="h-4 bg-slate-700 rounded w-2/3"></div>
                                <div className="h-3 bg-slate-800 rounded w-1/2"></div>
                            </div>
                        </div>
                         <div className="h-px bg-slate-700/50"></div>
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 rounded bg-slate-700 animate-pulse"></div>
                            <div className="flex-1 space-y-2">
                                <div className="h-4 bg-slate-700 rounded w-5/6"></div>
                                <div className="h-3 bg-slate-800 rounded w-1/3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-4 rounded-lg shadow-xl border border-slate-100 hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-3">
                <div className="bg-red-50 p-2 rounded-full">
                  <FileText className="text-red-600 h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase">Updated Guide</p>
                  <p className="text-sm font-bold text-slate-900">Referral Process Inside</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;