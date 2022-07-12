import React from "react";

import Filters from "./Filters";
import List from "./List";
import PlaceDescription from "./PlaceDescription";
import Tags from "./Tags";
import TopBar from "./TopBar";
import { useSearchContext } from "~/Contexts/searchContext";

export default function BornContent(): JSX.Element {
  const { displayFilters, filters, displayPlaceDescription } =
    useSearchContext();

  return (
    <>
      <List />
      {displayFilters && <Filters />}
      <TopBar />
      {filters?.length > 0 && <Tags />}
      {displayPlaceDescription && <PlaceDescription />}
    </>
  );
}
