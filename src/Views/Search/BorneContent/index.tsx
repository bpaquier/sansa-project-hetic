import React from "react";

import PlacesList from "./PlacesList";
import { Content } from "./styles";
import TopBar from "./TopBar";
import PageContentWrapper from "~/Components/PageContentWrapper";
import { useSearchContext } from "~/Contexts/searchContext";

export default function BornContent(): JSX.Element {
  const { filteredPlaces } = useSearchContext();
  return (
    <PageContentWrapper>
      <Content>
        <TopBar />
        {filteredPlaces && <PlacesList />}
      </Content>
    </PageContentWrapper>
  );
}
