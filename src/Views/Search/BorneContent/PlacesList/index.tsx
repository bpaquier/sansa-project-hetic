import { useEffect, useMemo, useRef } from "react";

//import { useAnimatedRef, useSharedValue } from "react-native-reanimated";

import ListItem from "./ListItem";
import { ListWrapper, ListContent, Item } from "./styles";
import Accordion from "~/Components/Accordion";
import Separator from "~/Components/Ui-kit/Separator";
import { useSearchContext, PlaceProps } from "~/Contexts/searchContext";

export default function PlacesList(): JSX.Element {
  const {
    selectedPlaceIndex,
    setSelectedPlaceIndex,
    filteredPlaces,
    setDisplayFilters
  } = useSearchContext();
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
        {filteredPlaces?.map(
          ({ name, adress, categories }: PlaceProps, index) => (
            <Item
              activeOpacity={0.8}
              onPress={() => {
                setSelectedPlaceIndex(index);
                setDisplayFilters(null);
              }}
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
                  index,
                  categories
                }}
              />
              {index < filteredPlaces?.length - 1 && (
                <Separator orientation="horizontal" columnWidth={6.5} />
              )}
            </Item>
          )
        )}
      </ListContent>
    );
  }, [filteredPlaces, selectedPlaceIndex, setSelectedPlaceIndex]);

  return (
    <ListWrapper>
      <Accordion
        headText={
          filteredPlaces?.length > 0
            ? `Afficher la liste (${filteredPlaces?.length} résultats)`
            : "Pas de résultats"
        }
        content={List}
        forceOpen={filteredPlaces?.length > 0}
        freeze={filteredPlaces?.length === 0}
      />
    </ListWrapper>
  );
}
