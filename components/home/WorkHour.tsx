import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";

const WorkHour = () => {
  return (
    <View>
      <Text style={styles.title}>Absent</Text>
      <Text style={styles.desc}>Office (09.00 - 18.00) 09:00-18:00</Text>
    </View>
  );
};

export default memo(WorkHour);

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  desc: {
    fontSize: 14,
    opacity: 0.7,
    marginTop:6
  },
});
