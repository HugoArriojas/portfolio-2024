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

import { workObjects } from '../../public/constants';

const Work = () => {
  useEffect(() => {
    document.title = 'Hugo Arriojas - Work';
  }, []);
  const workArray = Object.keys(workObjects);

  return (
    <div className='mt-[85px] flex h-full max-h-[calc(100dvh-164px)] items-center overflow-y-auto bg-gradient-to-b from-transparent to-primary/50 xl:max-h-[calc(100dvh-85px)]'>
      <div className='container mx-auto flex h-full flex-col align-middle'>
        <div className='relative flex h-full flex-col gap-x-8 my-10 px-2 md:px-0 xl:mr-20 xl:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col text-center xl:mb-0  xl:w-[30vw] '
          >
            <h2 className='h2'>My work</h2>
            <p className='mx-auto text-left xl:max-w-[400px]'>
              Click a project to learn more
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='xl:max-w-[65%]'
          >
            <div className='mb-4'>
              <h3 className='text-left'>In progress:</h3>
              <ul className='list-disc text-left ml-4'>
                <li>Full stack MERN goal-tracking application</li>
                <li>
                  Adding verification and user accounts to Reactive Retail
                </li>
              </ul>
            </div>
            <div className='h-full pb-20'>
              {workArray.map((work, index) => {
                return (
                  <div
                    key={index}
                    className='flex flex-col sm:flex-row justify-between bg-gradient-to-b from-primary/50 to-black/50 my-3 p-5 rounded-lg group/work'
                  >
                    <div className='flex flex-col justify-between '>
                      <Link
                        className='text-[13px] tracking-[0.2em] group group-hover/work:text-accent'
                        href={workObjects[work].detailsLink}
                        target='_blank'
                        cursor-pointer='true'
                      >
                        <h3 className='group-hover:text-accent mb-2'>
                          {workObjects[work].title}
                        </h3>
                        <p className='text-[11px] py-auto flex items-center'>
                          {workObjects[work].technologies}
                        </p>
                      </Link>
                      {(workObjects[work].liveLink ||
                        workObjects[work].github) && (
                        <div className='flex flex-col sm:flex-row w-[60%] justify-between gap-x-5 gap-y-5  pt-2'>
                          {workObjects[work].liveLink && (
                            <Link
                              className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] group'
                              href={workObjects[work].liveLink}
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
                          {workObjects[work].github && (
                            <Link
                              className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] group'
                              href={workObjects[work].github}
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
                          )}
                        </div>
                      )}
                    </div>
                    <Link
                      className='mt-5 sm:mt-0 sm:max-w-[35%] group'
                      href={workObjects[work].detailsLink}
                      target='_blank'
                      cursor-pointer
                    >
                      <Image
                        src={`/${workObjects[work].name}/mocks1.png`}
                        height={1000}
                        width={500}
                        alt={workObjects[work].alt}
                        className='group-hover/work:scale-110 transition-all duration-700'
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
