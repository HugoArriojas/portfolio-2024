// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';
import Link from 'next/link';

const WorkDetails = (props) => {
  const work = props.details;
  return (
    <div className='flex flex-col text-center pb-20'>
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2'
      >
        {work.title}
      </motion.h2>
      <motion.p
        variants={fadeIn('down', 0)}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        {work.blurb}
      </motion.p>
      <motion.div
        variants={fadeIn('down', 0)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='relative flex items-center m-20'
      >
        <div className='w-5 h-5 outline-dotted shadow-[0_0_90px_200px_#FE6192,0_0_90px_200px_#1d1536] absolute right-[60%] rounded-full'></div>
        <Image
          src='/mercatus/mocks2.png'
          width={804}
          height={303}
          alt={`Desktop image mockup of ${work.title} page`}
          className='z-10'
        />
      </motion.div>

      <motion.div
        variants={fadeIn('down', 0)}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <h3>Technologies</h3>
        <p>{work.technologies}</p>
      </motion.div>

      {work.about && (
        <motion.div
          variants={fadeIn('down', 0)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='my-5'
        >
          <h3>About</h3>
          <p>{work.about}</p>
        </motion.div>
      )}
      {work.challenges && (
        <motion.div
          variants={fadeIn('down', 0)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='my-5'
        >
          <h3>Challenges</h3>
          <p>{work.challenges}</p>
        </motion.div>
      )}
      {work.favourite && (
        <motion.div
          variants={fadeIn('down', 0)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='my-5'
        >
          <h3>Favourite Part</h3>
          <p>{work.favourite}</p>
        </motion.div>
      )}
      {work.nextSteps && (
        <motion.div
          variants={fadeIn('down', 0)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='my-5'
        >
          <h3>Next Steps</h3>
          <p>{work.nextSteps}</p>
        </motion.div>
      )}
    </div>
  );
};

export default WorkDetails;
