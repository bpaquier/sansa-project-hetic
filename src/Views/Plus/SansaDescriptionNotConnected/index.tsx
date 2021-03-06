import { Fragment } from "react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-native";

import {
  ButtonsContainerMobile,
  ButtonsContainerBorne,
  ButtonWrapperBorne,
  ContainerDescription,
  TopContainer,
  ScrollContainer
} from "./styles";
import Button from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import SansaBorneDescription from "~/Views/Plus/SansaBorneDescription";

type SansaDescriptionNotConnectedProps = {
  isMobile?: boolean;
};

export default function SansaDescriptionNotConnected({
  isMobile
}: SansaDescriptionNotConnectedProps): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const ButtonsContainer = (
    isMobile ? ButtonsContainerMobile : ButtonsContainerBorne
  ) as React.ElementType;

  const ButtonWrapper = (
    isMobile ? Fragment : ButtonWrapperBorne
  ) as React.ElementType;

  return (
    <ContainerDescription isMobile={isMobile}>
      <TopContainer>
        <ScrollContainer contentContainerStyle={{ flexGrow: 1 }}>
          <TextWrapper
            type="titleL"
            textAlign={isMobile ? "left" : "center"}
            marginBottom={16}
          >
            {isMobile ? t("common.sansa").toUpperCase() : t("plus.whatIsSansa")}
          </TextWrapper>
          <Text
            type="paragraph"
            color="black40"
            textAlign={isMobile ? "left" : "center"}
          >
            {t("plus.sansaDescription")}
          </Text>
          {!isMobile && <SansaBorneDescription />}
        </ScrollContainer>
      </TopContainer>
      <ButtonsContainer>
        <Button text={t("common.login")} onPress={() => navigate("/login")} />
        <ButtonWrapper>
          <Button
            type={isMobile ? "tertiary" : "secondary"}
            text={t("common.register")}
            onPress={() => navigate("/register")}
          />
        </ButtonWrapper>
      </ButtonsContainer>
    </ContainerDescription>
  );
}
