import { useState, useEffect, useRef } from "react";

import { Picker } from "@react-native-picker/picker";
import PhoneInput from "react-native-phone-number-input";

import { InputWrapper, InputElement, StyledInput } from "./styles";
import Text from "~/Components/Ui-kit/Text";
import Theme from "~/Styles/theme.styles";
const { color } = Theme;

export interface InputProps {
  bottomText?: string;
  name: string;
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  updateValue?(value: any): void;
  type?: "text" | "password" | "tel" | "email" | "select" | "checkbox";
  required?: boolean;
  options?: {
    label: string;
    value: string;
  }[];
}

enum ErrorMessages {
  empty = "Ce champs est requis",
  format = "Format invalide"
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
  updateValue,
  options,
  bottomText
}: InputProps): JSX.Element {
  const [value, setValue] = useState<string>(defaultValue ?? "");
  const [error, setError] = useState<ErrorType>({ status: false });
  const phoneInput = useRef<PhoneInput>(null);
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    if (type === "select") {
      updateValue && updateValue({ [name]: value });
      return;
    }
    if (defaultValue || defaultValue?.length === 0) {
      updateValue && updateValue({ [name]: defaultValue });
    } else if (required && (!defaultValue || !defaultValue?.length)) {
      updateValue && updateValue({ [name]: null });
    }
  }, []);

  const checkValue = () => {
    if (required && value?.length === 0) {
      setError({ status: true, type: "empty", content: ErrorMessages?.empty });
      updateValue && updateValue({ [name]: null });
    } else if (type === "email") {
      if (re.test(value)) {
        setError({ status: false });
        updateValue && updateValue({ [name]: value });
      } else {
        setError({
          status: true,
          type: "format",
          content: ErrorMessages?.format
        });
        updateValue && updateValue({ [name]: null });
      }
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
      {(type === "select" && options && options?.length > 0) ||
      type === "tel" ? (
        type === "tel" ? (
          <StyledInput error={error?.status}>
            <PhoneInput
              placeholder={placeholder}
              containerStyle={{
                width: "100%"
              }}
              flagButtonStyle={{
                width: "20%",
                backgroundColor: color?.primary?.white,
                borderRightWidth: 1,
                borderRightColor: color?.neutral?.black20
              }}
              textContainerStyle={{ paddingVertical: 10 }}
              ref={phoneInput}
              defaultValue={value}
              onChangeFormattedText={(value) => {
                setValue(value);

                const checkValid = phoneInput?.current?.isValidNumber(value);
                if (checkValid) {
                  setError({ status: false });
                  updateValue && updateValue({ [name]: value });
                } else {
                  if (value?.length === 0) {
                    setError({ status: false });
                    updateValue && updateValue({ [name]: "" });
                  } else {
                    setError({
                      status: true,
                      type: "format",
                      content: ErrorMessages?.format
                    });
                    updateValue && updateValue({ [name]: null });
                  }
                }
              }}
              defaultCode="FR"
              layout="first"
            />
          </StyledInput>
        ) : (
          <StyledInput>
            <Picker
              selectedValue={value}
              style={{
                backgroundColor: color?.primary?.white
              }}
              onValueChange={(value) => {
                setValue(value);
                updateValue && updateValue({ [name]: value });
              }}
            >
              {options?.map((option, i) => (
                <Picker.Item {...option} key={`${option.value}${i}`} />
              ))}
            </Picker>
          </StyledInput>
        )
      ) : (
        <InputElement
          secureTextEntry={type === "password"}
          keyboardType={setKeyboardType()}
          {...{ placeholder, defaultValue }}
          error={error?.status}
          onChangeText={(value) => setValue(value)}
          onEndEditing={checkValue}
        />
      )}
      {bottomText && !error?.status && (
        <Text color="black20" type="small">
          {bottomText}
        </Text>
      )}
      {error?.status && error?.content && (
        <Text color="red" type="small">
          {type === "password" && error?.type !== "empty"
            ? bottomText
              ? bottomText
              : error?.content
            : error?.content}
        </Text>
      )}
    </InputWrapper>
  );
}
