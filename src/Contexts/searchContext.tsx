import {
  useContext,
  createContext,
  useState,
  ReactElement,
  useEffect
} from "react";

import { useGlobalContext } from "./globalContext";
import { useDebounce } from "~/hooks/useDebounce";

export interface PlaceProps {
  id?: number;
  organization_owner?: {
    email?: string;
    tel?: string;
  };
  organization_name?: string;
  adress?: string;
  description?: string;
  last_updata?: string;
  phone_number?: string;
  website?: string;
  spoken_language?: string;
  importante_information?: string;
  services_id?: string[];
  hours_id?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thurday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  }[];
  latitude?: string;
  longitude?: string;
  place?: number;
}

interface ContextProps {
  selectedPlaceIndex?: number;
  setSelectedPlaceIndex?: (index?: number) => void;
  filteredPlaces?: PlaceProps[] | null;
  setFilteredPlaces?: (list: any) => void;
  filters?: string[];
  setFilters?: (filter?: string[]) => void;
  displayFilters?: string | null;
  setDisplayFilters?: (arg: string | null) => void;
  updateFilters?: ({ action, filtersName }: updateFiltersProps) => void;
  isLoading?: boolean;
  debouncedFilters?: string[];
  displayPlaceDescription?: number | null;
  setDisplayPlaceDescription?: (id: number) => void;
  triggerLocalization?: boolean | null;
  setTriggerLocalization?: (arg: boolean) => void;
  isListDisplayed?: boolean;
  setIsListDisplayed?: (arg: boolean) => void;
}

type updateFiltersProps = {
  action: "add" | "remove";
  filtersName: string[];
};

export const Context = createContext<ContextProps>({});

export function useSearchContext() {
  return useContext(Context);
}

interface SearchProviderProps {
  children: ReactElement;
}

function SearchProvider({ children }: SearchProviderProps) {
  const { isMobile } = useGlobalContext();
  const [selectedPlaceIndex, setSelectedPlaceIndex] = useState<number | null>(
    null
  );
  const [isListDisplayed, setIsListDisplayed] = useState<boolean>();
  const [filteredPlaces, setFilteredPlaces] = useState<PlaceProps[] | null>(
    null
  );
  const [filters, setFilters] = useState<string[] | null>(null);
  const [displayFilters, setDisplayFilters] = useState<string | null>(null);
  const [displayPlaceDescription, setDisplayPlaceDescription] = useState<
    number | null
  >(null);
  const [triggerLocalization, setTriggerLocalization] = useState<boolean>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debouncedFilters = useDebounce(filters, 10);

  useEffect(() => {
    setIsLoading(true);
    if (debouncedFilters && debouncedFilters?.length > 0) {
      /**
       * !replace realPlaces by API response
       */
      const selectedPlaces = Places?.filter((place) =>
        place?.services_id?.some((service) =>
          debouncedFilters?.includes(service)
        )
      );

      setIsLoading(false);
      setFilteredPlaces(selectedPlaces);
    } else {
      setFilters(null);
      setIsLoading(false);
      setFilteredPlaces(null);
      setIsListDisplayed(false);
    }
  }, [debouncedFilters]);

  useEffect(() => {
    setIsLoading(true);
    if (!filters || filters?.length === 0) {
      setFilters(null);
      setIsLoading(false);
      setDisplayFilters(null);
      setIsListDisplayed(false);
    }
  }, [filters]);

  const updateFilters = ({ action, filtersName }: updateFiltersProps) => {
    if (action === "add") {
      if (!filters || filters?.length === 0) {
        setFilters([...filtersName]);
      } else {
        filtersName?.forEach((newFilter) => {
          if (!filters?.includes(newFilter)) {
            setFilters((prev) => [...prev, newFilter]);
          }
        });
      }
    } else {
      filters !== null &&
        setFilters(
          (prev) =>
            prev !== null &&
            prev?.reduce((acc: string[], value: string) => {
              if (!filtersName?.includes(value)) {
                acc?.push(value);
              }
              return acc;
            }, [])
        );
    }
  };

  useEffect(() => {
    filteredPlaces?.length > 0 && isMobile && setSelectedPlaceIndex(0);
  }, [filteredPlaces]);

  const providerValue = {
    selectedPlaceIndex,
    setSelectedPlaceIndex,
    filteredPlaces,
    setFilteredPlaces,
    filters,
    setFilters,
    displayFilters,
    setDisplayFilters,
    updateFilters,
    debouncedFilters,
    isLoading,
    displayPlaceDescription,
    setDisplayPlaceDescription,
    triggerLocalization,
    setTriggerLocalization,
    isListDisplayed,
    setIsListDisplayed
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

export default SearchProvider;

export const Places = [
  {
    id: 1,
    organization_owner: { email: "bbechtelar@douglas.net", tel: "0787632712" },
    organization_name: " PAJ (Permanence Accueil Jeunes) ",
    adress: "24 Rue Ramponeau, 75020 Paris, France",
    description:
      "La PAJ est un accueil de jour qui s\u2019adresse \u00e0 des jeunes hommes et jeunes femmes en situation d\u2019errance sur le territoire parisien   Ce lieu d\u2019\u00e9coute a pour objectif d\u2019aider les jeunes \u00e0 renouer les liens sociaux et de leur permettre d\u2019acc\u00e9der aux dispositifs de droit commun   Les \u00e9quipes de la PAJ proposent un temps de pause et d\u2019\u00e9coute afin   - de permettre \u00e0 chaque jeune de reconna\u00eetre ses ressources personnelles   - de ralentir le processus d\u2019errance, d\u2019offrir la possibilit\u00e9 de \u00ab rebondir \u00bb   - de rendre alors possible l\u2019acc\u00e8s aux structures d\u2019aide et au dispositif de droit commun   Permanences infirmi\u00e8res le Mardi et le Vendredi.",
    last_updata: "2021-12-21T00:00:00+00:00",
    phone_number: " 01 48 05 01 01",
    website:
      "https://anrs.asso.fr/etablissements-services/insertion/permanence-accueil-ecoute-jeunes-paej/",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.379976",
    latitude: "48.871202",
    services_id: [
      "Laverie",
      "Douche",
      "Bagagerie",
      "Restauration assise",
      "Accueil de jour",
      "Prise",
      "Toilettes",
      "Infirmerie"
    ],
    hours_id: [
      {
        tuesday: "9h30 \u00e0 16h00",
        wednesday: "9h30 \u00e0 13h30",
        thurday: "9h30 \u00e0 12h30",
        friday: "9h30 \u00e0 16h00",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 3,
    organization_owner: { email: "cyril.auer@krajcik.com", tel: "0787632712" },
    organization_name: " Entraide et partage avec les sans-logis (EPALSL) ",
    adress: "22 rue Sainte-Marthe, 75010 Paris",
    description:
      "La Mission Evang\u00e9lique Parmi Les Sans-logis est une association cultuelle (1905). Elle a pour vocation de diffuser le pain et la Parole de Dieu aux plus d\u00e9munis, de proclamer l\u0027Evangile parmi les sans-logis, \u0153uvrer au d\u00e9veloppement de la foi et de la vie chr\u00e9tienne. L\u0027association apporte aide et assistance aux personnes en situation d\u00e9licate, de pr\u00e9carit\u00e9, par la distribution de nourriture, v\u00eatements, soins m\u00e9dicaux, douche, domiciliation   Les jours f\u00e9ri\u00e9s, les d\u00e9jeuners sont servis \u00e0 13h.",
    last_updata: "2021-12-23T00:00:00+00:00",
    phone_number: " 09 54 17 62 30",
    website: "https://mission-evangelique-parmi-les-sans-logis.fr/",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3721599",
    latitude: "48.8740439",
    services_id: [
      "Accueil de jour",
      "Douche",
      "Domiciliation",
      "M\u00e9decin g\u00e9n\u00e9raliste",
      "V\u00eatements",
      "Restauration assise",
      "Toilettes",
      "Wifi",
      "Prise"
    ],
    hours_id: [
      {
        tuesday: "9h30 \u00e0 12h30  17h00 \u00e0 18h00",
        wednesday: "9h30 \u00e0 12h30  17h00 \u00e0 18h00",
        thurday: "9h30 \u00e0 12h30  17h00 \u00e0 18h00",
        friday: "9h30 \u00e0 12h30  17h00 \u00e0 18h00",
        saturday: "12h00 \u00e0 13h00",
        sunday: "10h00 \u00e0 11h00"
      }
    ],
    place: 1
  },
  {
    id: 4,
    organization_owner: { email: "vmckenzie@dare.com", tel: "0787632712" },
    organization_name: " ESI Bichat ",
    adress: "35 rue Bichat, 75010 Paris",
    description:
      "L\u0027Espace Solidarit\u00e9 Insertion (ESI) Bichat accueille, oriente et accompagne de mani\u00e8re inconditionnelle les personnes majeures en situation d\u0027exclusion, de pr\u00e9carit\u00e9 et de vuln\u00e9rabilit\u00e9.\u00a0\u00a0\u00a0Accompagnement social et juridique, selon les disponibilit\u00e9s.Collation: de l\u0027ouverture jusqu\u0027\u00e0 10h30Douches et laveries : sur rendez-vous, selon les disponibilit\u00e9s\u00a0",
    last_updata: "2022-03-07T00:00:00+00:00",
    phone_number: " 01 40 18 04 41",
    website: "",
    spoken_language: "Fran\u00e7ais, Anglais",
    importante_information: "Warning",
    longitude: "2.3672838",
    latitude: "48.871945",
    services_id: [
      "Accueil de jour",
      "Laverie",
      "Permanence juridique",
      "Douche",
      "Activit\u00e9s diverses",
      "Restauration assise",
      "Accompagnement social"
    ],
    hours_id: [
      {
        tuesday: "7h15 \u00e0 11h45  13h00 \u00e0 18h00",
        wednesday: "7h15 \u00e0 11h45",
        thurday: "7h15 \u00e0 11h45  13h00 \u00e0 18h00",
        friday: "7h15 \u00e0 11h45  13h00 \u00e0 17h00",
        saturday: "9h15 \u00e0 11h45  13h00 \u00e0 17h00",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 5,
    organization_owner: { email: "glover.amari@hill.biz", tel: "0787632712" },
    organization_name: " Itin\u00e9rances ",
    adress: "61 Bd de Magenta, 75010 Paris",
    description:
      "Itin\u00e9rances est un accueil de Jour pour Jeunes en errance (18-30 ans).   Sur rendez-vous le matin, entre 10h et 13h, les lundi, mardi, mercredi, jeudi et vendredi   Attention : ferm\u00e9e les jours f\u00e9ri\u00e9s",
    last_updata: "2022-03-08T00:00:00+00:00",
    phone_number: " 01 40 05 54 87",
    website: "",
    spoken_language:
      "Fran\u00e7ais, Anglais, Espagnol, Wolof, Bambara, Russe, Polonais",
    importante_information: "Warning",
    longitude: "2.3578546",
    latitude: "48.8740327",
    services_id: [
      "Accompagnement social",
      "Douche",
      "Laverie",
      "Accueil de jour",
      "D\u00e9pistage",
      "Ordinateur",
      "Restauration assise",
      "Toilettes"
    ],
    hours_id: [
      {
        tuesday: "10h00 \u00e0 13h00  14h00 \u00e0 17h30",
        wednesday: "10h00 \u00e0 13h00",
        thurday: "10h00 \u00e0 13h00  14h00 \u00e0 17h30",
        friday: "10h00 \u00e0 13h00  14h00 \u00e0 17h30",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 7,
    organization_owner: {
      email: "kuhlman.ervin@hotmail.com",
      tel: "0787632712"
    },
    organization_name: " ESI familles Bonne Nouvelle ",
    adress: "75002, Paris",
    description:
      "Cet ESI, est sp\u00e9ci\ufb01quement d\u00e9di\u00e9 aux familles en grande pr\u00e9carit\u00e9 et majoritairement sans domicile. Elles peuvent y b\u00e9n\u00e9\ufb01cier d\u2019un accompagnement personnalis\u00e9, dans un espace de convivialit\u00e9 dot\u00e9 d\u2019infrastructures adapt\u00e9es aux enfants. Une attention particuli\u00e8re est port\u00e9e aux questions relatives \u00e0 la parentalit\u00e9 et aux aspects sociaux de ce public en situation d\u2019errance sur le territoire parisien\u00a0Accueil du public le mardi, mercredi et vendredi : 09h40-13h et 14h-17h et le samedi de 10h \u00e0 17Le lundi et jeudi : ouverture uniquement sur rendez-vous dans les horaires 09H40-13H et 14H-17H",
    last_updata: "2021-12-13T00:00:00+00:00",
    phone_number: " 01 43 38 80 60",
    website: "",
    spoken_language:
      "Fran\u00e7ais, Anglais, Espagnol, Italien, Arabe, Roumain",
    importante_information: "Warning",
    longitude: "2.34399",
    latitude: "48.8675641",
    services_id: [
      "Accueil de jour",
      "Accompagnement social",
      "Douche",
      "Laverie",
      "M\u00e9decin g\u00e9n\u00e9raliste",
      "Psychologie",
      "Infirmerie",
      "Soins enfants",
      "Suivi grossesse",
      "Cours de fran\u00e7ais",
      "Activit\u00e9s diverses",
      "Permanence juridique",
      "Restauration assise"
    ],
    hours_id: [
      {
        tuesday: "9h40 \u00e0 13h00  14h00 \u00e0 17h00",
        wednesday: "9h40 \u00e0 13h00  14h00 \u00e0 17h00",
        thurday: "Ferm\u00e9",
        friday: "9h40 \u00e0 13h00  14h00 \u00e0 17h00",
        saturday: "10h00 \u00e0 17h00",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 8,
    organization_owner: {
      email: "tillman.arnoldo@gibson.com",
      tel: "0787632712"
    },
    organization_name: " ESI Halte Femmes ",
    adress: "16-18 passage Raguinot, 75012 Paris",
    description:
      "Ce lieu d\u0027accueil d\u00e9di\u00e9 aux femmes en tr\u00e8s grande exclusion a pour vocation de subvenir \u00e0 leurs besoins vitaux en proposant douche, laverie, espace de repos, collations, SIAO U  Initier et/ou effectuer un suivi socio-\u00e9ducatif, travail en r\u00e9seau pour orientation adapt\u00e9e aux besoins des personnes, permanence psychologique et m\u00e9dical  Initier le processus de reconstruction personnelle au travers d\u2019ateliers, actions culturelles etc   Sur rdv l\u0027apr\u00e8s-midi. Ouvert les jours f\u00e9ri\u00e9s de 9h \u00e0 16h (horaires du dimanche).",
    last_updata: "2021-12-14T00:00:00+00:00",
    phone_number: " 01 43 44 55 00",
    website:
      "http://www.aurore.asso.fr/hauts-de-seine-paris-sud-est-iml/esi-halte-femmes",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3783467",
    latitude: "48.8447794",
    services_id: [
      "Douche",
      "Permanence juridique",
      "Psychologie",
      "M\u00e9decin g\u00e9n\u00e9raliste",
      "Accueil de jour",
      "Domiciliation",
      "Accompagnement social",
      "Accompagnement \u00e0 l\u0027emploi",
      "Bien-\u00eatre",
      "Laverie",
      "Cours de fran\u00e7ais",
      "Restauration assise",
      "Coffre-fort num\u00e9rique"
    ],
    hours_id: [
      {
        tuesday: "9h00 \u00e0 16h00",
        wednesday: "9h00 \u00e0 16h00",
        thurday: "9h00 \u00e0 12h30",
        friday: "9h00 \u00e0 16h00",
        saturday: "Ferm\u00e9",
        sunday: "9h00 \u00e0 16h00"
      }
    ],
    place: 2
  },
  {
    id: 9,
    organization_owner: {
      email: "hodkiewicz.ludwig@lind.info",
      tel: "0787632712"
    },
    organization_name: " Halte Jeunes 18-25 ",
    adress: "9-11 rue Henri-Desgrandes, 75012 Paris",
    description:
      "- Besoins de premi\u00e8re urgence : repas (petit d\u00e9jeuner et d\u00e9jeuner), douche, laverie sur rendez-vous  - Repas du midi : participation 0.50   - Prise en charge socio-\u00e9ducative globale et non d\u00e9termin\u00e9e dans le temps (sauf limite d\u2019\u00e2ge) : possibilit\u00e9 de rencontrer un travailleur social sur libre adh\u00e9sion le matin lors des permanences sociales et l\u0027apr\u00e8s-midi sur RDV  - Sortie sportive, mus\u00e9e..  - Consultation psychologique , le vendredi matin uniquemen   D\u00e9marches : CMU, AME, accompagnement h\u00e9bergement, papiers d\u0027identit\u00e9.   Jeunes hommes et femmes en errance, \u00e2g\u00e9s de 18 \u00e0 25 ans   - Accueil inconditionne  - Pas de prise en charge de personnes avec enfant  - Animaux non admis dans les locaux (possibilit\u00e9 de les attacher devant la structure)",
    last_updata: "2021-12-16T00:00:00+00:00",
    phone_number: " 01 53 02 94 94",
    website:
      "https://www.aurore.asso.fr/pole-urgence-sociale-et-hebergement/la-halte-jeunes",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3812871",
    latitude: "48.8395178",
    services_id: [
      "Accueil de jour",
      "Restauration assise",
      "Douche",
      "Domiciliation",
      "Permanence juridique",
      "Conseil logement",
      "Psychologie",
      "Conseil administratif",
      "Laverie",
      "Fontaine \u00e0 eau",
      "Prise",
      "Accompagnement social",
      "Activit\u00e9s diverses",
      "Accompagnement \u00e0 l\u0027emploi",
      "Coffre-fort num\u00e9rique"
    ],
    hours_id: [
      {
        tuesday: "9h00 \u00e0 13h00  14h30 \u00e0 17h30",
        wednesday: "9h00 \u00e0 13h00",
        thurday: "9h00 \u00e0 13h00  14h30 \u00e0 17h30",
        friday: "9h00 \u00e0 13h00  14h30 \u00e0 17h30",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 10,
    organization_owner: {
      email: "francisca.oberbrunner@heller.com",
      tel: "0787632712"
    },
    organization_name: " APASO Croix Rouge ",
    adress: "75014, Paris",
    description:
      "L\u2019APASO (Antenne de premier accueil social et d\u0027orientation) accueille et accompagne des adultes isol\u00e9s en grande sou\ufb00rance car isol\u00e9es, sans emploi, sans ressource ni soutien. Au sein de l\u2019APASO, ces personnes peuvent b\u00e9n\u00e9\ufb01cier d\u2019une aide de premi\u00e8re n\u00e9cessit\u00e9 (nourriture, v\u00eatements, premiers soins\u2026) et d\u2019un accompagnement social. Les personnes accueillies \u00e0 l\u2019APASO sont orient\u00e9es par le 115 ou le SIAO Urgence de Paris.",
    last_updata: "2021-12-20T00:00:00+00:00",
    phone_number: " 01 56 88 01 83",
    website:
      "http://paris.croix-rouge.fr/item/antenne-de-premier-accueil-social-et-dorientation-apaso/",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3255684",
    latitude: "48.8314408",
    services_id: [
      "Douche",
      "Accueil de jour",
      "Conseil administratif",
      "Accompagnement social",
      "Colis Alimentaire",
      "Domiciliation"
    ],
    hours_id: [
      {
        tuesday: "9h30 \u00e0 16h00",
        wednesday: "9h30 \u00e0 16h00",
        thurday: "9h30 \u00e0 16h00",
        friday: "Ferm\u00e9",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 1
  },
  {
    id: 12,
    organization_owner: { email: "flo75@gmail.com", tel: "0787632712" },
    organization_name:
      " ESI Familles Georges Pitard Emma\u00fcs Solidarit\u00e9 ",
    adress: "4 Rue Georges Pitard, 75015 Paris, France",
    description:
      "L\u0027ESI Familles Georges PITARDAccueil \u00a0inconditionnel des familles en situation de rue et/ou en h\u00e9bergement d\u0027urgence non stabilis\u00e9 (h\u00f4tel, CHU \u2026) \u00a0.L\u0027accueil se d\u00e9roule en 2 temps :Matin - 10h00 \u00e0 13h00 : accueil inconditionnel acc\u00e8s aux prestations suivantes : \u00a0petit d\u00e9jeuner, douches, laverie, espace jeux (0 \u00e0 18 ans), espace num\u00e9rique, salle de repos, rdv sage femme, pu\u00e9ricultrice, massage, vestiaires b\u00e9b\u00e9s et enfants (\u2026)Apr\u00e8s-midi - 14h00 \u00e0 17h00 : uniquement sur RDV avec un travailleur social (ouvertures de droits, orientations, fiche SISIAO (\u2026))Les rendez vous sont pris le matins \u00e0 l\u0027ouverture de l\u0027ESI pour des raisons d\u0027organisation nous ne donnons pas de RDV par t\u00e9l\u00e9phone.L\u0027ESI Familles PITARD est un espace d\u0027accueil de jour sans orientation. Toutes les familles en grandes pr\u00e9carit\u00e9s sans h\u00e9bergement ou en h\u00e9bergements pr\u00e9caires sont accueillies accompagn\u00e9es et orient\u00e9es.Des permanences CPAM, Droit d\u0027urgence et PMI sont accessibles sur rendez-vous",
    last_updata: "2021-12-13T00:00:00+00:00",
    phone_number: " 01 44 19 83 12",
    website:
      "https://www.emmaus-solidarite.org/wp-content/uploads/pdfCentres/Espace-Solidarite-Insertion-Familles.pdf",
    spoken_language: "Fran\u00e7ais, Anglais",
    importante_information: "Warning",
    longitude: "2.311004",
    latitude: "48.8355654",
    services_id: [
      "Restauration assise",
      "Douche",
      "Bien-\u00eatre",
      "Atelier num\u00e9rique",
      "Laverie",
      "Accompagnement social",
      "Psychologie",
      "V\u00eatements",
      "Fontaine \u00e0 eau",
      "Colis Alimentaire",
      "Permanence juridique",
      "Accompagnement \u00e0 l\u0027emploi"
    ],
    hours_id: [
      {
        tuesday: "10h00 \u00e0 13h00",
        wednesday: "10h00 \u00e0 13h00  14h00 \u00e0 17h00",
        thurday: "10h00 \u00e0 13h00  14h00 \u00e0 17h00",
        friday: "10h00 \u00e0 13h00  14h00 \u00e0 16h00",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 13,
    organization_owner: {
      email: "champlin.emmanuel@hotmail.com",
      tel: "0787632712"
    },
    organization_name: " Accueil 15 ",
    adress: "20 All\u00e9e des Fr\u00e8res Voisin, Paris, France",
    description:
      "Accueil 15 est un lieu paisible o\u00f9 viennent passer la journ\u00e9e des hommes de 25 \u00e0 60 ans, en situation pr\u00e9caire, pour la plupart sans domicile fixe. B\u00e9n\u00e9ficiaire du RSA ou pouvant y pr\u00e9tendre, ou demandeurs d\u0027emploi de longue dur\u00e9e.",
    last_updata: "2021-12-16T00:00:00+00:00",
    phone_number: " 01 42 73 68 37",
    website: "",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.2722389",
    latitude: "48.8281908",
    services_id: [
      "Accueil de jour",
      "Douche",
      "Laverie",
      "Restauration assise",
      "Ordinateur"
    ],
    hours_id: [
      {
        tuesday: "10h00 \u00e0 16h00",
        wednesday: "Ferm\u00e9",
        thurday: "10h00 \u00e0 16h00",
        friday: "Ferm\u00e9",
        saturday: "10h00 \u00e0 16h00",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 17,
    organization_owner: {
      email: "wcruickshank@farrell.biz",
      tel: "0787632712"
    },
    organization_name:
      " CAARUD Bor\u00e9al- La Terrasse- GHU Paris Psychiatrie \u0026 Neurosciences ",
    adress: "64 ter rue de Meaux, 75019",
    description:
      "Les Centres d\u0027accueil et d\u0027accompagnement \u00e0 la r\u00e9duction des risques pour usagers de drogues (CAARUD) accueillent sans condition les usagers de tous produits (drogues, alcool, etc.) en leur garantissant l\u0027anonymat. Ils mettent \u00e0 disposition du mat\u00e9riel de pr\u00e9vention des infections (pr\u00e9servatifs, \u00e9change de seringues, etc.), un espace hygi\u00e8ne et dispensent des soins de premi\u00e8re n\u00e9cessit\u00e9. Leur r\u00f4le consiste \u00e9galement \u00e0 informer, \u00e0 orienter et \u00e0 proposer un accompagnement social, tout en favorisant l\u0027acc\u00e8s aux droits sociaux et aux soins. Leur action est compl\u00e9t\u00e9e par celle des CSAPA (Centres de soins, d\u0027accompagnement et de pr\u00e9vention en addictologie)\u00a0\u00a0Accueil individuel sur rendez-vous l\u0027apr\u00e8s-midi, de 13h45 \u00e0 15h45 (ferm\u00e9 le jeudi apr\u00e8s-midi).Echange de mat\u00e9riel du lundi au vendredi 9h30 \u2013 16h30.Maraudes : Stalingrad-Rotonde et Villette : Mardi, Mercredi, Vendredi 14h \u2013 16h30.",
    last_updata: "2021-12-21T00:00:00+00:00",
    phone_number: " 01 42 45 16 43",
    website: "",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3753029",
    latitude: "48.8825267",
    services_id: [
      "Addiction",
      "M\u00e9decin g\u00e9n\u00e9raliste",
      "Laverie",
      "Infirmerie",
      "Douche",
      "Restauration assise",
      "Accueil de jour",
      "Accompagnement social",
      "Accompagnement \u00e0 l\u0027emploi",
      "Psychologie"
    ],
    hours_id: [
      {
        tuesday: "9h45 \u00e0 12h45  13h45 \u00e0 15h45",
        wednesday: "9h45 \u00e0 12h45  13h45 \u00e0 15h45",
        thurday: "9h45 \u00e0 12h45",
        friday: "9h45 \u00e0 12h45  13h45 \u00e0 15h45",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 21,
    organization_owner: {
      email: "champlin.barton@gmail.com",
      tel: "0787632712"
    },
    organization_name: " ESI La maison du partage  ",
    adress: "32 rue Bouret, 75019 Paris",
    description:
      "Comptoir d\u0027accueil et orientation, et caf\u00e9t\u00e9ria. Espace hygi\u00e8ne (toilettes, douches, etc.). Espace domiciliation. Bureaux d\u0027accueil et d\u0027entretiens personnalis\u00e9s. Di\ufb00\u00e9rentes permanences sociales.",
    last_updata: "2022-02-16T00:00:00+00:00",
    phone_number: " 01 53 38 41 30",
    website: "https://www.armeedusalut.fr/etablissements/mdp",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3742397",
    latitude: "48.8817207",
    services_id: [
      "Accueil de jour",
      "Fontaine \u00e0 eau",
      "Douche",
      "Toilettes",
      "Laverie",
      "Accompagnement social",
      "Domiciliation",
      "Permanence juridique"
    ],
    hours_id: [
      {
        tuesday: "8h00 \u00e0 12h30  14h00 \u00e0 16h30",
        wednesday: "8h00 \u00e0 12h30  14h00 \u00e0 16h30",
        thurday: "8h00 \u00e0 12h30  14h00 \u00e0 16h30",
        friday: "8h00 \u00e0 12h30  14h00 \u00e0 16h30",
        saturday: "Ferm\u00e9",
        sunday: "9h00 \u00e0 12h30  14h00 \u00e0 16h30"
      }
    ],
    place: 2
  },
  {
    id: 22,
    organization_owner: { email: "ward.emmalee@gmail.com", tel: "0787632712" },
    organization_name: " ESI Agora ",
    adress: "32 rue des Bourdonnais, 75001 Paris",
    description:
      "L\u0027Espace Solidarit\u00e9 Insertion (ESI) Agora accueille, oriente et accompagne de mani\u00e8re inconditionnelle et anonyme les personnes exclues, d\u00e9favoris\u00e9es, vivant \u00e0 la rue ou dans des lieux inappropri\u00e9s. Il propose des accompagnements globaux et permet l\u0027acc\u00e8s \u00e0 des prestations de base.   Accompagnement juridique et social douche. Laverie. Domiciliation. Consultations m\u00e9dicales. Activit\u00e9s (culturelles, sportives, informatiques, FLE)   Toutes les prestations sur rendez-vous doivent passer par une prise de rendez-vous \u00e0 l\u0027accueil le matin.   Ouvert toute l\u0027ann\u00e9e sauf les jours f\u00e9ri\u00e9s et les week-ends.",
    last_updata: "2022-02-28T00:00:00+00:00",
    phone_number: " 01 77 37 63 19",
    website: "",
    spoken_language: "Fran\u00e7ais, Anglais, Polonais, Russe, Arabe",
    importante_information: "Warning",
    longitude: "2.345366",
    latitude: "48.8600042",
    services_id: [
      "Accueil de jour",
      "Espace de repos",
      "Douche",
      "Accompagnement social",
      "Permanence juridique",
      "Laverie",
      "M\u00e9decin g\u00e9n\u00e9raliste",
      "Accompagnement \u00e0 l\u0027emploi",
      "Psychologie",
      "P\u00e9dicure",
      "Fontaine \u00e0 eau",
      "Domiciliation",
      "Halte de nuit",
      "Activit\u00e9s diverses",
      "Cours de fran\u00e7ais"
    ],
    hours_id: [
      {
        tuesday: "10h00 \u00e0 12h00  14h00 \u00e0 16h30",
        wednesday: "10h00 \u00e0 12h00",
        thurday: "10h00 \u00e0 12h00  14h00 \u00e0 16h30",
        friday: "10h00 \u00e0 12h00  14h00 \u00e0 16h00",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 23,
    organization_owner: { email: "delia.koch@kirlin.org", tel: "0787632712" },
    organization_name: " ESI Chez monsieur Vincent ",
    adress: "10 Rue de Rocroy, 75010, Paris, France",
    description:
      "Hygi\u00e8ne (douches conditionn\u00e9es, lave-linge), prestations sociales (\u00e9coute, \u00e9valuation, conseil et orientation), acc\u00e8s aux droits (domiciliation conditionn\u00e9es), accueil sant\u00e9 et orientation",
    last_updata: "2021-12-16T00:00:00+00:00",
    phone_number: " 01 42 80 98 73",
    website: "http://www.captifs.fr/",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.350875",
    latitude: "48.8793013",
    services_id: [
      "Accueil de jour",
      "Douche",
      "Accompagnement social",
      "Infirmerie",
      "Activit\u00e9s diverses",
      "Laverie",
      "Domiciliation",
      "Psychologie",
      "Cours de fran\u00e7ais",
      "M\u00e9decin g\u00e9n\u00e9raliste"
    ],
    hours_id: [
      {
        tuesday: "9h30 \u00e0 12h00  14h00 \u00e0 17h00",
        wednesday: "9h30 \u00e0 12h00  14h00 \u00e0 17h00",
        thurday: "14h00 \u00e0 17h00",
        friday: "14h00 \u00e0 17h00",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 24,
    organization_owner: {
      email: "quigley.percival@hotmail.com",
      tel: "0787632712"
    },
    organization_name: " ESI La maison dans le jardin / Saint-Michel ",
    adress: "35 Avenue Courteline, 75012, Paris, France",
    description:
      "L\u0027Espace Solidarit\u00e9 Insertion accueille des personnes isol\u00e9es et majeures, dans le respect des principes d\u0027inconditionnalit\u00e9 et d\u0027anonymat. De 8h \u00e0 20h les personnes peuvent acc\u00e9der \u00e0 un ensemble de prestations (douche, laverie, casier solidaire, domiciliation, entretien social, caf\u00e9 et collation, ateliers/animations). Elles peuvent \u00e9galement rencontrer un travailleur social ou un professionnel de sant\u00e9",
    last_updata: "2021-12-23T00:00:00+00:00",
    phone_number: " 01 41 74 88 10",
    website: "https://www.samusocial.paris/",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.4146699",
    latitude: "48.8441321",
    services_id: [
      "Accueil de jour",
      "Douche",
      "Infirmerie",
      "Permanence juridique",
      "Laverie",
      "M\u00e9decin g\u00e9n\u00e9raliste",
      "Dentaire",
      "P\u00e9dicure",
      "Accompagnement social",
      "Dermatologie",
      "Psychologie",
      "Fontaine \u00e0 eau",
      "Coffre-fort num\u00e9rique",
      "Halte de nuit",
      "V\u00e9t\u00e9rinaire"
    ],
    hours_id: [
      {
        tuesday: "8h00 \u00e0 20h00",
        wednesday: "8h00 \u00e0 20h00",
        thurday: "13h30 \u00e0 20h00",
        friday: "8h00 \u00e0 20h00",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 25,
    organization_owner: {
      email: "frank.jakubowski@mertz.com",
      tel: "0787632712"
    },
    organization_name: " ESI La maison dans la rue ",
    adress: "18 Rue de Picpus, 75012, Paris, France",
    description:
      "L\u0027ESI la Maison dans la Rue permet l\u0027accueil et le soutien des personnes majeures sans enfant, en situation de rue ou en tr\u00e8s grande pr\u00e9carit\u00e9 d\u0027h\u00e9bergement. L\u0027accueil est inconditionnel et comprend un espace hygi\u00e8ne (WC, lavabos, douches), un espace buanderie, une caf\u00e9t\u00e9ria pour la prise de petit-d\u00e9jeuner et de boissons chaudes et froides durant la journ\u00e9e.Un accompagnement social peut \u00eatre propos\u00e9 apr\u00e8s la prise de RDV aupr\u00e8s d\u0027un travailleur social.Des ateliers collectifs sont propos\u00e9s (revue de presse, photolangage, arth\u00e9rapie, etc.).\u00a0Possibilit\u00e9 d\u0027\u00eatre orient\u00e9 par des associations de maraude.",
    last_updata: "2021-12-09T00:00:00+00:00",
    phone_number: " 01 40 02 09 88",
    website:
      "https://www.casp.asso.fr/index.php/component/k2/itemlist/category/152-esi-la-maison-dans-la-rue.html",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3942011",
    latitude: "48.84645",
    services_id: [
      "Accueil de jour",
      "M\u00e9decin g\u00e9n\u00e9raliste",
      "Douche",
      "Activit\u00e9s sportives",
      "Laverie",
      "Accompagnement social",
      "Psychologie",
      "Activit\u00e9s diverses",
      "Permanence juridique",
      "Conseil administratif",
      "Addiction",
      "Atelier num\u00e9rique",
      "Toilettes",
      "V\u00eatements",
      "Coffre-fort num\u00e9rique"
    ],
    hours_id: [
      {
        tuesday: "8h00 \u00e0 12h00  14h00 \u00e0 17h00",
        wednesday: "14h00 \u00e0 17h00",
        thurday: "8h00 \u00e0 12h00  14h00 \u00e0 17h00",
        friday: "8h00 \u00e0 12h00  14h00 \u00e0 17h00",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 26,
    organization_owner: {
      email: "waelchi.yolanda@lebsack.com",
      tel: "0787632712"
    },
    organization_name: " ESI l\u0027Arche d\u0027Avenirs ",
    adress: "113 Rue Regnault, 75013 Paris, France",
    description:
      "Accueil avec des \u00e9quipements.   Les animaux ne sont pas autoris\u00e9s dans la structure, mais il est possible de les attacher \u00e0 l\u0027ext\u00e9rieur   Collation le matin (mardi, mercredi, vendredi et samedi de 8h30 \u00e0 11h30). L\u0027accueil propose aussi une salle de repos non mixte en acc\u00e8s libre   L\u0027ESI ne feme pas pendant l\u0027\u00e9t\u00e9 ni l\u0027hiver (si plan grand froid activ\u00e9 : \u00e9largissement des horaires)  Ferm\u00e9 les jours f\u00e9ri\u00e9s.",
    last_updata: "2021-12-13T00:00:00+00:00",
    phone_number: " 01 44 06 98 84",
    website: "http://www.miedepain.asso.fr/larche-davenirs/",
    spoken_language:
      "Anglais, Espagnol, Roumain, Polonais, Russe, Arabe, Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3679229",
    latitude: "48.8225795",
    services_id: [
      "Accueil de jour",
      "Douche",
      "Bagagerie",
      "Conseil administratif",
      "Toilettes",
      "Laverie",
      "Activit\u00e9s diverses",
      "Cours de fran\u00e7ais",
      "Psychologie",
      "Espace de repos"
    ],
    hours_id: [
      {
        tuesday: "8h30 \u00e0 12h00  13h45 \u00e0 16h00",
        wednesday: "8h30 \u00e0 12h00  13h45 \u00e0 17h00",
        thurday: "8h30 \u00e0 12h00  13h45 \u00e0 17h00",
        friday: "8h30 \u00e0 12h00  13h45 \u00e0 17h00",
        saturday: "8h30 \u00e0 12h00  13h45 \u00e0 17h00",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 27,
    organization_owner: { email: "rreynolds@reilly.com", tel: "0787632712" },
    organization_name: " ESI Centre Ren\u00e9 Coty ",
    adress: "6 Avenue Ren\u00e9 Coty, 75014 Paris, France",
    description:
      "Les ESI accueillent de mani\u00e8re inconditionnelle tous ceux que les difficult\u00e9s de l\u2019existence ont conduit \u00e0 un \u00e9tat de tr\u00e8s grande pr\u00e9carit\u00e9 et d\u2019exclusion. Les ESI offrent une mise \u00e0 l\u2019abri en journ\u00e9e et des prestations sociales et sanitaires aux personnes vivant \u00e0 la rue \u00e0 Paris. Ils s\u2019int\u00e8grent au r\u00e9seau parisien de la veille sociale\u00a0Hygi\u00e8ne et soins (douche, laverie, coi\ufb00ure, soins infirmiers, p\u00e9dicurie). Boissons chaudes. Consultation m\u00e9dicale \u00e0 venir\u00a0Accueil pour tous : femmes et hommes du lundi au vendredi\u00a0Acc\u00e8s aux douches et \u00e0 la buanderie pour les femmes uniquement, les mardis, mercredis, jeudis et vendredis apr\u00e8s-midiAcc\u00e8s aux douches et \u00e0 la buanderie pour les hommes uniquement, tous les matins et le lundi apr\u00e8s-midiFamilles : mardis apr\u00e8s-midi",
    last_updata: "2021-12-14T00:00:00+00:00",
    phone_number: " 01 43 27 54 15",
    website: "https://api-site-cdn.paris.fr/images/146472.pdf",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3324169",
    latitude: "48.8328557",
    services_id: [
      "Accueil de jour",
      "Douche",
      "Laverie",
      "Infirmerie",
      "P\u00e9dicure",
      "Protections p\u00e9riodiques",
      "Bien-\u00eatre",
      "M\u00e9decin g\u00e9n\u00e9raliste"
    ],
    hours_id: [
      {
        tuesday: "8h30 \u00e0 13h00  14h00 \u00e0 17h00",
        wednesday: "8h30 \u00e0 13h00  14h00 \u00e0 17h00",
        thurday: "8h30 \u00e0 13h00  14h00 \u00e0 17h00",
        friday: "8h30 \u00e0 13h00  14h00 \u00e0 17h00",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 28,
    organization_owner: {
      email: "pfannerstill.tod@yahoo.com",
      tel: "0787632712"
    },
    organization_name: " ESI La Halle Saint-Didier ",
    adress: "23 Rue Mesnil, 75016, Paris, France",
    description:
      "Les ESI accueillent de mani\u00e8re inconditionnelle tous ceux que les difficult\u00e9s de l\u2019existence ont conduit \u00e0 un \u00e9tat de tr\u00e8s grande pr\u00e9carit\u00e9 et d\u2019exclusion. Les ESI offrent une mise \u00e0 l\u2019abri en journ\u00e9e et des prestations sociales et sanitaires aux personnes vivant \u00e0 la rue \u00e0 Paris. Ils s\u2019int\u00e8grent au r\u00e9seau parisien de la veille sociale\u00a0Organis\u00e9 sur le principe d\u2019un accueil imm\u00e9diat inconditionnel, chaleureux et convivial, l\u2019\u00e9tablissement offre aux personnes en grande pr\u00e9carit\u00e9- un lieu d\u2019accueil s\u00e9curisant la journ\u00e9e- des prestations de qualit\u00e9 qui r\u00e9pondent aux besoins de premi\u00e8re n\u00e9cessit\u00e9 (douche, buanderie, coiffure, vestiaire, casiers pour charger son t\u00e9l\u00e9phone)- des prestations param\u00e9dicales (p\u00e9dicurie, soins infirmiers, entretien avec un psychologue)- un accompagnement social\u00a0Fermeture apr\u00e8s-midi le 2\u00e8me vendredi du mois pour la d\u00e9sinfection des locaux + 1/2 journ\u00e9e par mois pour r\u00e9union g\u00e9n\u00e9rale.",
    last_updata: "2022-03-08T00:00:00+00:00",
    phone_number: " 01 53 70 48 88",
    website: "https://api-site-cdn.paris.fr/images/146471.pdf",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.2839773",
    latitude: "48.8673803",
    services_id: [
      "Accueil de jour",
      "Conseil administratif",
      "Douche",
      "Accompagnement social",
      "Laverie",
      "Psychologie",
      "Infirmerie",
      "Fontaine \u00e0 eau",
      "Coffre-fort num\u00e9rique",
      "Permanence juridique",
      "Toilettes",
      "P\u00e9dicure",
      "Protections p\u00e9riodiques"
    ],
    hours_id: [
      {
        tuesday: "8h30 \u00e0 12h30  13h30 \u00e0 17h00",
        wednesday: "8h30 \u00e0 12h30  13h30 \u00e0 17h00",
        thurday: "8h30 \u00e0 12h30  13h30 \u00e0 17h00",
        friday: "8h30 \u00e0 12h30  13h30 \u00e0 17h00",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 29,
    organization_owner: { email: "mharris@upton.com", tel: "0787632712" },
    organization_name: " Bains-douches des Deux Ponts ",
    adress: "8 Rue des Deux Ponts, 75004 Paris, France",
    description:
      "Bain-douche accessible aux personnes en situation de handicap. La mairie de Paris met gratuitement \u00e0 la disposition de tous des bains-douches municipaux en cabine individuelle. Vous devez vous munir d\u0027un n\u00e9cessaire de toilette et d\u0027une serviette de toilette.   Attention : les derni\u00e8res entr\u00e9es s\u2019e\ufb00ectuent 30 minutes avant la fermeture de l\u2019\u00e9tablissement.   Les bains-douches sont ferm\u00e9s les jours f\u00e9ri\u00e9s suivants : 1er janvier, 1er mai, 14 juillet, 15 ao\u00fbt, 25 d\u00e9cembre.",
    last_updata: "2021-12-10T00:00:00+00:00",
    phone_number: " 01 43 54 47 40",
    website:
      "https://www.paris.fr/equipements/bain-douche-des-deux-ponts-18290",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3564327",
    latitude: "48.8515577",
    services_id: ["Douche", "Bagagerie"],
    hours_id: [
      {
        tuesday: "7h00 \u00e0 18h00",
        wednesday: "7h00 \u00e0 18h00",
        thurday: "Ferm\u00e9",
        friday: "7h00 \u00e0 18h00",
        saturday: "8h00 \u00e0 18h00",
        sunday: "8h00 \u00e0 12h00"
      }
    ],
    place: 1
  },
  {
    id: 38,
    organization_owner: { email: "kfisher@hotmail.com", tel: "0787632712" },
    organization_name: " CAARUD AIDES 75 - Paris les Halles ",
    adress: "36 Rue Dussoubs, 75002 Paris, France",
    description:
      "Les Centres d\u0027accueil et d\u0027accompagnement \u00e0 la r\u00e9duction des risques pour usagers de drogues (CAARUD) accueillent sans condition les usagers de tous produits (drogues, alcool, etc.) en leur garantissant l\u0027anonymat. Ils mettent \u00e0 disposition du mat\u00e9riel de pr\u00e9vention des infections (pr\u00e9servatifs, \u00e9change de seringues, etc.). Leur r\u00f4le consiste \u00e9galement \u00e0 informer, \u00e0 orienter et \u00e0 proposer un accompagnement social, tout en favorisant l\u0027acc\u00e8s aux droits sociaux et aux soins.  Usagers de drogues, travailleurs du sexe, personnes s\u00e9ropositives, personnes transgenre, personnes pratiquant le slam, personnes ayant eu un rapport sexuel \u00e0 risque, personne ayant eu une consommation \u00e0 risque.   Le CAARUD reste ouvert tout l\u0027\u00e9t\u00e9   A la m\u00eame adresse se trouve l\u0027association AIDES, o\u00f9 les travailleurs accueillent, \u00e9coutent et accompagnent afin de lutter contre les discriminations.",
    last_updata: "2021-12-22T00:00:00+00:00",
    phone_number: " 01 44 82 53 14",
    website: "https://www.aides.org",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3494067",
    latitude: "48.8665542",
    services_id: [
      "Addiction",
      "Laverie",
      "D\u00e9pistage",
      "Conseil administratif",
      "Douche",
      "Permanence juridique"
    ],
    hours_id: [
      {
        tuesday: "9h30 \u00e0 12h30",
        wednesday: "Ferm\u00e9",
        thurday: "9h30 \u00e0 12h30  17h30 \u00e0 21h00",
        friday: "9h30 \u00e0 12h30",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 39,
    organization_owner: { email: "toni18@morar.biz", tel: "0787632712" },
    organization_name: " CAARUD R\u00e9publique- B10 Charonne Oppelia ",
    adress: "9 Rue Beaurepaire, Paris, France",
    description:
      "Les Centres d\u0027accueil et d\u0027accompagnement \u00e0 la r\u00e9duction des risques pour usagers de drogues (CAARUD) accueillent les usagers de tous produits (drogues, alcool, etc.) en leur garantissant l\u0027anonymat et la gratuit\u00e9 de leurs services. Ils mettent \u00e0 disposition du mat\u00e9riel de pr\u00e9vention des infections (pr\u00e9servatifs, \u00e9change de seringues, kits crack, etc.), un espace hygi\u00e8ne et dispensent des soins de premi\u00e8re n\u00e9cessit\u00e9. Leur r\u00f4le consiste \u00e9galement \u00e0 informer, \u00e0 orienter et \u00e0 proposer un accompagnement social, tout en favorisant l\u0027acc\u00e8s aux droits sociaux et aux soins. Leur action est compl\u00e9t\u00e9e par celle des CSAPA (Centres de soins, d\u0027accompagnement et de pr\u00e9vention en addictologie)Le centre CAARUD R\u00e9publique de Charonne \u00a0dispose maintenant d\u0027un appareil d\u0027analyse des produits afin de permettre aux usagers de consommer avec le moins de risques possibles.L\u0027\u00e9quipe est \u00e9galement form\u00e9e aux TRODs VIH et VHC\u00a0A noter : centre ferm\u00e9 les jours f\u00e9ri\u00e9s.",
    last_updata: "2021-12-01T00:00:00+00:00",
    phone_number: " 01 53 38 96 20",
    website: "https://www.oppelia.fr/etablissement/charonne-paris-10eme/",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3633692",
    latitude: "48.8697266",
    services_id: [
      "Addiction",
      "Accueil de jour",
      "M\u00e9decin g\u00e9n\u00e9raliste",
      "Douche",
      "Infirmerie",
      "Accompagnement social",
      "Permanence juridique",
      "D\u00e9pistage",
      "P\u00e9dicure"
    ],
    hours_id: [
      {
        tuesday: "9h30 \u00e0 12h30  14h00 \u00e0 16h30",
        wednesday: "9h30 \u00e0 12h30",
        thurday: "9h30 \u00e0 12h30  14h00 \u00e0 16h30  18h00 \u00e0 22h00",
        friday: "9h30 \u00e0 12h30  14h00 \u00e0 16h30",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 1
  },
  {
    id: 46,
    organization_owner: {
      email: "neal.halvorson@hotmail.com",
      tel: "0787632712"
    },
    organization_name: " Bains-douches Charenton ",
    adress: "188 rue de Charenton, 75012 Paris",
    description:
      "La mairie de Paris met gratuitement \u00e0 la disposition de tous des bains-douches municipaux en cabine individuelle. Vous devez vous munir d\u0027un n\u00e9cessaire de toilette et d\u0027une serviette de toilette. Attention : les derni\u00e8res entr\u00e9es s\u2019e\ufb00ectuent 30 minutes avant la fermeture de l\u2019\u00e9tablissement. Il est donc possible de prendre sa douche pour les personnes qui arrivent dans le cr\u00e9neau mentionn\u00e9.   Les bains-douches sont ferm\u00e9s les jours f\u00e9ri\u00e9s suivants : 1er janvier, 1er mai, 14 juillet, 15 ao\u00fbt, 25 d\u00e9cembre",
    last_updata: "2021-12-10T00:00:00+00:00",
    phone_number: " 01 43 07 64 87",
    website:
      "https://www.paris.fr/pages/les-bains-douches-municipaux-138#districts-gwnpsex1uz-12",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3849999",
    latitude: "48.8433922",
    services_id: [
      "Douche",
      "Laverie",
      "Accompagnement social",
      "P\u00e9dicure",
      "Activit\u00e9s diverses",
      "Permanence juridique"
    ],
    hours_id: [
      {
        tuesday: "7h30 \u00e0 12h30",
        wednesday: "7h30 \u00e0 12h30",
        thurday: "7h30 \u00e0 12h30",
        friday: "7h30 \u00e0 12h30",
        saturday: "7h30 \u00e0 12h30",
        sunday: "7h30 \u00e0 12h30"
      }
    ],
    place: 2
  },
  {
    id: 47,
    organization_owner: { email: "tabitha57@nader.com", tel: "0787632712" },
    organization_name: " Bains-Douches Rouvet / Piscine ",
    adress: "1 Rue Rouvet, Paris, France",
    description:
      "La mairie de Paris met gratuitement \u00e0 la disposition de tous des bainsdouches municipaux en cabine individuelle. Vous devez vous munir d\u0027un n\u00e9cessaire de toilette et d\u0027une serviette de toilette. Attention : les derni\u00e8res entr\u00e9es s\u2019e\ufb00ectuent 30 minutes avant la fermeture de l\u2019\u00e9tablissement. Il est donc possible de prendre sa douche pour les personnes qui arrivent dans le cr\u00e9neau mentionn\u00e9.Les bains-douches sont ferm\u00e9s les jours f\u00e9ri\u00e9s suivants : 1er janvier, 1er mai, 14 juillet, 15 ao\u00fbt, 25 d\u00e9cembrePour b\u00e9n\u00e9ficier de la gratuit\u00e9 dans une piscine municipale, il faut \u00eatre demandeur d\u0027emploi, b\u00e9n\u00e9ficiaire du Revenu de Solidarit\u00e9 Active (RSA), b\u00e9n\u00e9ficiaire de l\u0027Allocation Temporaire d\u0027Attente (ATA),ou b\u00e9n\u00e9ficiaire de l\u0027Allocation de Demandeur d\u0027Asile (ADA). Ensuite, il faut \u00eatre domicili\u00e9 \u00e0 Paris, se pr\u00e9senter \u00e0 la caisse muni d\u0027un justificatif ouvrant droit \u00e0 la gratuit\u00e9, d\u0027un justificatif de domicile et d\u0027une pi\u00e8ce d\u0027identit\u00e9.Les horaires sont \u00e0 retrouver ici : HORAIRES PISCINE ROUVET",
    last_updata: "2021-12-08T00:00:00+00:00",
    phone_number: " 01 40 36 40 97",
    website:
      "https://www.paris.fr/pages/les-bains-douches-municipaux-138#districts-7w9y0oruux-19",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3851308",
    latitude: "48.8930855",
    services_id: ["Douche", "Activit\u00e9s sportives"],
    hours_id: [
      {
        tuesday: "7h30 \u00e0 13h00",
        wednesday: "7h30 \u00e0 13h00",
        thurday: "7h30 \u00e0 13h00",
        friday: "7h30 \u00e0 13h00",
        saturday: "7h30 \u00e0 13h00",
        sunday: "8h00 \u00e0 12h30"
      }
    ],
    place: 1
  },
  {
    id: 49,
    organization_owner: {
      email: "collier.marjolaine@franecki.com",
      tel: "0787632712"
    },
    organization_name:
      " CSAPA (Centre de pr\u00e9vention et soin des addictions) SOS 75 - Site 110 les Halles ",
    adress: "110 rue Saint-Denis, 75002 Paris",
    description:
      "CSAPA : accueil et accompagnement (\u00e9ducatif, social, m\u00e9dical et psychologique). Les centres de soins, d\u0027accompagnement et de pr\u00e9vention en addictologie (CSAPA) assurent une prise en charge psycho-m\u00e9dicosociale. Les prestations (gratuites) sont financ\u00e9es par le centre et l\u0027anonymat est assur\u00e9. Les consultations ont lieu sur rendezvous (par t\u00e9l\u00e9phone), sauf mention contraire, pour toute personne (ou son entourage) ayant un probl\u00e8me avec l\u0027alcool, le tabac, le cannabis ou d\u0027autres produits psychoactifs. Certains CSAPA proposent un h\u00e9bergement, d\u0027autres fonctionnent en ambulatoire   Ouvert pendant l\u0027\u00e9t\u00e9.",
    last_updata: "2021-12-23T00:00:00+00:00",
    phone_number: " 01 55 34 76 22",
    website: "http://www.groupe-sos.org",
    spoken_language: "Fran\u00e7ais",
    importante_information: "Warning",
    longitude: "2.3502124",
    latitude: "48.8638843",
    services_id: [
      "Addiction",
      "Douche",
      "Laverie",
      "Accueil de jour",
      "Coffre-fort num\u00e9rique"
    ],
    hours_id: [
      {
        tuesday: "9h30 \u00e0 12h45  14h30 \u00e0 17h00",
        wednesday: "9h45 \u00e0 12h00",
        thurday: "9h30 \u00e0 12h45  14h30 \u00e0 17h00",
        friday: "9h30 \u00e0 12h45  14h30 \u00e0 17h00",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  },
  {
    id: 52,
    organization_owner: { email: "mac.hilpert@yahoo.com", tel: "0787632712" },
    organization_name: " Bagagerie Onze Mille Potes ",
    adress: "75011, Paris",
    description:
      "L\u0027association Onze Mille Potes propose une bagagerie et une laverie aux usagers\u00a0Bagagerie et laverie sur orientation de partenaires ayant sign\u00e9 une convention avec Onze Mille Potes\u00a0- La bagagerie dispose de 62 casiers ferm\u00e9s \u00e0 cl\u00e9 (P48 x L38 x H88 cm). Seuls les d\u00e9p\u00f4ts d\u0027effets pouvant \u00eatre contenus dans un casier/personne sont autoris\u00e9s. \u00a0- La laverie est \u00e9quip\u00e9e de 6 lave-linges et 6 s\u00e8che-linges professionnels. Les lavages se font sans rendez-vous apr\u00e8s inscription. Le linge \u00e0 laver est d\u00e9pos\u00e9 dans un sac fourni par l\u2019association. Il peut \u00eatre r\u00e9cup\u00e9r\u00e9, lav\u00e9 et s\u00e9ch\u00e9, 2 jours au plus tard apr\u00e8s d\u00e9p\u00f4t.\u00a0",
    last_updata: "2021-12-04T00:00:00+00:00",
    phone_number: " 01 43 57 83 68",
    website: "https://onzemillepotes.com/",
    spoken_language: "Fran\u00e7ais, Anglais",
    importante_information: "Warning",
    longitude: "2.381153",
    latitude: "48.857993",
    services_id: [
      "Bagagerie",
      "Laverie",
      "Toilettes",
      "Ordinateur",
      "V\u00eatements"
    ],
    hours_id: [
      {
        tuesday: "9h00 \u00e0 11h00  18h00 \u00e0 20h00",
        wednesday: "7h30 \u00e0 11h00  18h00 \u00e0 20h00",
        thurday: "9h00 \u00e0 11h00",
        friday: "9h00 \u00e0 11h00  17h30 \u00e0 19h00",
        saturday: "10h00 \u00e0 13h00",
        sunday: "16h30 \u00e0 19h30"
      }
    ],
    place: 1
  }
];
