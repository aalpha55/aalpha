import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductsGrid from './components/ProductsGrid';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import AboutSection from './components/AboutSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <ProductsGrid />
        <BenefitsSection />
      </main>
      <Footer />
      <Assistant />
    </div>
  );
};

export default App;