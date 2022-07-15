import { useState, useEffect, useRef } from "react";

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
  const unsuscribe = useRef(() => undefined);

  useEffect(() => {
    if (hasPermission) {
      const localisationSubsciption = setWatcher();
      unsuscribe.current = async () => {
        (await localisationSubsciption)?.remove();
      };
    } else {
      setCurrentLocation(null);
    }

    return () => {
      unsuscribe.current();
    };
  }, [hasPermission]);

  const setWatcher = async () => {
    return await Location.watchPositionAsync(
      { distanceInterval: 5 },
      (locaction) => {
        setCurrentLocation({
          latitude: locaction.coords.latitude,
          longitude: locaction.coords.longitude
        });
      }
    );
  };
  return currentLocation;
}
