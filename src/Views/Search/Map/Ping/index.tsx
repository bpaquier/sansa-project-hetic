import { StyledView, IndexWrapper } from "./styles";
import PingIcon from "~/Components/Icons/System/Map/Ping";
import Text from "~/Components/Ui-kit/Text";

interface PingProps {
  index?: number;
  name?: string;
}

export default function Ping({ index, name }: PingProps): JSX.Element {
  return (
    <StyledView>
      <IndexWrapper>
        <Text textAlign="center" color="white">
          {index + 1}
        </Text>
      </IndexWrapper>
      <PingIcon />
      <Text color="black40" weight="bold">
        {name}
      </Text>
    </StyledView>
  );
}
