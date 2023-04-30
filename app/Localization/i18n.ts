import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import id from './id';
const resources = { // list of languages
 en,
 id,
};
i18n.use(initReactI18next)
 .init({
  compatibilityJSON: 'v3', 
  resources,
  lng: 'en', // default language to use.
  // if you're using a language detector, do not define the lng option
interpolation: {
   escapeValue: false,
  },
 });
export default i18n;