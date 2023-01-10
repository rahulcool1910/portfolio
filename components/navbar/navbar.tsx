import React from 'react';
import { ILinks } from '../../constants/types/Links';
import styles from './navbar.module.scss';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
const Navbar: React.FC = () => {
  const links: ILinks[] = [
    {
      name: 'Home',
      link: 'HeroContainer',
    },
    {
      name: 'About Me',
      link: 'HeroContainer',
    },
    {
      name: 'Projects',
      link: 'ProjectContainer',
    },
    {
      name: 'Contact',
      link: 'ContactMeContainer',
    },
  ];

  const scrollIntoView = (component: number) => {
    const element = document.querySelector(`.${links[component].link}`);
    if (!element) return;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  const getIndex = (num: number): String => {
    return `0${num + 1}`.slice(-2);
  };
  return (
    <div className={styles.link_container}>
      <div className={styles.link_sub_container}>
        {links
          .filter((links, gIndex) => gIndex < 2)
          .map((links, currIdx) => (
            <div
              className={styles.link}
              onClick={() => scrollIntoView(currIdx)}
            >
              <span>{`//${getIndex(currIdx)}.     <${links.name}/>`}</span>
            </div>
          ))}
      </div>
      <Image src={logo} alt={''} className={styles.logo} />
      <div className={styles.link_sub_container}>
        {links
          .filter((links, gIndex) => gIndex >= 2)
          .map((links, currIdx) => (
            <div
              className={styles.link}
              onClick={() => scrollIntoView(currIdx + 2)}
            >
              <span>{`//${getIndex(currIdx + 2)}.     <${links.name}/>`}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
