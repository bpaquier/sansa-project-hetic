import { Fragment, useState, useEffect } from "react";

import { useNavigate } from "react-router-native";

import Checkbox, { CheckBoxProps } from "./Checkbox";
import Input, { InputProps } from "./Input";
import {
  SubmitButton,
  FormWrapper,
  TitleWrapper,
  InlineButton,
  Wrapper
} from "./styles";
import Button from "~/Components/Ui-kit/Button";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import theme from "~/Styles/theme.styles";

export interface FormProps {
  title?: string;
  submitCtaLabel?: string;
  inlineCtaLabel?: string;
  items?: InputProps[] | CheckBoxProps[];
  onSubmitAction?: (name: string) => void;
}

export default function Form({
  title,
  submitCtaLabel,
  inlineCtaLabel,
  items,
  onSubmitAction
}: FormProps): JSX.Element {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<{ ID?: string; password?: string }>(
    {}
  );
  const [ctaDisabled, setCtaDisabled] = useState(true);

  useEffect(() => {
    const dataValues = Object.values(formData);
    if (dataValues?.length === 0 || dataValues?.includes(null)) {
      setCtaDisabled(true);
    } else {
      setCtaDisabled(false);
    }
  }, [formData]);

  const updateData = (value: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    setFormData((prev) => ({ ...prev, ...value }));
  };

  const onSubmit = () => {
    if (!ctaDisabled && onSubmitAction) {
      onSubmitAction(formData.ID.split("@")[0]);
      navigate("/plus");
    }
  };

  return (
    <Wrapper>
      {title && (
        <TitleWrapper>
          <Text type="titleL" color="grey">
            {title}
          </Text>
        </TitleWrapper>
      )}
      <Separator
        orientation="horizontal"
        theme="dark"
        columnWidth={theme?.grid?.columns}
      />
      <FormWrapper>
        {items &&
          items?.map((item: InputProps | CheckBoxProps, i: number) => (
            <Fragment key={`${i}-${item?.name}`}>
              {item?.type === "checkbox" ? (
                <Checkbox {...item} updateValue={updateData} />
              ) : (
                <Input {...item} updateValue={updateData} />
              )}
            </Fragment>
          ))}
        <SubmitButton>
          <Button
            text={submitCtaLabel}
            fullWidth
            onPress={() => {
              !ctaDisabled && onSubmit();
            }}
            isDisabled={ctaDisabled}
          />
        </SubmitButton>
        {inlineCtaLabel && (
          <InlineButton>
            <Button type="tertiary" text={inlineCtaLabel} />
          </InlineButton>
        )}
      </FormWrapper>
      <Separator
        orientation="horizontal"
        theme="dark"
        columnWidth={theme?.grid?.columns}
      />
    </Wrapper>
  );
}
