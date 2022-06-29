import * as i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationAR from "./languages/ar.json";
import translationEN from "./languages/en.json";
import translationES from "./languages/es.json";
import translationFR from "./languages/fr.json";
import translationUK from "./languages/uk.json";

const resources = {
  "en-EN": {
    translation: translationEN
  },
  "fr-FR": {
    translation: translationFR
  },
  "uk-UA": {
    translation: translationUK
  },
  "es-ES": {
    translation: translationES
  },
  "ar-SA": {
    translation: translationAR
  }
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "uk-UA",
  //lng: "ar-SA",
  //lng: "en-EN",
  //lng: "fr-FR",
  //lng: "es-ES",
  fallbackLng: "fr-FR",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
