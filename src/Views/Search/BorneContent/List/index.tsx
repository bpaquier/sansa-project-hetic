import { useEffect, useMemo, useRef, useState } from "react";

import { useTranslation } from "react-i18next";

import { LoadingOverlay } from "../Filters/styles";
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
  SpinnerWrapper,
  IndexWrapper,
  ListItem
} from "./styles";
import Icon from "~/Components/Icon";
import Spinner from "~/Components/Icons/Spinner";
import ArrowDown from "~/Components/Icons/System/Arrows/ArrowDown";
import ArrowUp from "~/Components/Icons/System/Arrows/ArrowUp";
import ServiceWithIcon from "~/Components/ServiceWithIcon";
import Separator from "~/Components/Ui-kit/Separator";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const itemsTopPositions = useRef<number[]>([]);
  const scrollRef = useRef();

  useEffect(() => {
    const scrollValue = itemsTopPositions?.current?.[selectedPlaceIndex];
    (scrollValue || scrollValue === 0) && scrollTo(scrollValue);
  }, [selectedPlaceIndex]);

  useEffect(() => {
    !isOpen && filteredPlaces && setIsOpen(true);
  }, [filteredPlaces]);

  const scrollTo = (value: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    scrollRef?.current?.scrollTo({ y: value });
  };

  const renderList = useMemo(() => {
    return (
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
          ) => {
            const isSelected = selectedPlaceIndex === index;
            const lastItem = index + 1 === filteredPlaces?.length;
            const filteredServices = services_id?.filter((service) =>
              filters?.includes(service)
            );
            return (
              <ListItem
                {...{ isSelected, lastItem }}
                key={`${organization_name}-${index}`}
                onLayout={(e) => {
                  const { y } = e.nativeEvent.layout;
                  itemsTopPositions.current[index] = y;
                }}
              >
                <ItemWrapper
                  onPress={() => {
                    setSelectedPlaceIndex(index);
                    setDisplayFilters(null);
                  }}
                >
                  <IndexWrapper>
                    <Text color="white">{index + 1}</Text>
                  </IndexWrapper>
                  <InfoWrapper>
                    <TextWrapper>
                      <TextStyled>
                        {organization_name && (
                          <Text color="black">{organization_name}</Text>
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
                        {filteredServices?.map((category, index) => (
                          <IconWrapper key={`${category}-${index}`}>
                            <ServiceWithIcon
                              {...{ category }}
                              withBackground
                              backgroundType="colored"
                            />
                          </IconWrapper>
                        ))}
                        {services_id?.length - filteredServices?.length > 0 && (
                          <Icon
                            withBackground
                            backgroundType="black"
                            text={`+${
                              services_id?.length - filteredServices?.length
                            }`}
                          />
                        )}
                      </IconsWrapper>
                    )}
                    <ButtonWrapper
                      onPress={() => setDisplayPlaceDescription(id)}
                    >
                      <Text color="blue" weight="bold">
                        {t("search.learnMore")}
                      </Text>
                    </ButtonWrapper>
                  </InfoWrapper>
                </ItemWrapper>
                {index < filteredPlaces?.length - 1 && (
                  <Separator orientation="horizontal" columnWidth={6.5} />
                )}
              </ListItem>
            );
          }
        )}
      </ListContent>
    );
  }, [filteredPlaces, selectedPlaceIndex]);

  return (
    <ListWrapper>
      <ListHeader onPress={() => setIsOpen((prev) => !prev)}>
        {isFilterLoading && !isOpen ? (
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
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </ListHeader>
      {isOpen && renderList}
      {isFilterLoading && isOpen && (
        <LoadingOverlay>
          <Spinner width={40} height={40} />
        </LoadingOverlay>
      )}
    </ListWrapper>
  );
}

/**

 */
