import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// To add new language, add the language code to the languages array and indicate the path to the translation file
export const languages = ["en", "vi", "jp", "cn"];

i18n.use(initReactI18next).init({
  resources: {
    // en: {
    //   translation: require("../locales/en/translation.json"),
    // },
    // vi: {
    //   translation: require("../locales/vi/translation.json"),
    // },
    // jp: {
    //   translation: require("../locales/jp/translation.json"),
    // },
    // cn: {
    //   translation: require("../locales/cn/translation.json"),
    // },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
