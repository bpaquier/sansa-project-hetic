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
        title={t("common.seConnecter")}
        submitCtaLabel={t("common.seConnecter")}
        inlineCtaLabel={t("comptesFormulaires.motDePasseOublie")}
        items={[
          {
            placeholder: "johndoe@gmail.com",
            label: t("comptesFormulaires.votreEmailOuIdentifiant"),
            name: "ID",
            required: true,
            type: "email"
          },
          {
            label: t("comptesFormulaires.votreMotDePasse"),
            name: "password",
            type: "password",
            required: true
          }
        ]}
      />
      <BottomText>
        <Text color="black40" textAlign="center" type="small">
          {t("comptesFormulaires.pasEncoreDeCompte")}
        </Text>
      </BottomText>
      <Button
        text={t("common.sInscrire")}
        type="tertiary"
        onPress={() => navigate("/register")}
      />
    </>
  );

  return (
    <PageContentWrapper>
      <FormPageTemplate image={Image} form={FormComponent} />
    </PageContentWrapper>
  );
}
