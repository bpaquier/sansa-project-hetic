import { View, TouchableOpacity } from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigate } from "react-router-native";

import {
  PageContent,
  FirstRow,
  EmptyRow,
  SecondRow,
  SportCard,
  EventCard,
  EventCardTitleWrapper,
  Map,
  MapWrapper,
  MapCard,
  NoEventIllustrationWrapper,
  AssociationsCard,
  AssociationsCardTitleWrapper,
  SanitaryCard,
  SanitaryIconWrapper,
  SportIllustrationWrapper,
  SportCardTitleWrapper,
  HealthCard,
  HealthCardHeadlineWrapper,
  HealthCardTitleWrapper,
  HealthIconWrapper
} from "./styles";
import MedicalCase from "~/Components/Icons/Categories/Health/MedicalCase";
import Shower from "~/Components/Icons/Categories/Hygiene/Shower";
import Toilets from "~/Components/Icons/Categories/Hygiene/Toilets";
import WaterFountain from "~/Components/Icons/Categories/Hygiene/WaterFountain";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import Theme from "~/Styles/theme.styles";
import NoEventIllustration from "~/Views/Home/Illustrations/NoEventIllustration";
import SportIllustration from "~/Views/Home/Illustrations/SportIllustration";
const { color, boxShadow } = Theme;

export default function HomeBorne(): JSX.Element {
  const navigate = useNavigate();
  return (
    <PageContentWrapper>
      <PageContent>
        <FirstRow>
          <TouchableOpacity onPress={() => navigate("/")}>
            <MapCard style={boxShadow.panelAndroid}>
              <MapWrapper>
                <Map provider={PROVIDER_GOOGLE} />
              </MapWrapper>
            </MapCard>
          </TouchableOpacity>
          <View>
            <EventCard style={boxShadow.panelAndroid}>
              <Text color="black20" type="small" textAlign="center">
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
            <SanitaryCard>
              <TouchableOpacity onPress={() => navigate("/")}>
                <Text type="titleXL" textAlign="center">
                  32
                </Text>
                <Text>Douches publiques</Text>
                <SanitaryIconWrapper>
                  <Shower
                    primaryColor={color.primary.blueExtraDark}
                    width={40}
                    height={40}
                  />
                </SanitaryIconWrapper>
              </TouchableOpacity>
              <Separator orientation="vertical" height="120px" />
              <TouchableOpacity onPress={() => navigate("/")}>
                <Text type="titleXL" textAlign="center">
                  18
                </Text>
                <Text>Points d’eau</Text>
                <SanitaryIconWrapper>
                  <WaterFountain
                    primaryColor={color.primary.blueExtraDark}
                    width={40}
                    height={40}
                  />
                </SanitaryIconWrapper>
              </TouchableOpacity>
              <Separator orientation="vertical" height="120px" />
              <TouchableOpacity onPress={() => navigate("/")}>
                <Text type="titleXL" textAlign="center">
                  167
                </Text>
                <Text>Toilettes publiques</Text>
                <SanitaryIconWrapper>
                  <Toilets
                    primaryColor={color.primary.blueExtraDark}
                    width={40}
                    height={40}
                  />
                </SanitaryIconWrapper>
              </TouchableOpacity>
            </SanitaryCard>
          </View>
        </FirstRow>
        <EmptyRow />
        <SecondRow>
          <TouchableOpacity onPress={() => navigate("/")}>
            <AssociationsCard style={boxShadow.panelAndroid}>
              <Text color="black20">Associations</Text>
              <AssociationsCardTitleWrapper>
                <Text type="titleXL">
                  Les associations les plus visitées ces dernières semaines
                </Text>
              </AssociationsCardTitleWrapper>
              <Text color="blue" weight="bold">
                Voir la carte
              </Text>
            </AssociationsCard>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("/")}>
            <SportCard backgroundColor="blue">
              <SportCardTitleWrapper>
                <Text color="white">Sport</Text>
              </SportCardTitleWrapper>
              <Text type="titleXL" color="white">
                16
              </Text>
              <Text color="white">Lieux sportifs</Text>
              <SportIllustrationWrapper>
                <SportIllustration width="240px" height="142px" />
              </SportIllustrationWrapper>
            </SportCard>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("/")}>
            <HealthCard>
              <HealthCardHeadlineWrapper>
                <Text color="black20">Santé</Text>
                <HealthIconWrapper>
                  <MedicalCase color="white" />
                </HealthIconWrapper>
              </HealthCardHeadlineWrapper>
              <HealthCardTitleWrapper>
                <Text type="titleXL">Rechercher un médecin</Text>
              </HealthCardTitleWrapper>
              <Text color="black20" type="small">
                Où puis-je me rendre ?{" "}
              </Text>
            </HealthCard>
          </TouchableOpacity>
        </SecondRow>
      </PageContent>
    </PageContentWrapper>
  );
}
