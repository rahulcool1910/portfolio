import React, { useEffect, useRef, useState } from 'react';
import { ILinks } from '../../constants/types/Links';
import styles from './navbar.module.scss';
import Image from 'next/image';
import logo from '../../assets/logo.svg';

interface props {
  updateDiv: () => void;
}
const Navbar: React.FC<props> = ({ updateDiv }) => {
  const menu = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

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

  const scrollIntoView = (component: number, override = false) => {
    if (width <= 600) {
      toggleMenu();
    }
    const element = document.querySelector(`.${links[component].link}`);
    if (!element) return;
    element.scrollIntoView({
      behavior: override ? 'auto' : 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  const getIndex = (num: number): String => {
    return `0${num + 1}`.slice(-2);
  };
  const toggleMenu = () => {
    if (!menu.current || !container.current) return;
    updateDiv();
    menu.current.classList.toggle(styles.is_active);
    container.current.classList.toggle(styles.link_container_flex);
    // scrollIntoView(0, true);
    console.log(
      '🚀 ~ file: navbar.tsx:46 ~ toggleMenu ~ styles.link_container_flex',
      styles.link_container_flex
    );
  };
  useEffect(() => {
    function resetMenu() {
      if (!menu.current || !container.current) return;
      menu.current.classList.remove(styles.is_active);
      container.current.classList.remove(styles.link_container_flex);
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', resetMenu);
    resetMenu();
    return () => window.removeEventListener('resize', resetMenu);
  }, []);
  return (
    <div className={styles.link_main_container}>
      <div className={styles.link_container} ref={container}>
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
                <span>{`//${getIndex(currIdx + 2)}.     <${
                  links.name
                }/>`}</span>
              </div>
            ))}
        </div>
      </div>
      {width <= 600 && (
        <Image src={logo} alt={''} className={styles.outer_logo} />
      )}
      <div ref={menu} className={styles.link_hamburger} onClick={toggleMenu}>
        <span className={styles.link_hamburger_line}></span>
        <span className={styles.link_hamburger_line}></span>
        <span className={styles.link_hamburger_line}></span>
        <div className={styles.link_hamburger_circle}></div>
      </div>
    </div>
  );
};

export default Navbar;
