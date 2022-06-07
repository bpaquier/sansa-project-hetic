import { useNavigate, useLocation } from "react-router-native";
import { View } from "react-native";
import { Nav, NavButtonContainer, NavButton } from "./styles";
import House from "~/Components/Icons/System/System/House";
import MapMarker from "~/Components/Icons/System/Map/MapMarker";
import Plus from "~/Components/Icons/System/System/Plus";
import Theme from "~/Styles/theme.styles";
import France from "~/Components/Icons/Flags/France";
import Separator from "~/Components/Ui-kit/Separator";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const isCurrentPage = (page: String): Boolean => location.pathname === page;

  return (
    <Nav>
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <NavButtonContainer active={isCurrentPage("/")}>
          <NavButton onPress={() => navigate("/")} active={isCurrentPage("/")}>
            <House width={36} height={36} color={Theme.color.primary.white} />
          </NavButton>
        </NavButtonContainer>
        <NavButtonContainer active={isCurrentPage("/search")} style={{marginTop: 28}}>
          <NavButton onPress={() => navigate("/search")} active={isCurrentPage("/search")}>
            <MapMarker width={36} height={36} color={Theme.color.primary.white} />
          </NavButton>
        </NavButtonContainer>
        <NavButtonContainer  active={isCurrentPage("/plus")} style={{marginTop: 28}}>
          <NavButton onPress={() => navigate("/plus")} active={isCurrentPage("/plus")}>
            <Plus width={36} height={36} color={Theme.color.primary.white} />
          </NavButton>
        </NavButtonContainer>
      </View>
      <View>
        <Separator orientation="horizontal" margin={20} style={{width: '100%'}} />
        <France />
      </View>
    </Nav>
  );
}
