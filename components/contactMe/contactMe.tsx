import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import styles from './contactMe.module.scss';

const ContactMe = () => {
  const links = [
    {
      name: 'Instagram',
      link: '',
      class: 'top-[25%] left-[20%] !h-[180px] !w-[180px]',
    },
    {
      name: 'Twitter',
      link: '',
      class: 'top-[50%] left-[40%] !h-[150px] !w-[150px]',
    },
    {
      name: 'LinkedIn',
      link: '',
      class: 'top-[10%] right-[25%] !h-[210px] !w-[210px]',
    },
    {
      name: 'Gmail',
      link: '',
      class: 'top-[55%] right-[15%]',
    },
  ];
  useEffect(() => {}, []);

  return (
    <div className={styles.contact_container}>
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
              onClick={console.log}
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
