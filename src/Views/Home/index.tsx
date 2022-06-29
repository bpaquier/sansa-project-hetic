import { useNavigate } from "react-router-native";
import { View } from "react-native";

import PageContentWrapper from "~/Components/PageContentWrapper";
import ButtonComponent from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";
import { PageContent, PageContentLeftColumn, PageContentRightColumn, SubGrid, Card, Map, MapWrapper, MapCard, NoEventIllustrationWrapper, AssociationsCard, SanitaryCard, SanitaryIconWrapper, HealthCard } from "./styles";
import { PROVIDER_GOOGLE } from "react-native-maps";
import NoEventIllustration from "./NoEventIllustration"
import Separator from "~/Components/Ui-kit/Separator";
import Toilets from "~/Components/Icons/Categories/Hygiene/Toilets";
import Shower from "~/Components/Icons/Categories/Hygiene/Shower";

import Theme from "~/Styles/theme.styles";
const { color } = Theme;

export default function Home(): JSX.Element {
  const navigate = useNavigate();
  return (
    <PageContentWrapper>
      <PageContent>
        <PageContentLeftColumn>
          <MapCard>
            <MapWrapper>
              <Map style={{ width: '100%', height: '100%' }} provider={PROVIDER_GOOGLE} />
            </MapWrapper>
          </MapCard>
          <AssociationsCard>
            <Text color="black20">Associations</Text>
            <View style={{ marginTop: 16 }}>
              <Text type="titleXL">Les associations les plus visités ces dernières semaines</Text>
            </View>
            <View style={{ marginTop: 'auto' }}>
              <Text color="blue" weight="bold">Voir la carte</Text>
            </View>
          </AssociationsCard>
        </PageContentLeftColumn>
        <PageContentRightColumn>
          <View style={{ flex: 4 }}>
            <Card style={{ flex: 2 }}>
              <Text color="black20" type="small" textAlign="center">Pas de panique ! Nous allons bientôt vous trouver de nouveau événement</Text>
              <View style={{ marginTop: 8 }}>
                <Text type="titleM" textAlign="center">Aucun événement pour le moment</Text>
              </View>
              <NoEventIllustrationWrapper>
                <NoEventIllustration width="415px" height="254px" />
              </NoEventIllustrationWrapper>
            </Card>
            <SanitaryCard>
              <View>
                <Text type="titleXL" textAlign="center">32</Text>
                <Text>Douches publiques</Text>
                <SanitaryIconWrapper>
                  <Shower primaryColor={color.primary.blueExtraDark} width={40} height={40} />
                </SanitaryIconWrapper>
              </View>
              <Separator orientation="vertical" height="120px" />
              <View>
                <Text type="titleXL" textAlign="center">18</Text>
                <Text>Points d’eau</Text>
                <SanitaryIconWrapper>
                  <Toilets primaryColor={color.primary.blueExtraDark} width={40} height={40} />
                </SanitaryIconWrapper>
              </View>
              <Separator orientation="vertical" height="120px" />
              <View>
                <Text type="titleXL" textAlign="center">167</Text>
                <Text>Toilettes publiques</Text>
                <SanitaryIconWrapper>
                  <Toilets primaryColor={color.primary.blueExtraDark} width={40} height={40} />
                </SanitaryIconWrapper>
              </View>
            </SanitaryCard>
          </View>
          <SubGrid>
            <Card backgroundColor="blue" style={{ flex: 1 }}></Card>
            <HealthCard style={{ flex: 1 }}></HealthCard>
          </SubGrid>
        </PageContentRightColumn>
      </PageContent>
    </PageContentWrapper>
  );
}
