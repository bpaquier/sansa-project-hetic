import { useMemo } from "react";

import {
  StyledView,
  CheckboxBorne,
  CheckboxMobile,
  TextContainer,
  CheckContainerMobile,
  CheckContainerBorne
} from "./styles";
import Check from "~/Components/Icons/System/System/Check";
import Text from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";
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
  checked = false
}: CheckBoxProps): JSX.Element {
  const { isMobile } = useGlobalContext();

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

  const CheckSize = isMobile ? 16 : 24;

  const Checkbox = (
    isMobile ? CheckboxMobile : CheckboxBorne
  ) as React.ElementType;

  const CheckContainer = (
    isMobile ? CheckContainerMobile : CheckContainerBorne
  ) as React.ElementType;

  return (
    <StyledView disabled={disabled} onPress={handleChange}>
      <Checkbox disabled={disabled} checked={checked} onPress={handleChange}>
        <CheckContainer>
          <Check width={CheckSize} color={colorIcon} />
        </CheckContainer>
      </Checkbox>
      <TextContainer>
        <Text>{label}</Text>
      </TextContainer>
    </StyledView>
  );
}
