import React from 'react';

// Using real brand names for the marquee display
const clients = [
  'URS Digitally',
  'Google',
  'Meta',
  'Nvidia',
  'Microsoft',
  'Apple',
  'Samsung',
  'Zoho',
  'Netflix',
  'Swiggy',
  'Zomato',
  'Amazon',
];

export const Customers: React.FC = () => {
  return (
    <section id="customers" className="py-20 bg-slate-100 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif font-bold text-slate-900 uppercase tracking-widest">Trusted By Industry Leaders</h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-[marquee-right_25s_linear_infinite]">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center h-20 min-w-[160px] bg-white/95 rounded shadow-sm px-6 hover:shadow-md transition-shadow border border-slate-200/60"
              >
                <span className="font-sans font-semibold text-slate-700 text-base whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};