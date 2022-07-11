import styled from "styled-components/native";

export const ButtonsContainerMobile = styled.View`
  margin-top: 40px;
`;

export const ButtonsContainerBorne = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
`;

export const ButtonWrapperBorne = styled.View`
  margin-left: 16px;
`;

export const ButtonWrapperMobile = styled.View``;

export const ContainerDescription = styled.View<{ isMobile?: boolean }>`
  display: flex;
  width: 100%;
  ${({ isMobile }) => !isMobile && "height: 100%"}
  justify-content: space-between;
`;
