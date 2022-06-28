/* eslint-disable @typescript-eslint/no-unsafe-call */
import Activities from "~/Components/Icons/Categories/Activities";
import FreeReading from "~/Components/Icons/Categories/Activities/FreeReading";
import Library from "~/Components/Icons/Categories/Activities/Library";
import PhysicalActivity from "~/Components/Icons/Categories/Activities/PhysicalActivity";
import Advice from "~/Components/Icons/Categories/Advice";
import Administrative from "~/Components/Icons/Categories/Advice/Administrative";
import AdvisorsM from "~/Components/Icons/Categories/Advice/AdvisorsM";
import Legal from "~/Components/Icons/Categories/Advice/Legal";
import Food from "~/Components/Icons/Categories/Food";
import Eat from "~/Components/Icons/Categories/Food/Eat";
import FoodPackage from "~/Components/Icons/Categories/Food/FoodPackage";
import FoodTruck from "~/Components/Icons/Categories/Food/FoodTruck";
import Vegetables from "~/Components/Icons/Categories/Food/Vegetables";
import Health from "~/Components/Icons/Categories/Health";
import Cardiology from "~/Components/Icons/Categories/Health/Cardiology";
import Clinic from "~/Components/Icons/Categories/Health/Clinic";
import Dermatho from "~/Components/Icons/Categories/Health/Dermatho";
import Disability from "~/Components/Icons/Categories/Health/Disability";
import EmergencyContact from "~/Components/Icons/Categories/Health/EmergencyContact";
import Gynecologist from "~/Components/Icons/Categories/Health/Gynecologist";
import Gynecology from "~/Components/Icons/Categories/Health/Gynecology";
import Hospital from "~/Components/Icons/Categories/Health/Hospital";
import Nurse from "~/Components/Icons/Categories/Health/Nurse";
import Pulmonologist from "~/Components/Icons/Categories/Health/Pulmonologist";
import Radiology from "~/Components/Icons/Categories/Health/Radiology";
import ShootingRoom from "~/Components/Icons/Categories/Health/ShootingRoom";
import Home from "~/Components/Icons/Categories/Home";
import ChildCare3 from "~/Components/Icons/Categories/Home/ChildCare3";
import DayCare from "~/Components/Icons/Categories/Home/DayCare";
import Housing1 from "~/Components/Icons/Categories/Home/Housing1";
import Housing2 from "~/Components/Icons/Categories/Home/Housing2";
import Housing3 from "~/Components/Icons/Categories/Home/Housing3";
import NightCare from "~/Components/Icons/Categories/Home/NightCare";
import RestingSpace from "~/Components/Icons/Categories/Home/RestingSpace";
import Hygiene from "~/Components/Icons/Categories/Hygiene";
import Drop from "~/Components/Icons/Categories/Hygiene/Drop";
import Shower from "~/Components/Icons/Categories/Hygiene/Shower";
import Toilets from "~/Components/Icons/Categories/Hygiene/Toilets";
import WaterFountain from "~/Components/Icons/Categories/Hygiene/WaterFountain";
import Wellness from "~/Components/Icons/Categories/Hygiene/Wellness";
import Medicine from "~/Components/Icons/Categories/Medicine";
import Technology from "~/Components/Icons/Categories/Technology";
import ComputerEquipment from "~/Components/Icons/Categories/Technology/ComputerEquipment";
import ElectricPlug from "~/Components/Icons/Categories/Technology/ElectricPlug";
import FreeWifi from "~/Components/Icons/Categories/Technology/FreeWifi";
import MobileRepairing from "~/Components/Icons/Categories/Technology/MobileRepairing";
import theme from "~/Styles/theme.styles";

export enum MainCategories {
  HOME = "Acceuil",
  FOOD = "Alimentation",
  HEALTH = "Santé",
  MEDICINE = "Médecine",
  HYGIENE = "Hygiène",
  ADVICE = "Conseils",
  TECHNOLOGY = "Technologie",
  ACTIVITY = "Activités"
}

export enum Categories {
  REST_SPACE = "Espace de Repos",
  NIGHT_CARE = "Halte de nuit",
  LONGTERM_ACCOMMODATION = "Hébergement long terme",
  URGENCY_ACCOMMODATION = "Hébèrgement d'urgence",
  DAY_HOSPITALITY = "Acceuil de jour",
  PHYSICAL_ACTIVITY = "Activité physique",
  LIBRARY = "Bibliothèque",
  MUSEUM = "Musée",
  GROCERY = "Épicerie solidaire",
  FOOD_PACKAGE = "Colis alimentaire",
  RESTAURANT = "Restauration assise",
  MEAL_DSITRIBUTION = "Distribution de repas",
  WATER_FOUNTAIN = "Fontaine à eau",
  DOCTOR = "Medecin généraliste",
  CHILD_CARE = "Soins enfants",
  URGENCY_CONTACT = "Contact urgent",
  TESTING = "Dépistage",
  NURSE = "Infirmière",
  VACCINE = "Vaccination",
  PREGNANCY_MONITORING = "Suivi de grossesse",
  SHOWER = "Douche",
  MENSTRUAL_PROTECTION = "Protections périodiques",
  TOILETS = "Toilettes",
  WELLNESS = "Bien être",
  JURIDICAL = "Juridique",
  ADVISORS = "Conseilliers",
  ADMINISTRATIVE = "Administratif",
  HOUSING = "Logement",
  HANDICAP = "Handicap",
  FREE_WIFI = "Wifi Gratuite",
  ELECTRIC_PLUG = "Prise électrique",
  COMPUTER_EQUIPMENT = "Matériel informatique",
  MOBILE_REPARATION = "Réparation mobile",
  GYNECOLOGIST = "Gynecologue",
  DERMATOLOGIST = "Dermatho",
  PULMONOLOGIST = "Pneumologue",
  CARDIOLOGY = "Cardiologie",
  ADDICTOLOGY = "Addictologie",
  RADIOLOGY = "Radiologie"
}

export const mainCategoriesToDisplay = [
  MainCategories?.HOME,
  MainCategories?.FOOD,
  MainCategories?.HEALTH,
  MainCategories?.MEDICINE,
  MainCategories?.HYGIENE,
  MainCategories?.ADVICE,
  MainCategories?.ACTIVITY,
  MainCategories?.TECHNOLOGY
];

export const categoriesRepartition = {
  [MainCategories?.HOME]: [
    Categories?.REST_SPACE,
    Categories?.NIGHT_CARE,
    Categories?.URGENCY_ACCOMMODATION,
    Categories?.LONGTERM_ACCOMMODATION,
    Categories?.DAY_HOSPITALITY
  ],
  [MainCategories?.ACTIVITY]: [
    Categories?.PHYSICAL_ACTIVITY,
    Categories?.LIBRARY,
    Categories?.MUSEUM
  ],
  [MainCategories?.FOOD]: [
    Categories?.GROCERY,
    Categories?.FOOD_PACKAGE,
    Categories?.RESTAURANT,
    Categories?.MEAL_DSITRIBUTION
  ],
  [MainCategories?.HEALTH]: [
    Categories?.DOCTOR,
    Categories?.CHILD_CARE,
    Categories?.URGENCY_CONTACT,
    Categories?.TESTING,
    Categories?.NURSE,
    Categories?.VACCINE,
    Categories?.PREGNANCY_MONITORING
  ],
  [MainCategories?.HYGIENE]: [
    Categories?.SHOWER,
    Categories?.MENSTRUAL_PROTECTION,
    Categories?.WATER_FOUNTAIN,
    Categories?.TOILETS,
    Categories?.WELLNESS
  ],
  [MainCategories?.ADVICE]: [
    Categories?.JURIDICAL,
    Categories?.ADVISORS,
    Categories?.ADMINISTRATIVE,
    Categories?.HOUSING,
    Categories?.HANDICAP
  ],
  [MainCategories?.MEDICINE]: [
    Categories?.GYNECOLOGIST,
    Categories?.DERMATOLOGIST,
    Categories?.CARDIOLOGY,
    Categories?.PULMONOLOGIST,
    Categories?.ADDICTOLOGY,
    Categories?.RADIOLOGY
  ],
  [MainCategories?.TECHNOLOGY]: [
    Categories?.FREE_WIFI,
    Categories?.ELECTRIC_PLUG,
    Categories?.COMPUTER_EQUIPMENT,
    Categories?.MOBILE_REPARATION
  ]
};

export function getIconByCategory(catgory: string) {
  switch (catgory) {
    case MainCategories?.ACTIVITY:
      return Activities;
    case MainCategories?.HOME:
      return Home;
    case MainCategories?.ADVICE:
      return Advice;
    case MainCategories?.FOOD:
      return Food;
    case MainCategories?.HEALTH:
      return Health;
    case MainCategories?.HYGIENE:
      return Hygiene;
    case MainCategories?.MEDICINE:
      return Medicine;
    case MainCategories?.TECHNOLOGY:
      return Technology;
    case Categories?.REST_SPACE:
      return RestingSpace;
    case Categories?.NIGHT_CARE:
      return NightCare;
    case Categories?.LONGTERM_ACCOMMODATION:
      return Housing2;
    case Categories?.URGENCY_ACCOMMODATION:
      return Housing3;
    case Categories?.DAY_HOSPITALITY:
      return DayCare;
    case Categories?.PHYSICAL_ACTIVITY:
      return PhysicalActivity;
    case Categories?.LIBRARY:
      return FreeReading;
    case Categories?.MUSEUM:
      return Library;
    case Categories?.GROCERY:
      return Vegetables;
    case Categories?.FOOD_PACKAGE:
      return FoodPackage;
    case Categories?.RESTAURANT:
      return Eat;
    case Categories?.MEAL_DSITRIBUTION:
      return FoodTruck;
    case Categories?.WATER_FOUNTAIN:
      return WaterFountain;
    case Categories?.DOCTOR:
      return Clinic;
    case Categories?.CHILD_CARE:
      return ChildCare3;
    case Categories?.URGENCY_CONTACT:
      return EmergencyContact;
    case Categories?.TESTING:
      return Hospital;
    case Categories?.NURSE:
      return Nurse;
    case Categories?.VACCINE:
      return ShootingRoom;
    case Categories?.PREGNANCY_MONITORING:
      return Gynecology;
    case Categories?.SHOWER:
      return Shower;
    case Categories?.MENSTRUAL_PROTECTION:
      return Drop;
    case Categories?.TOILETS:
      return Toilets;
    case Categories?.WELLNESS:
      return Wellness;
    case Categories?.JURIDICAL:
      return Legal;
    case Categories?.ADVISORS:
      return AdvisorsM;
    case Categories?.ADMINISTRATIVE:
      return Administrative;
    case Categories?.HOUSING:
      return Housing1;
    case Categories?.HANDICAP:
      return Disability;
    case Categories?.FREE_WIFI:
      return FreeWifi;
    case Categories?.ELECTRIC_PLUG:
      return ElectricPlug;
    case Categories?.COMPUTER_EQUIPMENT:
      return ComputerEquipment;
    case Categories?.MOBILE_REPARATION:
      return MobileRepairing;
    case Categories?.GYNECOLOGIST:
      return Gynecologist;
    case Categories?.DERMATOLOGIST:
      return Dermatho;
    case Categories?.PULMONOLOGIST:
      return Pulmonologist;
    case Categories?.CARDIOLOGY:
      return Cardiology;
    case Categories?.RADIOLOGY:
      return Radiology;
    case Categories?.ADDICTOLOGY:
      return ShootingRoom;
    default:
      return null;
  }
}

export function getMainCategory(category: string): MainCategories | null {
  let response: MainCategories | null = null;
  for (const mainCategory in categoriesRepartition) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (categoriesRepartition?.[mainCategory]?.includes(category)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      response = mainCategory;
    }
  }
  return response;
}

export function getCategoryColor(
  category: string,
  isMainCatefory: boolean
): string | null {
  const colors = theme?.color.categories;
  const computedCategory = isMainCatefory
    ? category
    : getMainCategory(category);

  switch (computedCategory) {
    case MainCategories?.ACTIVITY:
      return colors?.activities;
    case MainCategories?.ADVICE:
      return colors?.advice;
    case MainCategories?.FOOD:
      return colors?.food;
    case MainCategories?.HEALTH:
      return colors?.health;
    case MainCategories?.HOME:
      return colors?.home;
    case MainCategories?.HYGIENE:
      return colors?.hygiene;
    case MainCategories?.MEDICINE:
      return colors?.medicine;
    case MainCategories?.TECHNOLOGY:
      return colors?.technology;
    default:
      return theme?.color?.neutral?.black20;
  }
}
