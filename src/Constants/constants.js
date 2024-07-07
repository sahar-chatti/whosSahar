import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import bootstrap from '../assets/tech/bootstrap.svg'
import canva from '../assets/tech/canva.jpg'
import vercel from '../assets/tech/vercel.png'
import springboot from '../assets/tech/springboot.png'
import issat from '../assets/projects/issat_mahdia.jpg'
import mongodb from '../assets/tech/mongodb.png'
import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  memoryGame,
  avatar,
  
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! ",

		"My name is Sahar, I'm 22 and a junior software developer based in Tunisia. ",
    "Adept at crafting clean, efficient, and visually appealing applications. Skilled in a variety of programming languages and design tools, with a constant drive to learn and grow in the field. Excited to contribute to innovative projects and collaborate with talented teams to create exceptional digital experiences.",
    "I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !",
    "You can download my resume here."
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Petty ",
    description: 'Petty represents a major advancement in the management of pet care in Tunisia. By addressing the critical needs of pet owners and integrating modern technologies, we promise to improve the quality of life for both pets and their owners.',
    image: memoryGame,
   
  },
  
  {
    name: "ISSAT-Mh web App",
    description: ' Best Web Application for ISSATmh ## This project is a web application designed for a competition to determine the best web application for ISSAT Mahdia.',
    image: issat,
   
  },
  

  {
    name: 'Chat',
    description: 'The purpose of our work is to provide an online real-time chat platform to offer an interactive and responsive chat experience to users. We have developed a web application that allows users to log in, create conversations, and send messages.',
    image: pawsitivePrototype,
    //source_code_link: 'https://github.com/bl33h/pawsitive',
    //demo_link: 'https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2',
  },
 
  
 
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'aws',
    title: 'Vercel',
    icon: vercel,
    description:
      'Vercel is a cloud platform that simplifies hosting and deploying web applications. It integrates seamlessly with frameworks like Next.js and offers features such as automatic scaling, fast deployments, a global CDN, and serverless functions. ',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'vite',
    title: 'Vite',
    icon: viteIcon,
    description:
      'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
  },
  
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'neo',
    title: 'Bootstrap5',
    icon: bootstrap,
    description:
      'Bootstrap 5 is a widely-used front-end framework for creating responsive, mobile-first websites. It offers a rich set of CSS and JavaScript components, enabling quick and consistent web design.',
  },
  {
    id: 'raspi',
    title: 'Raspberry Pi',
    icon: raspIcon,
    description:
      'I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.',
  },
  {
    id: 'eslint',
    title: 'Canva',
    icon: canva,
    description:
      'Canva is a versatile online graphic design tool known for its user-friendly interface and extensive template library.',
  },
  {
    id: 'eslint',
    title: 'Spring Boot',
    icon: springboot,
    description:
      ' Spring Boot is ideal for building production-ready web applications and microservices, offering productivity benefits and promoting best practices in Java development.',
  },
  {
    id: 'eslint',
    title: 'MongoDB',
    icon: mongodb,
    description:
      ' It is designed for scalability, high availability, and performance, making it suitable for a wide range of applications from small projects to large-scale enterprise solutions.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
