import styled from "styled-components/native";

import { globalStyle } from "~/Styles/mixins.styles";

interface StyledViewProps {
  height: number;
  width: number;
}

export const SafeArea = styled.View`
  width: ${(props: StyledViewProps) => props.width}px;
  height: ${(props: StyledViewProps) => props.height}px;
`;

export const PageContainer = styled.ScrollView`
  ${globalStyle.page}
`;
