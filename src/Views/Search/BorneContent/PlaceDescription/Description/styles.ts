import styled from "styled-components/native";

interface DescriptionProps {
  height?: string;
}

export const DescriptionWrapper = styled.View`
  width: 47%;
  height: 100%;
  justify-content: space-between;
  margin-left: 6%;
`;

export const TitleWrapper = styled.View`
  margin-bottom: 8px;
`;

export const DescriptionText = styled.View`
  justify-content: center;
  ${({ height }: DescriptionProps) => (height ? height : "height: auto")};
`;

export const DateWrapper = styled.View`
  margin-top: 8px;
`;

export const ButtonWrapper = styled.TouchableOpacity``;
