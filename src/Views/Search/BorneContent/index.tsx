import React from "react";

import Filters from "./Filters";
import PlaceDescription from "./PlaceDescription";
import PlacesList from "./PlacesList";
import Tags from "./Tags";
import TopBar from "./TopBar";

export default function BornContent(): JSX.Element {
  return (
    <>
      <PlacesList />
      <Filters />
      <TopBar />
      <Tags />
      <PlaceDescription />
    </>
  );
}
