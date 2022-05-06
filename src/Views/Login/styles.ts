import styled from "styled-components/native";

import { gridColumnWidth, globalStyle } from "~/Styles/mixins.styles";

export const PageWrapper = styled.View`
  ${globalStyle?.pageMobile}
  width: 100%;
  align-items: center;
`;

export const PageWrapperBorne = styled.View`
  width: 100%;
  height: 100%;
  padding-left: 140px;
`;

export const PageContent = styled.View`
  align-items: center;
  width: 100%;
`;

export const PageContentBorne = styled.View`
  width: 100%;
  height: 100%;

  border: 1px solid red;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.View`
  ${gridColumnWidth(5)}
  height: 150px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

export const BottomText = styled.View`
  margin: 16px 0 10px;
`;
