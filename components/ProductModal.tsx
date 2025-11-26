import React from 'react';
import { X, CheckCircle, AlertCircle, Phone, Globe, ChevronRight } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl border border-slate-200">
          
          {/* Header */}
          <div className="bg-slate-50 px-6 py-6 border-b border-slate-100 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <product.icon size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900" id="modal-title">{product.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{product.description}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="rounded-full p-2 bg-white text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shadow-sm border border-slate-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Coverage & Discounts */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    What's Included
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.coverage.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {product.discounts && product.discounts.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Available Discounts</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.discounts.map((discount, idx) => (
                        <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                          {discount}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {product.requirements && product.requirements.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                      <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                      Requirements / Info Needed
                    </h4>
                    <ul className="space-y-2">
                      {product.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-slate-600 pl-4 border-l-2 border-slate-200">
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.extraSections?.map((section, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <h4 className="text-md font-bold text-slate-900 mb-3">{section.title}</h4>
                    <ul className="space-y-1">
                       {section.content.map((line, i) => (
                         <li key={i} className="text-sm text-slate-600">{line}</li>
                       ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right Column: Referral Actions */}
              <div className="lg:col-span-1">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 sticky top-0">
                  <h4 className="text-lg font-bold text-slate-900 mb-6">Referral Process</h4>
                  <div className="space-y-6">
                    {product.referralOptions.map((option, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                        <h5 className="font-semibold text-red-600 mb-3 text-sm flex items-center">
                          {option.title.includes('Online') ? <Globe size={16} className="mr-2"/> : <Phone size={16} className="mr-2"/>}
                          {option.title}
                        </h5>
                        <ol className="space-y-3">
                          {option.steps.map((step, sIdx) => (
                            <li key={sIdx} className="flex items-start text-sm text-slate-600">
                              <span className="flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-slate-100 text-slate-500 text-xs font-medium mr-3">
                                {sIdx + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className="text-xs text-slate-400 text-center">
                      Always ensure clients use your WFG code for tracking.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-end">
             <button 
               onClick={onClose}
               className="px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
             >
               Close
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;