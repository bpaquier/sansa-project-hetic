import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";
const { color, shape } = theme;

export const AccordionWrapper = styled.View`
  width: 100%;
  border-radius: ${shape?.radius?.input}px;
  background-color: ${color?.primary?.white};
`;

export const Head = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
`;

export const TextWrapper = styled.View`
  flex: 1 1;
`;

export const ContentWrapper = styled.View``;
