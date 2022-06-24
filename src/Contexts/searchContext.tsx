import { useContext, createContext, useState, ReactElement } from "react";

export interface PlaceProps {
  name?: string;
  position?: {
    latitude: string;
    longitude: string;
  };
  adress?: string;
}

interface ContextProps {
  selectedPlaceIndex?: number;
  setSelectedPlaceIndex?: (index?: number) => void;
  filteredPlaces?: PlaceProps[] | null;
  setFilteredPlaces?: (list: any) => void;
}

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
  const [filteredPlaces, setFilteredPlaces] = useState(fakePlaces);

  const providerValue = {
    selectedPlaceIndex,
    setSelectedPlaceIndex,
    filteredPlaces,
    setFilteredPlaces
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
    adress: "1 rue Random"
  },
  {
    name: "Lieu 2",
    position: {
      latitude: "48.8644",
      longitude: "2.4047"
    },
    adress: "2 rue Random"
  },
  {
    name: "Lieu 3",
    position: {
      latitude: "48.8567",
      longitude: "2.4198"
    },
    adress: "3 rue Random"
  },
  {
    name: "Lieu 4",
    position: {
      latitude: "48.8549",
      longitude: "2.4562"
    },
    adress: "4 rue Random"
  },
  {
    name: "Lieu 5",
    position: {
      latitude: "48.8635",
      longitude: "2.4384"
    },
    adress: "5 rue Random"
  },
  {
    name: "Lieu 6",
    position: {
      latitude: "48.8427",
      longitude: "2.4391"
    },
    adress: "6 rue Random"
  },
  {
    name: "Lieu 7",
    position: {
      latitude: "48.8572",
      longitude: "2.3992"
    },
    adress: "7 rue Random"
  },
  {
    name: "Lieu 8",
    position: {
      latitude: "48.8757",
      longitude: "2.4445"
    },
    adress: "8 rue Random"
  }
];
