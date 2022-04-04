import { useMemo } from "react";

import Check from "../Icons/System/Check";
import Minus from "../Icons/System/Minus";
import Text from "../Ui-kit/Text";
import {
  StyledView,
  StyledBox,
  StyledTextContainer,
  StyledCheckContainer
} from "./styles";
import theme from "~/Styles/theme.styles";

type CheckBoxProps = {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
  indeterminate?: boolean;
};

export default function Checkbox({
  label,
  onChange,
  disabled,
  checked = false,
  indeterminate
}: CheckBoxProps): JSX.Element {
  const handleChange = () => {
    !disabled && onChange();
  };

  const colorIcon = useMemo(() => {
    if (checked) {
      if (disabled) return theme.color.neutral.black40;
      else return theme.color.primary.white;
    } else {
      return "transparent";
    }
  }, [checked, disabled]);

  return (
    <StyledView disabled={disabled} onPress={handleChange}>
      <StyledBox disabled={disabled} checked={checked} onPress={handleChange}>
        <StyledCheckContainer>
          {!indeterminate && <Check width={16} color={colorIcon} />}
          {indeterminate && <Minus width={16} color={colorIcon} />}
        </StyledCheckContainer>
      </StyledBox>
      <StyledTextContainer>
        <Text>{label}</Text>
      </StyledTextContainer>
    </StyledView>
  );
}
