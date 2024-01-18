//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Headshot from '../components/Headshot';

// framer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-primary/0 via-black/50 to-back/60 h-full">
      {/* Text */}
      <div className="w-full h-full  relative z-40">
        <div className="text-center flex flex-col justify-center xl:text-left h-full max-h-[calc(100dvh-164px)] xl:max-h-[calc(100dvh-85px)] mt-[88px] overflow-y-auto container mx-auto">
          {/* Tagline */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 xl:max-w-xl"
          >
            From Imagination to <span className="text-accent">Innovation</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md xl:max-w-lg mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Software engineer & marine biologist adept in developing e-commerce
            solutions & dedicated to fostering a more interconnected world
          </motion.p>
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden xl:flex"
            className="flex mb-2 sm:pb-0 relative"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0 ">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-50"></div>
        <ParticlesContainer />
        {/* headshot */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w max-w-[737px] max-h-[678px] absolute bottom-30 lg:bottom-0 lg:right-[5%]"
        >
          <Headshot />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
