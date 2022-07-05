import MapView from "react-native-maps";
import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";

const { color } = Theme;

export const PageContent = styled.View`
  flex: 1;
  left: ${getColumnWidth(3, false)};
  width: ${getColumnWidth(21, false)};
`;

interface CardProps {
  columnWidth?: number;
  backgroundColor?: "white" | "blue";
}

export const Card = styled.View<CardProps>((props) => ({
  padding: "20px",
  borderRadius: "24px",
  overflow: "hidden",
  backgroundColor: color.primary[props.backgroundColor || "white"],
}));

export const FirstRow = styled.View`
  flex-direction: row;
  height: 72.5%;
`;

export const EmptyRow = styled.View`
  height: 5%;
`;

export const SecondRow = styled.View`
  flex-direction: row;
  height: 22.5%;
`;

export const MapCard = styled(Card)`
  margin-right: ${getColumnWidth(1, false)};
  padding: 8px;
  width: ${getColumnWidth(9, false)};
`;

export const MapWrapper = styled.View`
  border-radius: 16px;
  overflow: hidden;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const AssociationsCard = styled(Card)`
  flex: 1;
  margin-right: ${getColumnWidth(1, false)};
  width: ${getColumnWidth(9, false)};
`;

export const AssociationsCardTitleWrapper = styled.View`
  margin: 16px 0 auto;
`;

export const NoEventIllustrationWrapper = styled.View`
  margin: auto auto 0;
`;

export const EventCard = styled(Card)`
  flex: 2;
  width: ${getColumnWidth(11, false)};
`;

export const EventCardTitleWrapper = styled.View`
  margin-top: 8px;
`;

export const SanitaryCard = styled(Card)`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  width: ${getColumnWidth(11, false)};
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

export const SportCard = styled(Card)`
  flex: 1;
  width: ${getColumnWidth(5, false)};
`;

export const SportCardTitleWrapper = styled.View`
  margin-bottom: 20px;
`;

export const SportIllustrationWrapper = styled.View`
  position: absolute;
  right: -20px;
  bottom: 0;
`;

export const HealthCard = styled(Card)`
  flex: 1;
  margin-left: ${getColumnWidth(1, false)};
  width: ${getColumnWidth(5, false)};
`;

export const HealthCardHeadlineWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: auto;
`;

export const HealthCardTitleWrapper = styled.View`
  margin-bottom: 8px;
`;

export const HealthIconWrapper = styled.View`
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 12px;
  background-color: ${color.primary.blue};
`;
