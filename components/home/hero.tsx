import React from 'react';
import styles from './hero.module.scss';
import Image from 'next/image';
import path from '../../assets/path.png';
import DownloadCV from './DownloadCV';

const Hero: React.FC = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_inner_container}>
        <div className={styles.hero_intro}>
          <h2>
            {`<p>`}
            <span className={styles.hero_text}>This is</span>
            {`</p>`}
          </h2>
          <div className={styles.hero_intro_main}>
            {`<h1>`}
            <h2 className={styles.hero_intro_main_text}>Rahul R</h2>
            {`</h1>`}
          </div>
          <h2>
            {`<p>`}{' '}
            <span className={styles.hero_text}>Full Stack Developer</span>{' '}
            {`</p>`}
          </h2>
        </div>
        <div>
          <h2>
            <DownloadCV />
          </h2>
        </div>
        <div className={styles.path}>
          <Image src={path} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
