// components
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import Link from 'next/link';
import { NextPage } from 'next';
import React from 'react';
import ExperienceBlock from '../../components/ExperienceBlock';

// framer motion
import { motion } from 'motion/react';
import { fadeIn } from '../../variants';
import { useEffect } from 'react';
// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

import { workObjects } from '../../public/constants';

// Define TypeScript interfaces for work objects
interface WorkObject {
  title: string;
  name: string;
  detailsLink: string;
  liveLink?: string;
  alt?: string;
  technologies: string;
  github?: string;
}

interface WorkObjects {
  [key: string]: WorkObject;
}

const Work: NextPage = () => {
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
              {workArray.map((workKey, index) => {
                const work = workObjects[workKey];
                return (
                  <ExperienceBlock
                    key={index}
                    work={work}
                    index={index}
                  />
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
