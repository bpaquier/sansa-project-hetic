import styled from "styled-components/native";

import { gridColumnWidth } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";
const { sizes, color, shape } = Theme;

export const PageWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

export const PageWrapperBorne = styled.View`
  width: 100%;
  height: 100%;
  padding: 2% 0 2% ${sizes?.navBorneWidth + 10}px;
  justify-content: center;
  align-items: center;
`;

export const PageContent = styled.View`
  align-items: center;
  width: 100%;
`;

export const PageContentBorne = styled.View`
  border-radius: ${shape?.radius?.input}px;
  width: 90%;
  background-color: ${color?.primary?.white};
  padding: 40px 80px;
`;

export const ContentWrapperMobile = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: ${sizes?.mobilePageMarginBottom}px;
`;

export const ContentWrapperBorne = styled.View`
  width: 100%;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;

export const ImageWrapperMobile = styled.View`
  ${gridColumnWidth(5)}
  height: 150px;
  align-items: center;
  margin-bottom: 50px;
`;

export const ImageWrapperBorne = styled.View`
  width: 50%;
  align-items: center;
  justify-content: flex-start;
`;

export const FormWrapperMobile = styled.View`
  width: 100%;
`;
export const FormWrapperBorne = styled.ScrollView`
  margin-right: 100px;
`;

export const BottomText = styled.View`
  margin: 16px 0 10px;
`;
