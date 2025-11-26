import React from 'react';
import { PRODUCTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ProductsGrid: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Programs</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive Coverage Options
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            From home and auto to commercial business, Aon provides the reliability your clients expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-1">
                <div className="h-12 w-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <product.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                <p className="text-slate-600 mb-6">{product.description}</p>
                
                <ul className="space-y-3">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-500">
                      <span className="mr-2 text-green-500">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                <span className="text-sm font-medium text-slate-900">View Details</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-red-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;