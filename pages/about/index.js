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

import { SiNextdotjs, SiAdobexd, SiAdobephotoshop } from 'react-icons/si';

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
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Engineer & Scrum Master - Mercatus Technologies Inc.',
        stage: '2022 - Present',
      },
      {
        title: 'Freelance Web Developer',
        stage: '2021 - 2022',
      },
      {
        title: 'Accounting Administrator - Carson Auto Group',
        stage: '2018 - 2021',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development Immersive Certificate - Juno College',
        stage: '2021',
      },
      {
        title:
          'Honours Bachelor of Science in Marine Biology & Statistics - Dalhousie University',
        stage: '2013 - 2017',
      },
    ],
  },
];

const About = () => {
  return <div>About</div>;
};

export default About;
