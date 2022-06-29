import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import Text from "~/Components/Ui-kit/Text";
import Theme from "~/Styles/theme.styles";
import MapView from "react-native-maps";
import NoEventIllustration from "./NoEventIllustration"

const { color, grid } = Theme;

export const PageContent = styled.View`
  flex-direction: row;
  left: ${getColumnWidth(3, false)};
  width: ${getColumnWidth(21, false)};
  height: 100%;
`;

export const PageContentLeftColumn = styled.View`
  width: ${getColumnWidth(9, false)};
`;

export const PageContentRightColumn = styled.View`
  width: ${getColumnWidth(11, false)};
  margin-left: ${getColumnWidth(1, false)};
`;

export const SubGrid = styled.View`
  flex-grow: 1;
  flex-direction: row;
  margin-top: ${getColumnWidth(.75, false)};
`;

interface CardProps {
  columnWidth?: Number;
  backgroundColor?: 'white' | 'blue';
}

export const Card = styled.View<CardProps>`
  padding: 20px;
  border-radius: 24px;
  overflow: hidden;

  ${({ backgroundColor }) => `background-color: ${color.primary[backgroundColor || 'white']}`};
`;

export const MapCard = styled(Card)`
  flex: 4;
  padding: 8px;
`;

export const MapWrapper = styled.View`
  border-radius: 16px;
  overflow: hidden;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`

export const AssociationsCard = styled(Card)`
  flex: 1;
  margin-top: ${getColumnWidth(.75, false)};
`;

export const NoEventIllustrationWrapper = styled.View`
  margin: 20px auto 0;
`;

export const SanitaryCard = styled(Card)`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: ${getColumnWidth(.75, false)};
`;

export const SanitaryIconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px auto 0;
  border: 1px solid ${color.primary.blue};
  border-radius: 50px;
  width: 60px;
  height: 60px;
`;

export const HealthCard = styled(Card)`
  flex: 1;
  margin-left: ${getColumnWidth(1, false)};
`;