import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

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
import { PlaceProps, useSearchContext } from "~/Contexts/searchContext";
import theme from "~/Styles/theme.styles";
import { getOrgaById } from "~/utils/api";

export default function PlaceDescription(): JSX.Element {
  const { t } = useTranslation();
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
    displayPlaceDescription &&
      getOrgaById(displayPlaceDescription)
        ?.then(({ data, status }: { data: PlaceProps[]; status: number }) => {
          if (status === 200) {
            if (data?.[0]) {
              setPlace(data?.[0]);
            } else {
              //todo handle error
            }
          } else {
            //todo handle error
            setPlace(null);
          }
        })
        ?.catch((err) => {
          //todo handle error
          console.log(err);
          setPlace(null);
        });

    !displayPlaceDescription && setPlace(null);
  }, [displayPlaceDescription, filteredPlaces]);

  return place ? (
    <Wrapper style={{ elevation: 10 }}>
      <TitleWrapper>
        <Text type="titleL">
          {displayPanel === "description"
            ? t("search.mission")
            : displayPanel === "services"
            ? t("search.servicesOffered")
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

              <IllustrationWrapper>
                <MacuPichu />
              </IllustrationWrapper>
            </SecondRow>
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  ) : null;
}
