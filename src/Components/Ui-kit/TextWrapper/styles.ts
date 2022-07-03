import styled from "styled-components/native";

type WrapperProps = {
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
};

export const Wrapper = styled.View<WrapperProps>`
  margin: ${({ marginTop, marginBottom, marginLeft, marginRight }) =>
    `${marginTop ?? 0}px ${marginRight ?? 0}px ${marginBottom ?? 0}px ${
      marginLeft ?? 0
    }px`};
`;
