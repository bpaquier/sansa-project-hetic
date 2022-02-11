import { ReactElement } from "react";
import { View, Dimensions } from "react-native";

import Navigation from "~/Components/Navigation";

import { SafeArea, PageContainer } from "./styles";

interface PageProps {
  children: ReactElement;
}

export default function Page({ children }: PageProps) {
  const { height, width } = Dimensions.get("window");
  return (
    <SafeArea {...{ height, width }}>
      <PageContainer>{children}</PageContainer>
      <Navigation />
    </SafeArea>
  );
}
