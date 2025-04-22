//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Headshot from '../components/Headshot';

// framer motion
import { motion } from 'motion/react';

//variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="to-back/60 h-full bg-gradient-to-b from-primary/0 via-black/50">
      {/* Text */}
      <div className="relative z-40  h-full w-full">
        <div className="container mx-auto mt-[88px] flex h-full max-h-[calc(100dvh-164px)] flex-col justify-center overflow-y-auto text-center xl:max-h-[calc(100dvh-85px)] xl:text-left">
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
            className="mx-auto mb-10 max-w-md xl:mx-0 xl:mb-16 xl:max-w-lg"
          >
            Software engineer & marine biologist adept in developing e-commerce
            solutions & dedicated to fostering a more interconnected world
          </motion.p>
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden xl:flex"
            className="relative mb-2 flex sm:pb-0"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="absolute bottom-0 right-0 h-full w-full ">
        {/* bg image */}
        <div className="translate-z-0 absolute h-full w-full bg-none opacity-50 mix-blend-color-dodge xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat"></div>
        <ParticlesContainer />
        {/* headshot */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="max-w bottom-30 absolute h-full max-h-[678px] w-full max-w-[737px] lg:bottom-0 lg:right-[5%]"
        >
          <Headshot />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
