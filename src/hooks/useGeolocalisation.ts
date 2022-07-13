import { useState, useEffect } from "react";

import * as Location from "expo-location";

interface LocationProps {
  latitude: number;
  longitude: number;
}

export default function useGeolocalisation(
  hasPermission: boolean
): LocationProps {
  const [currentLocation, setCurrentLocation] =
    useState<LocationProps | null>();

  useEffect(() => {
    if (hasPermission) {
      setWatcher();

      getCurrentPosition().then((locationObject) => {
        setCurrentLocation({
          latitude: locationObject.coords.latitude,
          longitude: locationObject.coords.longitude
        });
      });
    } else {
      setCurrentLocation(null);
    }
  }, [hasPermission]);

  const getCurrentPosition = async () => {
    return Location.getCurrentPositionAsync({});
  };

  const setWatcher = async () => {
    await Location.watchPositionAsync({ distanceInterval: 5 }, (locaction) => {
      setCurrentLocation({
        latitude: locaction.coords.latitude,
        longitude: locaction.coords.longitude
      });
    });
  };
  return currentLocation;
}
