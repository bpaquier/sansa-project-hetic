import { useState } from "react";

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
  getCategoryColor,
  getIconByCategory,
  mainCategoriesToDisplay
} from "~/utils/catgories";

export interface IconsDisplay {
  Icon: any;
  label: string;
}

export default function TopBar(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>("");
  const { setDisplayFilters, displayFilters } = useSearchContext();

  const iconsWidth = 48;

  const renderIcons = mainCategoriesToDisplay.map((category, i) => {
    const Icon = getIconByCategory(category);
    const bgColor = getCategoryColor(category, true);
    const isSelected = category === displayFilters;
    return (
      <IconWrapper key={i}>
        <Button
          onPress={() => {
            isSelected ? setDisplayFilters(null) : setDisplayFilters(category);
          }}
        >
          {isSelected && <RoundedIndicator width={iconsWidth} />}
          <Icon width={iconsWidth} height={iconsWidth} />
        </Button>
        <Label>
          <Text type="small">{category}</Text>
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
          placeholder="Chercher par mot clé"
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
