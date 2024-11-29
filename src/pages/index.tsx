import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Editor from '@/components/Editor';
import Output from '@/components/Output';
import styles from '@/styles/Home.module.css';

const Home: React.FC = () => {
  const [language, setLanguage] = useState('py');
  const [code, setCode] = useState(`# Online Python compiler\nprint("Hello World")`);
  const [output, setOutput] = useState('Hello World\n=== Code Execution Successful ===');

  const handleLanguageChange = (newLanguage: string, template: string) => {
    setLanguage(newLanguage);
    setCode(template);
    setOutput(''); 
  };

  const handleRun = () => {
    setOutput(`${code}\n=== Code Execution Successful ===`);
  };

  const handleClear = () => {
    setOutput('');
  };

  return (
    <div className={styles.container}>
      <Sidebar onLanguageChange={handleLanguageChange} />
      <div className={styles.main}>
        <Editor code={code} onRun={handleRun} setCode={setCode} language={language} />
        <Output output={output}  onClear={handleClear} />
      </div>
    </div>
  );
};

export default Home;
