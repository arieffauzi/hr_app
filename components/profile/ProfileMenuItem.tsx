import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ComponentProps, memo } from "react";
import { StyleSheet, Text, View } from "react-native";

interface IProfileMenuItem {
  icon: ComponentProps<typeof Ionicons>["name"];
  label: string;
  href?: string;
  color?: string;
}

const ProfileMenuItem = (props: IProfileMenuItem) => {
  const { icon, color, label, href } = props;
  return (
    <Link href={href ? href : "#"}>
      <View style={styles.container}>
        <View style={styles.menu}>
          <Ionicons
            size={25}
            style={{ marginBottom: -3 }}
            name={icon}
            color={color ? color : Colors.secondary}
          />
          <Text>{label}</Text>
        </View>
        <Ionicons size={20} name="chevron-forward" />
      </View>
    </Link>
  );
};

export default memo(ProfileMenuItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    width:'100%'
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
