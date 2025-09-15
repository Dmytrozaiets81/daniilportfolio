/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faLinkedin,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import {
  botIcon,
  dockerIcon,
  djangoIcon,
  nextIcon,
  scrapingIcon,
  wordpressIcon,
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
  discordIcon,
  telegramIcon,
  // pawsitivePrototype,
  avatar,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
  // portfolio10
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  botIcon,
  dockerIcon,
  djangoIcon,
  nextIcon,
  scrapingIcon,
  wordpressIcon,
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
  discordIcon,
  telegramIcon,
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
  faDiscord,
  faTelegram,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here!",

    "Hello! I'm Julio and I'm based in Poland. In today's rapidly evolving digital landscape, the ability to develop comprehensive, dynamic, and data-driven web applications is more crucial than ever. ",
    " I have over 7 years of experience as a Full Stack Developer skilled in Python and React, I specialize in building robust, scalable, and user-friendly solutions that seamlessly integrate frontend and backend technologies. My expertise extends to web data scraping, enabling the extraction and utilization of valuable information from diverse online sources. ",
    "With a strong foundation in both server-side and client-side development, I am committed to delivering innovative applications that meet complex business needs and drive data-informed decision-making.",
    "You can download my resume here.",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Noovo Life",
    description:
      "I built this project using React and Next. Noovo Life offers a wide range of vans for rent, allowing you to explore the world at your own pace. With a focus on quality and customer satisfaction, Noovo Life ensures that every van is equipped with the latest technology and amenities to make your journey unforgettable.",
    image: portfolio1,
    demo_link: "https://www.noovolife.com/",
  },
  {
    name: "Hulk Cars",
    description:
      "I built this project using React. Hulk Cars offers car rental services, likely with a focus on integrating blockchain technology for vehicle tokenization. This approach may allow fractional ownership or secure transactions involving car assets.",
    image: portfolio2,
    demo_link: "https://hulkcars.com/",
  },
  {
    name: "Broad Nosh Bagels",
    description:
      "I built this project using WordPress. Broad Nosh Bagels is a bagel shop that specializes in crafting delicious, authentic bagels with a variety of flavors and toppings. They offer a wide selection of freshly baked bagels, sandwiches, and spreads, catering to both traditional and innovative tastes.",
    image: portfolio3,
    demo_link: "https://broadnosh.com/",
  },
  // {
  //   name: "Fjällräven",
  //   description:
  //     "I built this project using React. Fjällräven is a Swedish outdoor brand known for its durable, functional, and eco-friendly products, including backpacks, clothing, and accessories. The company emphasizes sustainability, using materials like organic cotton and recycled polyester.",
  //   image: portfolio4,
  //   demo_link: "https://www.fjallraven.com/",
  // },
  {
    name: "Trading Bot Platform",
    description:
      "I built this project using Django and React. This platform allows users to create, backtest, and deploy trading bots for various financial markets. It provides a user-friendly interface for designing trading strategies, accessing historical data, and executing trades automatically.",
    image: portfolio5,
    // demo_link: "https://www.fjallraven.com/",
  },
  {
    name: "Python & Website Scraper for Generating & Scrapy",
    description:
      "Created a powerful web scraper using Python and the Scrapy framework to extract and generate structured data from websites efficiently. The scraper was designed to handle large volumes of content, navigate through multiple pages, and extract targeted information such as product details, pricing, listings, and more.",
    image: portfolio6,
    // demo_link: "https://www.fjallraven.com/",
  },
  {
    name: "Telegram Crypto Trade Bot",
    description:
      "Developed a Telegram bot using Python to automate cryptocurrency trading actions based on real-time signals and custom strategies. The bot connected with popular crypto exchange APIs (e.g., Binance, Coinbase) to execute buy/sell orders, track market prices, and provide instant trade alerts directly within Telegram.",
    image: portfolio7,
    // demo_link: "https://www.fjallraven.com/",
  },
  {
    name: "Web Scraping & Data Mining & Data Extraction",
    description:
      "Built custom web scraping solutions using Python to extract structured data from websites for analysis, reporting, and automation. Utilized tools like BeautifulSoup, Scrapy, and Selenium to handle both static and dynamic content.",
    image: portfolio8,
    // demo_link: "https://www.fjallraven.com/",
  },
  {
    name: "Python & Telegram Bot Development & Telegram API",
    description:
      "I developed and deployed custom Telegram bots using Python, directly integrating with the Telegram Bot API to automate tasks, send notifications, and interact with users in real time. My projects included features like command handling, user data management, inline buttons, and server configurations.",
    image: portfolio9,
    // demo_link: "https://www.fjallraven.com/",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "java",
    title: "Java",
    icon: javaIcon,
    description:
      "I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.",
  },
  {
    id: "bot",
    title: "Bot",
    icon: botIcon,
    description:
      "I have developed intelligent bots for automation and interaction, enhancing efficiency in customer service and data handling. I have experience with Telegram and Discord bots, utilizing their APIs to create engaging user experiences.",
  },
  {
    id: "docker",
    title: "Docker",
    icon: dockerIcon,
    description:
      "I have utilized Docker to streamline development workflows and ensure consistent deployment environments across multiple projects.",
  },
  {
    id: "django",
    title: "Django",
    icon: djangoIcon,
    description:
      "I have experience in creating RESTful APIs and integrating third-party services, ensuring seamless communication between frontend and backend components.",
  },
  {
    id: "next",
    title: "Next",
    icon: nextIcon,
    description:
      " I have crafted high-performance, SEO-friendly web applications using Next.js, integrating both server-side and client-side rendering. I leverage its features for static site generation and API routes, ensuring optimal performance and user experience.",
  },
  {
    id: "scraping",
    title: "Scraping",
    icon: scrapingIcon,
    description:
      "I specialize in web scraping solutions to extract and structure valuable data from various sources for analytics and automation.",
  },
  {
    id: "wordpress ",
    title: "Wordpress",
    icon: wordpressIcon,
    description:
      "I have built and customized dynamic websites using WordPress, leveraging both themes and plugins to meet diverse client needs.",
  },
  {
    id: "aws",
    title: "Amazon Web Services",
    icon: awsIcon,
    description:
      "I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },
  {
    id: "psql",
    title: "Postgresql",
    icon: psqlIcon,
    description:
      "I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.",
  },
  {
    id: "vite",
    title: "Vite",
    icon: viteIcon,
    description:
      "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
  },
  {
    id: "py",
    title: "Python",
    icon: pyIcon,
    description:
      "With 7 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.",
  },
  {
    id: "node",
    title: "Node",
    icon: nodeIcon,
    description:
      "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
  },
  {
    id: "neo",
    title: "Neo4j",
    icon: neoIcon,
    description:
      "I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.",
  },
  {
    id: "raspi",
    title: "Raspberry Pi",
    icon: raspIcon,
    description:
      "I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.",
  },
  {
    id: "eslint",
    title: "Eslint",
    icon: eslintIcon,
    description:
      "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { media, introduction, projects, memoji, skills, markerSvg, icons };
