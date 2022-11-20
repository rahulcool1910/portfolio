import Image from 'next/image';
import React from 'react';
import styles from './hero.module.scss';
const DownloadCV = () => {
  return (
    <div className={styles.download_wrapper}>
      <div className={styles.download_wrapper_container}></div>
      <div className={styles.download_innerWrapper}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.download_outerWrapper}>
        <span></span>
        <span></span>
      </div>
      <div className={styles.download_text}>{`<Download CV/>`}</div>
    </div>
  );
};

export default DownloadCV;
