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
      <p className="text-xl font-bold">{t('title')}</p>

      <label htmlFor="language-select" className="sr-only">
        {t('select_language')} {/* Agrega una clave para este texto en tu archivo de traducción */}
      </label>
      <select
        id="language-select"
        defaultValue={i18n.language}
        onChange={onChangeLang}
        className='block px-3 py-2 text-white bg-gray-700 border border-white rounded-lg '
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
