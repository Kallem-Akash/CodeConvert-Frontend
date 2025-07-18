import React from 'react';
import Editor from '@monaco-editor/react';

const ConvertedCodeEditor = ({ convertedCode, toLang, languages }) => (
  <div className="flex flex-col rounded-2xl border border-gray-200/40 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
    <div className="px-6 py-4 border-b border-gray-200/40 relative z-10">
      <h3 className="text-sm font-semibold text-gray-700">
        Converted Code ({languages.find(l => l.id === toLang)?.name})
      </h3>
    </div>
    <div className="flex-1 relative z-10">
      <Editor
        height="100%"
        language={toLang}
        value={convertedCode}
        theme="light"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
          readOnly: true,
          padding: { top: 16, bottom: 16 },
          fontFamily: 'JetBrains Mono, Monaco, Consolas, monospace',
        }}
      />
    </div>
  </div>
);

export default ConvertedCodeEditor; 