import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import styles from './contactMe.module.scss';

interface ILink {
  name: string;
  link: string;
  class: string;
}
const ContactMe = () => {
  const links: ILink[] = [
    {
      name: 'Gmail',
      link: 'rahulr1910r@gmail.com',
      class: 'top-[25%] left-[20%] !h-[180px] !w-[180px]',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/rahulr19/',
      class: 'top-[10%] right-[25%] !h-[210px] !w-[210px]',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/rahul_rahul19/',
      class: 'top-[55%] right-[15%]',
    },
    {
      name: 'Twitter',
      link: 'https://www.instagram.com/rahul_rahul19/',
      class: 'top-[50%] left-[40%] !h-[150px] !w-[150px]',
    },
  ];
  useEffect(() => {}, []);

  const redirectOnClick = (option: ILink) => {
    if (option.name === 'Gmail') {
      const email = 'rahulr1910r@gmail.com';
      document.location = 'mailto:' + email;
      return;
    }
    window.open(option.link, '_blank');
  };

  return (
    <div className={styles.contact_container + ' ContactMeContainer'}>
      <div className={styles.contact_header}>
        <span>{`<h3>`}</span>
        <h2 className={styles.contact_header_text}>Connect with me</h2>
        <span>{`</h3>`}</span>
      </div>
      <div className={styles.contact_links_container}>
        {links.map((link) => {
          return (
            <div
              className={styles.contact_links + ` ${link.class}`}
              key={link.name}
              onClick={() => redirectOnClick(link)}
            >
              <span>{`<>`}</span>
              <h2>{link.name}</h2>
              <span>{`</>`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactMe;
