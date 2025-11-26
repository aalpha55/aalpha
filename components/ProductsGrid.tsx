import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight, Plus } from 'lucide-react';
import ProductModal from './ProductModal';
import { ProductItem } from '../types';

const ProductsGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <section id="products" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">Product Suite</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Comprehensive Coverage Options
          </p>
          <p className="mt-4 max-w-2xl text-lg text-slate-500 mx-auto">
            Review detailed coverage, referral processes, and requirements for each insurance program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-1 cursor-pointer"
            >
              {/* Brand Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-14 w-14 rounded-full bg-slate-50 flex items-center justify-center text-red-600 group-hover:bg-red-50 transition-colors duration-300">
                    <product.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="bg-slate-50 rounded-full p-1.5 text-slate-400 group-hover:text-red-600 group-hover:bg-red-50 transition-colors">
                    <Plus size={16} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                
                <ul className="space-y-3 mt-auto">
                  {product.coverage.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-500">
                      <span className="mr-3 h-1.5 w-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                  {product.coverage.length > 3 && (
                    <li className="text-xs text-slate-400 pl-4 italic">+ {product.coverage.length - 3} more items</li>
                  )}
                </ul>
              </div>
              
              <div className="px-8 py-5 bg-slate-50/50 border-t border-slate-100 mt-auto">
                <div className="flex items-center text-sm font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
                  View Full Details <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default ProductsGrid;