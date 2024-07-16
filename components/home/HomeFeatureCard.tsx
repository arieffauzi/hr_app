import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { memo } from "react";

const Data = [
  "Absent",
  "Requst",
  "Adjust Absent",
  "Leave",
  "Overtime",
  "Salary",
];

const HomeFeatureCard = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Feature</Text>
        <TouchableOpacity style={styles.edit}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.feature}>
        <FlatList
          scrollEnabled={false}
          columnWrapperStyle={styles.feature}
          data={Data}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemContainer} key={item}>
              <Image
                source={require("../../assets/images/favicon.png")}
                height={10}
                width={10}
              />
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default memo(HomeFeatureCard);

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feature: {
    justifyContent: "space-between",
    marginTop: 10,
    padding: 16,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  edit: {
    fontSize: 14,
    opacity: 0.6,
  },
});
