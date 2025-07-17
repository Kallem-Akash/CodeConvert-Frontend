import React from 'react';
import { Zap, Shield, Globe } from 'lucide-react';

const HeroSection = () => {
  const handleGetStarted = () => {
    const panel = document.getElementById('language-selection-panel');
    if (panel) {
      panel.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-xl border-b border-gray-200/30 shadow-lg relative z-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 text-center relative z-10">
        <div className="relative inline-flex items-center justify-center mb-4 sm:mb-6">
          {/* Animated glowing ring */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 blur-xl opacity-40 animate-pulse scale-110"></span>
          <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200/50 relative z-10">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            AI-Powered Code Translation
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Transform Code Between
        </h1>
        <h2
          className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 sm:mb-10"
          style={{ lineHeight: 1.25, paddingBottom: '0.2em' }}
        >
          Any Programming Language
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
          Convert your code instantly with AI precision. From Python to JavaScript, 
          Java to Go, and everything in between. Professional-grade conversions in seconds.
        </p>
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Lightning Fast</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Convert code in seconds with our optimized AI engine
            </p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-100 to-green-200 rounded-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Secure & Private</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Your code is processed securely and never stored
            </p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-100 to-purple-200 rounded-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">20+ Languages</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Support for all major programming languages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 