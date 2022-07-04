import { Wrapper, WrapperPressable } from "./styles";
import Link from "~/Components/Ui-kit/Link";
import Text, { TextComponentProps } from "~/Components/Ui-kit/Text";

export interface TextWrapperProps extends TextComponentProps {
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  link?: boolean;
  to?: string;
  onPress?: () => void;
}

export default function TextWrapper({
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  type,
  textAlign,
  color,
  link,
  children,
  to,
  weight,
  onPress
}: TextWrapperProps): JSX.Element {
  return onPress ? (
    <WrapperPressable
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
      onPress={onPress}
    >
      <Text {...{ type, weight, color, textAlign }}>{children}</Text>
    </WrapperPressable>
  ) : (
    <Wrapper
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
    >
      {link && to ? (
        <Link {...{ type, weight, color, textAlign, to }}>{children}</Link>
      ) : (
        <Text {...{ type, weight, color, textAlign }}>{children}</Text>
      )}
    </Wrapper>
  );
}
