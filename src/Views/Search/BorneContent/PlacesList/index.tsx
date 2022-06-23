import { useMemo } from "react";

import ListItem from "./ListItem";
import { ListWrapper, Content, Item } from "./styles";
import Accordion from "~/Components/Accordion";
import Separator from "~/Components/Ui-kit/Separator";
import { useSearchContext, PlaceProps } from "~/Contexts/searchContext";

export default function PlacesList(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { selectedPlaceIndex, setSelectedPlaceIndex, filteredPlaces } =
    useSearchContext();
  const List = useMemo(() => {
    return (
      <Content>
        {filteredPlaces?.map(({ name, adress }: PlaceProps, index) => (
          <Item
            activeOpacity={0.8}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            onPress={() => setSelectedPlaceIndex(index)}
            selected={selectedPlaceIndex === index}
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
  }, [filteredPlaces, selectedPlaceIndex, setSelectedPlaceIndex]);

  return (
    <ListWrapper>
      <Accordion
        headText="Afficher la liste"
        content={List}
        initialState="open"
      />
    </ListWrapper>
  );
}
