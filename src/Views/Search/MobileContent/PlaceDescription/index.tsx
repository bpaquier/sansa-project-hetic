import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import {
  Pressable,
  View,
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
  LastItem
} from "./styles";
import Icon from "~/Components/Icon";
import ArrowLeft from "~/Components/Icons/System/Arrows/ArrowLeft";
import Link from "~/Components/Icons/System/Communication/Link";
import Phone from "~/Components/Icons/System/Communication/Phone";
import Calendar2 from "~/Components/Icons/System/Date/Calendar2";
import MapMarker from "~/Components/Icons/System/Map/MapMarker";
import Globe from "~/Components/Icons/System/System/Globe";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps, Places, useSearchContext } from "~/Contexts/searchContext";
import getCurrentDay from "~/hooks/getCurrentDay";
import theme from "~/Styles/theme.styles";

interface ItemTitleProps {
  content: string;
}

export default function PlaceDescriptionMobile(): JSX.Element {
  const { t } = useTranslation();
  const {
    filteredPlaces,
    displayPlaceDescription,
    setDisplayPlaceDescription
  } = useSearchContext();
  const [place, setPlace] = useState<PlaceProps | null>(null);
  const currentDay = getCurrentDay();

  useEffect(() => {
    /**
     * ! replace by API call
     */
    displayPlaceDescription
      ? setPlace(Places?.find((place) => place?.id === displayPlaceDescription))
      : setPlace(null);
  }, [displayPlaceDescription, filteredPlaces]);

  const ItemTitle = ({ content }: ItemTitleProps) => (
    <ItemTitleWrapper>
      <Text type="titleM">{content}</Text>
    </ItemTitleWrapper>
  );

  return place ? (
    <Wrapper>
      <Header>
        <TouchableOpacity
          onPress={() => {
            setDisplayPlaceDescription(null);
          }}
        >
          <ArrowLeft width={24} height={24} />
        </TouchableOpacity>
      </Header>
      <Separator
        orientation="horizontal"
        width={`${Dimensions.get("window").width}px`}
        customColor={theme?.color?.neutral?.black5}
      />
      <Content>
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
            <InfoItem>
              <IconWrapper>
                <Calendar2 color={theme?.color?.primary?.blue} />
              </IconWrapper>
              <View>
                <Text>Sur rendez-vous</Text>
                <Text type="small" color="black40">
                  Acceuil exclusif: femmes
                </Text>
              </View>
            </InfoItem>
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
              <IconWrapper>
                <Icon category={service} withBackground />
              </IconWrapper>
              <Text>{t(`search.services.${service}`)}</Text>
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
      </Content>
    </Wrapper>
  ) : null;
}
