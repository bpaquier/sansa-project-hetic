import styled from "styled-components/native";

import { globalStyle } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";
const { color } = Theme;
interface StyledViewProps {
  height: number;
  width: number;
}

export const SafeArea = styled.View`
  width: ${(props: StyledViewProps) => props.width}px;
  /* height: ${(props: StyledViewProps) => props.height}px; */
  height: 100%;
  align-items: center;
  background-color: ${color?.neutral?.black5};
`;

export const PageContainerMobile = styled.ScrollView`
  ${globalStyle?.pageMobile}
  width: 100%;
`;

export const PageContainerBorne = styled.View`
  width: 100%;
  height: 100%;
`;
