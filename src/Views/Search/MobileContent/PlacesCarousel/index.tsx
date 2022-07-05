import Carousel from "react-native-carousel-control";

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

export default function PlacesCarousel(): JSX.Element {
  const {
    filteredPlaces,
    setSelectedPlaceIndex,
    selectedPlaceIndex,
    isLoading,
    setTriggerLocalization,
    debouncedFilters
  } = useSearchContext();
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
      {isLoading && (
        <AlternativeCard>
          <Logo>
            <Spinner />
          </Logo>
          <TextComponent color="black40">Recherche en cours</TextComponent>
        </AlternativeCard>
      )}
      {debouncedFilters?.length > 0 &&
        (!filteredPlaces || filteredPlaces?.length === 0) &&
        !isLoading && (
          <AlternativeCard>
            <TextComponent color="black40">Aucuns résultats</TextComponent>
          </AlternativeCard>
        )}
      {filteredPlaces && filteredPlaces?.length > 0 && !isLoading && (
        <CarouselWrapper>
          <Carousel
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
          </Carousel>
        </CarouselWrapper>
      )}
    </Wrapper>
  );
}
