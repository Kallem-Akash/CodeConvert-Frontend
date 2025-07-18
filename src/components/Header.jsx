import React, { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleGetStarted = () => {
    const panel = document.getElementById('language-selection-panel');
    if (panel) {
      panel.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-700">
              CodeConvert
            </span>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-gray-800 hover:text-gray-900 font-medium transition-all duration-300 hover:bg-white/60 px-4 py-2 rounded-xl backdrop-blur-sm">
              Features
            </button>
            <button className="text-gray-800 hover:text-gray-900 font-medium transition-all duration-300 hover:bg-white/60 px-4 py-2 rounded-xl backdrop-blur-sm">
              Pricing
            </button>
            <button className="text-gray-800 hover:text-gray-900 font-medium transition-all duration-300 hover:bg-white/60 px-4 py-2 rounded-xl backdrop-blur-sm">
              Sign In
            </button>
            <a href="https://kallemakash.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-purple-700">
              Portfolio
            </a>
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-purple-700"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/60 rounded-xl transition-all duration-300 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
          </button>
        </div>
        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col items-stretch py-4 z-50 animate-fade-in">
            <button className="text-gray-800 hover:text-gray-900 font-medium transition-all duration-300 hover:bg-gray-100 px-6 py-3 text-left" onClick={() => setMobileMenuOpen(false)}>
              Features
            </button>
            <button className="text-gray-800 hover:text-gray-900 font-medium transition-all duration-300 hover:bg-gray-100 px-6 py-3 text-left" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </button>
            <button className="text-gray-800 hover:text-gray-900 font-medium transition-all duration-300 hover:bg-gray-100 px-6 py-3 text-left" onClick={() => setMobileMenuOpen(false)}>
              Sign In
            </button>
            <a href="https://kallemakash.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 text-center mx-4 my-2">
              Portfolio
            </a>
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 text-center mx-4 my-2"
              onClick={() => {
                setMobileMenuOpen(false);
                handleGetStarted();
              }}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};