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
  IllustrationWrapper,
  LoadingOverlay
} from "./styles";
import Spinner from "~/Components/Icons/Spinner";
import Cross from "~/Components/Icons/System/System/Cross";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps, useSearchContext } from "~/Contexts/searchContext";
import useApi from "~/hooks/useApi";
import theme from "~/Styles/theme.styles";

export default function PlaceDescription(): JSX.Element {
  const { t } = useTranslation();
  const { getOrgaById } = useApi();
  const {
    filteredPlaces,
    displayPlaceDescription,
    setDisplayPlaceDescription,
    handleApiErrors
  } = useSearchContext();
  const [place, setPlace] = useState<PlaceProps | null>(null);
  const [displayPanel, setDisplayPanel] = useState<
    "description" | "services" | null
  >(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    displayPlaceDescription &&
      getOrgaById(displayPlaceDescription)
        ?.then(({ data, status }: { data: PlaceProps[]; status: number }) => {
          if (status === 200) {
            if (data?.[0]) {
              setPlace(data?.[0]);
            } else {
              handleApiErrors();
            }
          } else {
            handleApiErrors();
            setPlace(null);
          }
          setIsLoading(false);
        })
        ?.catch(() => {
          handleApiErrors();
          setPlace(null);
          setIsLoading(false);
        });

    !displayPlaceDescription && setPlace(null);
  }, [displayPlaceDescription, filteredPlaces]);

  return displayPlaceDescription ? (
    <Wrapper style={{ elevation: 10 }}>
      {!isLoading && place ? (
        <>
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
                if (
                  displayPanel === "description" ||
                  displayPanel === "services"
                ) {
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
        </>
      ) : (
        <LoadingOverlay>
          <Spinner width={50} height={50} />
        </LoadingOverlay>
      )}
    </Wrapper>
  ) : null;
}
