import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-tdsc-darker overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-background.png"
          alt="Abstract Technology Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-tdsc-darker/60 to-tdsc-darker/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-4 flex justify-center">
          <img 
            src="/assets/tdsc-logo.png" 
            alt="TDSC Logo" 
            className="w-64 md:w-96 h-auto object-contain animate-fade-in-up"
          />
        </div>

        <p className="text-slate-300 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
          Empowering Business through Data-Led <br className="hidden md:block" />
          <span className="text-white font-medium">Process Automation, Transparency, and Governance.</span>
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <a href="#products" className="text-slate-500 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};