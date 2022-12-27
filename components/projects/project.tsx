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
import ProgressBar from '@ramonak/react-progress-bar';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import CodeEditor from '../codeEditore/codeEditor';
import PathFinder from '../pathfinder/pathfinder';
const Projects: React.FC = () => {
  const [projectProgress, setProjectProgress] = useState(0);
  const swiperRef = useRef<SwiperClass>();
  const projectDetails = [
    {
      title: 'Code Editor',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat quod tempora similique temporibus officiis officia ducimus asperiores ullam veritatis! Earum asperiores eum voluptatum soluta corporis odit dolor repudiandae eligendi.',
      link: 'https://rahulcool1910.github.io/codeEditor/',
      imageSrc: CodeEditor,
    },
    {
      title: 'Pathfinder',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat quod tempora similique temporibus officiis officia ducimus asperiores ullam veritatis! Earum asperiores eum voluptatum soluta corporis odit dolor repudiandae eligendi.',
      link: 'https://rahulcool1910.github.io/pathfinding-visulaizer/',
      imageSrc: PathFinder,
    },
    // {
    //   title: 'Pathfinder',
    //   description:
    //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat quod tempora similique temporibus officiis officia ducimus asperiores ullam veritatis! Earum asperiores eum voluptatum soluta corporis odit dolor repudiandae eligendi.',
    //   link: 'https://rahulcool1910.github.io/pathfinding-visulaizer/',
    //   imageSrc: CodeEditor,
    // },
  ];
  return (
    <div className={styles.project_container + ' ProjectContainer'}>
      <div className={styles.project_header}>
        <span>{`<h2>`}</span>
        <h2 className={styles.project_header_text}>My Portfolio</h2>
        <span>{`</h2>`}</span>
      </div>
      <Swiper
        className={styles.project_details}
        onSlideChange={(index) => setProjectProgress(index.progress * 2)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {projectDetails.map((details, idx) => {
          return (
            <SwiperSlide className={styles.project_detail}>
              {React.createElement(details.imageSrc)}
              <div className={styles.project_detail_inner_container}>
                <span className={styles.project_detail_tags}>{`<h2>`}</span>
                <h2 className={styles.project_detail_title}>
                  <a href={details.link} target="_blank">
                    {details.title}
                  </a>
                </h2>
                <span className={styles.project_detail_description}>
                  {details.description}
                </span>
                <span className={styles.project_detail_tags}>{`</h2>`}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.project_details_controller}>
        <div
          className={styles.project_details_controller_button}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <MdArrowBackIosNew />
        </div>
        <ProgressBar
          completed={(projectProgress + 1) * (100 / projectDetails.length)}
          className={styles.project_details_progressbar}
          bgColor={'#02f74c'}
          baseBgColor={'#1d5d33'}
          borderRadius={'0'}
          customLabel={'  '}
          height={'10px'}
        />
        <div
          className={styles.project_details_controller_button}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default Projects;
