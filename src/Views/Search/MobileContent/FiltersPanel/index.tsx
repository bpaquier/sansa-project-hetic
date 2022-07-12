import { useTranslation } from "react-i18next";
import { Dimensions } from "react-native";
import Draggable from "react-native-draggable-panel";

import AllFilters from "./AllFilters";
import MainFilters from "./MainFilters";
import { BottomButton, Filters, PanelContent, Overlay } from "./styles";
import ButtonComponent from "~/Components/Ui-kit/Button";
import Separator from "~/Components/Ui-kit/Separator";
import { useGlobalContext } from "~/Contexts/globalContext";
import { useSearchContext } from "~/Contexts/searchContext";
import { servicesRepartition } from "~/hooks/useServices";
import theme from "~/Styles/theme.styles";

export default function FiltersPanel(): JSX.Element {
  const { t } = useTranslation();
  const {
    displayFilters,
    setDisplayFilters,
    filters,
    setFilters,
    updateFilters
  } = useSearchContext();
  const { statusBarHeight } = useGlobalContext();

  return (
    <>
      {displayFilters && <Overlay {...{ statusBarHeight }} />}
      <Draggable
        visible={displayFilters ? true : false}
        onDismiss={() => setDisplayFilters(null)}
        animationDuration={300}
        borderRadius={theme?.shape?.radius?.input}
        expandable
        overlayOpacity={0}
        //initialHeight={SCREEN_HEIGHT / 1.7}
      >
        <PanelContent>
          <Filters>
            {displayFilters === "all" ? <AllFilters /> : <MainFilters />}
          </Filters>
          {filters && filters?.length > 0 ? (
            <>
              <Separator
                orientation="horizontal"
                width={`${Dimensions.get("window").width}px`}
              />
              {displayFilters === "all" ? (
                <BottomButton onPress={() => setFilters(null)}>
                  <ButtonComponent
                    type="tertiary"
                    text={t("search.deleteFilters")}
                    onPress={() => setFilters(null)}
                  />
                </BottomButton>
              ) : (
                <BottomButton onPress={() => setFilters(null)}>
                  <ButtonComponent
                    type="tertiary"
                    text={t("common.reset")}
                    onPress={() =>
                      displayFilters &&
                      updateFilters({
                        action: "remove",
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        filtersName: servicesRepartition?.[displayFilters]
                      })
                    }
                  />
                </BottomButton>
              )}
            </>
          ) : null}
        </PanelContent>
      </Draggable>
    </>
  );
}
