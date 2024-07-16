import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nameIcon}>
        <Text>AF</Text>
      </View>
      <View>
        <Text style={styles.name}>Arief Fauzi</Text>
        <Text style={styles.role}>IT | Fullstack Developer</Text>
      </View>
    </View>
  );
};

export default memo(ProfileHeader);

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    gap:8,
    padding:16
  },
  nameIcon: {
    backgroundColor: "#FFE01B",
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  name:{
    color:'white',
    fontSize:18,
    fontWeight:'700'
  },
  role:{
    color:'white'
  }
});
