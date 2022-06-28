import { Link } from "react-router-native";
import styled from "styled-components/native";

import { LinkProps } from "./index";

interface LinkComponentProps extends LinkProps {
  isMobile?: boolean;
  isActive?: boolean;
}

export const LinkContainer = styled(Link)<LinkComponentProps>`
  background-color: transparent;
`;
