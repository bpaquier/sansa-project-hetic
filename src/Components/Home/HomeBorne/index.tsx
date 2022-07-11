import { View, TouchableOpacity } from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigate } from "react-router-native";

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
  HealthCardTitleWrapper,
  ArrowIconWrapper
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

  return (
    <PageContentWrapper>
      <PageContent>
        <FirstRow>
          <TouchableOpacity onPress={() => navigate("/")}>
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
                Pas de panique ! Nous allons bientôt vous trouver de nouveaux
                événements
              </Text>
              <EventCardTitleWrapper>
                <Text type="titleM" textAlign="center">
                  Aucun événement pour le moment
                </Text>
              </EventCardTitleWrapper>
              <NoEventIllustrationWrapper>
                <NoEventIllustration width="405px" height="244px" />
              </NoEventIllustrationWrapper>
            </EventCard>
            <SanitaryCard style={boxShadow.panelAndroid}>
              <TouchableOpacity onPress={() => navigate("/")}>
                <Text type="titleXL" textAlign="center">
                  {pointsNumber.shower}
                </Text>
                <Text>Douches publiques</Text>
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
                <Text>Points d’eau</Text>
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
                <Text>Toilettes publiques</Text>
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
          <TouchableOpacity onPress={() => navigate("/")}>
            <AssociationsCard style={boxShadow.panelAndroid}>
              <Text color="black40">Associations</Text>
              <AssociationsCardTitleWrapper>
                <Text type="titleXL">
                  Les 5 associations les plus proche de vous
                </Text>
              </AssociationsCardTitleWrapper>
              <Text color="blue" weight="bold">
                Voir la carte
              </Text>
            </AssociationsCard>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("/")}>
            <SleepCard style={boxShadow.panelAndroid} backgroundColor="blue">
              <SleepCardTitleWrapper>
                <Text color="white">Hébergement</Text>
              </SleepCardTitleWrapper>
              <SleepCardArrowWrapper>
                <ArrowRight color="white" />
              </SleepCardArrowWrapper>
              <Text type="titleXL" color="white">
                {pointsNumber.housing}
              </Text>
              <Text color="white">Accueil de nuit</Text>
              <SleepIllustrationWrapper>
                <SleepIllustration width="240px" height="142px" />
              </SleepIllustrationWrapper>
            </SleepCard>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("/")}>
            <HealthCard style={boxShadow.panelAndroid}>
              <HealthCardHeadlineWrapper>
                <Text color="black40">Santé</Text>
                <ArrowIconWrapper>
                  <ArrowRight color="white" />
                </ArrowIconWrapper>
              </HealthCardHeadlineWrapper>
              <HealthCardTitleWrapper>
                <Text type="titleXL">Rechercher un médecin</Text>
              </HealthCardTitleWrapper>
              <Text color="black60" type="small">
                Où puis-je me rendre ?
              </Text>
            </HealthCard>
          </TouchableOpacity>
        </SecondRow>
      </PageContent>
    </PageContentWrapper>
  );
}
