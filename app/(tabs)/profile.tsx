import PageCard from "@/components/common/PageCard";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileListMenu from "@/components/profile/ProfileListMenu";
import { memo } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const profile = () => {
  return (
    <View >
      <ImageBackground
        source={require("../../assets/images/header-bg.png")}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView style={styles.container}>
          <ProfileHeader />
          <PageCard style={styles.page}>
            <ProfileListMenu/>
          </PageCard>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default memo(profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageStyle: {
    resizeMode: "stretch",
  },
  page: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    flex:1
  },
});
