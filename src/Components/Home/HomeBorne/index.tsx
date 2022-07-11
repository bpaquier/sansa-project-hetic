import { useTranslation } from "react-i18next";
import { View, TouchableOpacity } from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigate } from "react-router-native";

import { HealthIconWrapper } from "../HomeMobile/styles";
import {
  PageContent,
  FirstRow,
  EmptyRow,
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
  AssociationsCardTitleWrapper,
  SanitaryCard,
  SanitaryIconWrapper,
  SleepCardArrowWrapper,
  SleepIllustrationWrapper,
  SleepCardTitleWrapper,
  HealthCard,
  HealthCardHeadlineWrapper,
  HealthCardTitleWrapper
} from "./styles";
import NoEventIllustration from "~/Components/Home/Illustrations/NoEventIllustration";
import SleepIllustration from "~/Components/Home/Illustrations/SleepIllustration";
import MedicalCase from "~/Components/Icons/Categories/Health/MedicalCase";
import Shower from "~/Components/Icons/Categories/Hygiene/Shower";
import Toilets from "~/Components/Icons/Categories/Hygiene/Toilets";
import WaterFountain from "~/Components/Icons/Categories/Hygiene/WaterFountain";
import ArrowRight from "~/Components/Icons/System/Arrows/ArrowRight";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Button from "~/Components/Ui-kit/Button";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
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
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <PageContentWrapper>
      <PageContent>
        <FirstRow>
          <TouchableOpacity onPress={() => navigate("/")} activeOpacity={0.7}>
            <MapCard style={boxShadow.panelAndroid}>
              <MapWrapper>
                <MapButtonWrapper>
                  <Button type="secondary" text="Rechercher un lieu" />
                </MapButtonWrapper>
                <Map provider={PROVIDER_GOOGLE} />
              </MapWrapper>
            </MapCard>
          </TouchableOpacity>
          <View>
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
                onPress={() => navigate("/")}
                activeOpacity={0.7}
              >
                <Text type="titleXL" textAlign="center">
                  {pointsNumber.shower}
                </Text>
                {/* add value from API instead of 32  */}
                <Text>{t("home.publicShower", { count: 32 })}</Text>
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
                  Voir plus
                </TextWrapper>
              </TouchableOpacity>
              <Separator orientation="vertical" height="160px" />
              <TouchableOpacity onPress={() => navigate("/")}>
                <Text type="titleXL" textAlign="center">
                  {pointsNumber.water}
                </Text>
                {/* add value from API instead of 18  */}
                <Text>{t("home.wateringPlace", { count: 18 })}</Text>
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
                  Voir plus
                </TextWrapper>
              </TouchableOpacity>
              <Separator orientation="vertical" height="160px" />
              <TouchableOpacity onPress={() => navigate("/")}>
                <Text type="titleXL" textAlign="center">
                  {pointsNumber.toilets}
                </Text>
                {/* add value from API instead of 167  */}
                <Text>{t("home.publicRestroom", { count: 167 })}</Text>
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
                  Voir plus
                </TextWrapper>
              </TouchableOpacity>
            </SanitaryCard>
          </View>
        </FirstRow>
        <EmptyRow />
        <SecondRow>
          <AssociationsCard
            activeOpacity={0.7}
            style={boxShadow.panelAndroid}
            onPress={() => navigate("/")}
          >
            <Text color="black40">{t("home.associations")}</Text>
            <AssociationsCardTitleWrapper>
              <Text type="titleXL">{t("home.closestAssociations")}</Text>
            </AssociationsCardTitleWrapper>
            <Text color="blue" weight="bold">
              {t("home.showTheMap")}
            </Text>
          </AssociationsCard>
          <SleepCard style={boxShadow.panelAndroid} backgroundColor="blue">
            <SleepCardTitleWrapper>
              <Text color="white">
                {t("administrativeAssistance.hosting.hosting")}
              </Text>
            </SleepCardTitleWrapper>
            <SleepCardArrowWrapper>
              <ArrowRight color="white" />
            </SleepCardArrowWrapper>
            <Text type="titleXL" color="white">
              {pointsNumber.housing}
            </Text>
            <Text color="white">
              {t("home.nightShelter", { count: pointsNumber.housing })}
            </Text>
            <SleepIllustrationWrapper>
              <SleepIllustration width="240px" height="142px" />
            </SleepIllustrationWrapper>
          </SleepCard>
          <HealthCard
            style={boxShadow.panelAndroid}
            onPress={() => navigate("/")}
            activeOpacity={0.7}
          >
            <HealthCardHeadlineWrapper>
              <Text color="black40">
                {t("administrativeAssistance.health.health")}
              </Text>
              <HealthIconWrapper>
                <MedicalCase color="white" />
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
