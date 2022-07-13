import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigate } from "react-router-native";

import { HealthIconWrapper } from "../HomeMobile/styles";
import {
  PageContent,
  FirstRow,
  SecondRow,
  SleepCard,
  EventCard,
  EventCardTitleWrapper,
  MapButtonWrapper,
  Map,
  MapWrapper,
  MapCard,
  NoEventIllustrationWrapper,
  AssociationsCard,
  SanitaryCard,
  SanitaryIconWrapper,
  SleepCardArrowWrapper,
  SleepIllustrationWrapper,
  SleepCardTitleWrapper,
  HealthCard,
  HealthCardHeadlineWrapper,
  HealthCardTitleWrapper,
  SleepCardTextDescription,
  RightColumn
} from "./styles";
import NoEventIllustration from "~/Components/Home/Illustrations/NoEventIllustration";
import SleepIllustration from "~/Components/Home/Illustrations/SleepIllustration";
import Shower from "~/Components/Icons/Categories/Hygiene/Shower";
import Toilets from "~/Components/Icons/Categories/Hygiene/Toilets";
import WaterFountain from "~/Components/Icons/Categories/Hygiene/WaterFountain";
import ArrowRight from "~/Components/Icons/System/Arrows/ArrowRight";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Button from "~/Components/Ui-kit/Button";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";
import Theme from "~/Styles/theme.styles";
const { color, boxShadow } = Theme;

interface HomeBorneProps {
  pointsNumber: {
    shower: number;
    water: number;
    toilets: number;
    housing: number;
  };
}

export default function HomeBorne({
  pointsNumber
}: HomeBorneProps): JSX.Element {
  const { setSearchParams } = useGlobalContext();
  const navigate = useNavigate();
  const { t } = useTranslation();

  interface searchParamsProps {
    filter?: string;
  }

  const setSearchParamsAndNavigate = (
    path: string,
    params: searchParamsProps
  ) => {
    setSearchParams(params);
    navigate(path);
  };

  const { shower, water, toilets, housing } = pointsNumber;

  return (
    <PageContentWrapper>
      <PageContent
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
          padding: 3
        }}
      >
        <FirstRow>
          <MapCard style={boxShadow.panelAndroid}>
            <TouchableOpacity
              onPress={() => navigate("/search")}
              activeOpacity={0.7}
            >
              <MapWrapper>
                <MapButtonWrapper>
                  <Button type="secondary" text={t("home.searchAPlace")} />
                </MapButtonWrapper>
                <Map provider={PROVIDER_GOOGLE} />
              </MapWrapper>
            </TouchableOpacity>
          </MapCard>
          <RightColumn>
            <EventCard style={boxShadow.panelAndroid}>
              <Text color="black60" type="small" textAlign="center">
                {t("home.eventsSoonBorne")}
              </Text>
              <EventCardTitleWrapper>
                <Text type="titleM" textAlign="center">
                  {t("home.noEventsPrompt")}
                </Text>
              </EventCardTitleWrapper>
              <NoEventIllustrationWrapper>
                <NoEventIllustration width="405px" height="244px" />
              </NoEventIllustrationWrapper>
            </EventCard>
            <SanitaryCard style={boxShadow.panelAndroid}>
              <TouchableOpacity
                onPress={() =>
                  setSearchParamsAndNavigate("/search", { filter: "Douche" })
                }
                activeOpacity={0.7}
              >
                <Text type="titleXL" textAlign="center">
                  {shower}
                </Text>
                <Text>
                  {t(shower > 0 ? "home.publicShowers" : "home.publicShower")}
                </Text>
                <SanitaryIconWrapper>
                  <Shower
                    primaryColor={color.primary.blueExtraDark}
                    width={40}
                    height={40}
                  />
                </SanitaryIconWrapper>
                <TextWrapper
                  marginTop={8}
                  weight="bold"
                  color="blue"
                  textAlign="center"
                >
                  {t("search.seeMore")}
                </TextWrapper>
              </TouchableOpacity>
              <Separator orientation="vertical" height="160px" />

              <TouchableOpacity
                onPress={() =>
                  setSearchParamsAndNavigate("/search", {
                    filter: "Fontaine à eau"
                  })
                }
              >
                <Text type="titleXL" textAlign="center">
                  {water}
                </Text>
                <Text>
                  {t(water > 0 ? "home.wateringPlaces" : "home.wateringPlace")}
                </Text>
                <SanitaryIconWrapper>
                  <WaterFountain
                    primaryColor={color.primary.blueExtraDark}
                    width={40}
                    height={40}
                  />
                </SanitaryIconWrapper>
                <TextWrapper
                  marginTop={8}
                  weight="bold"
                  color="blue"
                  textAlign="center"
                >
                  {t("search.seeMore")}
                </TextWrapper>
              </TouchableOpacity>
              <Separator orientation="vertical" height="160px" />
              <TouchableOpacity
                onPress={() =>
                  setSearchParamsAndNavigate("/search", { filter: "Toilettes" })
                }
              >
                <Text type="titleXL" textAlign="center">
                  {toilets}
                </Text>
                <Text>
                  {t(
                    toilets > 0 ? "home.publicRestrooms" : "home.publicRestroom"
                  )}
                </Text>
                <SanitaryIconWrapper>
                  <Toilets
                    primaryColor={color.primary.blueExtraDark}
                    width={40}
                    height={40}
                  />
                </SanitaryIconWrapper>
                <TextWrapper
                  marginTop={8}
                  weight="bold"
                  color="blue"
                  textAlign="center"
                >
                  {t("search.seeMore")}
                </TextWrapper>
              </TouchableOpacity>
            </SanitaryCard>
          </RightColumn>
        </FirstRow>
        <SecondRow>
          <AssociationsCard
            activeOpacity={0.7}
            style={boxShadow.panelAndroid}
            onPress={() => navigate("/search")}
          >
            <Text color="black40">{t("home.associations")}</Text>
            <Text type="titleXL">{t("home.closestAssociations")}</Text>
            <Text color="blue" weight="bold">
              {t("home.showTheMap")}
            </Text>
          </AssociationsCard>
          <SleepCard
            style={boxShadow.panelAndroid}
            backgroundColor="blue"
            onPress={() =>
              setSearchParamsAndNavigate("/search", { filter: "Halte de nuit" })
            }
            activeOpacity={0.7}
          >
            <SleepCardTitleWrapper>
              <Text color="white">
                {t("administrativeAssistance.hosting.hosting")}
              </Text>
            </SleepCardTitleWrapper>
            <SleepCardArrowWrapper>
              <ArrowRight color="white" />
            </SleepCardArrowWrapper>
            <SleepCardTextDescription>
              <Text type="titleXL" color="white">
                {housing}
              </Text>
              <Text color="white">
                {t(housing > 0 ? "home.nightShelters" : "home.nightShelter")}
              </Text>
            </SleepCardTextDescription>
            <SleepIllustrationWrapper>
              <SleepIllustration width="240px" height="142px" />
            </SleepIllustrationWrapper>
          </SleepCard>
          <HealthCard
            style={boxShadow.panelAndroid}
            onPress={() =>
              setSearchParamsAndNavigate("/search", {
                filter: "Médecin généraliste"
              })
            }
            activeOpacity={0.7}
          >
            <HealthCardHeadlineWrapper>
              <Text color="black40">
                {t("administrativeAssistance.health.health")}
              </Text>
              <HealthIconWrapper>
                <ArrowRight color="white" />
              </HealthIconWrapper>
            </HealthCardHeadlineWrapper>
            <HealthCardTitleWrapper>
              <Text type="titleXL">{t("home.lookForADoctor")}</Text>
            </HealthCardTitleWrapper>
            <Text color="black60" type="small">
              {t("home.whereCanIGo")}
            </Text>
          </HealthCard>
        </SecondRow>
      </PageContent>
    </PageContentWrapper>
  );
}
