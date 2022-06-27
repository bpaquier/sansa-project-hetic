import { IconWrapper } from "./styles";
import TextComponent from "~/Components/Ui-kit/Text";
import theme from "~/Styles/theme.styles";
import { getIconByCategory } from "~/utils/catgories";

export interface IconProps {
  category?: string;
  withBackground?: boolean;
  text?: string;
  backgroundColor?: string;
}

export default function Icon({
  category,
  withBackground,
  text,
  backgroundColor
}: IconProps): JSX.Element {
  const Icon = getIconByCategory(category);

  return (
    <IconWrapper {...{ withBackground, backgroundColor }}>
      {Icon && (
        <Icon
          width={20}
          height={20}
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
