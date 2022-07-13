import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigate } from "react-router-native";

import HomeBorne from "~/Components/Home/HomeBorne";
import HomeMobile from "~/Components/Home/HomeMobile";
import { useGlobalContext } from "~/Contexts/globalContext";
import useApi from "~/hooks/useApi";

interface serviceObj {
  service: string;
  count: number;
}

export default function Home(): JSX.Element {
  const { isMobile } = useGlobalContext();

  const HomeComponent = isMobile ? HomeMobile : HomeBorne;

  const navigate = useNavigate();

  const checkIfFirstLaunch = async () => {
    const hasFirstLaunched = await AsyncStorage.getItem("alreadyLaunched");
    if (hasFirstLaunched === null) {
      AsyncStorage.setItem("alreadyLaunched", "true");
      navigate("/onboarding");
    } else {
      getPointsNumber();
    }
  };

  useEffect(() => {
    if (isMobile) {
      checkIfFirstLaunch();
    } else {
      getPointsNumber();
    }
  });

  const { getServicesCount } = useApi();

  const [pointsNumber, setPointsNumber] = useState({
    shower: 0,
    water: 0,
    toilets: 0,
    housing: 0
  });

  const getPointsNumber = () => {
    getServicesCount().then(({ data }: { data: serviceObj[] }) => {
      const services = [
        "Douche",
        "Fontaine à eau",
        "Toilettes",
        "Halte de nuit"
      ];
      const serviceCounts: number[] = [];

      for (const service of services) {
        const serviceCount: number = data.find(
          (el: serviceObj) => el.service === service
        ).count;
        serviceCounts.push(serviceCount);
      }

      setPointsNumber({
        shower: serviceCounts[0],
        water: serviceCounts[1],
        toilets: serviceCounts[2],
        housing: serviceCounts[3]
      });
    });
  };

  return <HomeComponent pointsNumber={pointsNumber} />;
}
