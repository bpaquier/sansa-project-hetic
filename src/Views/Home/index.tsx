import { View } from "react-native";
import { useNavigate } from "react-router-native";

import PageContentWrapper from "~/Components/PageContentWrapper";
import ButtonComponent from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";

export default function Home(): JSX.Element {
  const navigate = useNavigate();
  return (
    <PageContentWrapper>
      <View style={{ backgroundColor: 'red', width: '200px', height: '200px' }}></View>
    </PageContentWrapper>
  );
}
