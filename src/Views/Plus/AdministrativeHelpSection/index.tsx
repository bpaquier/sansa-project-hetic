import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-native";

import { FlashlightIllustrationWrapper, Wrapper } from "./styles";
import Text from "~/Components/Ui-kit/Text";
import SpotlightHelpIllustration from "~/Views/Plus/Illustrations/SpotlightHelpIllustration";

export default function AdministrativeHelpSection(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Wrapper activeOpacity={0.7} onPress={() => navigate("/faq")}>
      <Text type="paragraph" color="black20">
        {t("plus.consultList")}
      </Text>
      <Text type="titleL">
        {t("administrativeAssistance.administrativeAssistance")}
      </Text>
      <FlashlightIllustrationWrapper>
        <SpotlightHelpIllustration width="100%" />
      </FlashlightIllustrationWrapper>
    </Wrapper>
  );
}
