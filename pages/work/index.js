// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useRef, useCallback } from 'react';

const Work = () => {
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
    <div className="h-full bg-gradient-to-b from-transparent to-primary/50 flex items-center mt-[85px] max-h-[calc(100dvh-164px)] xl:max-h-[calc(100dvh-85px)] overflow-y-auto">
      <div className="h-full container mx-auto flex flex-col align-middle">
        <div className="flex flex-col xl:flex-row gap-x-8 h-fit xl:mr-20 my-auto px-2 md:px-0 relative">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col  xl:mb-0 ">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              My work
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 xl:max-w-[400px] mx-auto text-left"
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
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:max-w-[65%]"
          >
            <div className=" h-fit max-h-[565px] md:max-h-[325px] overflow-hidden">
              <WorkSlider
                sliderRef={sliderRef}
                className="overflow-hidden"
              />
            </div>
            <div className="carousel-buttons relative h-32 w-20 mx-auto">
              <button
                className="swiper-button-prev absolute"
                onClick={handlePrev}
              />
              <button
                className="swiper-button-next absolute"
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
