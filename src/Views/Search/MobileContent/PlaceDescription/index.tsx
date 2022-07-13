import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import {
  Pressable,
  Linking,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";

import {
  Wrapper,
  Header,
  Content,
  TitleWrapper,
  Item,
  ItemTitleWrapper,
  InfosWrapper,
  InfoItem,
  IconWrapper,
  Day,
  HoursContentWrapper,
  HoursItemsWrapper,
  HoursItem,
  Service,
  LastItem,
  TextWrapper,
  ArrowWrapper,
  LoadingOverlay
} from "./styles";
import Spinner from "~/Components/Icons/Spinner";
import ArrowLeft from "~/Components/Icons/System/Arrows/ArrowLeft";
import Link from "~/Components/Icons/System/Communication/Link";
import Phone from "~/Components/Icons/System/Communication/Phone";
import Calendar2 from "~/Components/Icons/System/Date/Calendar2";
import MapMarker from "~/Components/Icons/System/Map/MapMarker";
import Globe from "~/Components/Icons/System/System/Globe";
import ServiceWithIcon from "~/Components/ServiceWithIcon";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";
import { PlaceProps, useSearchContext } from "~/Contexts/searchContext";
import useApi from "~/hooks/useApi";
import useCurrentDay from "~/hooks/useCurrentDay";
import theme from "~/Styles/theme.styles";

interface ItemTitleProps {
  content: string;
}

export default function PlaceDescriptionMobile(): JSX.Element {
  const { t } = useTranslation();
  const { getOrgaById } = useApi();
  const {
    filteredPlaces,
    displayPlaceDescription,
    setDisplayPlaceDescription,
    handleApiErrors
  } = useSearchContext();
  const currentDay = useCurrentDay();
  const { statusBarHeight } = useGlobalContext();
  const [place, setPlace] = useState<PlaceProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    displayPlaceDescription &&
      getOrgaById(displayPlaceDescription)
        ?.then(({ data, status }: { data: PlaceProps[]; status: number }) => {
          if (status === 200) {
            if (data?.[0]) {
              setPlace(data?.[0]);
            } else {
              handleApiErrors();
            }
          } else {
            handleApiErrors();
            setPlace(null);
          }
          setIsLoading(false);
        })
        ?.catch(() => {
          handleApiErrors();
          setIsLoading(false);
          setPlace(null);
        });

    !displayPlaceDescription && setPlace(null);
  }, [displayPlaceDescription, filteredPlaces]);

  const ItemTitle = ({ content }: ItemTitleProps) => (
    <ItemTitleWrapper>
      <Text type="titleM">{content}</Text>
    </ItemTitleWrapper>
  );

  return displayPlaceDescription ? (
    <Wrapper {...{ statusBarHeight }}>
      <Header>
        <TouchableOpacity
          onPress={() => {
            setDisplayPlaceDescription(null);
          }}
        >
          <ArrowWrapper>
            <ArrowLeft width={32} height={32} />
          </ArrowWrapper>
        </TouchableOpacity>
      </Header>
      <Separator
        orientation="horizontal"
        width={`${Dimensions.get("window").width}px`}
        customColor={theme?.color?.neutral?.black5}
      />
      <Content>
        {!isLoading && place ? (
          <>
            {place?.organization_name ? (
              <TitleWrapper>
                <Text type="titleL" weight="bold">
                  {place?.organization_name}
                </Text>
              </TitleWrapper>
            ) : null}
            <Item>
              <ItemTitle content={t("search.informations")} />
              <InfosWrapper>
                {place?.adress ? (
                  <InfoItem>
                    <IconWrapper>
                      <MapMarker color={theme?.color?.primary?.blue} />
                    </IconWrapper>
                    <Text>{place?.adress}</Text>
                  </InfoItem>
                ) : null}
                {place?.phone_number ? (
                  <InfoItem>
                    <IconWrapper>
                      <Phone color={theme?.color?.primary?.blue} />
                    </IconWrapper>
                    <Text>{place?.phone_number}</Text>
                  </InfoItem>
                ) : null}
                {place?.website ? (
                  <InfoItem>
                    <IconWrapper>
                      <Link color={theme?.color?.primary?.blue} />
                    </IconWrapper>
                    <Pressable
                      onPress={() => {
                        Linking.openURL(place?.website).catch(() => {
                          Alert.alert("", t("alerts.link"), [{ text: "OK" }]);
                        });
                      }}
                    >
                      <Text>{place?.website}</Text>
                    </Pressable>
                  </InfoItem>
                ) : null}
                {place?.spoken_language ? (
                  <InfoItem>
                    <IconWrapper>
                      <Globe color={theme?.color?.primary?.blue} />
                    </IconWrapper>
                    <Text>{`${t("search.languages")}: ${
                      place?.spoken_language
                    }`}</Text>
                  </InfoItem>
                ) : null}
                {place?.by_appointment ||
                place?.preferencialWelcomes?.[0]?.value ? (
                  <InfoItem>
                    <IconWrapper>
                      <Calendar2 color={theme?.color?.primary?.blue} />
                    </IconWrapper>
                    <TextWrapper>
                      {place?.by_appointment ? (
                        <Text>{t("search.byAppointement")}</Text>
                      ) : null}
                      {place?.preferencialWelcomes?.[0]?.value ? (
                        <Text color="black60">
                          {place?.preferencialWelcomes?.[0]?.value}
                        </Text>
                      ) : null}
                    </TextWrapper>
                  </InfoItem>
                ) : null}
              </InfosWrapper>
            </Item>
            <Item>
              <ItemTitle content={t("search.timetables")} />
              <HoursContentWrapper>
                <HoursItemsWrapper>
                  {Object.keys(place?.hours_id?.[0])?.map((day, i) => (
                    <HoursItem key={`${day}-${i}`}>
                      <Day>
                        <Text
                          color="black60"
                          weight={day === currentDay ? "bold" : "regular"}
                        >
                          {t(`days.${day}`)}
                        </Text>
                      </Day>
                    </HoursItem>
                  ))}
                </HoursItemsWrapper>
                <HoursItemsWrapper>
                  {Object.keys(place?.hours_id?.[0])?.map((day, i) => (
                    <HoursItem key={`${day}-${i}`}>
                      <Text
                        color="black60"
                        weight={day === currentDay ? "bold" : "regular"}
                      >
                        {place?.hours_id?.[0]?.[day]}
                      </Text>
                    </HoursItem>
                  ))}
                </HoursItemsWrapper>
              </HoursContentWrapper>
            </Item>
            <Item>
              <ItemTitle content={t("search.service")} />
              {place?.services_id?.map((service, i) => (
                <Service key={`${service}-${i}`}>
                  <ServiceWithIcon
                    text={t(`search.services.${service}`)}
                    category={service}
                    withBackground
                  />
                </Service>
              ))}
            </Item>
            <LastItem>
              {place?.description ? (
                <>
                  <ItemTitle content={t("search.mission")} />
                  <Text>{place?.description}</Text>
                </>
              ) : null}
            </LastItem>
          </>
        ) : (
          <LoadingOverlay>
            <Spinner />
          </LoadingOverlay>
        )}
      </Content>
    </Wrapper>
  ) : null;
}
