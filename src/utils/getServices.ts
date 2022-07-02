/* eslint-disable @typescript-eslint/no-unsafe-call */
import Activities from "~/Components/Icons/Categories/Activities";
import FreeReading from "~/Components/Icons/Categories/Activities/FreeReading";
import Library from "~/Components/Icons/Categories/Activities/Library";
import PhysicalActivity from "~/Components/Icons/Categories/Activities/PhysicalActivity";
import Advice from "~/Components/Icons/Categories/Advice";
import Administrative from "~/Components/Icons/Categories/Advice/Administrative";
import AdvisorsM from "~/Components/Icons/Categories/Advice/AdvisorsM";
import Education from "~/Components/Icons/Categories/Advice/Education";
import Job from "~/Components/Icons/Categories/Advice/Job";
import Legal from "~/Components/Icons/Categories/Advice/Legal";
import Social from "~/Components/Icons/Categories/Advice/Social";
import Food from "~/Components/Icons/Categories/Food";
import Eat from "~/Components/Icons/Categories/Food/Eat";
import FoodPackage from "~/Components/Icons/Categories/Food/FoodPackage";
import FoodTruck from "~/Components/Icons/Categories/Food/FoodTruck";
import Vegetables from "~/Components/Icons/Categories/Food/Vegetables";
import Health from "~/Components/Icons/Categories/Health";
import Clinic from "~/Components/Icons/Categories/Health/Clinic";
import Dentist from "~/Components/Icons/Categories/Health/Dentist";
import Dermatho from "~/Components/Icons/Categories/Health/Dermatho";
import Gynecology from "~/Components/Icons/Categories/Health/Gynecology";
import Hospital from "~/Components/Icons/Categories/Health/Hospital";
import Nurse from "~/Components/Icons/Categories/Health/Nurse";
import ShootingRoom from "~/Components/Icons/Categories/Health/ShootingRoom";
import Home from "~/Components/Icons/Categories/Home";
import Bags from "~/Components/Icons/Categories/Home/Bags";
import ChildCare3 from "~/Components/Icons/Categories/Home/ChildCare3";
import DayCare from "~/Components/Icons/Categories/Home/DayCare";
import Housing1 from "~/Components/Icons/Categories/Home/Housing1";
import Housing2 from "~/Components/Icons/Categories/Home/Housing2";
import NightCare from "~/Components/Icons/Categories/Home/NightCare";
import RestingSpace from "~/Components/Icons/Categories/Home/RestingSpace";
import Hygiene from "~/Components/Icons/Categories/Hygiene";
import Drop from "~/Components/Icons/Categories/Hygiene/Drop";
import Shower from "~/Components/Icons/Categories/Hygiene/Shower";
import Toilets from "~/Components/Icons/Categories/Hygiene/Toilets";
import WaterFountain from "~/Components/Icons/Categories/Hygiene/WaterFountain";
import Wellness from "~/Components/Icons/Categories/Hygiene/Wellness";
import Animals from "~/Components/Icons/Categories/Material/Animals";
import Clothes from "~/Components/Icons/Categories/Material/Clothes";
import WashingMachine from "~/Components/Icons/Categories/Material/WashingMachine";
import Medicine from "~/Components/Icons/Categories/Medicine";
import Technology from "~/Components/Icons/Categories/Technology";
import ComputerEquipment from "~/Components/Icons/Categories/Technology/ComputerEquipment";
import ElectricPlug from "~/Components/Icons/Categories/Technology/ElectricPlug";
import FreeWifi from "~/Components/Icons/Categories/Technology/FreeWifi";
import MobileRepairing from "~/Components/Icons/Categories/Technology/MobileRepairing";
import Phone from "~/Components/Icons/System/Communication/Phone";
import theme from "~/Styles/theme.styles";
//import Cardiology from "~/Components/Icons/Categories/Health/Cardiology";
//import Disability from "~/Components/Icons/Categories/Health/Disability";
//import EmergencyContact from "~/Components/Icons/Categories/Health/EmergencyContact";
//import Gynecologist from "~/Components/Icons/Categories/Health/Gynecologist";
//import Pulmonologist from "~/Components/Icons/Categories/Health/Pulmonologist";
//import Radiology from "~/Components/Icons/Categories/Health/Radiology";
//import Housing3 from "~/Components/Icons/Categories/Home/Housing3";
//import Library from "~/Components/Icons/Categories/Activities/Library";

export enum MainServices {
  HOME = "Acceuil",
  FOOD = "Alimentation",
  HEALTH = "Santé",
  MEDICINE = "Médecine",
  HYGIENE = "Hygiène",
  ADVICE = "Conseils",
  TECHNOLOGY = "Technologie",
  ACTIVITY = "Activités"
}

export enum Services {
  REST_SPACE = "Espace de repos",
  NIGHT_CARE = "Halte de nuit",
  HOUSE_ACCOMMODATION = "Domiciliation",
  DAY_HOSPITALITY = "Accueil de jour",
  PHYSICAL_ACTIVITY = "Activités sportives",
  LIBRARY = "Bibliothèque",
  GROCERY = "Épicerie Sociale et Solidaire",
  FOOD_PACKAGE = "Colis Alimentaire",
  RESTAURANT = "Restauration assise",
  MEAL_DSITRIBUTION = "Distribution de repas",
  WATER_FOUNTAIN = "Fontaine à eau",
  DOCTOR = "Médecin généraliste",
  CHILD_CARE = "Soins enfants",
  TESTING = "Dépistage",
  NURSE = "Infirmerie",
  PREGNANCY_MONITORING = "Suivi grossesse",
  SHOWER = "Douche",
  MENSTRUAL_PROTECTION = "Protections périodiques",
  TOILETS = "Toilettes",
  WELLNESS = "Bien-être",
  JURIDICAL = "Permanence juridique",
  ADVISORS = "Accompagnement à l'emploi",
  ADMINISTRATIVE = "Conseil administratif",
  HOUSING = "Conseil logement",
  FREE_WIFI = "Wifi",
  ELECTRIC_PLUG = "Prise",
  COMPUTER_EQUIPMENT = "Ordinateur",
  NUMERIC_ANIMATION = "Atelier numérique",
  DERMATOLOGIST = "Dermatologie",
  ADDICTOLOGY = "Addiction",
  WASHING_MACHINE = "Laverie",
  SOCIAL_ADVICE = "Accompagnement social",
  CLOTHES = "Vêtements",
  PSYCHOLOGY = "Psychologie",
  FRENCH_CLASS = "Cours de français",
  CLASSES = "Soutien scolaire",
  CHIROPODIST = "Pédicure",
  DENTIST = "Dentaire",
  VETERINARY = "Vétérinaire",
  PHONE = "Téléphone",
  JOB_ADVICE = "Insertion par l'activité économique",
  SHOP = "Boutique solidaire",
  BAGS = "Bagagerie"
  //URGENCY_ACCOMMODATION = "Hébèrgement d'urgence",
  //URGENCY_CONTACT = "Contact urgent",
  //VACCINE = "Vaccination",
  //HANDICAP = "Handicap",
  //GYNECOLOGIST = "Gynecologue",
  //PULMONOLOGIST = "Pneumologue",
  //CARDIOLOGY = "Cardiologie",
  //RADIOLOGY = "Radiologie",
  //MUSEUM = "Musée",
}

export const MainServicesToDisplay = [
  MainServices?.HOME,
  MainServices?.FOOD,
  MainServices?.HEALTH,
  MainServices?.MEDICINE,
  MainServices?.HYGIENE,
  MainServices?.ADVICE,
  MainServices?.ACTIVITY,
  MainServices?.TECHNOLOGY
];

export const servicesRepartition = {
  [MainServices?.HOME]: [
    Services?.REST_SPACE,
    Services?.NIGHT_CARE,
    Services?.HOUSE_ACCOMMODATION,
    Services?.DAY_HOSPITALITY,
    Services?.CLOTHES,
    Services?.PHONE,
    Services?.SHOP,
    Services?.BAGS
    // Services?.URGENCY_ACCOMMODATION,
  ],
  [MainServices?.ACTIVITY]: [
    Services?.PHYSICAL_ACTIVITY,
    Services?.LIBRARY,
    Services?.FRENCH_CLASS,
    Services?.CLASSES
    //Services?.MUSEUM
  ],
  [MainServices?.FOOD]: [
    Services?.GROCERY,
    Services?.FOOD_PACKAGE,
    Services?.RESTAURANT,
    Services?.MEAL_DSITRIBUTION
  ],
  [MainServices?.HEALTH]: [
    Services?.DOCTOR,
    Services?.CHILD_CARE,
    Services?.TESTING,
    Services?.NURSE,
    Services?.PREGNANCY_MONITORING
    //Services?.VACCINE,
    //Services?.URGENCY_CONTACT,
  ],
  [MainServices?.HYGIENE]: [
    Services?.SHOWER,
    Services?.MENSTRUAL_PROTECTION,
    Services?.WATER_FOUNTAIN,
    Services?.TOILETS,
    Services?.WELLNESS,
    Services?.WASHING_MACHINE
  ],
  [MainServices?.ADVICE]: [
    Services?.JURIDICAL,
    Services?.ADVISORS,
    Services?.ADMINISTRATIVE,
    Services?.HOUSING,
    Services?.SOCIAL_ADVICE,
    Services?.JOB_ADVICE
    //Services?.HANDICAP
  ],
  [MainServices?.MEDICINE]: [
    Services?.DERMATOLOGIST,
    Services?.ADDICTOLOGY,
    Services?.PSYCHOLOGY,
    Services?.CHIROPODIST,
    Services?.DENTIST,
    Services?.VETERINARY
    // Services?.CARDIOLOGY,
    //Services?.PULMONOLOGIST,
    //Services?.GYNECOLOGIST,
    //Services?.RADIOLOGY
  ],
  [MainServices?.TECHNOLOGY]: [
    Services?.FREE_WIFI,
    Services?.ELECTRIC_PLUG,
    Services?.COMPUTER_EQUIPMENT,
    Services?.NUMERIC_ANIMATION
  ]
};

export function getIconByService(catgory: string) {
  switch (catgory) {
    case MainServices?.ACTIVITY:
      return Activities;
    case MainServices?.HOME:
      return Home;
    case MainServices?.ADVICE:
      return Advice;
    case MainServices?.FOOD:
      return Food;
    case MainServices?.HEALTH:
      return Health;
    case MainServices?.HYGIENE:
      return Hygiene;
    case MainServices?.MEDICINE:
      return Medicine;
    case MainServices?.TECHNOLOGY:
      return Technology;
    case Services?.REST_SPACE:
      return RestingSpace;
    case Services?.NIGHT_CARE:
      return NightCare;
    case Services?.HOUSE_ACCOMMODATION:
      return Housing2;
    case Services?.DAY_HOSPITALITY:
      return DayCare;
    case Services?.PHYSICAL_ACTIVITY:
      return PhysicalActivity;
    case Services?.LIBRARY:
      return FreeReading;
    case Services?.GROCERY:
      return Vegetables;
    case Services?.FOOD_PACKAGE:
      return FoodPackage;
    case Services?.RESTAURANT:
      return Eat;
    case Services?.MEAL_DSITRIBUTION:
      return FoodTruck;
    case Services?.WATER_FOUNTAIN:
      return WaterFountain;
    case Services?.DOCTOR:
    case Services?.PSYCHOLOGY:
      return Clinic;
    case Services?.CHILD_CARE:
      return ChildCare3;
    case Services?.TESTING:
      return Hospital;
    case Services?.NURSE:
      return Nurse;
    case Services?.PREGNANCY_MONITORING:
      return Gynecology;
    case Services?.SHOWER:
      return Shower;
    case Services?.MENSTRUAL_PROTECTION:
      return Drop;
    case Services?.TOILETS:
      return Toilets;
    case Services?.WELLNESS:
      return Wellness;
    case Services?.JURIDICAL:
      return Legal;
    case Services?.ADVISORS:
      return AdvisorsM;
    case Services?.ADMINISTRATIVE:
      return Administrative;
    case Services?.HOUSING:
    case Services?.SHOP:
      return Housing1;
    case Services?.FREE_WIFI:
      return FreeWifi;
    case Services?.ELECTRIC_PLUG:
      return ElectricPlug;
    case Services?.COMPUTER_EQUIPMENT:
      return ComputerEquipment;
    case Services?.NUMERIC_ANIMATION:
      return MobileRepairing;
    case Services?.DERMATOLOGIST:
      return Dermatho;
    case Services?.ADDICTOLOGY:
      return ShootingRoom;
    case Services?.WASHING_MACHINE:
      return WashingMachine;
    case Services?.SOCIAL_ADVICE:
      return Social;
    case Services?.CLOTHES:
      return Clothes;
    case Services?.FRENCH_CLASS:
      return Library;
    case Services?.CLASSES:
      return Education;
    case Services?.CHIROPODIST:
      return Wellness;
    case Services?.DENTIST:
      return Dentist;
    case Services?.VETERINARY:
      return Animals;
    case Services?.PHONE:
      return Phone;
    case Services?.JOB_ADVICE:
      return Job;
    case Services?.BAGS:
      return Bags;
    /* case Services?.URGENCY_ACCOMMODATION:
      return Housing3; */
    /*     case Services?.MUSEUM:
      return Library; */
    //case Services?.URGENCY_CONTACT:
    //return EmergencyContact;
    //case Services?.VACCINE:
    //return ShootingRoom;
    //case Services?.HANDICAP:
    // return Disability;
    //case Services?.GYNECOLOGIST:
    // return Gynecologist;
    //case Services?.PULMONOLOGIST:
    // return Pulmonologist;
    //case Services?.CARDIOLOGY:
    // return Cardiology;
    // case Services?.RADIOLOGY:
    //return Radiology;
    default:
      return null;
  }
}

export function getMainService(category: string): MainServices | null {
  let response: MainServices | null = null;
  for (const mainCategory in servicesRepartition) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (servicesRepartition?.[mainCategory]?.includes(category)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      response = mainCategory;
    }
  }
  return response;
}

export function getServiceColor(
  service: string,
  isMainService: boolean
): string | null {
  const colors = theme?.color.categories;
  const computedCategory = isMainService ? service : getMainService(service);

  switch (computedCategory) {
    case MainServices?.ACTIVITY:
      return colors?.activities;
    case MainServices?.ADVICE:
      return colors?.advice;
    case MainServices?.FOOD:
      return colors?.food;
    case MainServices?.HEALTH:
      return colors?.health;
    case MainServices?.HOME:
      return colors?.home;
    case MainServices?.HYGIENE:
      return colors?.hygiene;
    case MainServices?.MEDICINE:
      return colors?.medicine;
    case MainServices?.TECHNOLOGY:
      return colors?.technology;
    default:
      return theme?.color?.neutral?.black20;
  }
}
