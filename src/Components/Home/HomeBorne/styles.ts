import { Platform } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";

const { color } = Theme;

export const PageContent = styled.ScrollView`
  flex: 1;
  left: ${getColumnWidth(3, false)}px;
  width: ${getColumnWidth(21, false)}px;
`;

interface CardProps {
  columnWidth?: number;
  backgroundColor?: "white" | "blue";
}

export const Card = styled.View<CardProps>((props) => ({
  padding: "20px",
  borderRadius: "24px",
  overflow: "hidden",
  backgroundColor: color.primary[props.backgroundColor || "white"]
}));

export const CardTouchable = styled.TouchableOpacity<CardProps>((props) => ({
  padding: "20px",
  borderRadius: "24px",
  overflow: "hidden",
  backgroundColor: color.primary[props.backgroundColor || "white"]
}));

export const FirstRow = styled.View`
  flex-direction: row;
  height: 72.5%;
`;

export const SecondRow = styled.View`
  flex-direction: row;
`;

export const MapButtonWrapper = styled.View`
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 20px;
  elevation: ${Platform.OS === "android" ? 50 : 0};
`;

export const MapCard = styled(Card)`
  position: relative;
  margin-right: ${getColumnWidth(1, false)}px;
  padding: 8px;
  width: ${getColumnWidth(9, false)}px;
`;

export const MapWrapper = styled.View`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`;

export const Map = styled(MapView)`
  z-index: 0;
  width: 100%;
  height: 100%;
`;

export const AssociationsCard = styled(CardTouchable)`
  flex: 2;
  margin-right: ${getColumnWidth(1, false)}px;
  width: ${getColumnWidth(9, false)}px;
  display: flex;
  justify-content: space-between;
`;

export const AssociationsCardTitleWrapper = styled.View`
  margin: 0px 0 auto;
`;

export const NoEventIllustrationWrapper = styled.View`
  margin: auto auto 0;
`;

export const EventCard = styled(Card)`
  flex: 2;
  width: 100%;
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
  width: 100%;
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

export const SleepCard = styled(CardTouchable)`
  flex: 1;
  width: ${getColumnWidth(5, false)}px;
  display: flex;
`;

export const SleepCardTitleWrapper = styled.View`
  margin-bottom: 20px;
`;

export const SleepCardArrowWrapper = styled.View`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const SleepIllustrationWrapper = styled.View`
  position: absolute;
  right: -55px;
  bottom: 0;
`;

export const HealthCard = styled(CardTouchable)`
  flex: 1;
  margin-left: ${getColumnWidth(1, false)}px;
  width: ${getColumnWidth(5, false)}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HealthCardHeadlineWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HealthCardTitleWrapper = styled.View``;

export const ArrowIconWrapper = styled.View`
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 8px;
  background-color: ${color.primary.blue};
`;

export const SleepCardTextDescription = styled.View`
  width: ${getColumnWidth(2, false)}px;
`;

export const RightColumn = styled.View`
  flex: 1;
`;
