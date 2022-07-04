import React, { ReactElement } from "react";

import { PageContainerBorne, PageContainerMobile } from "./styles";
import { useGlobalContext } from "~/Contexts/globalContext";

interface PageContentWrapperProps {
  children: ReactElement;
  noPaddingX?: boolean;
  backgroundColor?: "grey" | "white";
}
export default function PageContentWrapper({
  children,
  noPaddingX,
  backgroundColor
}: PageContentWrapperProps) {
  const { isMobile } = useGlobalContext();

  const ContentContainer = (
    isMobile ? PageContainerMobile : PageContainerBorne
  ) as React.ElementType;

  return (
    <ContentContainer backgroundColor={backgroundColor} noPaddingX={noPaddingX}>
      {children}
    </ContentContainer>
  );
}
