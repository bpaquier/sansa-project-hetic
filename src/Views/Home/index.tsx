import { useNavigate } from "react-router-native";

import ButtonComponent from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";

export default function Home(): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <Text type="titleXL" textAlign="center">
        Home
      </Text>
      <ButtonComponent text="hello" onPress={() => navigate("/login")} />
    </>
  );
}
