import React from "react";

import BornContent from "./BorneContent";
import Map from "./Map";
import MobileContent from "./MobileContent";
import SearchResults from "./SearchResults";
import { MobileWrapper } from "./styles";
import NapOverlay from "~/Components/NapOverlay";
import PageContentWrapper from "~/Components/PageContentWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";
import SearchProvider from "~/Contexts/searchContext";

export default function Search(): JSX.Element {
  const { isMobile, isIdle, statusBarHeight } = useGlobalContext();

  const Wrapper = (
    isMobile ? MobileWrapper : PageContentWrapper
  ) as React.ElementType;

  return (
    <SearchProvider>
      <Wrapper {...{ statusBarHeight }}>
        <Map />
        {isIdle && <NapOverlay />}
        {isMobile ? <MobileContent /> : <BornContent />}
        <SearchResults />
      </Wrapper>
    </SearchProvider>
  );
}
