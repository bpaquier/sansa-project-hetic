import React from "react";

import { PlaceProps } from "..";
import PlacesList from "./PlacesList";
import { Content } from "./styles";
import TopBar from "./TopBar";
import PageContentWrapper from "~/Components/PageContentWrapper";

export interface BornContentProps {
  selectedList?: PlaceProps[];
}

export default function BornContent({
  selectedList
}: BornContentProps): JSX.Element {
  return (
    <PageContentWrapper>
      <Content>
        <TopBar />
        <PlacesList {...{ selectedList }} />
      </Content>
    </PageContentWrapper>
  );
}
