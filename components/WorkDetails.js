// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';
import Link from 'next/link';

const WorkDetails = (props) => {
  return (
    <div className='flex flex-col text-center xl:mb-0  xl:w-[30vw]'>
      <motion.h2
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2'
      >
        {props.details.title}
      </motion.h2>
      <motion.div
        variants={fadeIn('down', 0)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='xl:max-w-[65%]'
      >
        {props.details.blurb}
      </motion.div>
    </div>
  );
};

export default WorkDetails;
