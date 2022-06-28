import { useMemo, useState, useEffect } from "react";

import {
  StyledView,
  CheckboxBorne,
  CheckboxMobile,
  TextContainer,
  CheckContainerMobile,
  CheckContainerBorne
} from "./styles";
import { InputProps } from "~/Components/Form/Input";
import Check from "~/Components/Icons/System/System/Check";
import Text from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";
import theme from "~/Styles/theme.styles";

export interface CheckBoxProps extends InputProps {
  label?: string;
  forceChecked?: boolean;
  disabled?: boolean;
  onChange?: (state: boolean) => void;
  indeterminate?: boolean;
  width?: number;
  large?: boolean;
}

export default function Checkbox({
  label,
  disabled,
  forceChecked = false,
  updateValue,
  required,
  name,
  width,
  onChange,
  large
}: CheckBoxProps): JSX.Element {
  const { isMobile } = useGlobalContext();
  const [checked, setChecked] = useState(forceChecked);

  useEffect(() => {
    setChecked(forceChecked);
  }, [forceChecked]);

  useEffect(() => {
    required && updateValue && updateValue({ [name]: null });
  }, [required]);

  useEffect(() => {
    checked && updateValue && updateValue({ [name]: true });
    !checked && updateValue && updateValue({ [name]: required ? null : false });
    onChange && onChange(checked);
  }, [checked]);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const colorIcon = useMemo(() => {
    if (checked) {
      if (disabled) return theme.color.neutral.black40;
      else return theme.color.primary.white;
    } else {
      return "transparent";
    }
  }, [checked, disabled]);

  const CheckSize = width ? width : isMobile ? 16 : 24;

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
      <TextContainer {...{ large }}>
        <Text type={large ? "paragraph" : "small"}>{label}</Text>
      </TextContainer>
    </StyledView>
  );
}
