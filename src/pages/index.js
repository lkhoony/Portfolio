import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import Main from '../components/Main/Main'
import { Section } from '../styles/GlobalComponents';
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <Layout>
        <Main></Main>
      {/* <Section grid> */}
      {/*<Hero />*/}
      {/* <BgAnimation /> */}
      {/* </Section> */}
      {/*<Projects />*/}
      {/*<Technologies />*/}
      {/*<Timeline />*/}
      {/*<Acomplishments />*/}
    </Layout>
  );
};

export default Home;
