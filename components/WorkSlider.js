export const workSlider = {
  slides: [
    {
      title: 'Previous Portfolio',
      path: '/previous-portfolio.png',
      link: 'https://hugo-portfolio-2022.netlify.app/',
      blurb:
        'Previous portfolio page before redesign, note the similar colour scheme to my current portfolio!',
      github: 'https://github.com/HugoArriojas/portfolio-2024',
    },
    {
      title: 'Reactive Retail',
      path: '/reactive-retail.png',
      link: 'https://reactiveretail.netlify.app/',
      blurb:
        'Mock eCommerce site built in React using the FakeStore API and Firebase integration; currently working on a backend',
      github: 'https://github.com/HugoArriojas/ReactiveRetail',
    },
    {
      title: 'GIF Me the Weather',
      path: '/gif-weather.png',
      link: 'https://gifmetheweather.netlify.app/',
      blurb:
        'Weather app created in pair programming exercise using various APIs to receive a weekly forecast and activity suggestions',
      github: 'https://github.com/hugElla/gifMeTheWeather',
    },
    {
      title: 'Not So Social Planner',
      path: '/not-social.png',
      link: 'https://notsosocialplanner.netlify.app/',
      blurb:
        'Agency-style project for a social planner where users can slot in either activities or actively streaming shows',
      github: 'https://github.com/Hugo-Liz-Linda-Ryan/NotSoSocialEventPlanner',
    },
    {
      title: 'Delicious',
      path: '/delicious.png',
      link: 'https://deliciouspsd.netlify.app/',
      blurb:
        'Multi-page conversion of PSD design in a mock client request exercice. My first web development project ever!',
      github: 'https://github.com/HugoArriojas/deliciousPSDConversion',
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from 'next/link';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper';
import { Navigation } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = ({ sliderRef }) => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      slidesPerView={1}
      loop={true}
      spaceBetween={500}
      modules={[Pagination, Navigation]}
      ref={sliderRef}
      lazyPreloadPrevNext={5}
      scrollbar={{
        hide: true,
      }}
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            {/* mobile text */}
            <div className="h-[250px] sm:h-[250px]  md:hidden pt-5">
              <h2>{slide.title}</h2>
              <p className="md:hidden py-1">{slide.blurb}</p>
              <div className="flex justify-between w-[60%] gap-x-5 py-5">
                <Link
                  className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                  href={slide.link}
                  target="_blank"
                  cursor-pointer
                >
                  <p className="font-bold">LIVE&nbsp;PROJECT</p>
                  <div className="text-xl">
                    <BsArrowRight />
                  </div>
                </Link>
                <Link
                  className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                  href={slide.github}
                  target="_blank"
                  cursor-pointer
                >
                  <p className="font-bold">GITHUB</p>
                  <div className="text-xl">
                    <BsArrowRight />
                  </div>
                </Link>
              </div>
            </div>

            <div className="max-h-[350px] flex">
              <div className="relative w-full flex items-start justify-center group overflow-hidden h-fit sm:h-[350px]">
                <div>
                  <Image
                    src={slide.path}
                    width={600}
                    height={385}
                    alt=""
                    className="rounded-lg"
                  />
                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-[#2a136e] via-[#2a136e] to-[#4a22bd] opacity-0 md:group-hover:opacity-100 focus:opacity-100 transition-all duration-700 rounded-lg max-h-[305px] max-w-[600px] mx-auto">
                    {/* text */}
                    <div className="hidden absolute bottom-0 translate-y-full md:group-hover:block md:group-hover:-translate-y-10 group-hover:xl:-translate-y-5 transition-all duration-300 px-5">
                      <h2>{slide.title}</h2>
                      <p className="hidden md:block py-8">{slide.blurb}</p>
                      <Link
                        className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] py-5"
                        href={slide.link}
                        target="_blank"
                        cursor-pointer
                      >
                        <p className="delay-100 font-bold">LIVE</p>
                        <p className="hidden translate-y-[500%] group-hover:block group-hover:translate-y-0 transition-all duration-300 delay-150 font-bold">
                          PROJECT
                        </p>
                        <div className="hidden text-xl translate-y-[500%] group-hover:block group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </Link>
                      <Link
                        className="flex items-center text-[13px] tracking-[0.2em]"
                        href={slide.github}
                        target="_blank"
                        cursor-pointer
                      >
                        <p className="delay-100 font-bold">GITHUB</p>
                        <div className="hidden text-xl translate-y-[500%] group-hover:block group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
