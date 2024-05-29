
//importaciones de slider 1

import img1 from "./../../assets/slider1/acampar_amigos.jpg"
import img2 from "./../../assets/slider1/caminar_amigos.jpg"
import img3 from "./../../assets/slider1/comer_amigos.jpg"
import img4 from "./../../assets/slider1/fiesta_amigos.jpg"
import img5 from "./../../assets/slider1/jugar_amigos.jpg"
import img6 from "./../../assets/slider1/motos_amigos.jpg"
import img7 from "./../../assets/slider1/musica_amigos.jpg"
import img8 from "./../../assets/slider1/reir_amigos.jpg"

import smg1 from "./../../assets/slider1/boxeo_solo.jpg"
import smg2 from "./../../assets/slider1/calistenia_solo.jpg"
import smg3 from "./../../assets/slider1/cine_solo.jpg"
import smg4 from "./../../assets/slider1/correr_solo.jpg"
import smg5 from "./../../assets/slider1/gamer_solo.jpg"
import smg6 from "./../../assets/slider1/judo_solo.jpg"
import smg7 from "./../../assets/slider1/leer_solo.jpg"
import smg8 from "./../../assets/slider1/taekondow_solo.jpg"



import { RxHome, RxPerson, RxDashboard,RxArchive,RxChatBubble} from "react-icons/rx";
//importaciones screen projectos
import project1 from "./../../assets/images/project-1.jpg";
import project2 from "./../../assets/images/project-2.jpg";
import project3 from "./../../assets/images/project-3.jpg";
import project4 from "./../../assets/images/project-4.jpg";
import i18n from './../../i18n'
//importacioness screen experiencia / tecnologuias
import html from './../../assets/images/732212.png'; // Asegúrate de usar la extensión de archivo correcta
import django from './../../assets/images/django.png';
import javascript from './../../assets/images/Typescript.png';
import reactImage from './../../assets/images/React-icon.png';
import tailwind from './../../assets/images/tailwind.png';
import vite from './../../assets/images/Vitejs-logo.png';
import graphql from './../../assets/images/graphql_playground_macos_bigsur_icon_190105.png';
import github from './../../assets/images/Git-Icon-1788C.png'
import apache from './../../assets/images/Apache.png'
import azure from './../../assets/images/azure.png'

//import { useTranslation } from 'react-i18next';
 
//const { t } = useTranslation ();
const HERO_CONTENT = i18n.t('exp');
export { HERO_CONTENT }; 

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;



export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const TECHS = [
  {
    id: 1,
    src: html,
    title:"hol ami nombre es sebastion me gusta desde el momento en que lo use mi experiencia es orta pero representativa" ,
    style:"shadow-orange-500"

  },
  {
    id: 2,
    src: django,
    title: "hol ami nombre es sebastion me gusta desde el momento en que lo use mi experiencia es orta pero representativa" ,
    style: "shadow-blue-500"

  },
  {
    id: 3,
    src: javascript,
    title: "hol ami nombre es sebastion me gusta desde el momento en que lo use mi experiencia es orta pero representativat" ,
    style: "shadow-yellow-500"

  },
  {
    id: 4,
    src: reactImage,
    title: "React" ,
    style:"shadow-blue-600"

  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind" ,
    style:"shadow-sky-400"

  },
  {
    id: 6,
    src: vite,
    title:"Next JS" ,
    style:"shadow-white"

  },
  {
    id: 7,
    src: graphql,
    title:"GraphQL" ,
    style:"shadow-pink-400"

  },
  {
    id: 8,
    src: github,
    title: "GitHub" ,
    style: "shadow-red-400"

  }
]  
export const LENGUAGES = [
  {
    id: 1,
    src: apache,
    title:"hol ami nombre es sebastion me gusta desde el momento en que lo use mi experiencia es orta pero representativa" ,
    style:"shadow-orange-500"

  },
  {
    id: 2,
    src: django,
    title: "hol ami nombre es sebastion me gusta desde el momento en que lo use mi experiencia es orta pero representativa" ,
    style: "shadow-blue-500"

  },
  {
    id: 3,
    src: azure,
    title: "hol ami nombre es sebastion me gusta desde el momento en que lo use mi experiencia es orta pero representativat" ,
    style: "shadow-yellow-500"

  },
  {
    id: 4,
    src: reactImage,
    title: "React" ,
    style:"shadow-blue-600"

  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind" ,
    style:"shadow-sky-400"

  },
  {
    id: 6,
    src: vite,
    title:"Next JS" ,
    style:"shadow-white"

  },
  {
    id: 7,
    src: graphql,
    title:"GraphQL" ,
    style:"shadow-pink-400"

  },
  {
    id: 8,
    src: github,
    title: "GitHub" ,
    style: "shadow-red-400"

  }
]
export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/about",
    icon: RxPerson,
    link: "/about",
  },
  {
    name: "/projectos",
    icon: RxDashboard,
    link: "/projectos",
  },

  {
    name: "/experiencia",
    icon: RxArchive,
    link: "/experiencia",

  },
  {
    name: "/contactame",
    icon: RxChatBubble,
    link: "/contactame",
  }

];
export const Purple1Images = [
  {
    src: img1,
  },
  {
    src: img2,
  },
  {
    src: img3,
  },
  {
    src: img4,
  },
];

export const Orange1Images = [
  {
    src: img5,
  },
  {
    src: img6,
  },
  {
    src: img7,
  },
  {
    src: img8,
  },
];
export const Purple2Images = [
  {
    src: smg1,
  },
  {
    src: smg2,
  },
  {
    src: smg3,
  },
  {
    src: smg4,
  },
];

export const Orange2Images = [
  {
    src: smg5,
  },
  {
    src: smg6,
  },
  {
    src: smg7,
  },
  {
    src: smg8,
  },
];
