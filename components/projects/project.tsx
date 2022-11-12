import React from 'react';
import styles from './project.module.scss';
import Image from 'next/image';
import path from '../../assets/path.svg';
import codeEditor from '../../assets/codeEditor.jpg';
const Projects: React.FC = () => {
  const projectDetails = [
    {
      title: 'Code Editor',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat quod tempora similique temporibus officiis officia ducimus asperiores ullam veritatis! Earum asperiores eum voluptatum soluta corporis odit dolor repudiandae eligendi.',
      link: 'https://rahulcool1910.github.io/codeEditor/',
      imageSrc: codeEditor,
    },
    // {
    //   title: 'Pathfinder',
    //   description:
    //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat quod tempora similique temporibus officiis officia ducimus asperiores ullam veritatis! Earum asperiores eum voluptatum soluta corporis odit dolor repudiandae eligendi.',
    //   link: 'https://rahulcool1910.github.io/pathfinding-visulaizer/',
    //   imageSrc: codeEditor,
    // },
  ];
  return (
    <div className={styles.project_container}>
      <div className={styles.project_header}>
        <span>{`<h2>`}</span>
        <h2 className={styles.project_header_text}>My Portfolio</h2>
        <span>{`</h2>`}</span>
      </div>
      <div className={styles.project_details}>
        {projectDetails.map((details, idx) => {
          return (
            <div className={styles.project_detail}>
              <Image
                src={details.imageSrc}
                alt={''}
                className={styles.project_detail_image}
              />
              <div className={styles.project_detail_inner_container}>
                <span className={styles.project_detail_tags}>{`<h2>`}</span>
                <h2 className={styles.project_detail_title}>{details.title}</h2>
                <span className={styles.project_detail_description}>
                  {details.description}
                </span>
                <span className={styles.project_detail_tags}>{`</h2>`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
