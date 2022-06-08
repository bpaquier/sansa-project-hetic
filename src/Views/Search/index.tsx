import { useEffect, useState } from "react";

import * as Location from "expo-location";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

interface LocationProps {
  accuracy?: number;
  altitude?: number;
  altitudeAccuracy?: number;
  heading?: number;
  latitude?: number;
  longitude?: number;
  speed?: number;
}

export default function Search(): JSX.Element {
  const [location, setLocation] = useState<LocationProps>({
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    latitude: 0,
    longitude: 0,
    speed: 0
  });

  useEffect(() => {
    void (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      setLocation(location?.coords);
    })();
  }, []);

  console.log({ location });
  return (
    <>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: location?.latitude ?? 0,
          longitude: location?.longitude ?? 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    </>
  );
}
/*  */
