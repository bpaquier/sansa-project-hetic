import { useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import Carousel from "react-native-carousel-control";

import Carousel2 from "react-native-snap-carousel";

import Card from "./Card";
import {
  Wrapper,
  AlternativeCard,
  Logo,
  PositionIconWrapper,
  CarouselWrapper
} from "./styles";
import Spinner from "~/Components/Icons/Spinner";
import PositionIcon from "~/Components/Icons/System/Map/PositionMobile";
import TextComponent from "~/Components/Ui-kit/Text";
import { useSearchContext } from "~/Contexts/searchContext";
import { Dimensions } from "react-native";

export default function PlacesCarousel(): JSX.Element {
  const { t } = useTranslation();
  const {
    filteredPlaces,
    setSelectedPlaceIndex,
    selectedPlaceIndex,
    isFilterLoading,
    setTriggerLocalization,
    debouncedFilters
  } = useSearchContext();
  const carouselRef = useRef();

  useEffect(() => {
    carouselRef?.current &&
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/ban-ts-comment
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      carouselRef?.current?.snapToItem(selectedPlaceIndex, false);
  }, [carouselRef, selectedPlaceIndex]);

  return (
    <Wrapper>
      <PositionIconWrapper
        //eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        onPress={() => setTriggerLocalization((prev) => !prev)}
        activeOpacity={0.7}
      >
        <PositionIcon width={40} height={40} />
      </PositionIconWrapper>
      {isFilterLoading && (
        <AlternativeCard>
          <Logo>
            <Spinner />
          </Logo>
          <TextComponent color="black40">{t("search.searching")}</TextComponent>
        </AlternativeCard>
      )}
      {debouncedFilters?.length > 0 &&
        (!filteredPlaces || filteredPlaces?.length === 0) &&
        !isFilterLoading && (
          <AlternativeCard>
            <TextComponent color="black40">
              {t("search.noResults")}
            </TextComponent>
          </AlternativeCard>
        )}
      {filteredPlaces && filteredPlaces?.length > 0 && !isFilterLoading && (
        <CarouselWrapper>
          <Carousel2
            ref={carouselRef}
            data={filteredPlaces}
            renderItem={({ item, index }) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              return <Card {...item} index={index} />;
            }}
            sliderWidth={Dimensions.get("window").width}
            itemWidth={Dimensions.get("window").width * 0.8}
            layoutCardOffset={3}
            onSnapToItem={(i) => setSelectedPlaceIndex(i)}
          />
          {/* <Carousel
            swipeThreshold={0.1}
            currentPage={selectedPlaceIndex}
            sneak={30}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            onPageChange={(index) => setSelectedPlaceIndex(index)}
          >
            {filteredPlaces?.map((place, i) => (
              <Card
                {...place}
                index={i}
                key={`${place?.organization_name}-${i}`}
              />
            ))}
            </Carousel> */}
        </CarouselWrapper>
      )}
    </Wrapper>
  );
}
