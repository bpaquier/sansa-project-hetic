import { useEffect, useState } from "react";

import HomeBorne from "../../../Components/Home/HomeBorne";
import HomeMobile from "../../../Components/Home/HomeMobile";
import { useGlobalContext } from "~/Contexts/globalContext";
import useApi from "~/hooks/useApi";

export default function Home(): JSX.Element {
  const { isMobile } = useGlobalContext();

  const HomeComponent = isMobile ? HomeMobile : HomeBorne;

  const { getServicesCount } = useApi();

  const [pointsNumber, setPointsNumber] = useState({
    shower: 0,
    water: 0,
    toilets: 0,
    housing: 0
  });

  const getPointsNumber = () => {
    getServicesCount().then(({ data }) => {
      const services = ["Douche", "Fontaine à eau", "Toilettes", "Halte de nuit"];
      const serviceCounts = [];
      
      for (const service of services) {
        const serviceCount = data.find(el => el.service === service).count;
        serviceCounts.push(serviceCount);
      };

      setPointsNumber({
        shower: serviceCounts[0],
        water: serviceCounts[1],
        toilets: serviceCounts[2],
        housing: serviceCounts[3]
      });
    });

  };

  useEffect(() => {
    getPointsNumber();
  }, []);

  return <HomeComponent pointsNumber={pointsNumber} />;
}
