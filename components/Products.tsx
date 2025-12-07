import React from 'react';
import { ArrowRight, BarChart3, ShieldCheck, Zap } from 'lucide-react';

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/section-background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Flagship Solution
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Engineering precision for the modern digital landscape.
          </p>
        </div>

        <div className="max-w-6xl mx-auto animate-[slideUp_1s_ease-out_0.3s_backwards]">
          <div className="bg-zinc-900 border-2 border-gray-300/20 rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/20 hover:shadow-gray-200/30 hover:border-gray-200/30 transition-all duration-500 hover:scale-[1.02] flex flex-col md:flex-row group">
            {/* Visual Side */}
            <div className="md:w-2/5 bg-gradient-to-br from-zinc-800 to-black p-8 md:p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]"></div>
              <div className="relative z-10 w-full flex justify-center items-center animate-[float_4s_ease-in-out_infinite]">
                <img src="/assets/4sight-logo.png" alt="4Sight Logo" className="max-w-full max-h-48 w-auto h-auto object-contain drop-shadow-2xl" />
              </div>
            </div>

            {/* Content Side */}
            <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-zinc-900/50">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                The Premier SEO & Marketing Automation Engine
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-base">
                4Sight is not just a tool; it is an intelligent framework designed to bring absolute clarity to your marketing efforts.
                By leveraging advanced data governance, we ensure that every click, impression, and conversion is tracked with forensic precision.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-start group/item hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-white rounded-lg mb-3 shadow-lg shadow-white/20 group-hover/item:shadow-white/40 transition-shadow">
                    <BarChart3 className="text-black" size={24} />
                  </div>
                  <span className="text-sm font-semibold text-white">Analytics</span>
                  <span className="text-xs text-gray-400 mt-1">Deep insights</span>
                </div>
                <div className="flex flex-col items-start group/item hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-white rounded-lg mb-3 shadow-lg shadow-white/20 group-hover/item:shadow-white/40 transition-shadow">
                    <Zap className="text-black" size={24} />
                  </div>
                  <span className="text-sm font-semibold text-white">Automation</span>
                  <span className="text-xs text-gray-400 mt-1">Smart workflows</span>
                </div>
                <div className="flex flex-col items-start group/item hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-white rounded-lg mb-3 shadow-lg shadow-white/20 group-hover/item:shadow-white/40 transition-shadow">
                    <ShieldCheck className="text-black" size={24} />
                  </div>
                  <span className="text-sm font-semibold text-white">Governance</span>
                  <span className="text-xs text-gray-400 mt-1">Full control</span>
                </div>
              </div>

              <div>
                <a href="https://tdsc-website-iqg4.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className="group/btn relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-black bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/30 hover:shadow-white/50 hover:scale-105 overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Visit 4Sight
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};