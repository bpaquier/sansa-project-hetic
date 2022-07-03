import { useNavigate } from "react-router-native";

import {
  ButtonsContainerMobile,
  ButtonsContainerBorne,
  ButtonWrapperMobile,
  ButtonWrapperBorne
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

  const ButtonsContainer = (
    isMobile ? ButtonsContainerMobile : ButtonsContainerBorne
  ) as React.ElementType;

  const ButtonWrapper = (
    isMobile ? ButtonWrapperMobile : ButtonWrapperBorne
  ) as React.ElementType;

  return (
    <>
      <TextWrapper
        marginBottom={8}
        type="titleL"
        textAlign={isMobile ? "left" : "center"}
      >
        {isMobile ? "SANSA" : "SANSA, c'est quoi ?"}
      </TextWrapper>
      <Text
        type="paragraph"
        color="black20"
        textAlign={isMobile ? "left" : "center"}
      >
        Sansa c’est la plateforme qui référence les lieux et les services utiles
        aux personnes en difficultés.
      </Text>
      {!isMobile && <SansaBorneDescription />}
      <ButtonsContainer>
        <Button
          text="Se connecter"
          fullWidth={isMobile}
          onPress={() => navigate("/login")}
        />
        <ButtonWrapper>
          <Button
            type={isMobile ? "tertiary" : "secondary"}
            text="S'inscrire"
            fullWidth={isMobile}
            onPress={() => navigate("/register")}
          />
        </ButtonWrapper>
      </ButtonsContainer>
    </>
  );
}
