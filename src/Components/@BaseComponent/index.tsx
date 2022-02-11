import { ViewProps, View } from "react-native";

import { StyledView } from "./styles";

interface BaseComponentProps extends ViewProps {}

export default function BaseComponent(props: BaseComponentProps): JSX.Element {
  return <StyledView></StyledView>;
}
