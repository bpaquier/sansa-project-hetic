import HomeBorne from "../../../Components/Home/HomeBorne";
import HomeMobile from "../../../Components/Home/HomeMobile";
import { useGlobalContext } from "~/Contexts/globalContext";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigate } from "react-router-native";

export default function Home(): JSX.Element {
  const { isMobile } = useGlobalContext();

  const HomeComponent = isMobile ? HomeMobile : HomeBorne;

  const navigate = useNavigate();

  const checkIfFirstLaunch = async () => {
    const hasFirstLaunched = await AsyncStorage.getItem("alreadyLaunched");
    if (hasFirstLaunched === null) {
      AsyncStorage.setItem("alreadyLaunched", "true");
      navigate("/onboarding");
    }
  }
  
  useEffect(() => {
    checkIfFirstLaunch();
  })

  return <HomeComponent />;
}
