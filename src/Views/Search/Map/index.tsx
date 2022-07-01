/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect, useState, useRef } from "react";

import * as Location from "expo-location";
import { StyleSheet, Dimensions } from "react-native";
// eslint-disable-next-line import/named
import MapView, { PROVIDER_GOOGLE, Camera, Marker } from "react-native-maps";

import { ControlsBorne, ControlsMobile, Button } from "./styles";
import PositionIcon from "~/Components/Icons/System/Map/Position";
import Minus from "~/Components/Icons/System/System/Minus";
import Plus from "~/Components/Icons/System/System/Plus";
import Ping from "~/Components/Ping";
import { useGlobalContext } from "~/Contexts/globalContext";
import { useSearchContext } from "~/Contexts/searchContext";
import theme from "~/Styles/theme.styles";

const styles = StyleSheet.create({
  map: {
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
  const initialDelta = 0.05;
  const { displayFilters, setDisplayFilters } = useSearchContext();
  const { isMobile } = useGlobalContext();
  const { selectedPlaceIndex, filteredPlaces, setSelectedPlaceIndex } =
    useSearchContext();

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

  useEffect(() => {
    selectedPlaceIndex !== null &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      mapRef?.current?.animateToRegion(
        {
          latitudeDelta: initialDelta,
          longitudeDelta: initialDelta,
          latitude: parseFloat(
            filteredPlaces?.[selectedPlaceIndex]?.position?.latitude
          ),
          longitude: parseFloat(
            filteredPlaces?.[selectedPlaceIndex]?.position?.longitude
          )
        },
        1000
      );
  }, [selectedPlaceIndex]);

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

  const Controls = (
    isMobile ? ControlsMobile : ControlsBorne
  ) as React.ElementType;

  return (
    /*  <Pressable
      
    > */
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
            key={`${index}-${place?.organization_name}`}
            onPress={() => {
              setSelectedPlaceIndex(index);
            }}
            coordinate={{
              latitude: parseFloat(place?.position?.latitude),
              longitude: parseFloat(place?.position?.longitude)
            }}
          >
            <Ping
              {...{ index }}
              isSelected={index === selectedPlaceIndex}
              name={place?.organization_name}
            />
          </Marker>
        ))}
      </MapView>
      <Controls>
        <Button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onPress={async () => {
            const currentLocation = await Location.getCurrentPositionAsync({});
            goToLocation({
              latitudeDelta: initialDelta,
              longitudeDelta: initialDelta,
              latitude: currentLocation?.coords?.latitude,
              longitude: currentLocation?.coords?.longitude
            });
          }}
          marginBottom={isMobile ? 0 : 48}
          {...{ isMobile }}
        >
          <PositionIcon
            width={isMobile ? 20 : 32}
            height={isMobile ? 20 : 32}
            color={theme?.color?.primary?.blue}
          />
        </Button>
        {!isMobile && (
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
        )}
      </Controls>
    </>
    /*  </Pressable> */
  );
}
