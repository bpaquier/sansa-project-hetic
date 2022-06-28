import { Wrapper } from "./styles";
import Link from "~/Components/Ui-kit/Link";
import Text from "~/Components/Ui-kit/Text";

type TextWrapperProps = {
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  type?: "titleXL" | "titleL" | "titleM" | "paragraph" | "small";
  textAlign?: "left" | "center" | "right";
  color?:
    | "black"
    | "white"
    | "orange"
    | "blue"
    | "grey"
    | "darkBlue"
    | "black40"
    | "black20"
    | "red";
  title: string;
  weight?: "bold" | "regular" | "medium";
  link?: boolean;
  to?: string;
};

export default function TextWrapper({
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  type,
  textAlign,
  color,
  title,
  link,
  to
}: TextWrapperProps): JSX.Element {
  return (
    <Wrapper
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
    >
      {link && to ? (
        <Link to={to} type={type} textAlign={textAlign} color={color}>
          {title}
        </Link>
      ) : (
        <Text type={type} textAlign={textAlign} color={color}>
          {title}
        </Text>
      )}
    </Wrapper>
  );
}
