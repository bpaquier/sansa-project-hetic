//@ts-ignore
import styled from "styled-components/native";

import {
  StyledPageContainer,
  StyledPageContainerProps,
} from "~/Styles/pageGlobal";

interface StyledViewProps extends StyledPageContainerProps {}

export const StyledView = styled(StyledPageContainer)`
  width: 100%;
  height: 100%;
  background-color: pink;
`;

interface StyledTextProps {
  color: string;
}

export const StyledText = styled.Text`
  color: ${(props: StyledTextProps) => props.color || "black"};
`;
