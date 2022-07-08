import {
  useContext,
  createContext,
  useState,
  ReactElement,
  useEffect
} from "react";

import { useGlobalContext } from "./globalContext";
import useApi from "~/hooks/useApi";
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
      setFilters(null);
      setIsFilterLoading(false);
      setDisplayFilters(null);
      setFilteredPlaces(null);
    } else {
      setSearchValue(null);
      setIsFilterLoading(true);
      setDisplayPlacesList(true);
      setFilteredPlaces(null);
    }
  }, [filters]);

  useEffect(() => {
    if (searchValue) {
      setIsSearchLoading(true);
      setDisplaySearchResultsList(true);
    } else {
      setSearchResults(null);
      setIsSearchLoading(false);
      setDisplaySearchResultsList(false);
      setFilteredPlaces(null);
    }
  }, [searchValue]);

  useEffect(() => {
    if (!searchValue && !filters) {
      setDisplayPlacesList(false);
    }
  }, [searchValue, filters]);

  useEffect(() => {
    if (debouncedFilters && debouncedFilters?.length > 0) {
      getOrgaByServices(debouncedFilters)
        ?.then(({ data, status }: { data: PlaceProps[]; status: number }) => {
          if (status === 200) {
            if (data) {
              setFilteredPlaces(
                data?.sort(
                  (prev: { place: number }, next: { place: number }) =>
                    next?.place - prev?.place
                )
              );
            } else {
              //todo: handle error
            }
            setIsFilterLoading(false);
          } else {
            //todo: handle error
          }
        })
        .catch((err) => {
          //todo: handle error
          console.log(err);
        });
    } else {
      setFilters(null);
      setIsFilterLoading(false);
      setFilteredPlaces(null);
      setDisplayPlacesList(false);
    }
  }, [debouncedFilters]);

  useEffect(() => {
    if (debouncedSearch) {
      getOrgaByNameOrAdress(debouncedSearch)
        ?.then(({ data, status }: { data: PlaceProps[]; status: number }) => {
          if (status === 200) {
            if (data) {
              setSearchResults(data);
            } else {
              //todo: handle error
            }
            setIsSearchLoading(false);
          } else {
            setIsSearchLoading(false);
            //todo: handle error
          }
        })
        ?.catch((err) => {
          setIsSearchLoading(false);
          //todo: handle error
          console.log(err);
        });
    }
  }, [debouncedSearch]);

  useEffect(() => {
    filteredPlaces?.length > 0 && isMobile && setSelectedPlaceIndex(0);
    !filteredPlaces && setSelectedPlaceIndex(null);
  }, [filteredPlaces]);

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

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setFilteredPlaces(null);
    setFilters(null);
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
    handleSearch
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

export default SearchProvider;
