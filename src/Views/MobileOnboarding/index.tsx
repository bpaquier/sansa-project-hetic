/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { View, Animated, Dimensions } from "react-native";
import { useNavigate } from "react-router-native";

import SansaLogo from "./SansaLogo";
import {
  FlagButtonWrapper,
  OnboardingImage,
  OnboardingImagePageWrapper,
  OnboardingPageWrapper,
  StartScreenContentWrapper
} from "./styles";
import Flags from "~/Components/LanguagesMenu/Flags";
import MobileOnboardingTooltip from "~/Components/MobileOnboardingTooltip";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Button from "~/Components/Ui-kit/Button";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function HomeMobile(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setMenuLanguagesOpen } = useGlobalContext();

  const [step, setStep] = useState(0);

  const [OnboardingTranslate] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(OnboardingTranslate, {
      toValue: -Dimensions.get("window").width * step,
      velocity: 10,
      useNativeDriver: true
    }).start();
  }, [step]);

  const OnboardingWrapper = (props: any) => {
    return (
      <Animated.View
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        style={{
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          flexDirection: "row",
          height: "100%",
          width: Dimensions.get("window").width * 6,
          transform: [{ translateX: OnboardingTranslate }]
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        {props.children}
      </Animated.View>
    );
  };

  return (
    <OnboardingWrapper>
      <OnboardingPageWrapper>
        <PageContentWrapper backgroundColor="blue">
          <View>
            <FlagButtonWrapper
              onPress={() => setMenuLanguagesOpen && setMenuLanguagesOpen()}
            >
              <Flags size={40} />
            </FlagButtonWrapper>
            <StartScreenContentWrapper>
              <SansaLogo />
              <TextWrapper
                marginTop={16}
                type="titleL"
                color="white"
                textAlign="center"
              >
                {t("mobileOnboarding.title")}
              </TextWrapper>
              <TextWrapper
                marginTop={16}
                marginBottom={36}
                color="white"
                textAlign="center"
              >
                {t("mobileOnboarding.subtitle")}
              </TextWrapper>
              <Button
                type="secondary"
                text={t("mobileOnboarding.start")}
                onPress={() => setStep(1)}
              />
            </StartScreenContentWrapper>
          </View>
        </PageContentWrapper>
      </OnboardingPageWrapper>
      <OnboardingImagePageWrapper>
        <View>
          <MobileOnboardingTooltip
            top="80px"
            right="2%"
            ArrowPosition="top"
            nextText={t("mobileOnboarding.next")}
            onNext={() => setStep(2)}
            title={t("mobileOnboarding.tooltip.0.title")}
            description={t("mobileOnboarding.tooltip.0.description")}
          />
          <OnboardingImage source={require("./images/1.jpg")} />
        </View>
      </OnboardingImagePageWrapper>
      <OnboardingImagePageWrapper>
        <View>
          <MobileOnboardingTooltip
            top="140px"
            right="2%"
            ArrowPosition="top"
            nextText={t("mobileOnboarding.next")}
            onNext={() => setStep(3)}
            title={t("mobileOnboarding.tooltip.1.title")}
            description={t("mobileOnboarding.tooltip.1.description")}
          />
          <OnboardingImage source={require("./images/2.jpg")} />
        </View>
      </OnboardingImagePageWrapper>
      <OnboardingImagePageWrapper>
        <View>
          <MobileOnboardingTooltip
            bottom="258px"
            right="19%"
            ArrowPosition="bottom"
            nextText={t("mobileOnboarding.next")}
            onNext={() => setStep(4)}
            title={t("mobileOnboarding.tooltip.2.title")}
            description={t("mobileOnboarding.tooltip.2.description")}
          />
          <OnboardingImage source={require("./images/3.jpg")} />
        </View>
      </OnboardingImagePageWrapper>
      <OnboardingImagePageWrapper>
        <View>
          <MobileOnboardingTooltip
            bottom="258px"
            right="19%"
            ArrowPosition="bottom"
            nextText={t("mobileOnboarding.next")}
            onNext={() => setStep(5)}
            title={t("mobileOnboarding.tooltip.3.title")}
            description={t("mobileOnboarding.tooltip.3.description")}
          />
          <OnboardingImage source={require("./images/4.jpg")} />
        </View>
      </OnboardingImagePageWrapper>
      <OnboardingImagePageWrapper>
        <View>
          <MobileOnboardingTooltip
            top="364px"
            right="19%"
            ArrowPosition="top"
            nextText={t("mobileOnboarding.end")}
            onNext={() => navigate("/search")}
            title={t("mobileOnboarding.tooltip.4.title")}
            description={t("mobileOnboarding.tooltip.4.description")}
          />
          <OnboardingImage source={require("./images/5.jpg")} />
        </View>
      </OnboardingImagePageWrapper>
    </OnboardingWrapper>
  );
}
