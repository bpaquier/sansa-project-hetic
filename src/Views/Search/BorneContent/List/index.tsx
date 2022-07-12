import { useEffect, useRef } from "react";

import { useTranslation } from "react-i18next";

import {
  ListWrapper,
  ListContent,
  ItemWrapper,
  InfoWrapper,
  TextWrapper,
  TextStyled,
  ButtonWrapper,
  IconWrapper,
  IconsWrapper,
  ListHeader,
  LoaderWrapper,
  SpinnerWrapper
} from "./styles";
import Spinner from "~/Components/Icons/Spinner";
import Ping from "~/Components/Ping";
import ServiceWithIcon from "~/Components/ServiceWithIcon";
import Text from "~/Components/Ui-kit/Text";
import { useSearchContext, PlaceProps } from "~/Contexts/searchContext";
import useCurrentDay from "~/hooks/useCurrentDay";

export default function List(): JSX.Element {
  const { t } = useTranslation();
  const {
    filteredPlaces,
    setSelectedPlaceIndex,
    selectedPlaceIndex,
    filters,
    setDisplayPlaceDescription,
    setDisplayFilters,
    isFilterLoading
  } = useSearchContext();
  const currentDay = useCurrentDay();

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

  return (
    <ListWrapper>
      <ListHeader>
        {isFilterLoading ? (
          <LoaderWrapper>
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
            <Text>{t("search.searching")}</Text>
          </LoaderWrapper>
        ) : (
          <Text>
            {filteredPlaces?.length > 0
              ? t("search.showList", {
                  resultsLength: `${filteredPlaces?.length}`
                })
              : t("search.noResults")}
          </Text>
        )}
      </ListHeader>
      {filteredPlaces?.length > 0 && !isFilterLoading && (
        <ListContent ref={scrollRef}>
          {filteredPlaces?.map(
            (
              {
                organization_name,
                adress,
                services_id,
                hours_id,
                id
              }: PlaceProps,
              index
            ) => (
              <ItemWrapper
                key={`${organization_name}-${index}`}
                onLayout={(e) => {
                  const { y } = e.nativeEvent.layout;
                  itemsTopPositions.current[index] = y;
                }}
                onPress={() => {
                  setSelectedPlaceIndex(index);
                  setDisplayFilters(null);
                }}
              >
                {/* <Ping small index={index} /> */}
                <InfoWrapper>
                  <TextWrapper>
                    <TextStyled>
                      {organization_name && (
                        <Text color="black" weight="bold">
                          {organization_name}
                        </Text>
                      )}
                    </TextStyled>
                    {adress && (
                      <TextStyled>
                        <Text color="black60">{adress}</Text>
                      </TextStyled>
                    )}
                    {hours_id[0][currentDay] && (
                      <TextStyled>
                        <Text type="small" color="black60">{`${t(
                          "search.openingHours"
                        )}: ${hours_id[0][currentDay]}`}</Text>
                      </TextStyled>
                    )}
                  </TextWrapper>
                  {services_id && (
                    <IconsWrapper>
                      {services_id
                        ?.filter((service) => filters?.includes(service))
                        ?.map((category, index) => (
                          <IconWrapper key={`${category}-${index}`}>
                            <ServiceWithIcon
                              {...{ category }}
                              withBackground
                              backgroundType="colored"
                            />
                          </IconWrapper>
                        ))}
                      {/*  {services_id?.length - formatedCategories?.length > 0 && (
                      <Icon
                        withBackground
                        backgroundType="black"
                        text={`+${
                          services_id?.length - formatedCategories?.length
                        }`}
                      />
                    )} */}
                    </IconsWrapper>
                  )}
                  <ButtonWrapper onPress={() => setDisplayPlaceDescription(id)}>
                    <Text color="blue" weight="bold">
                      {t("search.learnMore")}
                    </Text>
                  </ButtonWrapper>
                </InfoWrapper>
              </ItemWrapper>
            )
          )}
        </ListContent>
      )}
    </ListWrapper>
  );
}
