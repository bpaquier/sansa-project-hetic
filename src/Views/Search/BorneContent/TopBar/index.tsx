import { useState } from "react";

import { useTranslation } from "react-i18next";

import {
  TopBarWrapper,
  IconsWrapper,
  IconWrapper,
  Label,
  Button,
  UnderlineIndicator,
  RoundedIndicator,
  SearchIconWrapper,
  SearchInputWrapper,
  Input
} from "./styles";
import Search from "~/Components/Icons/System/System/Search";
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
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { setDisplayFilters, displayFilters, searchValue, handleSearch } =
    useSearchContext();

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
      <SearchInputWrapper>
        <SearchIconWrapper>
          <Search width={25} height={25} />
        </SearchIconWrapper>
        <Input
          value={searchValue}
          onChangeText={(value) => handleSearch(value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={t("search.searchPlaceholder")}
          {...{ isFocused }}
        />
      </SearchInputWrapper>
      <Separator orientation="vertical" height="64px" />
      <IconsWrapper>{renderIcons}</IconsWrapper>
    </TopBarWrapper>
  );
}
