import SpotlightHelpIllustration from "../Illustrations/SpotlightHelpIllustration";
import { ImageWrapper } from "../styles";
import Text from "~/Components/Ui-kit/Text";

export default function AdministrativeHelpSection(): JSX.Element {
  return (
    <>
      <Text type="paragraph" color="black20">
        Consulter la liste
      </Text>
      <Text type="titleL">Aides administratives</Text>
      <ImageWrapper>
        <SpotlightHelpIllustration width="100%" />
      </ImageWrapper>
    </>
  );
}
