import { StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

export default function Search(): JSX.Element {
  return (
    <>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
    </>
  );
}
/*  */
