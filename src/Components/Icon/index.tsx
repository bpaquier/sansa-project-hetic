import { IconWrapper } from "./styles";
import TextComponent from "~/Components/Ui-kit/Text";
import theme from "~/Styles/theme.styles";
import { getCategoryColor, getIconByCategory } from "~/utils/catgories";

export interface IconProps {
  category?: string;
  withBackground?: boolean;
  text?: string;
  backgroundType?: "colored" | "black";
  mainIcon?: boolean;
  size?: number;
}

export default function Icon({
  category,
  withBackground,
  text,
  backgroundType,
  mainIcon = false,
  size = 20
}: IconProps): JSX.Element {
  const Icon = getIconByCategory(category);

  const backgroundColor =
    backgroundType === "black"
      ? theme?.color?.neutral?.black20
      : getCategoryColor(category, mainIcon);

  return (
    <IconWrapper {...{ withBackground, backgroundColor, size }}>
      {Icon && (
        <Icon
          width={size}
          height={size}
          primaryColor={
            withBackground
              ? theme?.color?.primary?.white
              : theme?.color?.icon?.categories?.primary
          }
          secondaryColor={
            withBackground
              ? theme?.color?.primary?.white
              : theme?.color?.icon?.categories?.secondary
          }
        />
      )}
      {!Icon && text && (
        <TextComponent type="small" color="white">
          {text}
        </TextComponent>
      )}
    </IconWrapper>
  );
}
