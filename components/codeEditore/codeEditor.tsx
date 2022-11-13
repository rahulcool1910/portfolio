import React from 'react';
import styles from './codeEditor.module.scss';
import Image from 'next/image';
const CodeEditor: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_buttons_container}>
          <span className={styles.header_buttons}></span>
          <span className={styles.header_buttons}></span>
          <span className={styles.header_buttons}></span>
        </div>
        <div className={styles.header_tabs_container}>
          <span className={styles.header_tabs}></span>
          <span className={styles.header_tabs}></span>
        </div>
      </div>
      <div className={styles.inner_container}></div>
    </div>
  );
};

export default CodeEditor;
