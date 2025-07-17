import React from 'react';
import { Copy, Check } from 'lucide-react';

const ActionButtons = ({ handleClear, handleCopy, convertedCode, copied }) => (
  <div className="bg-white/30 backdrop-blur-xl border-b border-gray-200/30 relative z-10">
    <div className="max-w-6xl mx-auto px-6 py-6 relative z-10">
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleClear}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all font-medium"
        >
          Clear All
        </button>
        <button
          onClick={handleCopy}
          disabled={!convertedCode.trim()}
          className="flex items-center px-4 py-2 bg-white/70 hover:bg-white border border-gray-200 rounded-lg transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 hover:text-gray-900"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2 text-green-600" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy Result
            </>
          )}
        </button>
      </div>
    </div>
  </div>
);

export default ActionButtons; 