import { useEffect, useState } from "react";

import HomeBorne from "../../../Components/Home/HomeBorne";
import HomeMobile from "../../../Components/Home/HomeMobile";
import { useGlobalContext } from "~/Contexts/globalContext";
import useApi from "~/hooks/useApi";

export default function Home(): JSX.Element {
  const { isMobile } = useGlobalContext();

  const HomeComponent = isMobile ? HomeMobile : HomeBorne;

  const { getOrgaByServices } = useApi();

  const [pointsNumber, setPointsNumber] = useState({
    shower: 0,
    water: 0,
    toilets: 0,
    housing: 0
  });

  const getPointsNumber = () => {
    const getShowerNumber = getOrgaByServices(["Douche"]).then(
      ({ data }: { data: [] }): number => data.length
    );

    const getWaterNumber = getOrgaByServices(["Fontaine à eau"]).then(
      ({ data }: { data: [] }): number => data.length
    );

    const getToiletsNumber = getOrgaByServices(["Toilettes"]).then(
      ({ data }: { data: [] }): number => data.length
    );

    const getHousingNumber = getOrgaByServices(["Halte de nuit"]).then(
      ({ data }: { data: [] }): number => data.length
    );

    Promise.all([
      getShowerNumber,
      getWaterNumber,
      getToiletsNumber,
      getHousingNumber
    ]).then((values: [number, number, number, number]) => {
      setPointsNumber({
        shower: values[0],
        water: values[1],
        toilets: values[2],
        housing: values[3]
      });
    });
  };

  useEffect(() => {
    getPointsNumber();
  }, []);

  return <HomeComponent pointsNumber={pointsNumber} />;
}
