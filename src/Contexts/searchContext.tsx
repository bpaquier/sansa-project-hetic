import {
  useContext,
  createContext,
  useState,
  ReactElement,
  useEffect
} from "react";

import { useTranslation } from "react-i18next";
import { Alert } from "react-native";

import useApi from "~/hooks/useApi";
import { useDebounce } from "~/hooks/useDebounce";
import serializePlaces from "~/utils/serializePlaces";

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
  preferencialWelcomes?: {
    value?: string;
  }[];
  by_appointment?: boolean;
}

interface ContextProps {
  selectedPlaceIndex?: number;
  setSelectedPlaceIndex?: (index?: number) => void;
  filteredPlaces?: PlaceProps[] | null;
  setFilteredPlaces?: (list: PlaceProps[] | null) => void;
  filters?: string[];
  setFilters?: (filter?: string[]) => void;
  displayFilters?: string | null;
  setDisplayFilters?: (arg: string | null) => void;
  updateFilters?: ({ action, filtersName }: updateFiltersProps) => void;
  isFilterLoading?: boolean;
  debouncedFilters?: string[];
  displayPlaceDescription?: number | null;
  setDisplayPlaceDescription?: (id: number) => void;
  triggerLocalization?: boolean | null;
  setTriggerLocalization?: (arg: boolean) => void;
  displayPlacesList?: boolean;
  setDisplayPlacesList?: (arg: boolean) => void;
  searchValue?: string;
  setSearchValue?: (value: string) => void;
  searchResults?: PlaceProps[] | null;
  setSearchResults?: (list: PlaceProps[] | null) => void;
  isSearchLoading?: boolean;
  displaySearchResultsList?: boolean;
  setDisplaySearchResultsList?: (arg: boolean) => void;
  handleSearch?: (value: string) => void;
  handleApiErrors?: () => void;
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
  const { isMobile, isIdle } = useGlobalContext();
  const { t } = useTranslation();
  const { getOrgaByServices, getOrgaByNameOrAdress } = useApi();
  const [selectedPlaceIndex, setSelectedPlaceIndex] = useState<number | null>(
    null
  );
  const [displaySearchResultsList, setDisplaySearchResultsList] =
    useState<boolean>();
  const [displayPlacesList, setDisplayPlacesList] = useState<boolean>();
  const [filteredPlaces, setFilteredPlaces] = useState<PlaceProps[] | null>(
    null
  );
  const [searchResults, setSearchResults] = useState<PlaceProps[] | null>(null);
  const [filters, setFilters] = useState<string[] | null>(null);
  const [searchValue, setSearchValue] = useState<string>();
  const [displayFilters, setDisplayFilters] = useState<string | null>(null);
  const [displayPlaceDescription, setDisplayPlaceDescription] = useState<
    number | null
  >(null);
  const [triggerLocalization, setTriggerLocalization] = useState<boolean>(null);
  const [isFilterLoading, setIsFilterLoading] = useState<boolean>(false);
  const [isSearchLoading, setIsSearchLoading] = useState<boolean>(false);

  const debouncedFilters = useDebounce(filters, 500);
  const debouncedSearch = useDebounce(searchValue, 1000);

  useEffect(() => {
    if (!filters || filters?.length === 0) {
      displayFilters && setDisplayFilters(null);
      filteredPlaces && setFilteredPlaces(null);
      displayPlacesList && setDisplayPlacesList(false);
    } else {
      searchValue && setSearchValue(null);
      !isFilterLoading && setIsFilterLoading(true);
      !displayPlacesList && setDisplayPlacesList(true);
      updatePlacesSelection();
    }
  }, [filters]);

  useEffect(() => {
    if (searchValue && searchValue?.length > 0) {
      !isSearchLoading && setIsSearchLoading(true);
      !displaySearchResultsList && setDisplaySearchResultsList(true);
    } else {
      isSearchLoading && setIsSearchLoading(false);
      displaySearchResultsList && setDisplaySearchResultsList(false);
    }
  }, [searchValue]);

  useEffect(() => {
    if (!searchValue && !filters) {
      displayPlacesList && setDisplayPlacesList(false);
    }
  }, [searchValue, filters]);

  useEffect(() => {
    if (debouncedSearch) {
      getOrgaByNameOrAdress(debouncedSearch)
        ?.then(({ data, status }: { data: PlaceProps[]; status: number }) => {
          if (status === 200) {
            if (data) {
              setSearchResults(data);
            } else {
              handleApiErrors();
            }
          } else {
            handleApiErrors();
          }
          setIsSearchLoading(false);
        })
        ?.catch(() => {
          setIsSearchLoading(false);
          handleApiErrors();
        });
    }
  }, [debouncedSearch]);

  const updatePlacesSelection = () => {
    getOrgaByServices(filters)
      ?.then(({ data, status }: { data: PlaceProps[]; status: number }) => {
        if (status === 200) {
          if (data) {
            const serializedPlaces = serializePlaces(data);
            setFilteredPlaces(serializedPlaces);
          } else {
            handleApiErrors();
          }
        } else {
          handleApiErrors();
        }
        setIsFilterLoading(false);
      })
      .catch(() => {
        handleApiErrors();
        setIsFilterLoading(false);
      });
  };

  useEffect(() => {
    if (isIdle) {
      setFilters(null);
      setIsLoading(false);
      setDisplayFilters(null);
      setIsListDisplayed(false);
      setDisplayPlaceDescription(null);
    }
  }, [isIdle]);

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
    filteredPlaces && setSelectedPlaceIndex(0);
  }, [filteredPlaces]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setFilteredPlaces(null);
    setFilters(null);
  };

  const handleApiErrors = () => {
    Alert.alert("", t("search.networkIssue"), [{ text: "OK" }]);
    displayFilters && setDisplayFilters(null);
    displayPlaceDescription && setDisplayPlaceDescription(null);
    displayPlacesList && setDisplayPlacesList(null);
    setDisplaySearchResultsList && setDisplaySearchResultsList(null);
    filters && setFilters(null);
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
    isFilterLoading,
    displayPlaceDescription,
    setDisplayPlaceDescription,
    triggerLocalization,
    setTriggerLocalization,
    displayPlacesList,
    setDisplayPlacesList,
    searchValue,
    setSearchValue,
    searchResults,
    setSearchResults,
    isSearchLoading,
    displaySearchResultsList,
    setDisplaySearchResultsList,
    handleSearch,
    handleApiErrors
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

export default SearchProvider;
