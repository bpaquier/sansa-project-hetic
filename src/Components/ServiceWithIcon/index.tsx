import { ServiceWrapper, TextWrapper } from "./styles";
import Icon, { IconProps } from "~/Components/Icon";
import Text from "~/Components/Ui-kit/Text";
import { Services } from "~/hooks/useServices";

interface ServiceWithIconProps extends IconProps {
  text?: string;
}

export default function ServiceWithIcon({
  text,
  ...rest
}: ServiceWithIconProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const categoryExists = Object.values(Services).includes(rest?.category);
  return categoryExists ? (
    <ServiceWrapper>
      <Icon {...rest} />
      {text ? (
        <TextWrapper>
          <Text>{text}</Text>
        </TextWrapper>
      ) : null}
    </ServiceWrapper>
  ) : null;
}
