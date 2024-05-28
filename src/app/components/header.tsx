import { useTranslation } from 'react-i18next';
import { languageData } from '../data/data';

const Header = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code).catch(error => {
      console.error('Error changing language:', error);
      // Opcional: Mostrar un mensaje de error al usuario
    });
  };

  return (
    <header className='flex flex-row items-center justify-between p-4  text-white'>
      <p className="text-xl font-bold bg-gradient-to-r from-teal-400 via-teal-600 to-teal-800 bg-clip-text  inline tracking-tight text-transparent">{t('title')}</p>

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
    </header>
  );
};

export default Header;
