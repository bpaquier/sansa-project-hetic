import { FlashlightIllustrationWrapper } from "./styles";
import Text from "~/Components/Ui-kit/Text";
import SpotlightHelpIllustration from "~/Views/Plus/Illustrations/SpotlightHelpIllustration";

export default function AdministrativeHelpSection(): JSX.Element {
  return (
    <>
      <Text type="paragraph" color="black20">
        Consulter la liste
      </Text>
      <Text type="titleL">Aides administratives</Text>
      <FlashlightIllustrationWrapper>
        <SpotlightHelpIllustration width="100%" />
      </FlashlightIllustrationWrapper>
    </>
  );
}
