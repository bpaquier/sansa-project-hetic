import { View, Dimensions } from "react-native";
import HandIcon from "./Svg/HandIcon";
import LeftArrow from "./Svg/LeftArrow";
import UpArrow from "./Svg/UpArrow";
import SansaLogo from "./Svg/SansaLogo";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import Text from "~/Components/Ui-kit/Text";
import { NapOverlayWrapper, TouchScreenWrapper, HelperWrapper, HelperTextWrapper, HelperText, LogoWrapper, LogoTextWrapper } from "./styles";

export default function NapOverlay(): JSX.Element {
  return (
    <NapOverlayWrapper>
      <TouchScreenWrapper>
        <HandIcon />
        <TextWrapper marginTop={16} type="titleL" textAlign="center" color="white">
          Touchez pour commencer
        </TextWrapper>
      </TouchScreenWrapper>
      <HelperWrapper top="30%" left="11%">
        <HelperTextWrapper marginBottom={20}>
          <HelperText textAlign="center" color="white">
            Ici, vous pourrez accèder à la page d’accueil, la page de recherche ou à des aides administratives/gestion du compte
          </HelperText>
        </HelperTextWrapper>
        <LeftArrow />
      </HelperWrapper>
      <HelperWrapper top="16%" right="2%" alignItems="center">
        <UpArrow />
        <HelperTextWrapper marginTop={20}>
          <HelperText textAlign="center" color="white">
            Ici, utilisez les catégories pour rechercher vos besoins et la barre de recherche pour chercher une association
          </HelperText>
        </HelperTextWrapper>
      </HelperWrapper>
      <LogoWrapper>
        <LogoTextWrapper>
          <TextWrapper type="titleXL" textAlign="right" color="white">
            Bienvenue sur SANSA !
          </TextWrapper>
          <TextWrapper marginTop={8} textAlign="right" color="white">
            Solution d’aide numérique aux sans-abris
          </TextWrapper>
        </LogoTextWrapper>
        <SansaLogo />
      </LogoWrapper>
    </NapOverlayWrapper>
  );
}
