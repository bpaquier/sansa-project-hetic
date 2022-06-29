import { Wrapper } from "./styles";
import Link from "~/Components/Ui-kit/Link";
import Text, { TextComponentProps } from "~/Components/Ui-kit/Text";

export interface TextWrapperProps extends TextComponentProps {
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  link?: boolean;
  to?: string;
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
  weight
}: TextWrapperProps): JSX.Element {
  return (
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
