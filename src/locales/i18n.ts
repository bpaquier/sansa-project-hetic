import * as i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationAR from "./languages/ar.json";
import translationENAdmin from "./languages/en-administrativeAssistance.json";
import translationEN from "./languages/en.json";
import translationESAdmin from "./languages/es-administrativeAssistance.json";
import translationES from "./languages/es.json";
import translationFRAdmin from "./languages/fr-administrativeAssistance.json";
import translationFR from "./languages/fr.json";
import translationUKAdmin from "./languages/uk-administrativeAssistance.json";
import translationUK from "./languages/uk.json";

export type LanguagesType = "fr-FR" | "es-ES" | "en-EN" | "uk-UA" | "ar-SA";

const resources = {
  "en-EN": {
    translation: { ...translationEN, ...translationENAdmin }
  },
  "fr-FR": {
    translation: { ...translationFR, ...translationFRAdmin }
  },
  "uk-UA": {
    translation: { ...translationUK, ...translationUKAdmin }
  },
  "es-ES": {
    translation: { ...translationES, ...translationESAdmin }
  },
  "ar-SA": {
    translation: translationAR
  }
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  //lng: "uk-UA",
  //lng: "ar-SA",
  //lng: "en-EN",
  lng: "fr-FR",
  //lng: "es-ES",
  fallbackLng: "fr-FR",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
