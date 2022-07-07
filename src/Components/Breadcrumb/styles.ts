import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";

export const Breadcrumb = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${getColumnWidth(23, true)}px;
`;
