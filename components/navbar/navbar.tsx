import React from 'react';
import { ILinks } from '../../constants/types/Links';
import styles from './navbar.module.scss';
import Image from 'next/image';
import Illustrations from '../../assets/logo.svg';
const Navbar: React.FC = () => {
  const links: ILinks[] = [
    {
      name: 'Home',
      link: 'home',
    },
    {
      name: 'About Me',
      link: 'home',
    },
    {
      name: 'Projects',
      link: 'home',
    },
    {
      name: 'Contact',
      link: 'home',
    },
  ];

  const getIndex = (num: number): String => {
    return `0${num + 1}`.slice(-2);
  };
  return (
    <div className={styles.link_container}>
      <div className={styles.link_sub_container}>
        {links
          .filter((links, gIndex) => gIndex < 2)
          .map((links, currIdx) => (
            <div className={styles.link}>
              <span>{`//${getIndex(currIdx)}.     <${links.name}/>`}</span>
            </div>
          ))}
      </div>
      <Image src={Illustrations} alt={''} />
      <div className={styles.link_sub_container}>
        {links
          .filter((links, gIndex) => gIndex >= 2)
          .map((links, currIdx) => (
            <div className={styles.link}>
              <span>{`//${getIndex(currIdx + 2)}.     <${links.name}/>`}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
