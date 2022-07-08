import React from "react";

import { LanguageContainer, LanguageSelector } from "./styles";
import ChevrontRight from "~/Components/Icons/System/Arrows/ChevronRight";
import Flags from "~/Components/LanguagesMenu/Flags";
import Separator from "~/Components/Ui-kit/Separator";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function LanguageFAQSelector() {
  const { setMenuLanguagesOpen } = useGlobalContext();

  return (
    <>
      <Separator orientation="horizontal" width={"100%"} margin={24} />
      <LanguageContainer>
        <LanguageSelector
          onPress={() => setMenuLanguagesOpen && setMenuLanguagesOpen()}
        >
          <Flags size={35} />
          <ChevrontRight width={27} />
        </LanguageSelector>
      </LanguageContainer>
    </>
  );
}
