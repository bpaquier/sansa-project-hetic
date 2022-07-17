import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useNavigate } from "react-router-native";

import {
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
  HealthIconWrapper,
  CardTouchable,
  GlobalWrapper
} from "./styles";
import NoEventIllustration from "~/Components/Home/Illustrations/NoEventIllustration";
import SleepIllustration from "~/Components/Home/Illustrations/SleepIllustration";
import Shower from "~/Components/Icons/Categories/Hygiene/Shower";
import Toilets from "~/Components/Icons/Categories/Hygiene/Toilets";
import WaterFountain from "~/Components/Icons/Categories/Hygiene/WaterFountain";
import ArrowRight from "~/Components/Icons/System/Arrows/ArrowRight";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";
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
      <GlobalWrapper>
        <Text color="black40" type="titleL">
          {t("home.home")}
        </Text>
        <EventCard style={boxShadow.panelAndroid}>
          <Text color="black60" type="small" textAlign="center">
            {t("home.eventsSoon")}
          </Text>
          <EventCardTitleWrapper>
            <Text type="titleM" textAlign="center">
              {t("home.noEventsPrompt")}
            </Text>
          </EventCardTitleWrapper>
          <NoEventIllustrationWrapper>
            <NoEventIllustration width="305px" height="144px" />
          </NoEventIllustrationWrapper>
        </EventCard>
        <SanitaryCard style={boxShadow.panelAndroid}>
          <SanitaryItemWrapper
            onPress={() =>
              setSearchParamsAndNavigate("/search", { filter: "Douche" })
            }
          >
            <Text type="paragraph" weight="bold" textAlign="center">
              {shower}
            </Text>
            <Text type="small" textAlign="center">
              {t(shower > 0 ? "home.publicShowers" : "home.publicShower")}
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
          <SanitaryItemWrapper
            onPress={() =>
              setSearchParamsAndNavigate("/search", {
                filter: "Fontaine à eau"
              })
            }
          >
            <Text type="paragraph" weight="bold" textAlign="center">
              {water}
            </Text>
            <Text type="small" textAlign="center">
              {t(water > 0 ? "home.wateringPlaces" : "home.wateringPlace")}
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
          <SanitaryItemWrapper
            onPress={() =>
              setSearchParamsAndNavigate("/search", { filter: "Toilettes" })
            }
          >
            <Text type="paragraph" weight="bold" textAlign="center">
              {toilets}
            </Text>
            <Text type="small" textAlign="center">
              {t(toilets > 0 ? "home.publicRestrooms" : "home.publicRestroom")}
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
        <CardTouchable
          style={boxShadow.panelAndroid}
          onPress={() =>
            setSearchParamsAndNavigate("/search", { filter: "fivebestorga" })
          }
          activeOpacity={0.7}
        >
          <Text color="black60">Associations</Text>
          <AssociationsCardTitleWrapper>
            <Text type="titleM">{t("home.closestAssociations")}</Text>
          </AssociationsCardTitleWrapper>
        </CardTouchable>
        <CardTouchable
          onPress={() =>
            setSearchParamsAndNavigate("/search", { filter: "Halte de nuit" })
          }
          activeOpacity={0.7}
          backgroundColor="blue"
          style={boxShadow.panelAndroid}
        >
          <SleepTitleWrapper>
            <Text color="white">
              {t("administrativeAssistance.hosting.hosting")}
            </Text>
            <ArrowRight color="white" />
          </SleepTitleWrapper>
          <Text type="titleXL" color="white">
            {housing}
          </Text>
          <Text color="white">
            {t(housing > 0 ? "home.nightShelters" : "home.nightShelter")}
          </Text>
          <SleepIllustrationWrapper>
            <SleepIllustration width="200px" height="102px" />
          </SleepIllustrationWrapper>
        </CardTouchable>
        <HealthCard
          style={boxShadow.panelAndroid}
          onPress={() =>
            setSearchParamsAndNavigate("/search", {
              filter: "Médecin généraliste"
            })
          }
          activeOpacity={0.7}
        >
          <HealthIconWrapper>
            <ArrowRight color="white" />
          </HealthIconWrapper>
          <View>
            <Text color="black60">Santé</Text>
            <HealthCardTitleWrapper>
              <Text type="titleM">Où puis-je me rendre ?</Text>
            </HealthCardTitleWrapper>
          </View>
        </HealthCard>
      </GlobalWrapper>
    </PageContentWrapper>
  );
}
