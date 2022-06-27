import styled from "styled-components/native";

import { IconProps } from ".";

interface IconStyledProps extends IconProps {
  bgColor?: string;
}

export const IconWrapper = styled.View`
  width: ${({ withBackground }: IconStyledProps) =>
    withBackground ? "30px" : "auto"};
  height: ${({ withBackground }: IconStyledProps) =>
    withBackground ? "30px" : "auto"};
  justify-content: center;
  align-items: center;
  ${({ withBackground, backgroundColor }: IconStyledProps) =>
    withBackground ? `background-color: ${backgroundColor} ` : ""}
  border-radius: 50px;
`;
