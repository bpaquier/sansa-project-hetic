//import { Dimensions } from "react-native";
import Draggable from "react-native-draggable-panel";

import AllFilters from "./AllFilters";
import MainFilters from "./MainFilters";
import { BottomButton, Filters, PanelContent } from "./styles";
import ButtonComponent from "~/Components/Ui-kit/Button";
import { useSearchContext } from "~/Contexts/searchContext";
import theme from "~/Styles/theme.styles";

//const SCREEN_HEIGHT = Dimensions?.get("window").height;

export default function FiltersPanel(): JSX.Element {
  const { displayFilters, setDisplayFilters, filters, setFilters } =
    useSearchContext();

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
        {filters && filters?.length > 0 && (
          <BottomButton onPress={() => setFilters(null)}>
            <ButtonComponent
              type="tertiary"
              text="Réinitialiser"
              onPress={() => setFilters(null)}
            />
          </BottomButton>
        )}
      </PanelContent>
    </Draggable>
  );
}
