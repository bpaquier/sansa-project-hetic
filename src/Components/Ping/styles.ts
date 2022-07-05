import styled from "styled-components/native";
2;

interface IndexWrapperProps {
  small?: boolean;
}

export const PingWrapper = styled.View`
  align-items: center;
`;

export const IndexWrapper = styled.View`
  position: absolute;
  top: ${({ small }: IndexWrapperProps) => (small ? "5px" : "10px")};
  left: 0;
  width: 100%;
  align-items: center;
  z-index: 2;
`;
