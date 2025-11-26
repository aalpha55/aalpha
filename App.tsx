import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductsGrid from './components/ProductsGrid';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <div id="about" className="py-16 bg-white text-center px-4 max-w-4xl mx-auto">
           <h2 className="text-2xl font-bold text-slate-900 mb-4">About Our Referral Programs</h2>
           <p className="text-slate-600 leading-relaxed">
             Since 2013, Aon and World Financial Group (WFG) have partnered to offer a range of exclusive client referral programs for Canadian WFG advisors and associates. These programs are designed to give your clients reliable coverage from one of the world’s leading insurance firms, while also strengthening your professional relationships.
           </p>
        </div>
        <ProductsGrid />
        <BenefitsSection />
      </main>
      <Footer />
      <Assistant />
    </div>
  );
};

export default App;