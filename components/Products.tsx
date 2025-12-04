import React from 'react';
import { ArrowRight, BarChart3, ShieldCheck, Zap } from 'lucide-react';

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Our Flagship Solution</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Engineering precision for the modern digital landscape.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
            {/* Visual Side */}
            <div className="md:w-2/5 bg-tdsc-dark p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-50"></div>
               <div className="relative z-10 text-center">
                  <div className="text-6xl font-serif font-black mb-2 tracking-tighter">4Sight</div>
                  <div className="text-slate-400 text-sm uppercase tracking-widest">Engine</div>
               </div>
            </div>

            {/* Content Side */}
            <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Premier SEO & Marketing Automation Engine</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                4Sight is not just a tool; it is an intelligent framework designed to bring absolute clarity to your marketing efforts. 
                By leveraging advanced data governance, we ensure that every click, impression, and conversion is tracked with forensic precision.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-start">
                   <div className="p-2 bg-blue-50 rounded-md mb-2">
                    <BarChart3 className="text-blue-900" size={20} />
                   </div>
                   <span className="text-sm font-semibold text-slate-900">Analytics</span>
                </div>
                <div className="flex flex-col items-start">
                   <div className="p-2 bg-blue-50 rounded-md mb-2">
                    <Zap className="text-blue-900" size={20} />
                   </div>
                   <span className="text-sm font-semibold text-slate-900">Automation</span>
                </div>
                <div className="flex flex-col items-start">
                   <div className="p-2 bg-blue-50 rounded-md mb-2">
                    <ShieldCheck className="text-blue-900" size={20} />
                   </div>
                   <span className="text-sm font-semibold text-slate-900">Governance</span>
                </div>
              </div>

              <div>
                <button className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors">
                  Visit 4Sight
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};