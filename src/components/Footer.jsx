import React from 'react';
import { Heart, Mail, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="backdrop-blur-xl mt-6 relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-gray-800 text-sm md:text-base mb-2 md:mb-0">© 2025 CodeConvert. All rights reserved.</span>
          <span className="flex items-center text-gray-800 text-sm md:text-base">
            <a href="mailto:akashgoud018@gmail.com" className="mr-3 hover:text-blue-700" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/Kallem-akash" className="mr-3 hover:text-blue-700" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/kallemakash018" className="mr-3 hover:text-blue-700" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            Made with <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" fill="currentColor" /> by <span className="font-semibold ml-1 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Akash</span>
          </span>
        </div>
      </div>
    </footer>
  );
};