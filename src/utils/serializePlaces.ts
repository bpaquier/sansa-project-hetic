import { PlaceProps } from "~/Contexts/searchContext";

const serializePlaces = (places: PlaceProps[]): PlaceProps[] => {
  const sortedPlaces = places?.sort(
    (prev: { place: number }, next: { place: number }) =>
      next?.place - prev?.place
  );

  const checkDoublePosition = [];

  const formatedPlacesList = sortedPlaces?.map((place) => {
    const lat = place?.latitude;
    const lng = place?.longitude;

    const key = `${lat}_${lng}`;
    if (checkDoublePosition?.includes(key)) {
      return {
        ...place,
        latitude: `${parseFloat(lat) - 0.0003}`
      };
    }
    checkDoublePosition?.push(key);
    return place;
  });
  return formatedPlacesList;
};

export default serializePlaces;
