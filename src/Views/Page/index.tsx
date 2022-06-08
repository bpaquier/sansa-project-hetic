import React, { ReactElement, useEffect } from "react";

import { Dimensions } from "react-native";

import { SafeArea, PageContent } from "./styles";
import Navigation from "~/Components/Navigation";
import { useGlobalContext } from "~/Contexts/globalContext";

interface PageProps {
  children: ReactElement;
}

export default function Page({ children }: PageProps) {
  const { height, width } = Dimensions.get("window");
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { setAppWidth } = useGlobalContext();

  useEffect(() => {
    setAppWidth && setAppWidth(width);
  }, [width, setAppWidth]);

  return (
    <SafeArea {...{ height, width }}>
      <PageContent>{children}</PageContent>
      <Navigation />
    </SafeArea>
  );
}
