import {
  useContext,
  createContext,
  useState,
  ReactElement,
  useEffect
} from "react";

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
  services_id?: {
    service_name?: string;
    subscribe?: boolean;
  }[];
  hours_id?: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thurday: string;
    friday: string;
    saturday: string;
    sunday: string;
  }[];
  position?: {
    latitude?: string;
    longitude?: string;
  };
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
  updateFilters?: ({ action, filterName }: updateFiltersProps) => void;
  isLoading?: boolean;
  debouncedFilters?: string[];
  displayPlaceDescription?: number | null;
  setDisplayPlaceDescription?: (id: number) => void;
}

type updateFiltersProps = {
  action: "add" | "remove";
  filterName: string;
};

export const Context = createContext<ContextProps>({});

export function useSearchContext() {
  return useContext(Context);
}

interface SearchProviderProps {
  children: ReactElement;
}

function SearchProvider({ children }: SearchProviderProps) {
  const [selectedPlaceIndex, setSelectedPlaceIndex] = useState<number | null>(
    null
  );
  const [filteredPlaces, setFilteredPlaces] = useState<PlaceProps[] | null>(
    null
  );
  const [filters, setFilters] = useState<string[] | null>(null);
  const [displayFilters, setDisplayFilters] = useState<string | null>(null);
  const [displayPlaceDescription, setDisplayPlaceDescription] = useState<
    number | null
  >(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debouncedFilters = useDebounce(filters, 1000);

  useEffect(() => {
    if (debouncedFilters && debouncedFilters?.length > 0) {
      /**
       * /////////////////////////////////////////////////////////////
       * !replace realPlaces by API response
       */
      const selectedPlaces = realPlaces?.filter((place) =>
        place?.services_id?.some((cat) =>
          debouncedFilters?.includes(cat?.service_name)
        )
      );
      /**
       * /////////////////////////////////////////////////////////////
       */
      setIsLoading(false);
      setFilteredPlaces(selectedPlaces);
    } else {
      setFilteredPlaces(null);
      setIsLoading(false);
    }
  }, [debouncedFilters]);

  useEffect(() => {
    setIsLoading(true);
    if (!filters || filters?.length === 0) {
      setFilters(null);
      setDisplayFilters(null);
      setIsLoading(false);
    }
  }, [filters]);

  const updateFilters = ({ action, filterName }: updateFiltersProps) => {
    if (action === "add") {
      filters && filters?.length > 0
        ? !filters?.includes(filterName) && setFilters([...filters, filterName])
        : setFilters([filterName]);
    } else {
      if (filters?.includes(filterName)) {
        setFilters(filters?.filter((item) => item !== filterName));
      }
    }
  };

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
    setDisplayPlaceDescription
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

export default SearchProvider;

export const realPlaces = [
  {
    id: 1,
    organization_owner: {
      email: "conroy.octavia@hotmail.com",
      tel: "0787632712"
    },
    organization_name: "PAJ (Permanence Accueil Jeunes) ",
    adress: "24 Rue Ramponeau, 75020 Paris, France",
    description:
      "La PAJ est un accueil de jour qui s’adresse à des jeunes hommes et jeunes femmes en situation d’errance sur le territoire parisien   Ce lieu d’écoute a pour objectif d’aider les jeunes à renouer les liens sociaux et de leur permettre d’accéder aux dispositifs de droit commun   Les équipes de la PAJ proposent un temps de pause et d’écoute afin   - de permettre à chaque jeune de reconnaître ses ressources personnelles   - de ralentir le processus d’errance, d’offrir la possibilité de « rebondir »   - de rendre alors possible l’accès aux structures d’aide et au dispositif de droit commun   Permanences infirmières le Mardi et le Vendredi.",
    last_updata: "2021-12-21T00:00:00+00:00",
    phone_number: " 01 48 05 01 01",
    website:
      "https://anrs.asso.fr/etablissements-services/insertion/permanence-accueil-ecoute-jeunes-paej/",
    spoken_language: "Français",
    importante_information: "Warning",
    services_id: [
      {
        service_name: "Laverie",
        subscribe: false
      },
      {
        service_name: "Douche",
        subscribe: false
      },
      {
        service_name: "Bagagerie",
        subscribe: false
      },
      {
        service_name: "Restauration assise",
        subscribe: false
      },
      {
        service_name: "Accueil de jour",
        subscribe: false
      },
      {
        service_name: "Prise",
        subscribe: false
      },
      {
        service_name: "Toilettes",
        subscribe: false
      },
      {
        service_name: "Infirmerie",
        subscribe: false
      },
      {
        service_name: "Laverie",
        subscribe: false
      },
      {
        service_name: "Douche",
        subscribe: false
      },
      {
        service_name: "Bagagerie",
        subscribe: false
      },
      {
        service_name: "Restauration assise",
        subscribe: false
      },
      {
        service_name: "Accueil de jour",
        subscribe: false
      },
      {
        service_name: "Prise",
        subscribe: false
      },
      {
        service_name: "Toilettes",
        subscribe: false
      },
      {
        service_name: "Infirmerie",
        subscribe: false
      },
      {
        service_name: "Laverie",
        subscribe: false
      },
      {
        service_name: "Douche",
        subscribe: false
      },
      {
        service_name: "Bagagerie",
        subscribe: false
      },
      {
        service_name: "Restauration assise",
        subscribe: false
      },
      {
        service_name: "Accueil de jour",
        subscribe: false
      },
      {
        service_name: "Prise",
        subscribe: false
      },
      {
        service_name: "Toilettes",
        subscribe: false
      },
      {
        service_name: "Infirmerie",
        subscribe: false
      }
    ],
    hours_id: [
      {
        monday: "8h - 12h30 / 13h - 17h",
        tuesday: "8h - 12h30 / 13h - 17h",
        wednesday: "8h - 12h30 / 13h - 17h",
        thurday: "8h - 12h30 / 13h - 17h0",
        friday: "8h - 12h30 / 13h - 17h",
        saturday: "Fermé",
        sunday: "Fermé"
      }
    ],
    position: {
      latitude: "48.8644",
      longitude: "2.4047"
    }
  }
];

/* const fakePlaces = [
  {
    name: "Lieu 1",
    position: {
      latitude: "48.8558",
      longitude: "2.4281"
    },
    hours: "8h - 22h",
    adress: "1 rue Random",
    categories: [
      "Espace de Repos",
      "Halte de nuit",
      "Activité physique",
      "Wifi Gratuite",
      "Administratif",
      "Matériel informatique",
      "Juridique",
      "Conseilliers",
      "Hébergement long terme",
      "Hébèrgement d'urgence",
      "Acceuil de jour"
    ]
  },
  {
    name: "Lieu 2",
    position: {
      latitude: "48.8644",
      longitude: "2.4047"
    },
    hours: "8h - 22h",
    adress: "2 rue Random",
    categories: [
      "Espace de Repos",
      "Halte de nuit",
      "Activité physique",
      "Wifi Gratuite",
      "Protections périodiques",
      "Cardiologie"
    ]
  },
  {
    name: "Lieu 3",
    position: {
      latitude: "48.8567",
      longitude: "2.4198"
    },
    hours: "8h - 22h",
    adress: "3 rue Random",
    categories: [
      "Espace de Repos",
      "Halte de nuit",
      "Activité physique",
      "Wifi Gratuite",
      "Protections périodiques",
      "Cardiologie",
      "Administratif",
      "Matériel informatique"
    ]
  },
  {
    name: "Lieu 4",
    position: {
      latitude: "48.8549",
      longitude: "2.4562"
    },
    hours: "8h - 22h",
    adress: "4 rue Random",
    categories: [
      "Espace de Repos",
      "Halte de nuit",
      "Activité physique",
      "Wifi Gratuite",
      "Protections périodiques",
      "Cardiologie"
    ]
  },
  {
    name: "Lieu 5",
    position: {
      latitude: "48.8635",
      longitude: "2.4384"
    },
    hours: "8h - 22h",
    adress: "5 rue Random",
    categories: [
      "Wifi Gratuite",
      "Distribution de repas",
      "Réparation mobile",
      "Fontaine à eau"
    ]
  },
  {
    name: "Lieu 6",
    position: {
      latitude: "48.8427",
      longitude: "2.4391"
    },
    hours: "8h - 22h",
    adress: "6 rue Random",
    categories: [
      "Wifi Gratuite",
      "Distribution de repas",
      "Réparation mobile",
      "Fontaine à eau",
      "Administratif"
    ]
  },
  {
    name: "Lieu 7",
    position: {
      latitude: "48.8572",
      longitude: "2.3992"
    },
    hours: "8h - 22h",
    adress: "7 rue Random",
    categories: [
      "Wifi Gratuite",
      "Distribution de repas",
      "Réparation mobile",
      "Fontaine à eau"
    ]
  },
  {
    name: "Lieu 8",
    position: {
      latitude: "48.8757",
      longitude: "2.4445"
    },
    hours: "8h - 22h",
    adress: "8 rue Random",
    categories: [
      "Wifi Gratuite",
      "Distribution de repas",
      "Réparation mobile",
      "Fontaine à eau",
      "Administratif"
    ]
  }
]; */
