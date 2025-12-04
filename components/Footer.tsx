import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-tdsc-darker text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-white font-serif font-bold text-xl tracking-widest">TDSC</span>
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