import React from "react";

import Filters from "./Filters";
import PlaceDescription from "./PlaceDescription";
import PlacesList from "./PlacesList";
import { Content } from "./styles";
import Tags from "./Tags";
import TopBar from "./TopBar";
import PageContentWrapper from "~/Components/PageContentWrapper";

export default function BornContent(): JSX.Element {
  return (
    <PageContentWrapper>
      <Content>
        <PlacesList />
        <Filters />
        <TopBar />
        <Tags />
        <PlaceDescription />
      </Content>
    </PageContentWrapper>
  );
}
