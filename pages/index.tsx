import type { NextPage } from 'next';
import Hero from '../components/home/hero';
import Navbar from '../components/navbar/navbar';
import Projects from '../components/projects/project';
import styles from './index.module.scss';
import color from './index.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_subContainer}>
        <Navbar />
        <Hero />
        <Projects />
      </div>
    </div>
  );
};

export default Home;