import { memo, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const HomeHeader = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrentDateTime(new Date()); // dayjs() always gives us the current time
  //   }, 60000);
  // }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.nameIcon}>
          <Text>AF</Text>
        </View>
        <View>
          <Text style={styles.greeting}>Hi, Arief Fauzi</Text>
          <Text style={styles.date}>IT Fullstack Developer</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(HomeHeader);

const styles = StyleSheet.create({
  container: {
    paddingVertical:32,
    marginBottom:30,
    alignItems:'center',
    gap:8,
  },
  nameIcon: {
    backgroundColor: "#FFE01B",
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  greeting:{
    color:'white',
    fontSize:18,
    fontWeight:'800',
    textAlign:'center'
  },
  date:{
    color:'white',
    fontSize:12,
    textAlign:'center'
  }
});
