import { useTranslation } from "react-i18next";

import {
  SearchResultsWrapper,
  InfoWrapper,
  SpinnerWrapper,
  ResultsWrapper,
  AdressWrapper,
  NameWrapper,
  Result
} from "./styles";
import Spinner from "~/Components/Icons/Spinner";
import MapMarker from "~/Components/Icons/System/Map/MapMarker";
import Text from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";
import { useSearchContext } from "~/Contexts/searchContext";

export default function SearchResults(): JSX.Element {
  const { t } = useTranslation();
  const {
    searchResults,
    isSearchLoading,
    setFilteredPlaces,
    setSelectedPlaceIndex,
    setSearchResults,
    setDisplayFilters,
    setDisplayPlacesList,
    displaySearchResultsList,
    setDisplaySearchResultsList
  } = useSearchContext();
  const { isMobile } = useGlobalContext();

  return displaySearchResultsList ? (
    <SearchResultsWrapper {...{ isMobile }}>
      <ResultsWrapper keyboardShouldPersistTaps="always">
        {isSearchLoading ? (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        ) : (
          <>
            {searchResults && searchResults?.length ? (
              searchResults?.map((organization, i) => (
                <Result
                  key={`${organization?.adress}-${i}`}
                  activeOpacity={0.7}
                  onPress={() => {
                    setDisplaySearchResultsList(false);
                    setDisplayFilters(null);
                    setSearchResults(null);
                    setDisplayPlacesList(true);
                    setFilteredPlaces([organization]);
                    setSelectedPlaceIndex(0);
                  }}
                >
                  <MapMarker />
                  <InfoWrapper>
                    {organization?.organization_name ? (
                      <NameWrapper>
                        <Text weight="bold">
                          {organization?.organization_name}
                        </Text>
                      </NameWrapper>
                    ) : null}
                    {organization?.adress ? (
                      <AdressWrapper>
                        <Text color="black40" type="small">
                          {organization?.adress}
                        </Text>
                      </AdressWrapper>
                    ) : null}
                  </InfoWrapper>
                </Result>
              ))
            ) : (
              <Text>{t("search.noResults")}</Text>
            )}
          </>
        )}
      </ResultsWrapper>
    </SearchResultsWrapper>
  ) : null;
}
