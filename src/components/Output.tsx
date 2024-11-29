import React from 'react';
import styles from '@/styles/Output.module.css';

interface OutputProps {
  output: string;
  onClear: () => void;
}

const Output: React.FC<OutputProps> = ({ output, onClear }) => {
  return (
    <div className={styles.output}>
      <div className={styles.header}>
        <span>Output</span>
        <button className={styles.clearButton} onClick={onClear}>Clear</button>
      </div>
      <pre className={styles.result}>{output}</pre>
    </div>
  );
};

export default Output;
