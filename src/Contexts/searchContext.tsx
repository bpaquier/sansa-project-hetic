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
  services_id?: string[];
  hours_id?: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thurday: string;
    friday: string;
    saturday: string;
    sunday: string;
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
  >(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debouncedFilters = useDebounce(filters, 1000);

  useEffect(() => {
    if (debouncedFilters && debouncedFilters?.length > 0) {
      /**
       * /////////////////////////////////////////////////////////////
       * !replace realPlaces by API response
       */
      const selectedPlaces = Places?.filter((place) =>
        place?.services_id?.some((service) =>
          debouncedFilters?.includes(service)
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

export const Places = [
  {
    id: 1,
    organization_owner: { email: "haag.susana@hotmail.com", tel: "0787632712" },
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
        monday: "9h30 \u00e0 16h00",
        tuesday: "9h30 \u00e0 16h00",
        wednesday: "9h30 \u00e0 13h30",
        thurday: "9h30 \u00e0 12h30",
        friday: "9h30 \u00e0 16h00",
        saturday: "Ferm\u00e9",
        sunday: "Ferm\u00e9"
      }
    ],
    place: 2
  }
];
