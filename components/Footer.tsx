import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-tdsc-darker text-slate-400 py-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/section-background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-tdsc-darker/70"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="mb-4 md:mb-0">
          <img src="/assets/tdsc-logo.png" alt="TDSC Logo" className="h-8 mb-2" />
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} The Data Science Company. All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <Link to="/privacy-policy" className="hover:text-white transition-colors text-sm">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition-colors text-sm">Terms of Service</Link>
          <Link to="/cookie-policy" className="hover:text-white transition-colors text-sm">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};