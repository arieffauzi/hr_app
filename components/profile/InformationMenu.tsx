import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileMenuItem from "./ProfileMenuItem";
import { Link } from "expo-router";

const InformationMenu = () => {
  return (
    <View>
      <Text style={styles.title}>Information</Text>
      <View style={styles.menuContainer}>
        <ProfileMenuItem
          href="/(profile)/personal-information"
          icon="person"
          label="Personal Information"
        />
        <ProfileMenuItem icon="reader" label="Employee Information" />
        <ProfileMenuItem icon="wallet" label="Salary Information" />
        <ProfileMenuItem icon="file-tray-full" label="My File" />
      </View>
    </View>
  );
};

export default memo(InformationMenu);

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  menuContainer: {
    gap: 32,
  },
});
