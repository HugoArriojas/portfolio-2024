// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useRef, useCallback, useEffect } from 'react';

const Work = () => {
  useEffect(() => {
    document.title = 'Hugo Arriojas - Work';
  }, []);

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
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
              <br />
              As I&apos;m in the process of obtaining permission to cite
              examples, here are some of my projects from bootcamp:
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='xl:max-w-[65%]'
          >
            <div className='h-fit max-h-[565px] overflow-hidden md:max-h-[325px]'>
              <WorkSlider
                sliderRef={sliderRef}
                className='overflow-hidden'
              />
            </div>
            <div className='carousel-buttons relative mx-auto h-32 w-20'>
              <button
                className='swiper-button-prev absolute'
                onClick={handlePrev}
              />
              <button
                className='swiper-button-next absolute'
                onClick={handleNext}
              />
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
