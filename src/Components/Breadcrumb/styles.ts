import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";

type BreadcrumbProps = {
  marginBottom?: number;
};

export const Breadcrumb = styled.TouchableOpacity<BreadcrumbProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${getColumnWidth(23, true)}px;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px`}
`;
