import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { LanguageSelector } from './components/LanguageSelector';
import { ConvertButton } from './components/ConvertButton';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { languages } from './utils/languages';
import { Zap, Shield, Globe, Copy, Check } from 'lucide-react';
import LanguageSelectionPanel from './components/LanguageSelectionPanel';
import ActionButtons from './components/ActionButtons';
import CodeEditors from './components/CodeEditors';
import HeroSection from './components/HeroSection';
import useCodeConversion from './hooks/useCodeConversion';

function App() {
  const {
    sourceCode,
    setSourceCode,
    convertedCode,
    setConvertedCode,
    fromLang,
    setFromLang,
    toLang,
    setToLang,
    isConverting,
    copied,
    handleConvert,
    handleCopy,
    handleClear,
  } = useCodeConversion();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden flex flex-col">
      <Header />
      <HeroSection />

      {/* Language Selectors */}
      <LanguageSelectionPanel
        fromLang={fromLang}
        toLang={toLang}
        setFromLang={setFromLang}
        setToLang={setToLang}
        languages={languages}
        handleConvert={handleConvert}
        isConverting={isConverting}
        sourceCode={sourceCode}
        setSourceCode={setSourceCode}
        convertedCode={convertedCode}
      />

      {/* Action Buttons */}
      <ActionButtons
        handleClear={handleClear}
        handleCopy={handleCopy}
        convertedCode={convertedCode}
        copied={copied}
      />

      {/* Editors */}
      {/* The CodeEditors component is now rendered inside LanguageSelectionPanel */}

      <Footer />
    </div>
  );
}

export default App;