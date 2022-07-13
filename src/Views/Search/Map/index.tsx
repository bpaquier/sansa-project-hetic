/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect, useState, useRef } from "react";

import { useTranslation } from "react-i18next";
import { Dimensions, Alert, Keyboard } from "react-native";
// eslint-disable-next-line import/named
import MapView, { PROVIDER_GOOGLE, Camera, Marker } from "react-native-maps";

import mapStyle from "./mapStyle.json";
import { Button, Controls } from "./styles";
import PositionIcon from "~/Components/Icons/System/Map/Position";
import Minus from "~/Components/Icons/System/System/Minus";
import Plus from "~/Components/Icons/System/System/Plus";
import Ping from "~/Components/Ping";
import { useGlobalContext } from "~/Contexts/globalContext";
import { useSearchContext } from "~/Contexts/searchContext";
import useGeolocalisation from "~/hooks/useGeolocalisation";
import useLocationPermission from "~/hooks/useLocationPermission";
import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

interface LocationProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export default function Map(): JSX.Element {
  const initialDelta = 0.1;
  const delta = 0.04;
  const { isMobile, statusBarHeight } = useGlobalContext();
  const {
    selectedPlaceIndex,
    filteredPlaces,
    setSelectedPlaceIndex,
    triggerLocalization,
    displayFilters,
    setDisplayFilters,
    displayPlacesList,
    setSearchValue
  } = useSearchContext();
  const { t } = useTranslation();
  const mapRef = useRef();
  const locationPermission = useLocationPermission();
  const currentLocation = useGeolocalisation(locationPermission);
  const firstLocated = useRef<boolean>(false);
  const [location, setLocation] = useState<LocationProps>(null);
  const [leftPadding, setLeftPadding] = useState<number>(0);

  useEffect(() => {
    if (currentLocation && !firstLocated.current) {
      firstLocated.current = true;
      setLocation({
        latitudeDelta: initialDelta,
        longitudeDelta: initialDelta,
        ...currentLocation
      });
    }
  }, [currentLocation]);

  useEffect(() => {
    Keyboard.dismiss();
    goToLocation({ ...location });
  }, [location]);

  useEffect(() => {
    if (!isMobile) {
      if (displayPlacesList) {
        setLeftPadding(getColumnWidth(9, false));
      } else {
        setLeftPadding(getColumnWidth(3, false));
      }
    }
  }, [isMobile, displayPlacesList]);

  useEffect(() => {
    selectedPlaceIndex !== null &&
      filteredPlaces &&
      setLocation({
        latitudeDelta: delta + 0.1,
        longitudeDelta: delta + 0.1,
        latitude: parseFloat(filteredPlaces?.[selectedPlaceIndex]?.latitude),
        longitude: parseFloat(filteredPlaces?.[selectedPlaceIndex]?.longitude)
      });
  }, [selectedPlaceIndex, filteredPlaces]);

  useEffect(() => {
    triggerLocalization !== null && goToCurrentPosition();
  }, [triggerLocalization]);

  const zoom = (arg: "in" | "out") => {
    console.log({ arg });
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

  const goToCurrentPosition = () => {
    if (!locationPermission || !currentLocation) {
      Alert.alert("", t("search.locationPermissionDenied"), [{ text: "OK" }]);
      return;
    }
    setSelectedPlaceIndex(null);
    setLocation({
      latitudeDelta: delta,
      longitudeDelta: delta,
      ...currentLocation
    });
  };

  return (
    <>
      <MapView
        ref={mapRef}
        style={{
          position: "absolute",
          top: isMobile ? -1 * statusBarHeight : 0,
          bottom: 0,
          width: Dimensions.get("window").width
        }}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={false}
        initialRegion={{
          latitude: 48.859,
          longitude: 2.3397,
          latitudeDelta: initialDelta,
          longitudeDelta: initialDelta
        }}
        onPress={() => {
          !isMobile && displayFilters && setDisplayFilters(null);
          setSearchValue(null);
          Keyboard.dismiss();
        }}
        mapPadding={{
          top: 0,
          right: 0,
          bottom: 0,
          left: leftPadding
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
              small
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
