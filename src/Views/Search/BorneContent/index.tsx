import React from "react";

import Filters from "./Filters";
import PlacesList from "./PlacesList";
import { Content } from "./styles";
import TopBar from "./TopBar";
import PageContentWrapper from "~/Components/PageContentWrapper";
import { useSearchContext } from "~/Contexts/searchContext";

export default function BornContent(): JSX.Element {
  const { filteredPlaces, displayFilters } = useSearchContext();

  return (
    <PageContentWrapper>
      <Content>
        {filteredPlaces && <PlacesList />}
        {displayFilters && <Filters />}
        <TopBar />
      </Content>
    </PageContentWrapper>
  );
}
