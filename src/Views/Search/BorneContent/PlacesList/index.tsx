import React from "react";

import ListItem from "./ListItem";
import { ListWrapper, Content, Item } from "./styles";
import Accordion from "~/Components/Accordion";
import Separator from "~/Components/Ui-kit/Separator";
import { useSearchContext, PlaceProps } from "~/Contexts/searchContext";

export default function PlacesList(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { setSelectedPlaceIndex, filteredPlaces } = useSearchContext();
  const List = () => {
    return (
      <Content>
        {filteredPlaces?.map(({ name, adress }: PlaceProps, index) => (
          <Item
            activeOpacity={0.8}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            onPress={() => setSelectedPlaceIndex(index)}
            key={index}
          >
            <ListItem
              {...{
                name,
                adress,
                index
              }}
            />
            <Separator orientation="horizontal" columnWidth={6.5} />
          </Item>
        ))}
      </Content>
    );
  };

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
