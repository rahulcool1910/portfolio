import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ContactMe from '../components/contactMe/contactMe';
import Hero from '../components/home/hero';
import Navbar from '../components/navbar/navbar';
import Projects from '../components/projects/project';
import styles from './index.module.scss';
import color from './index.module.scss';

const Home: NextPage = () => {
  const [showDummyDiv, setShowDummyDiv] = useState(false);

  useEffect(() => {
    function updateDummyDiv() {
      setShowDummyDiv(false);
    }
    // window.addEventListener('resize', updateDummyDiv);
    updateDummyDiv();
    return () => window.removeEventListener('resize', updateDummyDiv);
  }, []);
  const updateDiv=()=>{
    setShowDummyDiv((previouState)=>{
      return !previouState
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.container_subContainer}>
        <Navbar updateDiv={updateDiv} />
        {true && <div style={{ height: 180 }}></div>}
        <Hero />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
