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
            {/* mobile text */}
            <div>
              <h2>{slide.title}</h2>
              <p>{slide.blurb}</p>
              <div>
                <Link
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

            <div className=" my-auto max-w-[600px]">
              <Image
                src={slide.path}
                width={600}
                height={385}
                alt=""
                className="rounded-lg"
              />
              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#2a136e] via-[#2a136e] to-[#4a22bd] opacity-0 md:group-hover:opacity-100 focus:opacity-100 transition-all duration-700 rounded-lg max-w-[600px] mx-auto">
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
