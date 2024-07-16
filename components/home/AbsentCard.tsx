import { StyleSheet, View } from "react-native";
import ClockIn from "./ClockIn";
import { Colors } from "@/constants/Colors";
import Button from "../common/Button";
import { memo } from "react";
import ClockOut from "./ClockOut";

const AbsentCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.clockIn}>
        <ClockIn />
        <ClockOut />
      </View>
      <Button variants="secondary">Clock In</Button>
    </View>
  );
};

export default memo(AbsentCard);

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "700",
  },
  card: {
    alignItems: "center",
    gap:10,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  clockIn: {
    flexDirection: "row",
    gap: 6,
  },
});
