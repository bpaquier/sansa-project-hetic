import styled from "styled-components/native";

import Theme from "~/Styles/theme.styles";

const { color } = Theme;

interface CardProps {
  columnWidth?: number;
  backgroundColor?: "white" | "blue";
}

export const Card = styled.View<CardProps>`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 24px;
  overflow: hidden;

  ${({ backgroundColor }) =>
    `background-color: ${color.primary[backgroundColor || "white"]}`};
`;

export const AssociationsCardTitleWrapper = styled.View`
  margin-top: 12px;
`;

export const NoEventIllustrationWrapper = styled.View`
  margin: 12px auto 0;
`;

export const EventCard = styled(Card)`
  margin-top: 20px;
`;

export const EventCardTitleWrapper = styled.View`
  margin-top: 8px;
`;

export const SanitaryCard = styled(Card)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SanitaryItemWrapper = styled.TouchableOpacity`
  flex: 1;
  flex-shrink: 1;
  justify-content: space-between;
  height: 100px;
`;

export const SanitaryIconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid ${color.primary.blue};
  border-radius: 50px;
  width: 40px;
  height: 40px;
`;

export const SportTitleWrapper = styled.View`
  margin-bottom: 20px;
`;

export const SportIllustrationWrapper = styled.View`
  position: absolute;
  right: -20px;
  bottom: 0;
`;

export const HealthCard = styled(Card)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 168px;
`;

export const HealthCardTitleWrapper = styled.View`
  margin-top: 4px;
`;

export const HealthIconWrapper = styled.View`
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  padding: 16px;
  border-radius: 50px;
  background-color: ${color.primary.blue};
`;
