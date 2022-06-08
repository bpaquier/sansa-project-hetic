import { StyleSheet, View, Dimensions } from "react-native";
import MapView from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

export default function Search(): JSX.Element {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}
