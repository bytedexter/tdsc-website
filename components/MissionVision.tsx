import React from 'react';

export const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/section-background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-zinc-900 border-2 border-gray-300/20 rounded-2xl p-10 shadow-2xl shadow-gray-300/20 hover:shadow-gray-200/30 hover:border-gray-200/30 transition-all duration-500 hover:scale-[1.02]">
            <div className="space-y-6">
              <div className="w-12 h-1 bg-gray-200 mb-6"></div>
              <h2 className="text-3xl font-serif font-bold text-gray-100">Our Mission</h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                "To bring <span className="text-white font-medium">transparency</span> and <span className="text-white font-medium">governance</span> to digital business processes."
              </p>
              <p className="text-gray-400 text-sm leading-7">
                We believe that in the age of information, obscurity is a liability. Our mission is to strip away the complexity of black-box algorithms and provide clear, auditable, and actionable pathways for enterprise growth.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-zinc-900 border-2 border-gray-300/20 rounded-2xl p-10 shadow-2xl shadow-gray-300/20 hover:shadow-gray-200/30 hover:border-gray-200/30 transition-all duration-500 hover:scale-[1.02]">
            <div className="space-y-6">
              <div className="w-12 h-1 bg-gray-300 mb-6"></div>
              <h2 className="text-3xl font-serif font-bold text-gray-100">Our Vision</h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                "A world where data drives every decision with <span className="text-white font-medium">precision</span>."
              </p>
              <p className="text-gray-400 text-sm leading-7">
                We envision a future where business intuition is supported by irrefutable data. We are building the infrastructure that will allow companies to operate with the confidence that comes from absolute clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};