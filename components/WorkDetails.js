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
        className='relative flex flex-col md:flex-row items-center mx-5 my-10 justify-between'
      >
        <Image
          src={`/${work.name}/mocks2.png`}
          width={804 / 1.75}
          height={303 / 1.75}
          alt={`Desktop image mockup of ${work.title} page`}
          className='z-10'
        />

        <div className='flex flex-col  justify-between gap-x-5 gap-y-5 mt-8 md:mt-0 md:text-right'>
          <motion.div
            variants={fadeIn('down', 0)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <h3 className='text-lg'>Technologies</h3>
            <p>{work.technologies}</p>
          </motion.div>
          {work.liveLink && (
            <Link
              className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] group md:ml-auto'
              href={work.liveLink}
              target='_blank'
              cursor-pointer
            >
              <p className='font-bold group-hover:text-accent'>
                LIVE&nbsp;PROJECT
              </p>
              <div className='text-xl group-hover:text-accent'>
                <BsArrowRight />
              </div>
            </Link>
          )}
          {work.github && (
            <Link
              className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] group md:ml-auto'
              href={work.github}
              target='_blank'
              cursor-pointer
            >
              <p className='font-bold group-hover:text-accent'>GITHUB</p>
              <div className='text-xl group-hover:text-accent'>
                <BsArrowRight />
              </div>
            </Link>
          )}
        </div>
      </motion.div>

      <motion.section
        variants={fadeIn('down', 0)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='relative flex items-center flex-col md:flex-row'
      >
        {work.section1 && (
          <motion.div
            variants={fadeIn('down', 0)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='my-5 text-left mr-10 max-w-[75%]'
          >
            <h3 className='text-lg'>{work.section1.title}</h3>
            <p>{work.section1.text}</p>
          </motion.div>
        )}
        <Image
          src={`/${work.name}/mocks3.png`}
          width={804 / 3}
          height={303 / 3}
          alt={`Mobile image mockup of ${work.title} page`}
          className='z-10 max-h-[350px] object-scale-down'
        />
      </motion.section>
      {work.section2 && (
        <motion.section
          variants={fadeIn('down', 0)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='my-5'
        >
          <h3 className='text-lg'>{work.section2.title}</h3>
          <p>{work.section2.text}</p>
        </motion.section>
      )}
      {work.section3 && (
        <motion.section
          variants={fadeIn('down', 0)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='my-5'
        >
          <h3 className='text-lg'>{work.section3.title}</h3>
          <p>{work.section3.text}</p>
        </motion.section>
      )}

      {work.section4 && (
        <motion.section
          variants={fadeIn('down', 0)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='my-5'
        >
          <h3 className='text-lg'>{work.section4.title}</h3>
          <p>{work.section4.text}</p>
        </motion.section>
      )}
    </div>
  );
};

export default WorkDetails;
