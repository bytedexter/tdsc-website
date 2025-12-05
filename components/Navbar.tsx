import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Products', href: '#products' },
  { label: 'Customers', href: '#customers' },
  { label: 'Mission', href: '#mission' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-tdsc-darker/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img src="/assets/tdsc-logo.png" alt="TDSC Logo" className="h-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            item.href.startsWith('#') ? (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-white text-sm font-medium uppercase tracking-wider transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-slate-300 hover:text-white text-sm font-medium uppercase tracking-wider transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-tdsc-darker absolute top-full left-0 w-full shadow-xl border-t border-slate-800">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-white hover:bg-slate-800 px-8 py-3 text-sm font-medium uppercase tracking-wider transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-slate-300 hover:text-white hover:bg-slate-800 px-8 py-3 text-sm font-medium uppercase tracking-wider transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};