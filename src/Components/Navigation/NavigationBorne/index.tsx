import { View } from "react-native";
import { useNavigate, useLocation } from "react-router-native";

import { Nav, NavButtonContainer, NavButton } from "./styles";
import France from "~/Components/Icons/Flags/France";
import MapMarker from "~/Components/Icons/System/Map/MapMarker";
import House from "~/Components/Icons/System/System/House";
import Plus from "~/Components/Icons/System/System/Plus";
import Separator from "~/Components/Ui-kit/Separator";
import Theme from "~/Styles/theme.styles";

export default function NavigationBorne() {
  const navigate = useNavigate();
  const location = useLocation();
  const isCurrentPage = (page: string): boolean => location.pathname === page;

  return (
    <Nav>
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <NavButtonContainer active={isCurrentPage("/home")}>
          <NavButton
            onPress={() => navigate("/home")}
            active={isCurrentPage("/home")}
          >
            <House width={36} height={36} color={Theme.color.primary.white} />
          </NavButton>
        </NavButtonContainer>
        <NavButtonContainer
          active={isCurrentPage("/")}
          style={{ marginTop: 28 }}
        >
          <NavButton onPress={() => navigate("/")} active={isCurrentPage("/")}>
            <MapMarker
              width={36}
              height={36}
              color={Theme.color.primary.white}
            />
          </NavButton>
        </NavButtonContainer>
        <NavButtonContainer
          active={isCurrentPage("/plus")}
          style={{ marginTop: 28 }}
        >
          <NavButton
            onPress={() => navigate("/plus")}
            active={isCurrentPage("/plus")}
          >
            <Plus width={36} height={36} color={Theme.color.primary.white} />
          </NavButton>
        </NavButtonContainer>
      </View>
      <View>
        <Separator
          orientation="horizontal"
          margin={20}
          width="100%"
        />
        <France />
      </View>
    </Nav>
  );
}
