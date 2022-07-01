import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

export const ServicesWrapper = styled.View`
  width: auto;
  height: 100%;

  border-top-right-radius: ${theme?.shape?.radius?.input}px;
`;

export const IconWrapper = styled.View`
  margin-right: 16px;
`;

export const ServicesList = styled.View`
  flex: 1 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Service = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 60px;
  margin-bottom: 8px;
`;

export const ButtonWrapper = styled.View`
  margin-top: 10px;
`;
