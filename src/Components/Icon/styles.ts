import styled from "styled-components/native";

import { IconProps } from ".";

interface IconStyledProps extends IconProps {
  backgroundColor?: string;
  size?: number;
}

export const IconWrapper = styled.View`
  width: ${({ withBackground, size }: IconStyledProps) =>
    withBackground ? `${size * 1.5}px` : "auto"};
  height: ${({ withBackground, size }: IconStyledProps) =>
    withBackground ? `${size * 1.5}px` : "auto"};
  justify-content: center;
  align-items: center;
  ${({ withBackground, backgroundColor }: IconStyledProps) =>
    withBackground ? `background-color: ${backgroundColor} ` : ""}
  border-radius: 50px;
`;
