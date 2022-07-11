import React, { ReactElement } from "react";

import { StatusBar } from "expo-status-bar";
import { Dimensions, Platform } from "react-native";

import { SafeArea, PageContent } from "./styles";
import Navigation from "~/Components/Navigation";
import { useGlobalContext } from "~/Contexts/globalContext";

interface PageProps {
  children: ReactElement;
}

export default function Page({ children }: PageProps) {
  const { height, width } = Dimensions.get("window");
  const { statusBarHeight, isMobile } = useGlobalContext();

  const computedHeight = !isMobile || Platform?.OS === "ios" ? height : height;

  return (
    <SafeArea {...{ width }} height={computedHeight}>
      <StatusBar />
      <PageContent>{children}</PageContent>
      <Navigation />
    </SafeArea>
  );
}
