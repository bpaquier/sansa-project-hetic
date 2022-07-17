import React, { ReactElement } from "react";

import {
  PageContainerBorne,
  PageContainerMobileNoScroll,
  PageContainerMobileScroll
} from "./styles";
import { useGlobalContext } from "~/Contexts/globalContext";

interface PageContentWrapperProps {
  children: ReactElement;
  noPaddingX?: boolean;
  backgroundColor?: "grey" | "white" | "blue";
  noScroll?: boolean;
}
export default function PageContentWrapper({
  children,
  noPaddingX,
  backgroundColor,
  noScroll
}: PageContentWrapperProps) {
  const { isMobile, statusBarHeight } = useGlobalContext();

  const ContentContainer = (
    isMobile
      ? noScroll
        ? PageContainerMobileNoScroll
        : PageContainerMobileScroll
      : PageContainerBorne
  ) as React.ElementType;

  return (
    <ContentContainer
      backgroundColor={backgroundColor}
      noPaddingX={isMobile && noPaddingX ? noPaddingX : false}
      {...{ statusBarHeight }}
    >
      {children}
    </ContentContainer>
  );
}
