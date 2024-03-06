import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import enGB from './locales/en-GB.json'
import esMX from './locales/es-MX.json'

const DEFAULT_LANG = 'en-GB'

let lng = DEFAULT_LANG

if (typeof window !== 'undefined') {
  lng = localStorage.getItem('i18nextLng') || DEFAULT_LANG
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: enGB },
      es: { translations: esMX },
    },
    lng: lng,
    fallbackLng: DEFAULT_LANG,
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
