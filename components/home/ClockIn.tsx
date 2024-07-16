import { StyleSheet, Text, View } from 'react-native'
import { memo } from 'react'

const ClockIn = () => {
  return (
    <View style={styles.container}>
      <Text>Clock in</Text>
      <Text>09.00</Text>
    </View>
  )
}

export default memo(ClockIn)

const styles = StyleSheet.create({
  container:{
    paddingVertical:16,
    paddingHorizontal:32,
    borderRadius:8,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    width:170
  }
})