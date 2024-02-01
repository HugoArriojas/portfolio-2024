// components
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import Link from 'next/link';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useRef, useCallback, useEffect } from 'react';
// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

export const workLinks = [
  {
    title: 'Mercatus Technologies Inc.',
    path: '/mercatus.png',
    detailsLink: '/work/mercatus',
    liveLink: 'https://hugo-portfolio-2022.netlify.app/',
    blurb:
      'Previous portfolio page before redesign, note the similar colour scheme to my current portfolio!',
    github: 'https://github.com/HugoArriojas/portfolio-2024',
    technologies: 'React, TypeScript, Apollo, AngularJS, Next.JS, Docker',
  },
  {
    title: 'Previous Portfolio',
    path: '/previous-portfolio.png',
    detailsLink: '/work/previous-portfolio',
    liveLink: 'https://hugo-portfolio-2022.netlify.app/',
    blurb:
      'Previous portfolio page before redesign, note the similar colour scheme to my current portfolio!',
    github: 'https://github.com/HugoArriojas/portfolio-2024',
    technologies: 'HTML, CSS, JavaScript, jQuery, Sass, Figma',
  },
  {
    title: 'Reactive Retail',
    path: '/reactive-retail.png',
    detailsLink: '/work/reactive-retail',
    liveLink: 'https://reactiveretail.netlify.app/',
    blurb:
      'Mock eCommerce site built in React using the FakeStore API and Firebase integration; currently working on a backend',
    github: 'https://github.com/HugoArriojas/ReactiveRetail',
    technologies: 'React, Sass, Figma, Photoshop',
  },
  {
    title: 'GIF Me the Weather',
    path: '/gif-weather.png',
    detailsLink: '/work/gif-weather',
    liveLink: 'https://gifmetheweather.netlify.app/',
    blurb:
      'Weather app created in pair programming exercise using various APIs to receive a weekly forecast and activity suggestions',
    github: 'https://github.com/hugElla/gifMeTheWeather',
    technologies: 'HTML, CSS, JavaScript, jQuery, Sass, Figma',
  },
  {
    title: 'Not So Social Planner',
    path: '/not-social.png',
    detailsLink: '/work/not-social',
    liveLink: 'https://notsosocialplanner.netlify.app/',
    blurb:
      'Agency-style project for a social planner where users can slot in either activities or actively streaming shows',
    github: 'https://github.com/Hugo-Liz-Linda-Ryan/NotSoSocialEventPlanner',
    technologies: 'React, Sass, Figma',
  },
  {
    title: 'Delicious',
    path: '/delicious.png',
    detailsLink: '/work/delicious',
    liveLink: 'https://deliciouspsd.netlify.app/',
    blurb:
      'Multi-page conversion of PSD design in a mock client request exercice. My first web development project ever!',
    github: 'https://github.com/HugoArriojas/deliciousPSDConversion',
    technologies: 'HTML, CSS, JavaScript, jQuery, Sass, Figma',
  },
];

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
