import FreeReading from "~/Components/Icons/Categories/Activities/FreeReading";
import Library from "~/Components/Icons/Categories/Activities/Library";
import PhysicalActivity from "~/Components/Icons/Categories/Activities/PhysicalActivity";
import Administrative from "~/Components/Icons/Categories/Advice/Administrative";
import AdvisorsM from "~/Components/Icons/Categories/Advice/AdvisorsM";
import Legal from "~/Components/Icons/Categories/Advice/Legal";
import Eat from "~/Components/Icons/Categories/Food/Eat";
import FoodPackage from "~/Components/Icons/Categories/Food/FoodPackage";
import FoodTruck from "~/Components/Icons/Categories/Food/FoodTruck";
import Vegetables from "~/Components/Icons/Categories/Food/Vegetables";
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
import ChildCare3 from "~/Components/Icons/Categories/Home/ChildCare3";
import DayCare from "~/Components/Icons/Categories/Home/DayCare";
import Housing1 from "~/Components/Icons/Categories/Home/Housing1";
import Housing2 from "~/Components/Icons/Categories/Home/Housing2";
import Housing3 from "~/Components/Icons/Categories/Home/Housing3";
import NightCare from "~/Components/Icons/Categories/Home/NightCare";
import RestingSpace from "~/Components/Icons/Categories/Home/RestingSpace";
import Drop from "~/Components/Icons/Categories/Hygiene/Drop";
import Shower from "~/Components/Icons/Categories/Hygiene/Shower";
import Toilets from "~/Components/Icons/Categories/Hygiene/Toilets";
import WaterFountain from "~/Components/Icons/Categories/Hygiene/WaterFountain";
import Wellness from "~/Components/Icons/Categories/Hygiene/Wellness";
import ComputerEquipment from "~/Components/Icons/Categories/Technology/ComputerEquipment";
import ElectricPlug from "~/Components/Icons/Categories/Technology/ElectricPlug";
import FreeWifi from "~/Components/Icons/Categories/Technology/FreeWifi";
import MobileRepairing from "~/Components/Icons/Categories/Technology/MobileRepairing";

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

export default function getIconByCategory(catgory: string) {
  switch (catgory) {
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
  }
}
