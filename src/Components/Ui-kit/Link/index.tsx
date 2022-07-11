import React from "react";

import { Link as RouterLink } from "react-router-native";

import Text, { TextComponentProps } from "~/Components/Ui-kit/Text";

export interface LinkProps extends TextComponentProps {
  to: string;
}

const Link = ({
  type,
  children,
  color,
  weight,
  textAlign = "left",
  to
}: LinkProps) => {
  return (
    <RouterLink
      to={to}
      underlayColor={"transparent"}
      style={{ margin: 0, padding: 0 }}
    >
      <Text {...{ type, weight, color, textAlign }}>{children}</Text>
    </RouterLink>
  );
};

export default Link;

Link.defaultProps = {
  type: "paragraph",
  weight: "regular",
  color: "black"
};
