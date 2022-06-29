import { LogoWrappers, TextMissionsPlusWrapper } from "./styles";
import Comment from "~/Components/Icons/System/Communication/Comment";
import File from "~/Components/Icons/System/File/File";
import Building from "~/Components/Icons/System/Map/Building";
import Text from "~/Components/Ui-kit/Text";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import theme from "~/Styles/theme.styles";

export default function SansaBorneDescription(): JSX.Element {
  return (
    <>
      <TextWrapper marginTop={32} color="grey" textAlign="center" weight="bold">
        Ses missions
      </TextWrapper>
      <TextMissionsPlusWrapper>
        <LogoWrappers>
          <Building width={14} height={17} color={theme.color.primary.white} />
        </LogoWrappers>
        <Text type="paragraph" color="black40">
          Orienter toutes les personnes en situation difficile vers les
          structures qui pourraient les aider.
        </Text>
      </TextMissionsPlusWrapper>
      <TextMissionsPlusWrapper>
        <LogoWrappers>
          <File width={12} height={17} color={theme.color.primary.white} />
        </LogoWrappers>
        <Text type="paragraph" color="black40">
          Mettre à disposition un outil ouvert à tous, ergonomique, simple et
          rapide d’utilisation.
        </Text>
      </TextMissionsPlusWrapper>
      <TextMissionsPlusWrapper>
        <LogoWrappers>
          <Comment width={17} height={15} color={theme.color.primary.white} />
        </LogoWrappers>
        <Text type="paragraph" color="black40">
          Permettre l’accès à un espace privé contenant un coffre fort numérique
          et la liste de vos lieux favoris.
        </Text>
      </TextMissionsPlusWrapper>
    </>
  );
}
