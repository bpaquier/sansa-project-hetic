import React, { ReactNode } from "react";

import { Link as RouterLink } from "react-router-native";

import Text from "~/Components/Ui-kit/Text";

export interface LinkProps {
  type?: "titleXL" | "titleL" | "titleM" | "paragraph" | "small";
  weight?: "bold" | "regular" | "medium";
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
  children?: React.ReactNode | ReactNode[];
  textAlign?: "left" | "center" | "right";
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
    <RouterLink to={to} underlayColor={"transparent"}>
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
