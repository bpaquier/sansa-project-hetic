import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

export const PanelContentWrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${theme?.color?.primary?.white};
  padding: 40px 0;
`;

export const ServicesList = styled.View`
  flex: 1 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Service = styled.View`
  margin-right: 60px;
  margin-bottom: 12px;
`;

export const IconWrapper = styled.View`
  margin-right: 16px;
`;
