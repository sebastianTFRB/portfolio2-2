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
        title: 'Multi-language app',
        hi: 'Hello',
        description: 'Hello, my name is Sebastian, I have experience in developing web applications, software deployment and software architecture, I want to learn more every day and have more experience within this infinite technological world.',
        exp:'full Stack Developer',
        exp_lenguaje:' Languages ​​in my domain',
        exp_tecnologies:'Thecnologias in my domine',
        Dexp_lenguaje:'this is my lenguages in mi domine',
        Dexp_tecnologies:'this is mi tecnologies in my domine ',
        tiempo_solo:"",
        Dtiempo_solo:"",
        tiempo_acompañado:"My tiempo acompañado",
        Dtiempo_acompañado:"en mi tiempo con las demas personas me gusta caminar , reirme con los demas , escuchar musica y sobre todo comer",
        tituloP:"My projects",
        DtituloP:"estos son mis projectos , los cuale e realizado a lo largo de mi carrera como ingeniero de software",
        contact:"Contact-me",
        Cname:"Ingresa your Name",
        Cemail:"Ingresa your Email",
        Cmessage:"Ingresa your Message",
        Csend:"Send Message"
      },
    },
    es: {
      translation: {
        title: 'Aplicación en varios idiomas',
        hi: 'Hola',
        description: 'hola mi nombre es sebastian ,tengo experiencia en el desarrollo de aplicaciones wep ,despliege de software y arquitectura de software  , quiero aprender cada dia mas y tener mas experiencia dentro de este infinito mundo tecnologico',
        exp:'desarrollador de pila completa',
        exp_lenguaje:'Lenguajes en mi dominio',
        exp_tecnologies:'Tecnologias en mi dominio',
        Dexp_lenguaje:'estos son mis lenguajes en mi dominio',
        Dexp_tecnologies:'estas son mis tecnologias en mi dominiio',
        tiempo_solo:"My tiempo libre",
        Dtiempo_solo:"en mi tiempo libre me gusta jugar videojuegos,leer y sobre todo entrenar , entreno calistenia y artes marciales ",
        tiempo_acompañado:"My tiempo acompañado",
        Dtiempo_acompañado:"en mi tiempo con las demas personas me gusta caminar , reirme con los demas , escuchar musica y sobre todo comer",
        tituloP:"Mis projectos",
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
