import React, { ReactElement, useEffect } from "react";

import { Dimensions } from "react-native";

import {
  SafeArea,
  PageContainerMobile,
  PageContainerBorne,
  PageContent
} from "./styles";
import Navigation from "~/Components/Navigation";
import { useGlobalContext } from "~/Contexts/globalContext";

interface PageProps {
  children: ReactElement;
}

export default function Page({ children }: PageProps) {
  const { height, width } = Dimensions.get("window");
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { setAppWidth, isMobile } = useGlobalContext();

  useEffect(() => {
    setAppWidth && setAppWidth(width);
  }, [width, setAppWidth]);

  const PageContainer = (
    isMobile ? PageContainerMobile : PageContainerBorne
  ) as React.ElementType;

  return (
    <SafeArea {...{ height, width }}>
      <PageContainer>
        <PageContent>{children}</PageContent>
      </PageContainer>
      <Navigation />
    </SafeArea>
  );
}
