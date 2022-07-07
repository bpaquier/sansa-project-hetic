import React from "react";

import { useNavigate } from "react-router-native";

import { Breadcrumb as StyledBreadcrumb } from "./styles";
import ArrowLeft from "~/Components/Icons/System/Arrows/ArrowLeft";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";

type BreadcrumbProps = {
  url: string;
  text: string;
};

export default function Breadcrumb({ url, text }: BreadcrumbProps) {
  const navigate = useNavigate();

  return (
    <StyledBreadcrumb onPress={() => navigate(url)} activeOpacity={0.7}>
      <ArrowLeft height={28} width={28} />
      <TextWrapper marginLeft={14} color="black20" type="titleL">
        {text}
      </TextWrapper>
    </StyledBreadcrumb>
  );
}
