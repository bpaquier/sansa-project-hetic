import React from "react";

import { PlaceIndexProps, PlaceProps } from "..";
import PlacesList from "./PlacesList";
import { Content } from "./styles";
import TopBar from "./TopBar";
import PageContentWrapper from "~/Components/PageContentWrapper";

export interface BornContentProps extends PlaceIndexProps {
  filteredPlaces?: PlaceProps[];
}

export default function BornContent({
  filteredPlaces,
  selectedPlaceIndex,
  setSelectedPlaceIndex
}: BornContentProps): JSX.Element {
  return (
    <PageContentWrapper>
      <Content>
        <TopBar />
        {filteredPlaces && (
          <PlacesList
            {...{ filteredPlaces, selectedPlaceIndex, setSelectedPlaceIndex }}
          />
        )}
      </Content>
    </PageContentWrapper>
  );
}
