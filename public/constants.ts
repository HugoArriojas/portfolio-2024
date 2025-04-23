// Define types for work objects
interface WorkSection {
  title: string;
  text: string;
}

interface WorkObject {
  title: string;
  name: string;
  detailsLink: string;
  liveLink?: string;
  alt?: string;
  blurb: string;
  github?: string;
  technologies: string;
  section1?: WorkSection;
  section2?: WorkSection;
  section3?: WorkSection;
  section4?: WorkSection;
}

interface WorkObjects {
  [key: string]: WorkObject;
}

export const workObjects: WorkObjects = {
  mercatus: {
    title: 'Mercatus Technologies Inc.',
    name: 'mercatus',
    detailsLink: '/work/mercatus',
    alt: 'Read more about my work experience at Mercatus',
    blurb: 'White label e-commerce solutions',
    technologies:
      'React, TypeScript, Apollo GraphQL, PHP, AngularJS, NextJS, Docker, Drupal, Bamboo, JIRA',
    section1: {
      title: 'About',
      text: 'As a software engineer and Scrum Master at Mercatus Technologies, I was responsible for both developing and debugging our accessible and functional white-label components for our retailers. Working mostly in front-end technologies, I led a cross-functional scrum team of 9 people through a variety of scrum ceremonies, achieving over 90% completion of all scheduled tickets in our sprints due to my sprint planning and project management skills.',
    },
    section2: {
      title: 'Challenges',
      text: 'One major challenge I faced at Mercatus was learning AngularJS and PHP on the job while working on a mature codebase. Although I was familiar with other frameworks such as React, at times, I was the sole contributor to the v3 implementation of the white-label product, meaning that I had to learn these languages in a short amount of time. My goal was to not only learn these new languages but further expand my skill set by embracing opportunities where possible. As such, for my second task, I accepted the challenge of implementing the carousel that is now seen on the homepage of all Mercatus sites. I then worked on some major reworks of the site including (but not limited to) an update to the categorization hierarchy on our shop page, and WCAG updates to our production codebase. As a result, there was an increase of 26% in user interactions regarding the product hierarchy and a marked 90% adoption of all of the components that I was tasked with building.',
    },
    section3: {
      title: 'Favourite Part',
      text: 'My favourite part about working at Mercatus was creating something accessible and useful that facilitated real revenue generation for our clients and their member businesses. Having worked with a variety of US retailers, the product I assisted in building gave smaller grocery retailers a chance in an increasingly electronic space, especially when faced with the monopolization of larger companies. Another favourite part of mine was taking on the role of Scrum Master while also remaining an individual contributor. As the Scrum Master with the shortest amount of tenure at the company, I felt honoured to be chosen and I am incredibly grateful for the opportunity that I was given to both develop my skills as an individual contributor and to be able to delve into the world of project management and Agile development from such a unique perspective.',
    },
  },
  reactiveRetail: {
    title: 'Reactive Retail',
    name: 'reactive-retail',
    detailsLink: '/work/reactive-retail',
    liveLink: 'https://reactiveretail.netlify.app/',
    alt: 'Read more about my reactive retail bootcamp project',
    blurb:
      'Mock eCommerce site built in React using the FakeStore API and Firebase integration; currently working on converting this site to a full stack MERN application.',
    github: 'https://github.com/HugoArriojas/ReactiveRetail',
    technologies: 'React, Sass, Figma, Photoshop',
    section1: {
      title: 'About',
      text: "This was a project initially built as part of Juno College's Web Development immersive program. Having had some more experience in the professional e-commerce space I plan to expand further on this project to show what I've learned both at work and from personal study.",
    },
    section2: {
      title: 'Challenges',
      text: "Reactive retail was my first project created entirely in React and my first time implementing a Firebase integration. As such, there was a steep learning curve initially due to my experience being limited to HTML, CSS, and jQuery. My original goal was to create a mock e-commerce page that adhered to WCAG 2.0 standards but eventually would be able to store users' items in a cart that would persist in between sessions. Learning a new library alongside tools such as Figma while maintaining deadlines and proper project estimates was difficult, but with proper planning and splitting the site into repeatable components, it became much easier to split the work into more manageable goals. From this experience, I was able to learn much more about React and build my expertise with design tools such as Figma.",
    },
    section3: {
      title: 'Favourite Part',
      text: 'My Favourite part about building Reactive Retail was the freedom that I was given to build this project. Up to this point, my projects at Juno College had been pre-designed and with a strict standard that dictated how the work was going to be completed. As such, having been given the freedom to design the site from the ground up gave me a great insight into the importance of UI/UX and how to properly break down tasks when learning a new library.',
    },
    section4: {
      title: 'Next steps',
      text: "I'm currently learning more about MongoDB and Express.js, so I'm planning on using these newfound skills to recreate Reactive Retail as a full-stack MERN application alongside some fixes to the UI. This MERN application would include the ability to save the user's currency preferences and will allow for account creation with a stretch goal of adding Stripe integration for checkout.",
    },
  },
  previousPortfolio: {
    title: 'Previous Portfolio',
    name: 'previous-portfolio',
    detailsLink: '/work/previous-portfolio',
    liveLink: 'https://hugo-portfolio-2022.netlify.app/',
    alt: 'Read more about my previous portfolio',
    blurb:
      'My previous portfolio page before the redesign, note the similar colour scheme to my current portfolio!',
    github: 'https://github.com/HugoArriojas/portfolio-2024',
    technologies: 'HTML, CSS, JavaScript, jQuery, Sass, Figma',
    section1: {
      title: 'About',
      text: "It's often difficult to design a site that feels representative of the developer. Having grown up in the 90s I have a deep-seated love for vaporwave aesthetics and Solo Jazz design and I wanted my original portfolio to reflect this. Although I wanted a portfolio site that was a better representation of my current skills and tech stack, I'll always hold this first design close to my heart.",
    },
  },
  gifMeTheWeather: {
    title: 'GIF Me the Weather',
    name: 'gif-weather',
    detailsLink: '/work/gif-weather',
    liveLink: 'https://gifmetheweather.netlify.app/',
    alt: 'Read more about my weather app built in bootcamp',
    blurb:
      'Weather app created in pair programming exercise using various APIs to receive a weekly forecast and activity suggestions.',
    github: 'https://github.com/hugElla/gifMeTheWeather',
    technologies: 'HTML, CSS, JavaScript, jQuery, Sass, Figma',
    section1: {
      title: 'About',
      text: 'GIF Me The Weather was a Juno College pair programming exercise that allowed me to learn more about the ins and outs of git collaboration. Although a fairly simple integration with two APIs, it was great to experience what it was like to both design and build an app collaboratively.',
    },
  },
  notSoSocial: {
    title: 'Not So Social Planner',
    name: 'not-social',
    detailsLink: '/work/not-social',
    liveLink: 'https://notsosocialplanner.netlify.app/',
    alt: 'Read more about my agency-style project built in bootcamp',
    blurb:
      'Agency-style project for a social planner where users can slot in either activities or actively streaming shows',
    github: 'https://github.com/Hugo-Liz-Linda-Ryan/NotSoSocialEventPlanner',
    technologies: 'React, Sass, Figma, Firebase',
    section1: {
      title: 'About',
      text: 'A major challenge of this project was learning to collaborate as a group to a single codebase which was a great introduction to a proper software development environment. This project contains some of my first proper pull requests and allowed me to grow my project management skills which I still use every day as a Scrum Master.',
    },
    section2: {
      title: 'Favourite Part',
      text: 'My favourite part of this project was being able to find ways to coordinate with people with different schedules, specialties and priorities. Although I did not know it at the time, this was my first foray into cross-functional teams, and finding synergy within the team helped us produce a project with many integrations in a very short amount of time.',
    },
  },
  delicious: {
    title: 'Delicious',
    name: 'delicious',
    detailsLink: '/work/delicious',
    liveLink: 'https://deliciouspsd.netlify.app/',
    alt: 'Read more about my first web dev project, a PSD conversion',
    blurb:
      'Multi-page conversion of PSD design in a mock client request exercice. My first web development project ever!',
    github: 'https://github.com/HugoArriojas/deliciousPSDConversion',
    technologies: 'HTML, CSS, JavaScript, jQuery, Sass, Figma',
    section1: {
      title: 'About',
      text: "The Delicious PSD conversion was my first 'official' project at Juno College, and it was shockingly representative of my day-to-day life as a software engineer. Having been given a simple Figma page with a design, I was tasked with ensuring that the site was pixel-perfect while interpreting how the site should change between different breakpoints. This first project encouraged me to always ask clarifying questions about given designs and the importance of mobile-first design when creating a responsive site.",
    },
  },
};
