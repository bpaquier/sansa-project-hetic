import { StyledView, IndexWrapper } from "./styles";
import PingIcon from "~/Components/Icons/System/Map/Ping";
import Text from "~/Components/Ui-kit/Text";

interface PingProps {
  index?: number;
  name?: string;
  small?: boolean;
}

export default function Ping({ index, name, small }: PingProps): JSX.Element {
  return (
    <StyledView>
      <IndexWrapper>
        <Text
          textAlign="center"
          color="white"
          type={small ? "small" : "paragraph"}
        >
          {index + 1}
        </Text>
      </IndexWrapper>
      <PingIcon {...{ small }} />
      <Text color="black40" weight="bold" type={small ? "small" : "paragraph"}>
        {name}
      </Text>
    </StyledView>
  );
}
