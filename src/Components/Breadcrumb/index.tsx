import React from "react";

import { useNavigate } from "react-router-native";

import { Breadcrumb as StyledBreadcrumb } from "./styles";
import ArrowLeft from "~/Components/Icons/System/Arrows/ArrowLeft";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";

interface BreadcrumbProps {
  url: string;
  text: string;
  marginBottom?: number;
}

export default function Breadcrumb({
  url,
  text,
  marginBottom
}: BreadcrumbProps) {
  const navigate = useNavigate();

  return (
    <StyledBreadcrumb
      onPress={() => navigate(url)}
      activeOpacity={0.7}
      marginBottom={marginBottom}
    >
      <ArrowLeft height={28} width={28} />
      <TextWrapper marginLeft={14} color="black20" type="titleL">
        {text}
      </TextWrapper>
    </StyledBreadcrumb>
  );
}
