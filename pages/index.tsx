import type { NextPage } from 'next';
import ContactMe from '../components/contactMe/contactMe';
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
        <div>
          <Hero />
          <Projects />
          <ContactMe />
        </div>
      </div>
    </div>
  );
};

export default Home;
