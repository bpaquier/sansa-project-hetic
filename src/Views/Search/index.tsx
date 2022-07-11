import React from "react";

import BornContent from "./BorneContent";
import Map from "./Map";
import MobileContent from "./MobileContent";
import SearchResults from "./SearchResults";
import { MobileWrapper } from "./styles";
import PageContentWrapper from "~/Components/PageContentWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";
import SearchProvider from "~/Contexts/searchContext";

export default function Search(): JSX.Element {
  const { isMobile, statusBarHeight } = useGlobalContext();

  const Wrapper = (
    isMobile ? MobileWrapper : PageContentWrapper
  ) as React.ElementType;

  return (
    <SearchProvider>
      <Wrapper {...{ statusBarHeight }}>
        <Map />
        {isMobile ? <MobileContent /> : <BornContent />}
        <SearchResults />
      </Wrapper>
    </SearchProvider>
  );
}
