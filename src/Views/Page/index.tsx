import React, { ReactElement } from "react";

import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";

import { SafeArea, PageContent } from "./styles";
import Navigation from "~/Components/Navigation";

interface PageProps {
  children: ReactElement;
}

export default function Page({ children }: PageProps) {
  const { height, width } = Dimensions.get("window");

  return (
    <SafeArea {...{ width, height }}>
      <StatusBar style="dark" />
      <PageContent>{children}</PageContent>
      <Navigation />
    </SafeArea>
  );
}
