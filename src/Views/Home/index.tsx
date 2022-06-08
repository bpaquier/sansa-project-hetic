import { useNavigate } from "react-router-native";

import PageContentWrapper from "~/Components/PageContentWrapper";
import ButtonComponent from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";

export default function Home(): JSX.Element {
  const navigate = useNavigate();
  return (
    <PageContentWrapper>
      <>
        <Text type="titleXL" textAlign="center">
          Home
        </Text>
        <ButtonComponent text="login" onPress={() => navigate("/login")} />
      </>
    </PageContentWrapper>
  );
}
