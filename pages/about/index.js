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
  return <div>About</div>;
};

export default About;
