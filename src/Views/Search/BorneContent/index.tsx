import React from "react";

import { Content } from "./styles";
import TopBar from "./TopBar";
import PageContentWrapper from "~/Components/PageContentWrapper";

export default function BornContent(): JSX.Element {
  return (
    <PageContentWrapper>
      <Content>
        <TopBar></TopBar>
      </Content>
    </PageContentWrapper>
  );
}
