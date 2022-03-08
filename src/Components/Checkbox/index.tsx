import { StyledView, StyledBox, StyledLabel } from "./styles";

type CheckBoxProps = {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
};

export default function Checkbox({
  label,
  onChange,
  disabled,
  checked = false
}: CheckBoxProps): JSX.Element {
  const handleChange = () => {
    !disabled && onChange();
  };

  return (
    <StyledView disabled={disabled} onPress={handleChange}>
      <StyledBox
        disabled={disabled}
        checked={checked}
        onPress={handleChange}
      ></StyledBox>
      <Logo />
      <StyledLabel>{label}</StyledLabel>
    </StyledView>
  );
}
