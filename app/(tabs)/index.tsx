import HomeHeader from "@/components/home/HomeHeader";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import AbsentCard from "@/components/home/AbsentCard";
import WorkHour from "@/components/home/WorkHour";
import HomeFeatureCard from "@/components/home/HomeFeatureCard";
import PageCard from "@/components/common/PageCard";

export default function HomeScreen() {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/header-bg.png")}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView style={styles.container}>
          <HomeHeader />

          <PageCard>
            <ScrollView contentContainerStyle={styles.scroll}>
              <WorkHour />
              <AbsentCard />
              <HomeFeatureCard />
            </ScrollView>
          </PageCard>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    gap: 24,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageStyle: {
    resizeMode: "stretch",
  },
});
