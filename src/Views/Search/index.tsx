import React from "react";

import BornContent from "./BorneContent";
import Map from "./Map";
import MobileContent from "./MobileContent";
import { MobileWrapper } from "./styles";
import PageContentWrapper from "~/Components/PageContentWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";
import SearchProvider from "~/Contexts/searchContext";
import NapOverlay from "~/Components/NapOverlay";


export default function Search(): JSX.Element {
  const { isMobile, isIdle } = useGlobalContext();
  const Wrapper = (
    isMobile ? MobileWrapper : PageContentWrapper
  ) as React.ElementType;

  return (
    <SearchProvider>
      <Wrapper>
        <Map />
        {isIdle && <NapOverlay />}  
        {isMobile ? <MobileContent /> : <BornContent />}
      </Wrapper>
    </SearchProvider>
  );
}
