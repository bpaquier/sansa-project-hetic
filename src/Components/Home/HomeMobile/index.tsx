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
  SportIllustrationWrapper,
  HealthCard,
  SportTitleWrapper,
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

export default function HomeMobile(): JSX.Element {
  const navigate = useNavigate();
  return (
    <PageContentWrapper>
      <View>
        <Text color="black20" type="titleL">
          Dashboard
        </Text>
        <EventCard style={boxShadow.panelAndroid}>
          <Text color="black20" type="small" textAlign="center">
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
        <SanitaryCard>
          <SanitaryItemWrapper onPress={() => navigate("/")}>
            <Text type="paragraph" weight="bold" textAlign="center">
              32
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
              18
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
              167
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
            <Text color="black20">Associations</Text>
            <AssociationsCardTitleWrapper>
              <Text type="titleM">
                Les associations les plus visitées ces dernières semaines
              </Text>
            </AssociationsCardTitleWrapper>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("/")}>
          <Card backgroundColor="blue" style={boxShadow.panelAndroid}>
            <SportTitleWrapper>
              <Text color="white">Sport</Text>
            </SportTitleWrapper>
            <Text type="titleXL" color="white">
              16
            </Text>
            <Text color="white">Lieux sportifs</Text>
            <SportIllustrationWrapper>
              <SportIllustration width="200px" height="102px" />
            </SportIllustrationWrapper>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("/")}>
          <HealthCard style={boxShadow.panelAndroid}>
            <HealthIconWrapper>
              <MedicalCase color="white" />
            </HealthIconWrapper>
            <View>
              <Text color="black20">Santé</Text>
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
