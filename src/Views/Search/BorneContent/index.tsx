import React from "react";

import Filters from "./Filters";
import PlaceDescription from "./PlaceDescription";
import PlacesList from "./PlacesList";
import Tags from "./Tags";
import TopBar from "./TopBar";
import { useSearchContext } from "~/Contexts/searchContext";

export default function BornContent(): JSX.Element {
  const {
    displayFilters,
    displayPlacesList,
    filters,
    displayPlaceDescription
  } = useSearchContext();

  return (
    <>
      {displayPlacesList && <PlacesList />}
      {displayFilters && <Filters />}
      <TopBar />
      {filters?.length > 0 && <Tags />}
      {displayPlaceDescription && <PlaceDescription />}
    </>
  );
}
