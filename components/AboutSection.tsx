import React from 'react';
import { ABOUT_TEXT } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">Our Partnership</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
          About Our Referral Programs
        </h3>
        <p className="text-xl text-slate-600 leading-relaxed font-light">
          {ABOUT_TEXT} These programs are designed to give your clients reliable coverage from one of the world’s leading insurance firms, while also strengthening your professional relationships.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;