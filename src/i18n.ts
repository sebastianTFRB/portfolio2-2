import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      
      translation: {
      title: 'Application in multiple languages',
      hi: 'Hello',
      description: 'Hello, my name is Sebastian. I have experience in web application development, software deployment, and software architecture. I want to learn more every day and gain more experience in this infinite technological world.',
      exp: 'Full Stack Developer',
      exp_lenguaje: 'Languages I Master',
      exp_tecnologies: 'Technologies I Master',
      Dexp_lenguaje: 'These are the languages I have managed to master',
      Dexp_tecnologies: 'These are the technologies I have managed to master',
      tiempo_solo: "My Free Time",
      Dtiempo_solo: "In my free time, I like to play video games, read, and above all, train. I practice calisthenics and martial arts. As for literature, my favorite book is Alas de Sangre, and I also enjoy writing poems.",
      tiempo_acompañado: "My Time with Others",
      Dtiempo_acompañado: "In my time with others, I like to walk with them, laugh together, listen to music, and especially eat. I usually have a good time with my friends, and that puts me in a good mood.",
      tituloP: "My Projects",
      DtituloP: "These are my projects, which I have completed throughout my career as a software engineer.",
      contact: "Contact Me",
      Cname: "Enter Your Name",
      Cemail: "Enter Your Email",
      Cmessage: "Enter Your Message",
      Csend: "Send Message"
      }
      
      
    },
    es: {
      translation: {
        title: 'Aplicación en varios idiomas',
        hi: 'Hola',
        description: 'hola mi nombre es sebastian ,tengo experiencia en el desarrollo de aplicaciones wep ,despliege de software y arquitectura de software  , quiero aprender cada dia mas y tener mas experiencia dentro de este infinito mundo tecnologico',
        exp:'Desarrollador de pila completa',
        exp_lenguaje:'Lenguajes en mi dominio',
        exp_tecnologies:'Tecnologias en mi dominio',
        Dexp_lenguaje:'estos son los lenguajes que e logrado dominar',
        Dexp_tecnologies:'estas son las tecnologias que e logrado dominar',
        tiempo_solo:"Mi tiempo libre",
        Dtiempo_solo:"en mi tiempo libre me gusta jugar videojuegos, me gusta leer y sobre todo entrenar , entreno calistenia y artes marciales , y en cuanto a la literatura mi libro favorito es alas de sangre ytambien me gusta exribir poemas. ",
        tiempo_acompañado:"Mi tiempo acompañado",
        Dtiempo_acompañado:"en mi tiempo con las demas personas me gusta caminar con ellos , reirme con los demas , escuchar musica y sobre todo comer . suelo pasar tiempo agradable con mis amigos y eso me pone de buen humor",
        tituloP:"Mis Projectos",
        DtituloP:"estos son mis projectos , los cuale e realizado a lo largo de mi carrera como ingeniero de software",
        contact:"Contacta-me",
        Cname:"Ingresa tu Nombre",
        Cemail:"Ingresa tu Correo",
        Cmessage:"Ingresa tu Mensaje",
        Csend:"Enviar Mensaje"
        
      },
    },
  },
});

export default i18n;
