import { useNavigate } from "react-router-native";

import { StyledView } from "./styles";
import Button from "~/Components/Ui-kit/Button";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <StyledView>
      <Button onPress={() => navigate("/")} text="Home" />
      <Button
        onPress={() => navigate("/login")}
        text="Login"
        type="secondary"
      />
    </StyledView>
  );
}
