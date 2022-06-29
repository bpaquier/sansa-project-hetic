import React from "react";

import Filters from "./Filters";
import PlacesList from "./PlacesList";
import { Content } from "./styles";
import Tags from "./Tags";
import TopBar from "./TopBar";
import PageContentWrapper from "~/Components/PageContentWrapper";
import { useSearchContext } from "~/Contexts/searchContext";

export default function BornContent(): JSX.Element {
  const { displayFilters } = useSearchContext();

  return (
    <PageContentWrapper>
      <Content>
        <PlacesList />
        {displayFilters && <Filters />}
        <TopBar />
        <Tags />
      </Content>
    </PageContentWrapper>
  );
}
