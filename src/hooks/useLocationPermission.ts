import { useState, useEffect } from "react";

import * as Location from "expo-location";

export default function useLocationPermission() {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    hasPermission();
  }, []);

  const hasPermission = async () => {
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      const { granted: request } =
        await Location.requestForegroundPermissionsAsync();
      if (!request) {
        setHasLocationPermission(false);
      } else {
        setHasLocationPermission(true);
      }
    } else {
      setHasLocationPermission(true);
    }
  };

  return hasLocationPermission;
}
