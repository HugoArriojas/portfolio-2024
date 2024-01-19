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
    <div className="h-full text-center xl:text-left bg-gradient-to-b from-transparent to-primary/50 mt-[85px] max-h-[calc(100dvh-164px)] xl:max-h-[calc(100dvh-85px)] overflow-y-auto flex align-center">
      <div className="container mx-auto h-fit flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center px-4 lg:px-0">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 my-5"
          >
            From fishing nets to <span className="text-accent">internet</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:max-w-[500px] mx-auto xl:mx-0 mb-6 xl:px-0 text-left"
          >
            My name is Hugo Arriojas
            <span className="text-accent"> (Ah-ree-oh-has) </span>and I am a
            Software Engineer, Scrum Master, and marine scientist based out of
            Ottawa, ON 🇨🇦
          </motion.p>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:max-w-[500px] mx-auto xl:mx-0 mb-6 xl:px-0 text-left"
          >
            My educational background in web development is complemented by a
            Bachelor of Science with Honours in Marine Biology and Statistics
            and both underscore my commitment to continuous learning and
            interdisciplinary problem-solving. <br />
            Whether sea or <span className="text-accent">CSS</span>, surfing the
            ocean or <span className="text-accent">surfing the web</span>, cod
            or
            <span className="text-accent"> coding</span>, just know that
            I&apos;ll be applying the same kind of enthusiasm, respect, and
            passion for our product as I would with the open sea!
          </motion.p>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:max-w-[500px] mx-auto xl:mx-0 mb-6 xl:px-0 text-left"
          >
            I am always eager to embrace new challenges, collaborate with
            like-minded professionals, and contribute to innovative projects.
          </motion.p>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:max-w-[500px] mx-auto xl:mx-0 mb-6 xl:px-0 text-left"
          >
            Let&apos;s connect and explore the exciting intersections of
            technology and creativity!
          </motion.p>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:max-w-[500px] mx-auto xl:mx-0 mb-6 xl:px-0 text-left font-normal"
          >
            <Link
              className="text-accent mb-5"
              href="https://medium.com/@hugo.arriojas/the-stillness-in-storms-4be5fc97e1a9"
              target="_blank"
            >
              Read My Story
            </Link>
          </motion.p>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[45%] h-fit mb-10"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row gap-x-2 xl:items-start justify-between text-white/60 xl:w-[430px] mb-5 md:mb-0"
                >
                  {/* title */}
                  <div>
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="font-light mb-2 md:mb-0">
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
                      return <div className="text-2xl text-white">{icon}</div>;
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
