import styled from "styled-components/native";

interface DescriptionProps {
  height?: string;
}

export const DescriptionWrapper = styled.View`
  width: 47%;
  max-height: 100%;
`;

export const TitleWrapper = styled.View`
  margin-bottom: 24px;
`;

export const DescriptionText = styled.View`
  justify-content: center;
  ${({ height }: DescriptionProps) => (height ? height : "height: auto")};
`;

export const DateWrapper = styled.View`
  margin-top: 24px;
`;

export const ButtonWrapper = styled.View`
  margin-top: 8px;
`;
