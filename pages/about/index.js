/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPhp,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobexd,
} from 'react-icons/si';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaPhp />,
          <SiNextdotjs />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma />,
          <SiAdobexd />,
          <SiAdobepremierepro />,
          <SiAdobephotoshop />,
          <SiAdobeillustrator />,
          <SiAdobeindesign />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Engineer & Scrum Master',
        workplace: 'Mercatus Technologies Inc.',
        stage: '2022 - Present',
      },
      {
        title: 'Freelance Web Developer',
        workplace: 'Self Employed',
        stage: '2021 - 2022',
      },
      {
        title: 'Accounting Administrator',
        workplace: 'Carson Auto Group',
        stage: '2018 - 2021',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Web Development Immersive Certificate',
        workplace: 'Juno College',
        stage: '2021',
      },
      {
        title: 'Hons. BSc. in Marine Biology & Statistics',
        workplace: 'Dalhousie University',
        stage: '2013 - 2017',
      },
    ],
  },
];

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// components
import Circles from '../../components/Circles';

const About = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    document.title = 'Hugo Arriojas - About';
  }, []);

  return (
    <div className='align-center mt-[85px] flex h-full max-h-[calc(100dvh-164px)] overflow-y-auto bg-gradient-to-b from-transparent to-primary/50 text-center xl:max-h-[calc(100dvh-85px)] xl:text-left'>
      <div className='container mx-auto flex h-fit flex-col items-center gap-x-6 xl:flex-row'>
        {/* text */}
        <div className='flex flex-1 flex-col justify-center px-4 lg:px-0'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 my-5'
          >
            From fishing nets to <span className='text-accent'>internet</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mx-auto mb-6 text-left xl:mx-0 xl:max-w-[500px] xl:px-0'
          >
            My name is Hugo Arriojas
            <span className='text-accent'> (Ah-ree-oh-has) </span>
            and I am a Software Engineer, Scrum Master, and marine scientist
            based out of Ottawa, ON 🇨🇦
          </motion.p>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mx-auto mb-6 text-left xl:mx-0 xl:max-w-[500px] xl:px-0'
          >
            My educational background in web development is complemented by a
            Bachelor of Science with Honours in Marine Biology and Statistics
            and both underscore my commitment to continuous learning and
            interdisciplinary problem-solving. <br />
            Whether sea or <span className='text-accent'>CSS</span>, surfing the
            ocean or <span className='text-accent'>surfing the web</span>, cod
            or
            <span className='text-accent'> coding</span>, just know that
            I&apos;ll be applying the same kind of enthusiasm, respect, and
            passion for our product as I would with the open sea!
          </motion.p>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mx-auto mb-6 text-left xl:mx-0 xl:max-w-[500px] xl:px-0'
          >
            I am always eager to embrace new challenges, collaborate with
            like-minded professionals, and contribute to innovative projects.
          </motion.p>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mx-auto mb-6 text-left xl:mx-0 xl:max-w-[500px] xl:px-0'
          >
            Let&apos;s connect and explore the exciting intersections of
            technology and creativity!
          </motion.p>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mx-auto mb-6 text-left font-normal xl:mx-0 xl:max-w-[500px] xl:px-0'
          >
            <Link
              className='mb-5 text-accent'
              href='https://medium.com/@hugo.arriojas/the-stillness-in-storms-4be5fc97e1a9'
              target='_blank'
            >
              Read My Story
            </Link>
          </motion.p>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mb-10 flex h-fit w-full flex-col xl:max-w-[45%]'
        >
          <div className='mx-auto mb-4 flex gap-x-4 xl:mx-0 xl:gap-x-8'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }  relative cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white xl:text-lg`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='flex flex-col items-center gap-y-2 py-2 xl:items-start xl:gap-y-4 xl:py-6'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='mb-5 flex flex-1 flex-col justify-between gap-x-2 text-white/60 md:mb-0 md:flex-row xl:w-[430px] xl:items-start'
                >
                  {/* title */}
                  <div>
                    <div className='mb-2 font-light md:mb-0'>{item.title}</div>
                    <div className='mb-2 font-light md:mb-0'>
                      {item.workplace}
                    </div>
                  </div>
                  <div
                    className={`${
                      !item.workplace && 'hidden '
                    }  hidden md:flex xl:hidden`}
                  >
                    -
                  </div>
                  <div>{item.stage}</div>
                  {/* <div className="flex gap-x-4"> */}
                  <div className={`${!item.icons && 'hidden '}  flex gap-x-4`}>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <Circles />
    </div>
  );
};

export default About;
