import { useTranslation } from "react-i18next";
import { Alert } from "react-native";
import { useNavigate } from "react-router-native";

import { FlashlightIllustrationWrapper, Wrapper } from "./styles";
import Text from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";
import { getColumnWidth } from "~/Styles/mixins.styles";
import SpotlightHelpIllustration from "~/Views/Plus/Illustrations/SpotlightHelpIllustration";

export default function AdministrativeHelpSection(): JSX.Element {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { isMobile } = useGlobalContext();

  const handlePress = () => {
    if (i18n.language === "ar-SA") {
      Alert.alert(
        t("administrativeAssistance.missingTraductionTitle"),
        t("administrativeAssistance.missingTraductionPrompt"),
        [
          {
            text: t("administrativeAssistance.cancel"),
            style: "cancel"
          },
          {
            text: t("administrativeAssistance.french"),
            onPress: () => {
              i18n.changeLanguage("fr-FR");
              navigate("/faq");
            }
          },
          {
            text: t("administrativeAssistance.english"),
            onPress: () => {
              i18n.changeLanguage("en-EN");
              navigate("/faq");
            }
          }
        ]
      );
    } else {
      navigate("/faq");
    }
  };

  return (
    <Wrapper activeOpacity={0.7} onPress={handlePress} isMobile={isMobile}>
      <Text type="paragraph" color="black20">
        {t("plus.consultList")}
      </Text>
      <Text type="titleL">
        {t("administrativeAssistance.administrativeAssistance")}
      </Text>
      <FlashlightIllustrationWrapper isMobile={isMobile}>
        <SpotlightHelpIllustration
          width={getColumnWidth(isMobile ? 21 : 6, isMobile ?? false)}
        />
      </FlashlightIllustrationWrapper>
    </Wrapper>
  );
}
