import { useState } from "react";

import { useTranslation } from "react-i18next";

import {
  TopBarWrapper,
  IconsWrapper,
  IconWrapper,
  Label,
  Button,
  InputWrapper,
  Input,
  UnderlineIndicator,
  RoundedIndicator
} from "./styles";
import SearchBig from "~/Components/Icons/System/System/SearchBig";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import { useSearchContext } from "~/Contexts/searchContext";
import {
  getServiceColor,
  getIconByService,
  MainServicesToDisplay
} from "~/utils/getServices";

export interface IconsDisplay {
  Icon: any;
  label: string;
}

export default function TopBar(): JSX.Element {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState<string>("");
  const { setDisplayFilters, displayFilters } = useSearchContext();

  const iconsWidth = 48;

  const renderIcons = MainServicesToDisplay.map((category, i) => {
    const Icon = getIconByService(category);
    const bgColor = getServiceColor(category, true);
    const isSelected = category === displayFilters;
    return (
      <IconWrapper key={`${category}-${i}`}>
        <Button
          onPress={() => {
            isSelected ? setDisplayFilters(null) : setDisplayFilters(category);
          }}
        >
          {isSelected && <RoundedIndicator width={iconsWidth} />}
          <Icon width={iconsWidth} height={iconsWidth} />
        </Button>
        <Label>
          <Text type="small">{t(`search.services.${category}`)}</Text>
        </Label>
        {displayFilters && isSelected && (
          <UnderlineIndicator {...{ bgColor }} width={iconsWidth} />
        )}
      </IconWrapper>
    );
  });
  return (
    <TopBarWrapper>
      <InputWrapper>
        <Input
          value={searchValue}
          onChangeText={(value) => setSearchValue(value)}
          placeholder={t("search.searchPlaceholder")}
        />
        <Button>
          <SearchBig width={64} height={64} />
        </Button>
      </InputWrapper>
      <Separator orientation="vertical" height="64px" />
      <IconsWrapper>{renderIcons}</IconsWrapper>
    </TopBarWrapper>
  );
}
