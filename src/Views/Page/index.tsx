import { ReactElement } from "react";

import { Dimensions } from "react-native";

import { SafeArea, PageContainer } from "./styles";
import Navigation from "~/Components/Navigation";

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
