import { Text } from "react-native";
import { useNavigate } from "react-router-native";

import { StyledView, StyledButton } from "./styles";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <StyledView>
      <StyledButton onPress={() => navigate("/")}>
        <Text>Home</Text>
      </StyledButton>
      <StyledButton onPress={() => navigate("/about")}>
        <Text>About</Text>
      </StyledButton>
    </StyledView>
  );
}
