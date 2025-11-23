import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const ZKGuardNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Whitepaper', href: '#whitepaper' }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-950 to-blue-950 border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* Hexagon shape */}
              <svg width="48" height="48" viewBox="0 0 48 48" className="text-blue-500">
                <path
                  d="M24 2 L44 14 L44 34 L24 46 L4 34 L4 14 Z"
                  fill="currentColor"
                  opacity="0.2"
                />
                <path
                  d="M24 2 L44 14 L44 34 L24 46 L4 34 L4 14 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                {/* Inner design */}
                <path
                  d="M24 12 L34 18 L34 30 L24 36 L14 30 L14 18 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="24" cy="24" r="4" fill="currentColor" />
              </svg>
            </div>
            <span className="text-white text-2xl font-bold">ZK Guard AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Download App Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105">
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-blue-900/30 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-blue-900/30">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-white hover:bg-blue-900/30 px-4 py-3 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 mt-4">
              Download App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ZKGuardNavbar;