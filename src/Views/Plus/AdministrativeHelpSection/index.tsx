import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-native";

import { FlashlightIllustrationWrapper, Wrapper } from "./styles";
import Text from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";
import { getColumnWidth } from "~/Styles/mixins.styles";
import SpotlightHelpIllustration from "~/Views/Plus/Illustrations/SpotlightHelpIllustration";

export default function AdministrativeHelpSection(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isMobile } = useGlobalContext();
  return (
    <Wrapper
      activeOpacity={0.7}
      onPress={() => navigate("/faq")}
      isMobile={isMobile}
    >
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
