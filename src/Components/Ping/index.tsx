import { StyledView, IndexWrapper } from "./styles";
import PingIcon from "~/Components/Icons/System/Map/Ping";
import Text from "~/Components/Ui-kit/Text";

interface PingProps {
  index?: number;
  name?: string;
  small?: boolean;
  isSelected?: boolean;
}

export default function Ping({
  index,
  name,
  small,
  isSelected
}: PingProps): JSX.Element {
  return (
    <StyledView>
      <IndexWrapper>
        <Text
          textAlign="center"
          color={isSelected ? "darkBlue" : "white"}
          type={small ? "small" : "paragraph"}
        >
          {index + 1}
        </Text>
      </IndexWrapper>
      <PingIcon {...{ small, isSelected }} />
      <Text color="black40" weight="bold" type={small ? "small" : "paragraph"}>
        {name}
      </Text>
    </StyledView>
  );
}
