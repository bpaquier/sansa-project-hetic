import { Dimensions, Image } from "react-native";
import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

const { color } = theme;

export const OnboardingPageWrapper = styled.View`
  width: ${Dimensions.get("window").width};
`;

export const FlagButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1px;
  border-radius: 50px;
  background-color: ${color.primary.white};
`;

export const StartScreenContentWrapper = styled.View`
  margin-top: 50%;
  align-items: center;
`;

export const OnboardingImagePageWrapper = styled(OnboardingPageWrapper)`
  justify-content: center;
  position: relative;
  height: 100%;
  background-color: ${color.neutral.black100};
`;

export const OnboardingImage = styled(Image)`
  width: ${Dimensions.get("window").width};
  height: ${(Dimensions.get("window").width * 71) / 40};
  resize-mode: contain;
`;
