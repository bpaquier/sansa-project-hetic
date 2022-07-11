import { View, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";

import {
  Card,
  EventCard,
  EventCardTitleWrapper,
  NoEventIllustrationWrapper,
  AssociationsCardTitleWrapper,
  SanitaryCard,
  SanitaryItemWrapper,
  SanitaryIconWrapper,
  SleepIllustrationWrapper,
  HealthCard,
  SleepTitleWrapper,
  HealthCardTitleWrapper,
  HealthIconWrapper
} from "./styles";
import NoEventIllustration from "~/Components/Home/Illustrations/NoEventIllustration";
import SleepIllustration from "~/Components/Home/Illustrations/SleepIllustration";
import MedicalCase from "~/Components/Icons/Categories/Health/MedicalCase";
import Shower from "~/Components/Icons/Categories/Hygiene/Shower";
import Toilets from "~/Components/Icons/Categories/Hygiene/Toilets";
import WaterFountain from "~/Components/Icons/Categories/Hygiene/WaterFountain";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import Theme from "~/Styles/theme.styles";
const { color, boxShadow } = Theme;

interface HomeMobileProps {
  pointsNumber: {
    shower: number;
    water: number;
    toilets: number;
    housing: number;
  };
}

export default function HomeMobile({
  pointsNumber
}: HomeMobileProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <PageContentWrapper>
      <View>
        <Text color="black40" type="titleL">
          Dashboard
        </Text>
        <EventCard style={boxShadow.panelAndroid}>
          <Text color="black60" type="small" textAlign="center">
            Bientôt de nouveaux événements !
          </Text>
          <EventCardTitleWrapper>
            <Text type="titleM" textAlign="center">
              Aucun événement pour le moment
            </Text>
          </EventCardTitleWrapper>
          <NoEventIllustrationWrapper>
            <NoEventIllustration width="305px" height="144px" />
          </NoEventIllustrationWrapper>
        </EventCard>
        <SanitaryCard style={boxShadow.panelAndroid}>
          <SanitaryItemWrapper onPress={() => navigate("/")}>
            <Text type="paragraph" weight="bold" textAlign="center">
              {pointsNumber.shower}
            </Text>
            <Text type="small" textAlign="center">
              Douches publiques
            </Text>
            <SanitaryIconWrapper>
              <Shower
                primaryColor={color.primary.blueExtraDark}
                width={28}
                height={28}
              />
            </SanitaryIconWrapper>
          </SanitaryItemWrapper>
          <Separator orientation="vertical" height="120px" margin={12} />
          <SanitaryItemWrapper onPress={() => navigate("/")}>
            <Text type="paragraph" weight="bold" textAlign="center">
              {pointsNumber.water}
            </Text>
            <Text type="small" textAlign="center">
              Points d’eau
            </Text>
            <SanitaryIconWrapper>
              <WaterFountain
                primaryColor={color.primary.blueExtraDark}
                width={28}
                height={28}
              />
            </SanitaryIconWrapper>
          </SanitaryItemWrapper>
          <Separator orientation="vertical" height="120px" margin={12} />
          <SanitaryItemWrapper onPress={() => navigate("/")}>
            <Text type="paragraph" weight="bold" textAlign="center">
              {pointsNumber.toilets}
            </Text>
            <Text type="small" textAlign="center">
              Toilettes publiques
            </Text>
            <SanitaryIconWrapper>
              <Toilets
                primaryColor={color.primary.blueExtraDark}
                width={28}
                height={28}
              />
            </SanitaryIconWrapper>
          </SanitaryItemWrapper>
        </SanitaryCard>
        <TouchableOpacity onPress={() => navigate("/")}>
          <Card style={boxShadow.panelAndroid}>
            <Text color="black60">Associations</Text>
            <AssociationsCardTitleWrapper>
              <Text type="titleM">
                Les 5 associations les plus proche de vous
              </Text>
            </AssociationsCardTitleWrapper>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("/")}>
          <Card backgroundColor="blue" style={boxShadow.panelAndroid}>
            <SleepTitleWrapper>
              <Text color="white">Hébergement</Text>
            </SleepTitleWrapper>
            <Text type="titleXL" color="white">
              {pointsNumber.housing}
            </Text>
            <Text color="white">Accueil de nuit</Text>
            <SleepIllustrationWrapper>
              <SleepIllustration width="200px" height="102px" />
            </SleepIllustrationWrapper>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("/")}>
          <HealthCard style={boxShadow.panelAndroid}>
            <HealthIconWrapper>
              <MedicalCase color="white" />
            </HealthIconWrapper>
            <View>
              <Text color="black60">Santé</Text>
              <HealthCardTitleWrapper>
                <Text type="titleM">Où puis-je me rendre ?</Text>
              </HealthCardTitleWrapper>
            </View>
          </HealthCard>
        </TouchableOpacity>
      </View>
    </PageContentWrapper>
  );
}
