import React, { useEffect, useState } from "react";

import Description from "./Description";
import Hours from "./Hours";
import MacuPichu from "./illustration-machu-pichu";
import Infos from "./Infos";
import PanelContent from "./PanelContent";
import Services from "./Services";
import {
  Wrapper,
  TitleWrapper,
  CloseIconWrapper,
  ContentWrapper,
  FirstRow,
  SecondRow,
  SeparatorWrapper,
  IllustrationWrapper
} from "./styles";
import Cross from "~/Components/Icons/System/System/Cross";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps, Places, useSearchContext } from "~/Contexts/searchContext";
import theme from "~/Styles/theme.styles";

export default function PlaceDescription(): JSX.Element {
  const {
    filteredPlaces,
    displayPlaceDescription,
    setDisplayPlaceDescription
  } = useSearchContext();
  const [place, setPlace] = useState<PlaceProps | null>(null);
  const [displayPanel, setDisplayPanel] = useState<
    "description" | "services" | null
  >(null);

  useEffect(() => {
    /**
     * ! replace by API call
     */
    displayPlaceDescription
      ? setPlace(Places?.find((place) => place?.id === displayPlaceDescription))
      : setPlace(null);
  }, [displayPlaceDescription, filteredPlaces]);

  return place ? (
    <Wrapper>
      <TitleWrapper>
        <Text type="titleL">
          {displayPanel === "description"
            ? "Mission"
            : displayPanel === "services"
            ? "Services proposés"
            : place?.organization_name}
        </Text>
        <CloseIconWrapper
          secondaryStyle={displayPanel !== null}
          onPress={() => {
            if (displayPanel === "description" || displayPanel === "services") {
              setDisplayPanel(null);
            } else {
              setDisplayPlaceDescription(null);
            }
          }}
        >
          <Cross
            width={32}
            height={32}
            color={
              displayPanel === null
                ? theme?.color?.primary?.white
                : theme?.color?.primary?.blue
            }
          />
        </CloseIconWrapper>
      </TitleWrapper>
      <Separator orientation="horizontal" width="100%" />
      <ContentWrapper>
        {displayPanel === "description" || displayPanel === "services" ? (
          <PanelContent type={displayPanel} {...place} />
        ) : (
          <>
            <FirstRow>
              <Infos {...place} />
              <Description {...place} {...{ setDisplayPanel }} />
            </FirstRow>
            <SecondRow>
              <Hours {...place} />
              <SeparatorWrapper>
                <Separator orientation="vertical" height="100%" />
              </SeparatorWrapper>
              <Services {...place} {...{ setDisplayPanel }} />
            </SecondRow>
          </>
        )}
      </ContentWrapper>
      {displayPanel === null && (
        <IllustrationWrapper>
          <MacuPichu />
        </IllustrationWrapper>
      )}
    </Wrapper>
  ) : null;
}
