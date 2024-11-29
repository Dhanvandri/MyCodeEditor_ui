import React, { ChangeEvent } from 'react';
import styles from '@/styles/Editor.module.css';

interface EditorProps {
  code: string;
  setCode: (newCode: string) => void;
  onRun: () => void;
  language: string;
}

const Editor: React.FC<EditorProps> = ({ code, onRun, setCode, language }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  return (
    <div className={styles.editor}>
      <div className={styles.header}>
        <span>{`main.${language.toLowerCase()}`}</span>
        <button className={styles.runButton} onClick={onRun}>
        Run
      </button>
      </div>
      <textarea
        className={styles.textarea}
        value={code}
        onChange={handleChange}
        spellCheck={false}
      />
    </div>
  );
};

export default Editor;
