import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="backdrop-blur-xl border-t border-gray-200/30 mt-16 relative z-10 shadow-2xl bg-white/70">
      <div className="max-w-6xl mx-auto px-6 py-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-gray-500 text-sm md:text-base mb-2 md:mb-0">© 2025 CodeConvert. All rights reserved.</span>
          <span className="flex items-center text-gray-500 text-sm md:text-base">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" fill="currentColor" /> by <span className="font-semibold ml-1 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Akash</span>
          </span>
        </div>
      </div>
    </footer>
  );
};