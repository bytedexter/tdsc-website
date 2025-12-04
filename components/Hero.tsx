import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-tdsc-darker overflow-hidden">
      {/* Background Texture/Image Overlay */}
      <div className="absolute inset-0 opacity-20">
         <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Abstract Technology Background" 
            className="w-full h-full object-cover"
         />
      </div>
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-tdsc-darker/90 to-tdsc-darker"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-white font-serif font-black text-6xl md:text-8xl tracking-tight mb-6 animate-fade-in-up">
          TDSC
        </h1>
        
        <div className="h-1 w-24 bg-slate-500 mx-auto mb-8 rounded-full"></div>

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