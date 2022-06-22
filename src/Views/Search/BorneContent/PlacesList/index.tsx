import React from "react";

import ListItem from "./ListItem";
import { ListWrapper, Content, Item } from "./styles";
import Accordion from "~/Components/Accordion";
import Separator from "~/Components/Ui-kit/Separator";
import { PlaceIndexProps, PlaceProps } from "~/Views/Search";

export interface PlacesListProps extends PlaceIndexProps {
  filteredPlaces?: PlaceProps[];
}

export default function PlacesList({
  filteredPlaces,
  selectedPlaceIndex,
  setSelectedPlaceIndex
}: PlacesListProps): JSX.Element {
  const List = () => (
    <Content>
      {filteredPlaces?.map(({ name, adress }: PlaceProps, index) => (
        <Item
          activeOpacity={0.8}
          onPress={() => setSelectedPlaceIndex(index)}
          selected={selectedPlaceIndex === index}
          key={index}
        >
          <ListItem
            {...{
              name,
              adress,
              index,
              selectedPlaceIndex,
              setSelectedPlaceIndex
            }}
          />
          <Separator orientation="horizontal" columnWidth={6.5} />
        </Item>
      ))}
    </Content>
  );

  return (
    <ListWrapper>
      <Accordion
        headText="Afficher la liste"
        content={<List />}
        initialState="open"
      />
    </ListWrapper>
  );
}
