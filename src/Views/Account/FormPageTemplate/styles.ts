import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";
const { sizes, color, shape } = theme;

export const PageWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

export const PageWrapperBorne = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const PageContent = styled.View`
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  margin-bottom: ${sizes?.mobilePageMarginBottom}px;
`;

export const PageContentBorne = styled.View`
  border-radius: ${shape?.radius?.input}px;
  width: ${getColumnWidth(21, false)}px;
  background-color: ${color?.primary?.white};
  margin-left: ${getColumnWidth(3, false)}px;
  padding: ${getColumnWidth(1, false)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButtonMobile = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const BackButtonBorne = styled.TouchableOpacity`
  position: absolute;
  top: ${getColumnWidth(1, false)};
  left: ${(
    parseFloat(getColumnWidth(0.5, false)) -
    theme.sizes.icon.system / 2
  ).toString() + "px"};
  z-index: 1;
`;

export const ImageWrapperMobile = styled.View`
  width: 100%;
  height: 150px;
  align-items: center;
  margin-bottom: 20px;
`;

export const ImageWrapperBorne = styled.View`
  align-items: center;
  justify-content: flex-start;
  width: ${getColumnWidth(10, false)};
  max-height: 480px;
  margin-left: ${getColumnWidth(2, false)}px; ;
`;

export const FormWrapperMobile = styled.View`
  width: 100%;
`;

export const FormWrapperBorne = styled.ScrollView``;

export const BottomText = styled.View`
  margin: 16px 0 10px;
`;
