import { useEffect, useState } from "react";

import { FilterWrapper, TextWrapper, CheckboxWrapper } from "./styles";
import Checkbox from "~/Components/Form/Checkbox";
import Icon from "~/Components/Icon";
import Text from "~/Components/Ui-kit/Text";

interface FlterProps {
  filter?: string;
  checked?: boolean;
}

export default function Filter({ filter, checked }: FlterProps): JSX.Element {
  const [isChecked, setIsChecked] = useState<boolean>();

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <FilterWrapper onPress={() => setIsChecked((prev) => !prev)}>
      <Icon category={filter} />
      <TextWrapper>
        <Text>{filter}</Text>
      </TextWrapper>
      <CheckboxWrapper>
        <Checkbox
          name={filter}
          forceChecked={isChecked}
          onChange={(state) => setIsChecked(state)}
        />
      </CheckboxWrapper>
    </FilterWrapper>
  );
}
