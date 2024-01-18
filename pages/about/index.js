/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
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

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="container mx-auto h-fit flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center px-4 lg:px-0">
          <h2 className="h2 my-5">
            From fishing nets to <span className="text-accent">internet</span>
          </h2>
          <p>
            My name is Hugo Arriojas
            <span className="text-accent"> (Ah-ree-oh-has) </span>and I am a
            Software Engineer, Scrum Master, and marine scientist based out of
            Ottawa, ON 🇨🇦
          </p>
          <p>
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
          </p>
          <p>
            I am always eager to embrace new challenges, collaborate with
            like-minded professionals, and contribute to innovative projects.
          </p>
          <p>
            Let&apos;s connect and explore the exciting intersections of
            technology and creativity!
          </p>
          <Link
            className="text-accent mb-5"
            href="https://medium.com/@hugo.arriojas/the-stillness-in-storms-4be5fc97e1a9"
            target="_blank"
          >
            Read My Story
          </Link>
        </div>
        {/* info */}
        <div className="flex flex-col w-ful lh-fit">
          <div className="flex gap-x-4 mx-auto">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex && 'text-accent after:w-[100%] '
                  }  cursor-pointer capitalize `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-col"
                >
                  <div>
                    <div className="font-light mb-2">{item.title}</div>
                    <div className="font-light mb-2">{item.workplace}</div>
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
        </div>
      </div>
      <Circles />
    </div>
  );
};

export default About;
