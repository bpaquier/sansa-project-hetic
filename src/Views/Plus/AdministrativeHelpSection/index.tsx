import { useTranslation } from "react-i18next";

import { FlashlightIllustrationWrapper } from "./styles";
import Text from "~/Components/Ui-kit/Text";
import SpotlightHelpIllustration from "~/Views/Plus/Illustrations/SpotlightHelpIllustration";

export default function AdministrativeHelpSection(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Text type="paragraph" color="black20">
        {t("plus.consultList")}
      </Text>
      <Text type="titleL">{t("plus.administrativeAssistance")}</Text>
      <FlashlightIllustrationWrapper>
        <SpotlightHelpIllustration width="100%" />
      </FlashlightIllustrationWrapper>
    </>
  );
}
