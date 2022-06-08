import React, { ReactElement } from "react";

import { PageContainerBorne, PageContainerMobile } from "./styles";
import { useGlobalContext } from "~/Contexts/globalContext";

interface PageContentWrapperProps {
  children: ReactElement;
}
export default function PageContentWrapper({
  children
}: PageContentWrapperProps) {
  const { isMobile } = useGlobalContext();

  const ContentContainer = (
    isMobile ? PageContainerMobile : PageContainerBorne
  ) as React.ElementType;

  return <ContentContainer>{children}</ContentContainer>;
}
