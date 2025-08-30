import { useState } from 'react';

const useCodeConversion = () => {
  const [sourceCode, setSourceCode] = useState('// Enter your source code here\nfunction hello() {\n  console.log("Hello, World!");\n}');
  const [convertedCode, setConvertedCode] = useState('');
  const [fromLang, setFromLang] = useState('javascript');
  const [toLang, setToLang] = useState('python');
  const [isConverting, setIsConverting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleConvert = async () => {
    if (!sourceCode.trim()) return;
    setIsConverting(true);
    try {
      const response = await fetch('https://codeconvert-backend1.onrender.com/api/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sourceCode, fromLang, toLang }),
      });
      if (!response.ok) throw new Error('Conversion failed');
      const data = await response.json();
      setConvertedCode(data.result || '');
    } catch (error) {
      console.error('Error converting code:', error);
      setConvertedCode('// Error: Failed to convert code\n// Please check your connection and try again');
    } finally {
      setIsConverting(false);
    }
  };

  const handleCopy = async () => {
    if (!convertedCode.trim()) return;
    try {
      await navigator.clipboard.writeText(convertedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  const handleClear = () => {
    setSourceCode('');
    setConvertedCode('');
  };

  return {
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
  };
};

export default useCodeConversion; 