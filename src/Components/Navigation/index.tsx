import { useNavigate } from "react-router-native";

import { Nav, NavBorne } from "./styles";
import Button from "~/Components/Ui-kit/Button";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function Navigation() {
  const { isMobile } = useGlobalContext();
  const navigate = useNavigate();

  const Navigation = isMobile ? Nav : NavBorne;

  return (
    <Navigation>
      <Button onPress={() => navigate("/")} text="Home" />
      <Button
        onPress={() => navigate("/login")}
        text="Login"
        type="secondary"
      />
    </Navigation>
  );
}
