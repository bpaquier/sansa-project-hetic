import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-native";

import LoginIllustration from "./loginIllustation";
import { BottomText } from "./styles";
import Form from "~/Components/Form";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Button from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";
import FormPageTemplate from "~/Views/Account/FormPageTemplate";

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const Image = <LoginIllustration />;

  const FormComponent = (
    <>
      <Form
        title={t("common.login")}
        submitCtaLabel={t("common.login")}
        inlineCtaLabel={t("forms.forgotPassword")}
        items={[
          {
            placeholder: "johndoe@gmail.com",
            label: t("forms.emailOrIdentifier"),
            name: "ID",
            required: true,
            type: "email"
          },
          {
            label: t("forms.yourPassword"),
            name: "password",
            type: "password",
            required: true
          }
        ]}
      />
      <BottomText>
        <Text color="black40" textAlign="center" type="small">
          {t("forms.noAccountYet")}
        </Text>
      </BottomText>
      <Button
        text={t("common.register")}
        type="tertiary"
        onPress={() => navigate("/register")}
      />
    </>
  );

  return (
    <PageContentWrapper>
      <FormPageTemplate image={Image} form={FormComponent} backArrow={true} />
    </PageContentWrapper>
  );
}
