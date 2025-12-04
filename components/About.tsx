import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">About TDSC</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Founded on the principles of rigorous data science and ethical process automation, The Data Science Company (TDSC) has established itself as a quiet authority in the digital governance space.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            We do not chase trends. We build foundational technologies that withstand the volatility of the digital market. Our approach is rooted in the belief that stable, transparent systems are the key to long-term corporate sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 border-t border-slate-200 pt-16">
           {/* Leadership Placeholder */}
           <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Leadership</h3>
              <div className="flex items-start space-x-4 mb-6">
                 <div className="w-16 h-16 bg-slate-300 rounded-full flex-shrink-0 overflow-hidden">
                    <img src="https://picsum.photos/100/100?grayscale" alt="Amit Sir" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-slate-900">Dr. Amit Kumar Das</h4>
                    <p className="text-slate-500 text-sm uppercase tracking-wide">Managing Director</p>
                    <p className="text-slate-600 mt-2 text-sm">
                       With over two decades of experience in data governance and corporate strategy, Amit leads TDSC with a focus on integrity and precision.
                    </p>
                 </div>
              </div>
           </div>

           {/* Core Values */}
           <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Core Values</h3>
              <ul className="space-y-4">
                 <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                    <span className="text-slate-700 font-medium">Uncompromising Transparency</span>
                 </li>
                 <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                    <span className="text-slate-700 font-medium">Data Governance</span>
                 </li>
                 <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                    <span className="text-slate-700 font-medium">Process Precision</span>
                 </li>
                 <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                    <span className="text-slate-700 font-medium">Ethical Automation</span>
                 </li>
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
};