import { useState } from "react";

import BornContent from "./BorneContent";
import { fakePlaces } from "./fakedata";
import Map from "./Map";
import { useGlobalContext } from "~/Contexts/globalContext";

export interface PlaceIndexProps {
  selectedPlaceIndex?: number | null;
  setSelectedPlaceIndex?(index: number): void;
}

export interface PlaceProps {
  name?: string;
  position?: {
    latitude: string;
    longitude: string;
  };
  adress?: string;
}

export default function Search(): JSX.Element {
  const [selectedPlaceIndex, setSelectedPlaceIndex] = useState<number | null>(
    null
  );
  const { isMobile } = useGlobalContext();
  const filteredPlaces = fakePlaces;
  return (
    <>
      <Map
        {...{
          isMobile,
          filteredPlaces,
          selectedPlaceIndex,
          setSelectedPlaceIndex
        }}
      />
      <BornContent
        {...{ filteredPlaces, selectedPlaceIndex, setSelectedPlaceIndex }}
      />
    </>
  );
}
