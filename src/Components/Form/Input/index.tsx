import { useState, useEffect } from "react";

import { InputWrapper, InputElement } from "./styles";
import Text from "~/Components/Ui-kit/Text";

export interface InputProps {
  name: string;
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  updateValue?(value: any): void;
  type?: "text" | "password" | "tel" | "email";
  required?: boolean;
}

enum ErrorMessages {
  empty = "ce champs est requis",
  format = "format invalide"
}

interface ErrorType {
  status: boolean;
  type?: "empty" | "format";
  content?: ErrorMessages;
}

export default function Input({
  placeholder,
  label,
  defaultValue,
  type = "text",
  required,
  name,
  updateValue
}: InputProps): JSX.Element {
  const [value, setValue] = useState<string>(defaultValue ?? "");
  const [error, setError] = useState<ErrorType>({ status: false });

  useEffect(() => {
    required && updateValue && updateValue({ [name]: null });
  }, []);

  const checkValue = () => {
    if (required && value?.length === 0) {
      setError({ status: true, type: "empty", content: ErrorMessages?.empty });
      updateValue && updateValue({ [name]: null });
    } else {
      setError({ status: false });
      updateValue && updateValue({ [name]: value });
    }
  };

  const setKeyboardType = () => {
    switch (type) {
      case "email":
        return "email-address";
      case "tel":
        return "phone-pad";
      default:
        return "default";
    }
  };

  return (
    <InputWrapper>
      {label && (
        <Text color="black40">
          {label}
          {required ? " *" : ""}
        </Text>
      )}
      <InputElement
        secureTextEntry={type === "password"}
        keyboardType={setKeyboardType()}
        {...{ placeholder, defaultValue }}
        error={error?.status}
        onChangeText={(value) => setValue(value)}
        onEndEditing={checkValue}
      />
      {error?.status && error?.content && (
        <Text color="red" type="small">
          {error?.content}
        </Text>
      )}
    </InputWrapper>
  );
}
