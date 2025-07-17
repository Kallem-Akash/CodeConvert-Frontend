import React from 'react';
import { LanguageSelector } from './LanguageSelector';
import { ConvertButton } from './ConvertButton';
import CodeEditors from './CodeEditors';

const LanguageSelectionPanel = ({ fromLang, toLang, setFromLang, setToLang, languages, handleConvert, isConverting, sourceCode, setSourceCode, convertedCode, toLang: toLangProp, fromLang: fromLangProp }) => (
  <>
    <div id="language-selection-panel">
      <div className="relative z-10">
        <div className="absolute inset-0"></div>
        <div className="max-w-6xl mx-auto px-6 py-10 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <LanguageSelector
              value={fromLang}
              onChange={setFromLang}
              languages={languages}
              label="From"
            />
            <ConvertButton
              onClick={handleConvert}
              isConverting={isConverting}
              disabled={!sourceCode.trim()}
            />
            <LanguageSelector
              value={toLang}
              onChange={setToLang}
              languages={languages}
              label="To"
            />
          </div>
        </div>
      </div>
      <CodeEditors
        sourceCode={sourceCode}
        setSourceCode={setSourceCode}
        fromLang={fromLang}
        toLang={toLang}
        convertedCode={convertedCode}
        languages={languages}
      />
    </div>
  </>
);

export default LanguageSelectionPanel; 