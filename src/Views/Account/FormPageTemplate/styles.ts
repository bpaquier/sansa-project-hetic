import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";
const { sizes, color, shape } = Theme;

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
  width: ${getColumnWidth(21, false)};
  background-color: ${color?.primary?.white};
  margin-left: ${getColumnWidth(3, false)};

  padding: ${getColumnWidth(1, false)};
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageWrapperMobile = styled.View`
  width: 100%;
  height: 150px;
  align-items: center;
  margin-bottom: 50px;
`;

export const ImageWrapperBorne = styled.View`
  align-items: center;
  justify-content: flex-start;
  aspect-ratio: 1;
  width: ${getColumnWidth(10, false)};
  margin-left: ${getColumnWidth(2, false)}; ;
`;

export const FormWrapperMobile = styled.View`
  width: 100%;
`;

export const FormWrapperBorne = styled.ScrollView``;

export const BottomText = styled.View`
  margin: 16px 0 10px;
`;
