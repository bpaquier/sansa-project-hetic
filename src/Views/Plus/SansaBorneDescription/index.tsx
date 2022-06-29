import { useTranslation } from "react-i18next";

import { LogoWrappers, TextMissionsPlusWrapper } from "./styles";
import Comment from "~/Components/Icons/System/Communication/Comment";
import File from "~/Components/Icons/System/File/File";
import Building from "~/Components/Icons/System/Map/Building";
import Text from "~/Components/Ui-kit/Text";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import theme from "~/Styles/theme.styles";

export default function SansaBorneDescription(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <TextWrapper marginTop={32} color="grey" textAlign="center" weight="bold">
        {t("sesMissions")}
      </TextWrapper>
      <TextMissionsPlusWrapper>
        <LogoWrappers>
          <Building width={14} height={17} color={theme.color.primary.white} />
        </LogoWrappers>
        <Text type="paragraph" color="black40">
          {t("missionsPrompt1")}
        </Text>
      </TextMissionsPlusWrapper>
      <TextMissionsPlusWrapper>
        <LogoWrappers>
          <File width={12} height={17} color={theme.color.primary.white} />
        </LogoWrappers>
        <Text type="paragraph" color="black40">
          {t("missionsPrompt2")}
        </Text>
      </TextMissionsPlusWrapper>
      <TextMissionsPlusWrapper>
        <LogoWrappers>
          <Comment width={17} height={15} color={theme.color.primary.white} />
        </LogoWrappers>
        <Text type="paragraph" color="black40">
          {t("missionsPrompt3")}
        </Text>
      </TextMissionsPlusWrapper>
    </>
  );
}
