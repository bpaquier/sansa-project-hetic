import { PingWrapper, IndexWrapper } from "./styles";
import PingIcon from "~/Components/Icons/System/Map/Ping";
import Text from "~/Components/Ui-kit/Text";

export interface PingProps {
  index?: number;
  name?: string;
  small?: boolean;
  isSelected?: boolean;
  mobile?: boolean;
}

export default function Ping({
  index,
  //name,
  small,
  isSelected,
  mobile
}: PingProps): JSX.Element {
  return (
    <PingWrapper>
      <IndexWrapper {...{ small, mobile }}>
        <Text
          textAlign="center"
          color={isSelected ? "darkBlue" : "white"}
          type={small ? "small" : "paragraph"}
        >
          {index + 1}
        </Text>
      </IndexWrapper>
      <PingIcon {...{ small, isSelected }} />
      {/* <Text color="black40" weight="bold" type={small ? "small" : "paragraph"}>
        {name}
      </Text> */}
    </PingWrapper>
  );
}
