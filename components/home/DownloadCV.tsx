import Image from 'next/image';
import React from 'react';
import styles from './hero.module.scss';
const DownloadCV = () => {
  const downloadResume = () => {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', '/rahul_r.pdf');
    anchor.setAttribute('download', '');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode?.removeChild(anchor);
  };
  return (
    <div className={styles.download_wrapper} onClick={downloadResume}>
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
