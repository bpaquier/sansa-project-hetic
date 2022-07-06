/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect, useState, useRef } from "react";

import * as Location from "expo-location";
import { StyleSheet, Dimensions, Alert } from "react-native";
// eslint-disable-next-line import/named
import MapView, { PROVIDER_GOOGLE, Camera, Marker } from "react-native-maps";

import { Button, Controls } from "./styles";
import PositionIcon from "~/Components/Icons/System/Map/Position";
import Minus from "~/Components/Icons/System/System/Minus";
import Plus from "~/Components/Icons/System/System/Plus";
import Ping from "~/Components/Ping";
import { useGlobalContext } from "~/Contexts/globalContext";
import { useSearchContext } from "~/Contexts/searchContext";
import theme from "~/Styles/theme.styles";

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
interface LocationProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export default function Map(): JSX.Element {
  const initialDelta = 0.1;
  const delta = 0.04;
  const { isMobile } = useGlobalContext();
  const {
    selectedPlaceIndex,
    filteredPlaces,
    setSelectedPlaceIndex,
    triggerLocalization,
    displayFilters,
    setDisplayFilters
  } = useSearchContext();

  const mapRef = useRef();
  const [location, setLocation] = useState<LocationProps>({
    latitude: 48.859,
    longitude: 2.3397,
    latitudeDelta: initialDelta,
    longitudeDelta: initialDelta
  });

  useEffect(() => {
    void (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});

      setLocation({
        latitudeDelta: initialDelta,
        longitudeDelta: initialDelta,
        latitude: currentLocation?.coords?.latitude,
        longitude: currentLocation?.coords?.longitude
      });
    })();
  }, []);

  useEffect(() => {
    goToLocation({ ...location });
  }, [location]);

  useEffect(() => {
    selectedPlaceIndex !== null &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      mapRef?.current?.animateToRegion(
        {
          latitudeDelta: delta,
          longitudeDelta: delta,
          latitude: parseFloat(filteredPlaces?.[selectedPlaceIndex]?.latitude),
          longitude: parseFloat(filteredPlaces?.[selectedPlaceIndex]?.longitude)
        },
        1000
      );
  }, [selectedPlaceIndex]);

  useEffect(() => {
    triggerLocalization !== null && goToCurrentPosition();
  }, [triggerLocalization]);

  const zoom = (arg: "in" | "out") => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    mapRef?.current?.getCamera().then((cam: Camera) => {
      arg === "in" ? (cam.zoom += 1) : (cam.zoom -= 1);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      mapRef?.current?.animateCamera(cam);
    });
  };

  const goToLocation = ({ latitude, longitude, ...rest }: LocationProps) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mapRef?.current?.animateToRegion(
      {
        ...rest,
        latitude: latitude,
        longitude: longitude
      },
      1000
    );
  };

  const goToCurrentPosition = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "",
        "Veuillez autoriser la géolocalisation dans vos paramettres",
        [{ text: "OK" }]
      );
      return;
    }
    const currentLocation = await Location.getCurrentPositionAsync({});
    goToLocation({
      latitudeDelta: initialDelta,
      longitudeDelta: initialDelta,
      latitude: currentLocation?.coords?.latitude,
      longitude: currentLocation?.coords?.longitude
    });
  };

  return (
    <>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={false}
        initialRegion={{ ...location }}
        onPress={() => {
          !isMobile && displayFilters && setDisplayFilters(null);
        }}
      >
        {filteredPlaces?.map((place, index) => (
          <Marker
            style={[
              {
                zIndex: index === selectedPlaceIndex ? 2 : 1
              }
            ]}
            key={`${index}-${place?.organization_name}`}
            onPress={() => {
              setSelectedPlaceIndex(index);
            }}
            coordinate={{
              latitude: parseFloat(place?.latitude),
              longitude: parseFloat(place?.longitude)
            }}
          >
            <Ping
              {...{ index }}
              isSelected={index === selectedPlaceIndex}
              name={place?.organization_name}
              small={isMobile}
              mobile={isMobile}
            />
          </Marker>
        ))}
      </MapView>
      {!isMobile ? (
        <Controls {...{ isMobile }}>
          <Button
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onPress={() => goToCurrentPosition()}
            marginBottom={isMobile ? 0 : 48}
            {...{ isMobile }}
          >
            <PositionIcon
              width={isMobile ? 20 : 32}
              height={isMobile ? 20 : 32}
              color={theme?.color?.primary?.blue}
            />
          </Button>

          <>
            <Button onPress={() => zoom("in")} marginBottom={8}>
              <Plus
                width={32}
                height={32}
                color={theme?.color?.primary?.blue}
              />
            </Button>
            <Button onPress={() => zoom("out")} marginBottom={0}>
              <Minus
                width={32}
                height={32}
                color={theme?.color?.primary?.blue}
              />
            </Button>
          </>
        </Controls>
      ) : null}
    </>
  );
}
