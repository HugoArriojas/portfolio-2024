export const workSlider = {
  slides: [
    {
      title: 'Previous Portfolio',
      path: '/previous-portfolio.png',
      link: 'https://hugo-portfolio-2022.netlify.app/',
      blurb: 'Previous portfolio page before redesign',
      github: 'https://github.com/HugoArriojas/portfolio-2024',
    },
    {
      title: 'Reactive Retail',
      path: '/reactive-retail.png',
      link: 'https://reactiveretail.netlify.app/',
      blurb:
        'Mock eCommerce site built in React using the FakeStore API and Firebase integration',
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
      blurb: 'Multi-page conversion of PSD design. My first project!',
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

const WorkSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      slidesPerView={1}
      spaceBetween={10}
      modules={[Pagination, Navigation]}
      scrollbar={{
        hide: true,
      }}
      className="mb-10"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
                {/* text */}
                <div>
                  <h2>{slide.title}</h2>
                  <p className="hidden md:block py-8">{slide.blurb}</p>
                  <Link
                    className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] py-5"
                    href={slide.link}
                    target="_blank"
                    cursor-pointer
                  >
                    <p>LIVE PROJECT</p>
                    <div>
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
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
