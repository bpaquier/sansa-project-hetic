import React from "react";

import BornContent from "./BorneContent";
import Map from "./Map";
import MobileContent from "./MobileContent";
import { MobileWrapper } from "./styles";
import PageContentWrapper from "~/Components/PageContentWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";
import SearchProvider from "~/Contexts/searchContext";

export default function Search(): JSX.Element {
  const { isMobile } = useGlobalContext();

  const Wrapper = (
    isMobile ? MobileWrapper : PageContentWrapper
  ) as React.ElementType;

  return (
    <SearchProvider>
      <Wrapper>
        <Map />
        {isMobile ? <MobileContent /> : <BornContent />}
      </Wrapper>
    </SearchProvider>
  );
}
