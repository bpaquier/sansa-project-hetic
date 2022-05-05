import styled from "styled-components/native";

import { gridColumnWidth, globalStyle } from "~/Styles/mixins.styles";

export const PageWrapper = styled.View`
  ${globalStyle?.pageWrapper}
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const PageWrapperBorne = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
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
