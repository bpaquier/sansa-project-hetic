import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

export const ServicesWrapper = styled.View`
  width: auto;
  height: 100%;

  border-top-right-radius: ${theme?.shape?.radius?.input}px;
`;

export const ServicesList = styled.View`
  flex: 1 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Service = styled.View`
  margin-right: 60px;
  margin-bottom: 8px;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  margin-top: 10px;
`;
