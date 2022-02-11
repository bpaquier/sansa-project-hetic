//@ts-ignore
import styled from "styled-components/native";

import { globalStyle } from "~/Styles/mixins.styles";

export const Container = styled.ScrollView`
  ${globalStyle.page}
  background-color: teal;
`;

interface StyledTextProps {
  color: string;
}

export const StyledText = styled.Text`
  color: ${(props: StyledTextProps) => props.color || "black"};
`;
