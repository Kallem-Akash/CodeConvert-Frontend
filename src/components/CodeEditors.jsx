import React from 'react';
import Editor from '@monaco-editor/react';
import ConvertedCodeEditor from './ConvertedCodeEditor';

const CodeEditors = ({ sourceCode, setSourceCode, fromLang, toLang, convertedCode, languages }) => (
  <div className="flex-1 bg-gradient-to-br from-white/30 via-blue-50/20 to-purple-50/20 backdrop-blur-sm relative z-10">
    <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none"></div>
    <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[500px]">
        {/* Source Code Editor */}
        <div className="flex flex-col bg-white/70 backdrop-blur-xl rounded-2xl border border-gray-200/40 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent rounded-2xl pointer-events-none"></div>
          <div className="bg-gradient-to-r from-gray-50/80 to-blue-50/60 px-6 py-4 border-b border-gray-200/40 backdrop-blur-sm relative z-10">
            <h3 className="text-sm font-semibold text-gray-700">
              Source Code ({languages.find(l => l.id === fromLang)?.name})
            </h3>
          </div>
          <div className="flex-1 relative z-10">
            <Editor
              height="100%"
              language={fromLang}
              value={sourceCode}
              onChange={(value) => setSourceCode(value || '')}
              theme="light"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                wordWrap: 'on',
                padding: { top: 16, bottom: 16 },
                fontFamily: 'JetBrains Mono, Monaco, Consolas, monospace',
              }}
            />
          </div>
        </div>

        {/* Converted Code Editor */}
        <ConvertedCodeEditor
          convertedCode={convertedCode}
          toLang={toLang}
          languages={languages}
        />
      </div>
    </div>
  </div>
);

export default CodeEditors; 