import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { color, shape, sizes, grid } = theme;

interface GlobalProps {
  isMobile?: boolean;
}

export const SearchResultsWrapper = styled.View`
  position: absolute;
  left: ${({ isMobile }: GlobalProps) =>
    isMobile ? `-12.5px` : `${getColumnWidth(3, false)}px`};
  margin-left: ${grid?.borneGutter}px;
  top: ${({ isMobile }: GlobalProps) =>
    isMobile
      ? "62.5px"
      : `${sizes?.bornContent?.topBarHeight + grid?.borneGutter + 8}px`};
  background-color: ${color.primary.white};
  border-radius: ${shape?.radius?.input}px;
  width: ${({ isMobile }: GlobalProps) =>
    isMobile ? "100%" : `${getColumnWidth(7.5, false)}px`};
  padding: 32px 0;
`;

export const OverlayLoading = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  justify-content: center;
`;

export const ResultsWrapper = styled.ScrollView`
  padding: 0 24px;
  flex: 1 1;
  max-height: 300px;
`;

export const Result = styled.TouchableOpacity`
  margin-bottom: 12px;
  flex-direction: row;
`;

export const InfoWrapper = styled.View``;

export const NameWrapper = styled.View`
  height: 24px;
`;
export const AdressWrapper = styled.View`
  height: 24px;
`;

export const SpinnerWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;
