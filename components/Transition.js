//framer motion
import { motion } from 'framer-motion';

//variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-[90] h-screen w-screen bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
      ></motion.div>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-[80] h-screen w-screen bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
      ></motion.div>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-[70] h-screen w-screen bg-[#4b3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
      ></motion.div>
    </>
  );
};

export default Transition;
