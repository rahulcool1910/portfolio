import React, { useRef, useState } from 'react';
import styles from './project.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper';
import path from '../../assets/path.svg';
import codeEditor from '../../assets/codeEditor.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper as SwiperClass } from 'swiper/types';
const Projects: React.FC = () => {
  const [projectProgress, setProjectProgress] = useState(0);
  const swiperRef = useRef<SwiperClass>();
  const projectDetails = [
    {
      title: 'Code Editor',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat quod tempora similique temporibus officiis officia ducimus asperiores ullam veritatis! Earum asperiores eum voluptatum soluta corporis odit dolor repudiandae eligendi.',
      link: 'https://rahulcool1910.github.io/codeEditor/',
      imageSrc: codeEditor,
    },
    {
      title: 'Pathfinder',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat quod tempora similique temporibus officiis officia ducimus asperiores ullam veritatis! Earum asperiores eum voluptatum soluta corporis odit dolor repudiandae eligendi.',
      link: 'https://rahulcool1910.github.io/pathfinding-visulaizer/',
      imageSrc: codeEditor,
    },
  ];
  return (
    <div className={styles.project_container}>
      <div className={styles.project_header}>
        <span>{`<h2>`}</span>
        <h2 className={styles.project_header_text}>My Portfolio</h2>
        <span>{`</h2>`}</span>
      </div>
      <Swiper
        className={styles.project_details}
        onSlideChange={(index) => setProjectProgress(index.progress)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {projectDetails.map((details, idx) => {
          return (
            <SwiperSlide className={styles.project_detail}>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button onClick={() => swiperRef.current?.slideNext()}>
        Slide to the next slide
      </button>
      {projectProgress}
      <button onClick={() => swiperRef.current?.slidePrev()}>
        Slide to the prev slide
      </button>
    </div>
  );
};

export default Projects;
