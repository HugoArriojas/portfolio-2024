// components
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import Link from 'next/link';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useEffect } from 'react';
// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

import { workObjects, worksArray } from './constants';

const Work = () => {
  useEffect(() => {
    document.title = 'Hugo Arriojas - Work';
  }, []);

  return (
    <div className='mt-[85px] flex h-full max-h-[calc(100dvh-164px)] items-center overflow-y-auto bg-gradient-to-b from-transparent to-primary/50 xl:max-h-[calc(100dvh-85px)]'>
      <div className='container mx-auto flex h-full flex-col align-middle'>
        <div className='relative my-auto flex h-fit flex-col gap-x-8 px-2 md:px-0 xl:mr-20 xl:flex-row'>
          {/* text */}
          <div className='flex flex-col text-center xl:mb-0  xl:w-[30vw] '>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2'
            >
              My work
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mx-auto mb-4 text-left xl:max-w-[400px]'
            >
              Having worked at Mercatus, I have a great deal of experience
              creating accessible & scalable white-label e-commerce products for
              a variety of clients.
              <br />I also have some personal projects and some past works from
              bootcamp:
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn('down', 0)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='xl:max-w-[65%]'
          >
            <div className='h-fit max-h-[565px] md:max-h-[325px]'>
              {workLinks.map((work, index) => {
                return (
                  <div
                    key={index}
                    className='flex  justify-between bg-gradient-to-b from-primary/50 to-black/50 my-3 p-5 rounded-lg'
                  >
                    <div className='flex flex-col justify-between '>
                      <Link
                        className='text-[13px] tracking-[0.2em] group'
                        href={work.detailsLink}
                        target='_blank'
                        cursor-pointer
                      >
                        <h2 className='group-hover:text-accent'>
                          {work.title}
                        </h2>
                        <p className='text-[11px] h-10 py-auto flex items-center'>
                          {work.technologies}
                        </p>
                      </Link>
                      <div className='flex w-[60%] justify-between gap-x-5 pt-2'>
                        <Link
                          className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] group'
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
                        <Link
                          className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] group'
                          href={work.github}
                          target='_blank'
                          cursor-pointer
                        >
                          <p className='font-bold group-hover:text-accent'>
                            GITHUB
                          </p>
                          <div className='text-xl group-hover:text-accent'>
                            <BsArrowRight />
                          </div>
                        </Link>
                      </div>
                    </div>
                    <Link
                      className='max-w-[35%] group'
                      href={work.detailsLink}
                      target='_blank'
                      cursor-pointer
                    >
                      <Image
                        src={work.path}
                        height={1000}
                        width={500}
                        alt=''
                        layout='responsive'
                        objectFit='contain'
                        className='group-hover:scale-110 transition-all duration-700'
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <Circles />
      <Bulb />
    </div>
  );
};

export default Work;
