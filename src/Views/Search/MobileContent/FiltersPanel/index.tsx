//import { Dimensions } from "react-native";
import { Dimensions } from "react-native";
import Draggable from "react-native-draggable-panel";

import AllFilters from "./AllFilters";
import MainFilters from "./MainFilters";
import { BottomButton, Filters, PanelContent } from "./styles";
import ButtonComponent from "~/Components/Ui-kit/Button";
import Separator from "~/Components/Ui-kit/Separator";
import { useSearchContext } from "~/Contexts/searchContext";
import theme from "~/Styles/theme.styles";
import { servicesRepartition } from "~/utils/getServices";

//const SCREEN_HEIGHT = Dimensions?.get("window").height;

export default function FiltersPanel(): JSX.Element {
  const {
    displayFilters,
    setDisplayFilters,
    filters,
    setFilters,
    updateFilters
  } = useSearchContext();

  return (
    <Draggable
      visible={displayFilters ? true : false}
      onDismiss={() => setDisplayFilters(null)}
      animationDuration={300}
      borderRadius={theme?.shape?.radius?.input}
      expandable
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
                  text="Supprimer le(s) filtre(s)"
                  onPress={() => setFilters(null)}
                />
              </BottomButton>
            ) : (
              <BottomButton onPress={() => setFilters(null)}>
                <ButtonComponent
                  type="tertiary"
                  text="Réinitialiser"
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
  );
}
