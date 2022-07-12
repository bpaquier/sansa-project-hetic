import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Animated, ImageBackground } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigate } from "react-router-native";
import Flags from "~/Components/LanguagesMenu/Flags";

import PageContentWrapper from "~/Components/PageContentWrapper";
import Button from "~/Components/Ui-kit/Button";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import SansaLogo from "./SansaLogo";
import { useGlobalContext } from "~/Contexts/globalContext";
import { Dimensions, Image } from "react-native";
import MobileOnboardingTooltip from "~/Components/MobileOnboardingTooltip";

export default function HomeMobile(): JSX.Element {
  const navigate = useNavigate();
  const { setMenuLanguagesOpen } = useGlobalContext();

  const [step, setStep] = useState(0);

  const [NavIndicatorTranslate] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(NavIndicatorTranslate, {
      toValue: -Dimensions.get("window").width * step,
      velocity: 10,
      useNativeDriver: true
    }).start();
  }, [step]);

  const NavIndicator = (props: any) => {
    return (
      <Animated.View
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        style={{
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          ...props.style,
          transform: [{ translateX: NavIndicatorTranslate }],
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        {props.children}
      </Animated.View>
    );
  };
  
  return (
    <NavIndicator style={{ flexDirection: "row", height: "100%", width: Dimensions.get("window").width * 6 }}>
      <View style={{ width: Dimensions.get("window").width }}>
        <PageContentWrapper backgroundColor="blue">
          <View>
            <View style={{ position: "absolute", top: 0, left: 0}}>
              <TouchableOpacity onPress={() =>
                setMenuLanguagesOpen &&
                setMenuLanguagesOpen()
              }>
                <View style={{ padding: 1, backgroundColor: "white", borderRadius: 50 }}>
                  <Flags size={40} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: "50%", alignItems: "center" }}>
              <SansaLogo />
              <TextWrapper marginTop={16} type="titleL" color="white" textAlign="center">Bienvenue sur SANSA !</TextWrapper>
              <TextWrapper marginTop={16} color="white" textAlign="center">Solution d’aide numérique aux</TextWrapper>
              <TextWrapper marginBottom={36} color="white" textAlign="center">sans-abris</TextWrapper>
              <Button type="secondary" text="Commencer" onPress={() => setStep(1)} />
            </View>
          </View>
        </PageContentWrapper>
      </View>
      <View style={{ position: "relative", width: Dimensions.get("window").width, height: "100%", backgroundColor: "black", justifyContent: "center" }}>
        <View>
          <MobileOnboardingTooltip
            top="80px"
            right="2%"
            ArrowPosition="top"
            nextText="Suivant"
            onNext={() => setStep(2)}
            title="Recherchez"
            description="Vous pouvez rechercher une association grâce à la barre de recherche"
          />
          <Image style={{ bottom: undefined, width: Dimensions.get("window").width, height: Dimensions.get("window").width * 71 / 40, resizeMode: "contain" }} source={require('./Images/1.jpg')} />
        </View>
      </View>
      <View style={{ position: "relative", width: Dimensions.get("window").width, height: "100%", backgroundColor: "black", justifyContent: "center" }}>
        <View>
          <MobileOnboardingTooltip
            top="140px"
            right="2%"
            ArrowPosition="top"
            nextText="Suivant"
            onNext={() => setStep(3)}
            title="Filtrez"
            description="Vous pouvez aussi rechercher vos besoins grâce aux catégories"
          />
          <Image style={{ bottom: undefined, width: Dimensions.get("window").width, height: Dimensions.get("window").width * 71 / 40, resizeMode: "contain" }} source={require('./Images/2.jpg')} />
        </View>
      </View>
      <View style={{ position: "relative", width: Dimensions.get("window").width, height: "100%", backgroundColor: "black", justifyContent: "center" }}>
        <View>
          <MobileOnboardingTooltip
            bottom="258px"
            right="19%"
            ArrowPosition="bottom"
            nextText="Suivant"
            onNext={() => setStep(4)}
            title="Les associations"
            description="Ici, vous pourrez accéder aux resultats de votre recherche. En cliquant sur cette zone vous aurez accès au détail de l’association"
          />
          <Image style={{ bottom: undefined, width: Dimensions.get("window").width, height: Dimensions.get("window").width * 71 / 40, resizeMode: "contain" }} source={require('./Images/3.jpg')} />
        </View>
      </View>
      <View style={{ position: "relative", width: Dimensions.get("window").width, height: "100%", backgroundColor: "black", justifyContent: "center" }}>
        <View>
          <MobileOnboardingTooltip
            bottom="258px"
            right="19%"
            ArrowPosition="bottom"
            nextText="Suivant"
            onNext={() => setStep(5)}
            title="Plus de résultats"
            description="En glissant vers la gauche vous pourrez voir les différentes associations"
          />
          <Image style={{ bottom: undefined, width: Dimensions.get("window").width, height: Dimensions.get("window").width * 71 / 40, resizeMode: "contain" }} source={require('./Images/4.jpg')} />
        </View>
      </View>
      <View style={{ position: "relative", width: Dimensions.get("window").width, height: "100%", backgroundColor: "black", justifyContent: "center" }}>
        <View>
          <MobileOnboardingTooltip
            top="364px"
            right="19%"
            ArrowPosition="top"
            nextText="Démarrer"
            onNext={() => navigate("/search")}
            title="Informez-vous"
            description="En cliquant sur l’encart de l’assocation vous pourrez accéder à son détail"
          />
          <Image style={{ bottom: undefined, width: Dimensions.get("window").width, height: Dimensions.get("window").width * 71 / 40, resizeMode: "contain" }} source={require('./Images/5.jpg')} />
        </View>
      </View>
      <View style={{ width: Dimensions.get("window").width }}>
        <PageContentWrapper backgroundColor="grey">
          <View>
            <View style={{ position: "absolute", top: 0, left: 0}}>
              <TouchableOpacity onPress={() =>
                setMenuLanguagesOpen &&
                setMenuLanguagesOpen()
              }>
                <View style={{ padding: 1, backgroundColor: "white", borderRadius: 50 }}>
                  <Flags size={40} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: "50%", alignItems: "center" }}>
              <SansaLogo />
              <TextWrapper marginTop={16} type="titleL" color="white" textAlign="center">Bienvenue sur SANSA !</TextWrapper>
              <TextWrapper marginTop={16} color="white" textAlign="center">Solution d’aide numérique aux</TextWrapper>
              <TextWrapper marginBottom={36} color="white" textAlign="center">sans-abris</TextWrapper>
              <Button type="secondary" text="Commencer" onPress={() => setStep(0)} />
            </View>
          </View>
        </PageContentWrapper>
      </View>
    </NavIndicator>
  );
}