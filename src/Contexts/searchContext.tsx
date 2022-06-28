import {
  useContext,
  createContext,
  useState,
  ReactElement,
  useEffect
} from "react";

export interface PlaceProps {
  name?: string;
  position?: {
    latitude: string;
    longitude: string;
  };
  adress?: string;
  categories?: string[];
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

  useEffect(() => {
    if (filters && filters?.length > 0) {
      const selectedPlaces = fakePlaces?.filter((place) =>
        place?.categories?.some((cat) => filters?.includes(cat))
      );
      setFilteredPlaces(selectedPlaces);
    } else {
      setFilteredPlaces(null);
      setFilters(null);
      setDisplayFilters(null);
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
    updateFilters
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

export default SearchProvider;

const fakePlaces = [
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
];
