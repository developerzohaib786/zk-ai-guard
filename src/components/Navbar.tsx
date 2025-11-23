import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ZKGuardNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Tokenomics', href: '/#tokenomics' },
    { name: 'Roadmap', href: '/#roadmap' },
    { name: 'Whitepaper', href: '/#whitepaper' }
  ];

  return (
    <nav className="relative bg-gradient-to-r from-slate-950 to-blue-950 border-b border-blue-900/30">
      <style>{`
        /* Component-scoped styles for Navbar (keeps changes inside this component) */
        .nav-link {
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-decoration-color: transparent !important;
          -webkit-text-decoration-color: transparent !important;
          text-underline-offset: 6px;
          transition: text-decoration-color 150ms ease, transform 120ms ease;
        }
        .nav-link:hover,
        .nav-link:focus {
          text-decoration-color: #3b82f6 !important;
          -webkit-text-decoration-color: #3b82f6 !important;
          transform: translateY(-1px);
        }

        @keyframes slide-in-right-component {
          0% {
            transform: translateX(12px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right-component 220ms cubic-bezier(.22,.9,.32,1) both !important;
        }

        /* small accessibility tweak: reduce motion respect */
        @media (prefers-reduced-motion: reduce) {
          .animate-slide-in-right {
            animation: none !important;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.name === 'Home' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-base font-medium nav-link"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-base font-medium nav-link"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Download App Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => navigate('/download')}
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
            >
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-blue-900/30 transition-colors border border-white/20"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute right-4 top-20 bg-slate-900/95 backdrop-blur-lg border border-blue-900/30 rounded-xl w-56 z-50 shadow-lg animate-slide-in-right">
          <div className="px-6 pt-4 pb-6 space-y-3 flex flex-col items-center">
            {navLinks.map((link) => (
              link.name === 'Home' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-white text-center px-4 py-3 rounded-lg transition-all duration-300 font-medium nav-link w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white text-center px-4 py-3 rounded-lg transition-all duration-300 font-medium nav-link w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            <button 
              onClick={() => {
                navigate('/download');
                setIsMobileMenuOpen(false);
              }}
              className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 mt-2"
            >
              Download App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ZKGuardNavbar;