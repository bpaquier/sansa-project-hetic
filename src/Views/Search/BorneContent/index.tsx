import React from "react";

import Filters from "./Filters";
import PlacesList from "./PlacesList";
import { Content } from "./styles";
import Tags from "./Tags";
import TopBar from "./TopBar";
import PageContentWrapper from "~/Components/PageContentWrapper";
import { useSearchContext } from "~/Contexts/searchContext";

export default function BornContent(): JSX.Element {
  const { filteredPlaces, displayFilters, filters } = useSearchContext();

  return (
    <PageContentWrapper>
      <Content>
        {filteredPlaces && <PlacesList />}
        {displayFilters && <Filters />}
        <TopBar />
        {filters && <Tags />}
      </Content>
    </PageContentWrapper>
  );
}
