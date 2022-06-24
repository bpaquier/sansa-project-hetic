import { useEffect, useMemo, useRef } from "react";

//import { useAnimatedRef, useSharedValue } from "react-native-reanimated";

import ListItem from "./ListItem";
import { ListWrapper, ListContent, Item } from "./styles";
import Accordion from "~/Components/Accordion";
import Separator from "~/Components/Ui-kit/Separator";
import { useSearchContext, PlaceProps } from "~/Contexts/searchContext";

export default function PlacesList(): JSX.Element {
  const { selectedPlaceIndex, setSelectedPlaceIndex, filteredPlaces } =
    useSearchContext();
  const itemsTopPositions = useRef<number[]>([]);
  const scrollRef = useRef();

  useEffect(() => {
    const scrollValue = itemsTopPositions?.current?.[selectedPlaceIndex];
    (scrollValue || scrollValue === 0) && scrollTo(scrollValue);
  }, [selectedPlaceIndex]);

  const scrollTo = (value: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    scrollRef?.current?.scrollTo({ y: value });
  };

  const List = useMemo(() => {
    return (
      <ListContent ref={scrollRef}>
        {filteredPlaces?.map(({ name, adress }: PlaceProps, index) => (
          <Item
            activeOpacity={0.8}
            onPress={() => setSelectedPlaceIndex(index)}
            selected={selectedPlaceIndex === index}
            key={index}
            onLayout={(e) => {
              const { y } = e.nativeEvent.layout;
              itemsTopPositions.current[index] = y;
            }}
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
      </ListContent>
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
