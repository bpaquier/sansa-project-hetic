import { useState } from "react";

import {
  TopBarWrapper,
  IconsWrapper,
  IconWrapper,
  Label,
  Button,
  InputWrapper,
  Input
} from "./styles";
import Activities from "~/Components/Icons/Categories/Activities";
import Advice from "~/Components/Icons/Categories/Advice";
import Food from "~/Components/Icons/Categories/Food";
import Health from "~/Components/Icons/Categories/Health";
import Home from "~/Components/Icons/Categories/Home";
import Hygiene from "~/Components/Icons/Categories/Hygiene";
import Medicine from "~/Components/Icons/Categories/Medicine";
import Technology from "~/Components/Icons/Categories/Technology";
import SearchBig from "~/Components/Icons/System/System/SearchBig";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";

export interface IconsDisplay {
  Icon: any;
  label: string;
}

export default function TopBar(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>("");

  const iconsWidth = 48;
  const Icons: IconsDisplay[] = [
    {
      Icon: Home,
      label: "Acceuil"
    },
    {
      Icon: Food,
      label: "Allimentation"
    },
    {
      Icon: Health,
      label: "Santé"
    },
    {
      Icon: Medicine,
      label: "Médecine"
    },
    {
      Icon: Hygiene,
      label: "Hygiène"
    },
    {
      Icon: Advice,
      label: "Conseil"
    },
    {
      Icon: Activities,
      label: "Activités"
    },
    {
      Icon: Technology,
      label: "Technologie"
    }
  ];

  const renderIcons = Icons.map(({ Icon, label }: IconsDisplay, i) => (
    <IconWrapper key={i}>
      <Button>
        <Icon width={iconsWidth} height={iconsWidth} />
      </Button>
      <Label>
        <Text type="small">{label}</Text>
      </Label>
    </IconWrapper>
  ));
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
