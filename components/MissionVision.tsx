import React from 'react';

export const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="space-y-6">
             <div className="w-12 h-1 bg-slate-900 mb-6"></div>
             <h2 className="text-3xl font-serif font-bold text-slate-900">Our Mission</h2>
             <p className="text-xl text-slate-600 font-light leading-relaxed">
               "To bring <span className="text-slate-900 font-medium">transparency</span> and <span className="text-slate-900 font-medium">governance</span> to digital business processes."
             </p>
             <p className="text-slate-500 text-sm leading-7">
               We believe that in the age of information, obscurity is a liability. Our mission is to strip away the complexity of black-box algorithms and provide clear, auditable, and actionable pathways for enterprise growth.
             </p>
          </div>

          {/* Vision */}
          <div className="space-y-6">
             <div className="w-12 h-1 bg-slate-400 mb-6"></div>
             <h2 className="text-3xl font-serif font-bold text-slate-800">Our Vision</h2>
             <p className="text-xl text-slate-600 font-light leading-relaxed">
               "A world where data drives every decision with <span className="text-slate-900 font-medium">precision</span>."
             </p>
             <p className="text-slate-500 text-sm leading-7">
               We envision a future where business intuition is supported by irrefutable data. We are building the infrastructure that will allow companies to operate with the confidence that comes from absolute clarity.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};