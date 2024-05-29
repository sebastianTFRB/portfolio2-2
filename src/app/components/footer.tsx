import React from "react";

import'bootstrap/dist/css/bootstrap.min.css'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub,faXTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next';
import { languageData } from '../data/data';





const Footer: React.FC = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code).catch(error => {
      console.error('Error changing language:', error);
      // Opcional: Mostrar un mensaje de error al usuario
    });
  };
  const linkClasses = "rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-blue-500 flex items-center justify-center shadow-md hover:scale-105 duration-500 py-2 mb-6 rounded shadow-blue-500";
  const linkClasses2 = "rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-orange-400 flex items-center justify-center shadow-md hover:scale-105 duration-500 py-2 mb-6 rounded shadow-orange-400";
  const linkClasses3 = "rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white flex items-center justify-center shadow-md hover:scale-105 duration-500 py-2 mb-6 rounded shadow-white";
  const linkClasses4 = "rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-red-500 flex items-center justify-center shadow-md hover:scale-105 duration-500 py-2 mb-6 rounded shadow-red-500";
  return (
    <footer className="w-full bg-black py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-40 gap-5">
      <p className="text-xl font-bold bg-gradient-to-r from-teal-400 via-teal-600 to-teal-800 bg-clip-text  inline tracking-tight text-transparent">{t('title')}</p>
       
        
        
        <a href="https://facebook.com" className={linkClasses}>
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="https://instagram.com" className={linkClasses2}>
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="https://twitter.com" className={linkClasses3}>
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
        </a>
        <a href="https://github.com/sebastianTFRB" className={linkClasses4}>
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <label htmlFor="language-select" className="sr-only">
        {t('select_language')} 
      </label>
      <select
        id="language-select"
        defaultValue={i18n.language}
        onChange={onChangeLang}
        className='block px-3 py-2 text-teal-500 bg-black border   shadow-md hover:scale-105 duration-500  mb-6 rounded shadow-teal-500'
      >
        {languageData().map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
      </div>
    </footer>
  );
};

export default Footer;

 

