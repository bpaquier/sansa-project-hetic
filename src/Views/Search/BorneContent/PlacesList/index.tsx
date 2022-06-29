import { useEffect, useMemo, useRef, useState } from "react";

import ListItem from "./ListItem";
import {
  ListWrapper,
  ListContent,
  Item,
  LoaderWrapper,
  SpinnerWrapper,
  OverlayLoader
} from "./styles";
import Accordion from "~/Components/Accordion";
import Spinner from "~/Components/Icons/Spinner";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import { useSearchContext, PlaceProps } from "~/Contexts/searchContext";

export default function PlacesList(): JSX.Element {
  const {
    selectedPlaceIndex,
    setSelectedPlaceIndex,
    filteredPlaces,
    setDisplayFilters,
    isLoading,
    filters
  } = useSearchContext();
  const [isAccordeonOpen, setIsAccordeonOpen] = useState<boolean>();
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
    filters?.length > 0 && (
      <ListWrapper>
        <Accordion
          getStatus={(status) =>
            status === "open"
              ? setIsAccordeonOpen(true)
              : setIsAccordeonOpen(false)
          }
          headContent={
            isLoading && !isAccordeonOpen ? (
              <LoaderWrapper>
                <SpinnerWrapper>
                  <Spinner />
                </SpinnerWrapper>
                <Text>Chargement des résultats</Text>
              </LoaderWrapper>
            ) : (
              <Text>
                {filteredPlaces?.length > 0
                  ? `Afficher la liste (${filteredPlaces?.length} résultats)`
                  : "Pas de résultats"}
              </Text>
            )
          }
          content={List}
          forceOpen={filteredPlaces?.length > 0}
          freeze={
            filteredPlaces?.length === 0 || (isLoading && !isAccordeonOpen)
          }
        />
        {isLoading && isAccordeonOpen && (
          <OverlayLoader>
            <Spinner width={50} height={50} />
          </OverlayLoader>
        )}
      </ListWrapper>
    )
  );
}
