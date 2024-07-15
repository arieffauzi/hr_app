import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/page-bg.png")}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView>
          <View style={styles.header}>
            <View style={styles.nameIcon}>
              <Text>AF</Text>
            </View>
          </View>
        </SafeAreaView>
        <SafeAreaView>
          <View style={styles.page}>
            <Text>sldfj</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  page: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
  },
  header: {
    padding: 16,
  },
  nameIcon: {
    backgroundColor: "#FFE01B",
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  imageStyle: {
    resizeMode: "stretch",
    // alignSelf:'flex-start'
  },
});
